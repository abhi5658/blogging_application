import React from "react";
import { Link } from "react-router-dom";
import "./ShortBlog.css";

const Blog = ({ post: { id, title, body = '', image, author }, index }) => {

  return (
    <div className="blog-container" >
      <Link to={`/blogs/${id}`} >
        <div className="blog-content">
          <h2 className="shortblog-heading">{id}. {title}</h2>
          <img className="image" src={image} alt="post" />
          <p>{body.slice(undefined, 100)}...Read more</p>
          <div className="info">
            <h4>Written by: {author}</h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Blog;