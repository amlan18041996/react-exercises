import React from 'react';
import { createPortal } from 'react-dom';
import BaseInput from '../../components/BaseInput';
import BaseModal from '../../components/BaseModal';
import { todos as initialTodos } from '../../utilities/mock';
import { formReducer as todoReducer } from '../../utilities/reducers';

const Todos = () => {
    const [search, setSearch] = React.useState({type: "text",value: "",error: [],validate: false,condition: {}});
    const modal = React.useRef(null);
    const [todos, dispatchTodos] = React.useReducer(todoReducer, initialTodos);

    function handleElementChange(event) {
        const { name, value } = event.target;
        dispatchTodos({ type: "ADD_TASK", name, value });
    }

    function handleSearch(event) {
        const { name, value } = event.target;
        // dispatchTodos({ type: "VIEW_TASK", name, value });
    }

    function handleDelete(event) {
        const { name, value } = event.target;
        dispatchTodos({ type: "DELETE_TASK", name, value });
    }

    function handleUpdate(event) {
        const { name, value } = event.target;
        dispatchTodos({ type: "UPDATE_TASK", name, value });
    }

    return (
        <div className="w-1/2 px-4 py-6 mx-auto space-y-4 bg-gray-50 shadow rounded">
            <div className="flex gap-3">
                <BaseInput
                    id="search"
                    name="search-task"
                    classes="form-element"
                    value={search.value}
                    onChange={handleSearch}
                />
                <button onClick={() => modal.current.open()} className='btn btn-info'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4 h-4" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                    </svg>
                </button>
            </div>
            <BaseModal ref={modal}>Hello</BaseModal>,
            <div className="lists space-y-2">
                {
                    todos.map(todo => {
                        return (
                            <div className="flex items-center justify-between p-4 shadow" key={todo.id}>
                                <p className="text-base tracking-wide">{todo.title}</p>
                                <div className="space-x-3">
                                    <span className="btn btn-success border-b-0">{todo.status}</span>
                                    <button className="btn btn-danger p-2 border-b-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4 h-4" viewBox="0 0 16 16">
                                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
 
export default Todos;