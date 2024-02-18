import { createBrowserRouter } from "react-router-dom";

import Index from "../router-tutorial/index";
import ErrorPage from "../router-tutorial/error-page";
import { action as destroyAction } from "../router-tutorial/destroy";
import EditContact, { action as editAction } from "../router-tutorial/edit";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "../router-tutorial/root";
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "../router-tutorial/contact";
import Todos, {
  loader as todoLoader,
  action as todoAction,
} from "../render/all-projects/Todos";
import ShowFoods from "../render/all-projects/ShowFoods";
import TicTacToe from "../render/all-projects/TicTacToe";
import Stopwatch from "../render/all-projects/Stopwatch";
import Base from "../pages/Base";
import Home from "../pages/scrapbook/Home";
import About from "../pages/scrapbook/About";
import Projects from "../pages/scrapbook/Projects";

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
            errorElement: "Oops! There was an error.",
          },
        ],
      },
    ],
  },
]);

export const routerPortfolio = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { path: "", index: true, element: <Home /> },
          {
            path: "about",
            element: <About />,
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
                element: <TicTacToe />,
              },
              {
                path: "todo-app",
                element: <Todos />,
                loader: todoLoader,
                action: todoAction,
              },
              {
                path: "stopwatch",
                element: <Stopwatch />,
              },
              {
                path: "show-foods",
                element: <ShowFoods />,
              },
            ],
          },
          {
            path: "contact",
            action: destroyAction,
            element: "Contact",
            errorElement: "Oops! There was an error.",
          },
        ],
      },
    ],
  },
]);
