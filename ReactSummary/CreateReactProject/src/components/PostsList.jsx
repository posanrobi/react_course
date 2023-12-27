import { useLoaderData } from "react-router-dom"; //using other components loader function's data, eg.: in a nested route

import Post from "./Post";
import classes from "./PostsList.module.css";

// normal fetch.then().... infinite make an loop, bc the React executes again the component function

function PostList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostList;
