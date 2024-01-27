import { Form, useLoaderData, useFetcher } from "react-router-dom";
import { getContact, updateContact } from "../utilities/actions-loaders";

export async function loader({ params }) {
  const contact = await getContact(params.contactId);
  if (!contact) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found override",
    });
  }
  return { contact };
}

export async function action({ request, params }) {
  let formData = await request.formData();
  return updateContact(params.contactId, {
    favorite: formData.get("favorite") === "true",
  });
}

export default function Contact() {
  const { contact } = useLoaderData();

  return (
    <div id="contact">
      <div>
        <img
          key={contact.avatar}
          src={contact.avatar || null}
        />
      </div>

      <div className="space-y-2">
        <h1 className="flex gap-3 font-sans tracking-wide text-4xl font-semibold">
          {contact.first || contact.last ? `${contact.first} ${contact.last}` : 'No Name'}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
            <a
              target="_blank"
              className="text-indigo-400 hover:text-indigo-500 font-serif tracking-wider"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
        )}

        {contact.notes && <p className="mt-4">{contact.notes}</p>}

        <div className="flex gap-4 mt-auto">
          <Form action="edit">
            <button type="submit" className="btn btn-info">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit" className="btn btn-danger">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  const fetcher = useFetcher();
  let favorite = contact.favorite;
  if (fetcher.formData) {
    favorite = fetcher.formData.get("favorite") === "true";
  }
  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        className="btn rounded-full px-1.5 py-0.5 bg-gray-50 hover:bg-gray-100 text-yellow-400 shadow"
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
      </fetcher.Form>
  );
}