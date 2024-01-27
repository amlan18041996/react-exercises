import { validator } from "./helper";
import localforage from 'localforage';
import { TodoActions } from "./mock";

const FormActionType = {
    RESET_FORM: "RESET_FORM",
    UPDATE_VALUE: "UPDATE_VALUE",
}

function set(keyName, values) {
    return localforage.setItem(keyName, values);
}

export function formReducer(formState, action) {
    switch (action.type) {
        case FormActionType.RESET_FORM:
            const resetState = Object.assign({}, ...Object.keys(formState).map((keyName) => {
                if ('value' in formState[keyName]) formState[keyName].value = '';
                if ('errors' in formState[keyName])formState[keyName].errors = {};
                return { [keyName]: formState[keyName] };
            }));
            // console.log(resetState);
            return resetState;
        case FormActionType.UPDATE_VALUE:
            const updatedState = { ...formState };
            if (action.name in formState) {
                if (!updatedState[action.name].validate)
                    updatedState[action.name].value = action.value;
                else {
                    const validResults = validator(
                        updatedState[action.name].condition,
                        action.value
                    );
                    if (validResults.length === 0)
                        updatedState[action.name].value = action.value;
                    else {
                        updatedState[action.name].value = action.value;
                        updatedState[action.name].error = validResults;
                    }
                }
            }
            return updatedState;
        default:
            throw Error("Unknown action: " + action.type);
    }
}

export function todosReducer(formState, action) {
    let todos = JSON.parse(JSON.stringify(formState.values));
    switch (action.type) {
        case TodoActions.CREATE_TODO:
            const id = Math.random().toString(36).substring(2, 9);
            todos.unshift({ id, createdAt: Date.now(), updatedAt: Date.now(), favourite: false, ...action.todo });
            set("todos", todos);
            return {...formState, values: todos};
        case TodoActions.VIEW_TODO:
            return {...formState, thread: todos.find(list => list.id === action.todoId)};
        case TodoActions.UPDATE_TODO:
            const todoIndex = todos.findIndex(list => list.id === action.todo.id);
            todos[todoIndex] = {...action.todo, updatedAt: Date.now()};
            set("todos", todos);
            return {...formState, values: todos};
        case TodoActions.DELETE_TODO:
            const filteredTodos = action.selected.length > 0 ? todos.map(todo => {
                if (!action.selected.includes(todo.id)) return todo;
                return null;
            }).filter(Boolean) : [];
            set("todos", filteredTodos);
            return {...formState, values: filteredTodos};
        case TodoActions.BOOKMARK_TODO:
            const bookmarkedTodos = todos.map(todo => {
                if (action.selected.includes(todo.id)) todo.favourite = !todo.favourite;
                return todo;
            });
            set("todos", bookmarkedTodos);
            return {...formState, values: bookmarkedTodos};;
        case TodoActions.RESET_THREAD:
            return {...formState, thread: null};
        default:
            throw Error("Unknown action: " + action.type);
    }
}
