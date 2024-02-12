import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./FullBlog.css";
import { getBlogById } from '../../service/blogService';

export async function loader({ params }) {
  const blog = await getBlogById(params.id);
  return { blog };
}

const FullBlog = (all) => {
  const { blog } = useLoaderData();

  const {
    id = 'Not Found',
    title = 'Not Found',
    image = 'Not Found',
    body = 'Not Found',
    author = 'Unknown'
  } = blog || {};

  return (
    <div>
      <Link to={'/'} >
        <button>Go back</button>
      </Link>
      <div className="fullblog-container" >
        <div className="fullblog-content" >
          <h1 className="fullblog-heading">{id} - {title}</h1>
          <img className="fullblog-image" src={image} alt="post" />
          <p>{body}</p>
          <div className="info">
            <h4>Written by: {author}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;