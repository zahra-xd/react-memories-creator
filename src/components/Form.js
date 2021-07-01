import React, { useState ,useEffect } from "react";
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from "react-redux";
import './styleform.css';
import Post from './Post'
import { createPost ,updatePost } from "../actions/post";
const Formm = ({ currentId, setCurrentId }) => {
    const post = useSelector((state) =>
      currentId ? state.posts.find((post) => post._id === currentId) : null
    );
    const [postData, setPostData] = useState({
        creator: "",
        title: "",
        message: "",
        tags: [],
        selectedFile: ""
     })
     const dispatch = useDispatch();
     useEffect(() => {
        if (post) setPostData(post);
      }, [post]);
      
      const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
          dispatch(updatePost(currentId, postData));
        } else {
          dispatch(createPost(postData));
        }
         clear();
      };
      const clear = () => {
         setCurrentId();
        setPostData({
          creator: "",
          title: "",
          message: "",
          tags: [],
          selectedFile: "",
        });
      };
    return(
        <>
        <div className="box-form" onSubmit={handleSubmit} >
        <form className="foem-box">
            <div><h6 className="text-titel-form">  {currentId ? `Editing a Memory` : `Creating a Memory`}</h6></div>
            <label className="tite-lable ">Creator</label>
            <input className="input-box" value={postData.creator}   onChange={(e) =>setPostData({ ...postData, creator: e.target.value }) }  type="text" placeholder="cre"></input>
            <label className="tite-lable ">title</label>
            <input className="input-box" value={postData.title} onChange={(e)=>setPostData({...postData ,title : e.target.value})} type="text" placeholder="cre"></input>
            <label className="tite-lable ">message</label>
            <input className="input-box" value={postData.message} type="text" onChange={(e)=>(setPostData({...postData, message: e.target.value}))}></input>
            <label className="tite-lable ">tags</label>
            <input className="input-box" value={postData.tags} onChange={(e)=>(setPostData({...postData ,tags: e.target.value}))} type="text" ></input>
            <input type="file"  className="mt-12" value={postData.selectedFile} onChange={(e)=>(setPostData({...postData,selectedFile: e.target.value}))}></input>
            <div>
            <button className="btn-sub" type="submit">Submit</button>
            <button onClick={clear} className="btn-clear">Clear</button>
            </div>
        </form>
        </div>
        </>
    )
}
export default Formm;
