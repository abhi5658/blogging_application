import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import FullBlog, { loader as FullBlogLoader } from './components/FullBlog/FullBlog';
import CreateBlog from './components/CreateBlog/CreateBlog';
import { action as CreateBlogAction } from './components/CreateBlog/CreateBlog'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }, {
    path: "/blogs",
    element: <App />,
  }, {
    path: "/blogs/:id",
    element: <FullBlog />,
    loader: FullBlogLoader,
  }, {
    path: '/create',
    element: <CreateBlog />,
    action: CreateBlogAction
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
