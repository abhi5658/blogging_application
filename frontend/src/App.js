import { Link } from 'react-router-dom';
import './App.css';
import BlogList from "./components/BlogList/BlogList";

function App() {
  return (
    <div className="App">
      <h1 className='site-title'> Welcome to Abhishek's Blogger Site</h1>
      <Link to={'/create'} className='create-button'>
        <button className='create-button' type="submit">Create a new blog</button>
      </Link>
      <BlogList />
    </div>
  );
}

export default App;
