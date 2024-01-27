import sortBy from 'sort-by';
import localforage from 'localforage';
import { matchSorter } from 'match-sorter';

// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {};

async function fakeNetwork(key) {
  if (!key) fakeCache = {};

  if (fakeCache[key]) return;

  fakeCache[key] = true;
  return new Promise(res => {
    setTimeout(res, Math.random() * 800);
  });
}

function set(keyName, contacts) {
    return localforage.setItem(keyName, contacts);
}

export async function getContacts(query) {
    await fakeNetwork(`getContacts:${query}`);
    let contacts = await localforage.getItem("contacts");
    if (!contacts) contacts = [];
    if (query) {
      contacts = matchSorter(contacts, query, { keys: ["first", "last"] });
    }
    return contacts.sort(sortBy("last", "createdAt"));
}

export async function createContact() {
    await fakeNetwork();
    let id = Math.random().toString(36).substring(2, 9);
    let contact = { id, createdAt: Date.now() };
    let contacts = await getContacts();
    contacts.unshift(contact);
    await set("contacts", contacts);
    return contact;
}

export async function getContact(id) {
    await fakeNetwork(`contact:${id}`);
    let contacts = await localforage.getItem("contacts");
    let contact = contacts.find(contact => contact.id === id);
    return contact ?? null;
}

export async function updateContact(id, updates) {
    await fakeNetwork();
    let contacts = await localforage.getItem("contacts");
    let contact = contacts.find(contact => contact.id === id);
    if (!contact) throw new Error("No contact found for", id);
    Object.assign(contact, updates);
    await set("contacts", contacts);
    return contact;
}

export async function deleteContact(id) {
    let contacts = await localforage.getItem("contacts");
    let index = contacts.findIndex(contact => contact.id === id);
    if (index > -1) {
      contacts.splice(index, 1);
      await set("contacts", contacts);
      return true;
    }
    return false;
}

export async function getTodos(query) {
    await fakeNetwork(`getTodos:${query}`);
    let todos = await localforage.getItem("todos");
    if (!todos) todos = [];
    return todos;
}

export async function createTodo(parameters) {
    // console.log(parameters);
    await fakeNetwork('createTodos');
    const { title, description, status } = parameters;
    let id = Math.random().toString(36).substring(2, 9);
    let todo = { id, title, description, status, createdAt: Date.now() };
    let todos = await getTodos();
    todos.unshift(todo);
    await set("todos", todos);
    return todo;
}

export async function viewTodo(parameters) {
    await fakeNetwork('viewTodos:');
    const todos = await localforage.getItem("todos");
    let todo = todos.find(list => list.id === parameters.id);
    return todo ?? null;
}

export async function updateTodo(query) {
    await fakeNetwork(`updateTodos:${query}`);
    let todos = await localforage.getItem("todos");
    return todos;
}

export async function deleteTodo(query) {
    await fakeNetwork(`deleteTodos:${query}`);
    let todos = await localforage.getItem("todos");
    let index = todos.findIndex(todo => todo.id === id);
    if (index > -1) {
        todos.splice(index, 1);
        await set(todos);
        return true;
      }
      return false;
}

export async function resetTodos(query) {
    await fakeNetwork(`resetTodos:${query}`);
    let todos = await localforage.getItem("todos");
    return todos;
}