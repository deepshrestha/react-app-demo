import React, { useEffect, useState } from "react";
import Post from "../components/Post";

const PostsContainer = () => {
  const [postsList, setPostsList] = useState([]);

  useEffect(
    () =>
      fetch("http://www.json-generator.com/api/json/get/cwqHRamfaW?indent=2")
        .then((result) => {
          return result.json();
        })
        .then((data) => {
          setPostsList(data);
        }),
    []
  );

  return (
    <>
      <Post postsList={postsList} />
    </>
  );
};

export default PostsContainer;
