import React from "react";
import ReactDOM from 'react-dom';
 import Post from './Post';
import { useSelector } from "react-redux";
const Posts = ({ setCurrentId }) => {
     const posts = useSelector((state) => state.posts);
    
     if (!posts.length) {
     return <p className="loader"></p>;
   }
return(
       <>
      {
        posts.map((post)=>
        {
          return(
            <div key={post._id} >
               <Post  post={post} setCurrentId={setCurrentId}></Post>
            </div>
          )
        })
      }
      </> 
)
}
export default Posts 