import { createBrowserRouter } from "react-router-dom"

import Index from '../router-tutorial/index'
import ErrorPage from '../router-tutorial/error-page'
import { action as destroyAction } from '../router-tutorial/destroy'
import EditContact, { action as editAction } from '../router-tutorial/edit'
import Root, { loader as rootLoader, action as rootAction } from '../router-tutorial/root'
import Contact, { loader as contactLoader, action as contactAction } from '../router-tutorial/contact'

import Home from '../render/home'
import HomePage from '../pages/HomePage'
import Projects from '../render/projects'
import ShowFoods from '../render/all-projects/ShowFoods'
import TicTacToe from "../render/all-projects/ticTacToe"
import Todo from "../render/all-projects/todo"

export const routerExercise = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        action: rootAction,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    { index: true, element: <Index /> },
                    {
                        path: "contacts/:contactId",
                        element: <Contact />,
                        loader: contactLoader,
                        action: contactAction,
                    },
                    {
                        path: "contacts/:contactId/edit",
                        element: <EditContact />,
                        loader: contactLoader,
                        action: editAction,
                    },
                    {
                        path: "contacts/:contactId/destroy",
                        action: destroyAction,
                        errorElement: 'Oops! There was an error.',
                    },
                ]
            }
        ]
    }
]);

export const routerProject = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        action: rootAction,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    { index: true, element: <Index /> },
                    {
                        path: "home",
                        element: <Home />,
                        loader: contactLoader,
                        action: contactAction,
                    },
                    {
                        path: "projects",
                        children: [
                            {
                                index: true,
                                element: <Projects />,
                            },
                            {
                                path: "tic-tac-toe",
                                element: <TicTacToe />
                            },
                            {
                                path: "todo-app",
                                element: <Todo />
                            },
                            {
                                path: "show-foods",
                                element: <ShowFoods />
                            }
                        ]
                    },
                    {
                        path: "authenticate",
                        action: destroyAction,
                        errorElement: 'Oops! There was an error.',
                    },
                ]
            }
        ]
    }
]);