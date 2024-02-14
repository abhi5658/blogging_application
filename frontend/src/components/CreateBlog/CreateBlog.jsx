import React from "react";
import { Form, redirect, Link } from "react-router-dom";
import "./CreateBlog.css";
import { createBlog } from '../../service/blogService';

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  // console.log(updates)
  const { title, image, body, author } = updates;
  await createBlog(title, image, body, author);
  return redirect('/');
}


const CreateBlog = () => {
  const randomInt = `${Math.floor(Math.random() * 10000)}`;
  const dummyTitle = `Title ${randomInt}`;
  const dummyBody = `Body ${(randomInt + ' ').repeat(1000)} `;
  const dummyImage = `https://picsum.photos/seed/${randomInt}/700/500`;
  const dummyAuthor = `Author ${randomInt}`;

  return (
    <div>
      <Link to={'/'} >
        <button>Go back</button>
      </Link>
      <div className="create-blog-container" >
        <Form method="post" id="create-blog" onKeyDown={e => e.key === 'Enter' && e.preventDefault()}>
          <label htmlFor="title">Title</label>
          <br />
          <input type="text" id="title" name="title" defaultValue={dummyTitle} height={200} />
          <br /><br />
          <label htmlFor="body">Body</label>
          <br />
          <textarea type="text" id="body" name="body" defaultValue={dummyBody} />
          <br /><br />
          <label htmlFor="image">Image URL</label>
          <br />
          <input type="url" id="image" name="image" defaultValue={dummyImage} />
          <br /><br />
          <label htmlFor="author">Author</label>
          <br />
          <input type="text" id="author" name="author" defaultValue={dummyAuthor} />
          <br /><br />
          <br />
          <input type="submit" value="Create Blog!!!" ></input>
        </Form >
      </div >
    </div>
  );
};

export default CreateBlog;