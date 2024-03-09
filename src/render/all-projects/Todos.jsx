import React from "react";
import FormFeed from "../../components/FormFeed";
import BaseModal from "../../components/BaseModal";
import { fakeNetwork } from "../../utilities/helper";
import { getTodos } from "../../utilities/actions-loaders";
import { todosReducer, formReducer } from "../../utilities/reducers";
import { TodoActions, todoForm, todoStatuses } from "../../utilities/mock";
import { Form, useFetcher, useLoaderData, useSubmit } from "react-router-dom";

const formSubmitNames = {
  Submit: { submitting: "Submitting", class: "info" },
  Update: { submitting: "Updating", class: "warning" },
  Save: { submitting: "Saving", class: "info" },
  Delete: { submitting: "Deleting", class: "danger" },
};

export async function loader({ request }) {
  const url = new URL(request.url);
  const queryTitle = url.searchParams.get("query-title");
  const todos = await getTodos();
  const filtered = queryTitle
    ? todos.filter((todo) =>
        todo.title.toLowerCase().includes(queryTitle.toLowerCase())
      )
    : null;
  return { lists: todos, queryTitle, filtered };
}

export async function action({ request }) {
  let formData = await request.formData();
  await fakeNetwork("delay-response:");
  // RUNNING THE TODO DISPATCHER
  await formData.get("dispatch");
  return null;
}

function TodoForm({ submitName, closeModal, saveTodo, thread, children }) {
  const fetcher = useFetcher();
  const [formState, dispatchFormState] = React.useReducer(
    formReducer,
    todoForm
  );

  const isDisabled = React.useMemo(() => {
    const evaluate = Object.keys(formState).findIndex(
      (field) =>
        Object.keys(formState[field].error).length > 0 ||
        formState[field].value.trim() === ""
    );
    return submitName.toLowerCase() === "delete"
      ? false
      : evaluate === -1
      ? false
      : true;
  }, [formState]);

  React.useEffect(() => {
    if (thread) {
      Object.keys(thread).map((list) => {
        if (list in formState)
          dispatchFormState({
            type: "UPDATE_VALUE",
            name: list,
            value: thread[list],
          });
        return null;
      });
    }
    return () => dispatchFormState({ type: "RESET_FORM" });
  }, []);

  React.useEffect(() => {
    if (["loading"].includes(fetcher.state)) closeModal();
  }, [fetcher.data]);

  function handleElementChange(event) {
    dispatchFormState({
      type: "UPDATE_VALUE",
      name: event.target.name,
      value: event.target.value,
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const payload = Object.assign(
      thread ? thread : {},
      ...Object.keys(formState).map((field) => {
        return { [field]: formState[field].value };
      })
    );
    fetcher.submit({ dispatch: saveTodo(payload) }, { method: "post" });
  }

  return (
    <form onSubmit={handleFormSubmit}>
      {children ? (
        children
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <div className="space-2">
            <label
              htmlFor="title"
              className="text-base font-medium text-gray-500 tracking-wide"
            >
              Title
            </label>
            {/* <BaseInput id="title" name="title" classes="form-element" placeholder="Task Name" value={formState.title.value} onChange={handleElementChange} /> */}
            <input
              id="title"
              name="title"
              className="form-element"
              placeholder="Task Name"
              value={formState.title.value}
              onChange={handleElementChange}
            />
            <FormFeed
              errors={formState.title.error}
              classes="text-sm text-red-400"
            />
          </div>
          <div className="space-2">
            <label
              htmlFor="status"
              className="text-base font-medium text-gray-500 tracking-wide"
            >
              Status
            </label>
            {/* <BaseInput id="status" name="status" classes="form-element" value={formState.status.value} onChange={handleElementChange} /> */}
            <select
              name="status"
              id="status"
              className="form-element"
              onChange={handleElementChange}
            >
              {todoStatuses.map((status) => (
                <option key={status.value} value={status.value}>
                  {status.name}
                </option>
              ))}
            </select>
          </div>
          <div className="space-2">
            <label
              htmlFor="description"
              className="text-base font-medium text-gray-500 tracking-wide"
            >
              Description
            </label>
            {/* <BaseInput id="description" name="description" classes="form-element" placeholder="Write a short explanation..." value={formState.description.value} onChange={handleElementChange} /> */}
            <textarea
              id="description"
              name="description"
              className="form-element"
              placeholder="Write a short explanation..."
              value={formState.description.value}
              onChange={handleElementChange}
            ></textarea>
          </div>
          <div></div>
          {thread ? (
            <>
              <div className="">
                <label
                  htmlFor="createdAt"
                  className="text-base font-medium text-gray-500 tracking-wide"
                >
                  Created At:
                </label>
                <input
                  id="createdAt"
                  name="createdAt"
                  type="text"
                  value={new Date(thread.createdAt)
                    .toLocaleString()
                    .replaceAll("/", "-")}
                  className="form-element"
                  readOnly
                />
              </div>
              <div className="">
                <label
                  htmlFor="updatedAt"
                  className="text-base font-medium text-gray-500 tracking-wide"
                >
                  Updated At:
                </label>
                <input
                  id="updatedAt"
                  name="updatedAt"
                  type="text"
                  value={new Date(thread.updatedAt)
                    .toLocaleString()
                    .replaceAll("/", "-")}
                  className="form-element"
                  readOnly
                />
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      )}
      <div className="w-full flex gap-x-4 gap-y-2 mt-6">
        <button
          type="submit"
          className={`btn ${formSubmitNames[submitName].class} w-full`}
          disabled={isDisabled || fetcher.state === "submitting"}
        >
          {fetcher.state === "submitting"
            ? formSubmitNames[submitName].submitting
            : submitName}
        </button>
        <button
          type="button"
          className="btn secondary w-full"
          disabled={fetcher.state === "submitting"}
          onClick={() => closeModal()}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

function TodoList({ lists, checkTodo, selected, children = "Not Found" }) {
  return (
    <>
      {lists.length > 0
        ? lists.map((list) => (
            <div
              className="todo-container relative flex flex-row items-center justify-center flex-wrap"
              key={list.id}
            >
              <input
                className="checkbox-input absolute invisible peer/todo"
                type="checkbox"
                id={list.id}
                checked={selected.includes(list.id)}
                onChange={() => checkTodo(list)}
              />
              <label
                htmlFor={list.id}
                className="checkbox w-full flex items-center justify-between select-none cursor-pointer px-3 py-4 overflow-hidden hover:bg-neutral-100 peer-checked/todo:bg-neutral-200 rounded-md shadow tranisition"
              >
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-4 h-4 ${
                      list.favourite ? "fill-yellow-500" : ""
                    }`}
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
                  </svg>
                  <p className="text-lg font-semibold tracking-wide group-hover:underline underline-offset-2 decoration-dashed">
                    {list.title}
                  </p>
                </div>
                <div className="space-x-3">
                  <span className="btn success border-b-0 rounded-full text-sm">
                    {list.status}
                  </span>
                </div>
              </label>
            </div>
          ))
        : children}
    </>
  );
}

const Todos = () => {
  const submit = useSubmit();
  const modal = React.useRef(null);
  const { lists, queryTitle, filtered } = useLoaderData();
  const [formMode, setFormMode] = React.useState(null);
  const [selected, setSelected] = React.useState([]);
  const [todos, dispatchTodos] = React.useReducer(todosReducer, {
    values: lists,
    thread: null,
  });

  function handleSearch(event) {
    const isFirstSearch = queryTitle == null;
    submit(event.currentTarget.form, { replace: !isFirstSearch });
  }

  return (
    <div className="md:w-3/4 lg:w-2/4 px-4 py-6 mx-auto space-y-4 bg-stone-50 shadow rounded">
      <div className="flex flex-col md:flex-row justify-between gap-2">
        <Form id="search-form" role="search" className="w-full">
          <input
            id="queryTitle"
            name="query-title"
            onChange={handleSearch}
            defaultValue={queryTitle}
            className="form-element md:w-4/5"
            placeholder="Filter by task-names here..."
          />
        </Form>
        <div className="flex gap-2">
          {selected.length === 0 ? (
            <button
              className="btn primary py-2 md:p-2 group"
              onClick={() => {
                setFormMode("create");
                modal.current.open();
              }}
              title="Create Task"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-4 h-4 transition group-hover:rotate-90"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                />
              </svg>
            </button>
          ) : (
            ""
          )}
          {selected.length > 0 && selected.length < 2 ? (
            <button
              className="btn info py-2 md:p-2 group"
              onClick={() => {
                setFormMode("update");
                dispatchTodos({
                  type: TodoActions.VIEW_TODO,
                  todoId: selected.length > 0 ? selected[0] : null,
                });
                modal.current.open();
              }}
              title="View Task"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-4 h-4 group-hover:-skew-y-6 group-hover:scale-110"
                viewBox="0 0 16 16"
              >
                <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A2 2 0 0 0 8 6c-.532 0-1.016.208-1.375.547M14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
              </svg>
            </button>
          ) : (
            ""
          )}
          {selected.length > 0 ? (
            <button
              className="btn secondary py-2 md:p-2 group"
              onClick={() =>
                dispatchTodos({ type: TodoActions.BOOKMARK_TODO, selected })
              }
              title="Bookmark Task"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-4 h-4 group-hover:-skew-y-6 group-hover:scale-y-110"
                viewBox="0 0 16 16"
              >
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
              </svg>
            </button>
          ) : (
            ""
          )}
          {todos.values.length > 0 ? (
            <button
              className="btn warning py-2 md:p-2 group"
              onClick={() => {
                setFormMode("delete");
                modal.current.open();
              }}
              title="Delete Task"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-4 h-4 group-hover:skew-y-6 group-hover:scale-y-110"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
              </svg>
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="space-y-2">
        <TodoList
          lists={
            queryTitle && queryTitle.trim() !== "" ? filtered : todos.values
          }
          checkTodo={(todo) =>
            setSelected((prev) =>
              !prev.includes(todo.id)
                ? [...prev, todo.id]
                : [...prev.filter((el) => el !== todo.id)]
            )
          }
          selected={selected}
        >
          <h2 className="text-lg text-rose-700 font-mono font-semibold text-center">
            No Todos Found
          </h2>
        </TodoList>
      </div>
      <BaseModal
        ref={modal}
        unMountCallback={() => {
          setSelected([]);
          setFormMode(null);
          dispatchTodos({ type: TodoActions.RESET_THREAD });
        }}
      >
        <h1 className="text-2xl text-slate-600 font-semibold tracking-wider capitalize underline mb-4">
          {formMode} Task
        </h1>
        {
          <TodoForm
            submitName={
              formMode === "create"
                ? "Save"
                : formMode === "update"
                ? "Update"
                : formMode === "delete"
                ? "Delete"
                : ""
            }
            thread={todos.thread}
            closeModal={() => {
              modal.current.close();
            }}
            saveTodo={(todo) => {
              dispatchTodos({
                type: ["delete"].includes(formMode)
                  ? TodoActions.DELETE_TODO
                  : todos.thread
                  ? TodoActions.UPDATE_TODO
                  : TodoActions.CREATE_TODO,
                todo: ["delete"].includes(formMode) ? null : todo,
                selected,
              });
            }}
          >
            {formMode === "delete" ? (
              <div className="flex flex-col gap-y-2 text-center">
                <span className="text-2xl text-yellow-400">
                  Do you really want to delete to those task?
                </span>
                <div className="flex flex-wrap gap-2 mx-auto">
                  {todos.values
                    .filter((el) =>
                      selected.length > 0 ? selected.includes(el.id) : true
                    )
                    .map((todo) => (
                      <div
                        key={todo.id}
                        className="min-w-24 max-w-32 p-2 select-none font-medium tracking-wider border-t-2 border-indigo-400 rounded bg-indigo-100 truncate"
                      >
                        {todo.title}
                      </div>
                    ))}
                </div>
              </div>
            ) : null}
          </TodoForm>
        }
      </BaseModal>
    </div>
  );
};

export default Todos;
