import { Outlet, NavLink, useLoaderData, Form, redirect, useNavigation, useSubmit } from "react-router-dom";
import { useEffect } from "react";
import { createContact, getContacts } from "../utilities/actions-loaders";

export async function action() {
    const contact = await createContact();
    return redirect(`/contacts/${contact.id}/edit`);
}

export async function loader({ request }) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const contacts = await getContacts();
    return { contacts, q };
}

export default function Root() {
    const { contacts, q } = useLoaderData();
    const navigation = useNavigation();
    const submit = useSubmit();

    const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has(
      "q"
    );

    useEffect(() => {
        document.getElementById("q").value = q;
    }, [q]);

    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <div>
                    <Form id="search-form" role="search">
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                {
                                    searching ? (
                                        <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
                                            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
                                        </svg>
                                    ) : (
                                        <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                        </svg>
                                    )
                                }
                            </div>
                            <input 
                                id="q"
                                name="q"
                                type="search" 
                                defaultValue={q}
                                className="form-element ps-8"
                                aria-label="Search contacts"
                                placeholder="Search users..."
                                onChange={(event) => {
                                    const isFirstSearch = q == null;
                                    submit(event.currentTarget.form, {
                                        replace: !isFirstSearch,
                                    });
                                }}
                            />
                        </div>
                    </Form>
                    <Form method="post">
                        <button className="btn btn-primary" type="submit">New</button>
                    </Form>
                </div>
                <nav>
                    {
                        contacts.length ? (
                            <ul>
                                {contacts.map((contact) => (
                                    <li key={contact.id}>
                                        <NavLink 
                                            to={`contacts/${contact.id}`}
                                            className={({ isActive, isPending }) =>
                                                isActive ? "active" : (isPending ? "pending" : "")
                                            }
                                        >
                                            {contact.first || contact.last ? (
                                            <>
                                                {contact.first} {contact.last}
                                            </>
                                            ) : (
                                            <i>No Name</i>
                                            )}{" "}
                                            {contact.favorite && <span>★</span>}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>
                                <i>No contacts</i>
                            </p>
                        )
                    }
                </nav>
            </div>
            <div id="detail" className={navigation.state === "loading" ? "loading" : ""}>
                <Outlet />
            </div>
        </>
    );
}