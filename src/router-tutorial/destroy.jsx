import { redirect } from "react-router-dom"
import { deleteContact } from "../utilities/actions-loaders";

export async function action({ params }) {
    await deleteContact(params.contactId);
    return redirect("/");
}