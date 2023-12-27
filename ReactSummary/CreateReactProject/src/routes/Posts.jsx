import { Outlet } from "react-router-dom";
import PostList from "../components/PostsList";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;

// create vite app - npm run dev
// create react app - npm start

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts;
}
