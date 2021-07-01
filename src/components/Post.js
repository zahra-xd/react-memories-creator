import React ,{useState} from "react";
import ReactDOM from 'react-dom';
import { FaTrash ,FaThumbsUp,FaEllipsisH} from 'react-icons/fa';
import Moment from 'react-moment';
import moment from 'moment';
import './styleform.css';
import {deletePost ,likePost} from '../actions/post';
import { useDispatch } from "react-redux";
const Post= ({post ,setCurrentId} )=>
{
    const [count,setcount]=useState(0);
    const dispatch = useDispatch();
    const  backgroundUrl = post.selectedFile;
    return (
        <>
        <div className="row">
           <div className="ml-6 der d-flex flex-row ">
             <div className="card">
                 <div className="card-titel" style={{backgroundImage: `url(${post.selectedFile})`}} >
                    <div className="titel-text">
                    <div className="dex-iconn">
                        <h6 className="textt">{post.creator}</h6>
                        <FaEllipsisH className="icon-btnn"  />
                     </div>
                        <p className="moment">{moment(post.createdAt).fromNow()}</p>
                 </div>
                 </div>
                 <div className="card-body">
                 <div className="body-titel">
                     <p className="decribe" >{post.tags.map((tag)=>`#${tag}`)}</p>
                 </div>
                 <h5 className="padding-25">{post.message}</h5>
                 <div className="massege-box">  <p className="parag-box ">  {post.title} </p> </div>
                 </div>
                 <div className="card-footer">
                    <p onClick={()=>dispatch( likePost(post._id))} onClick={()=>setcount(count+1)}>like {count} < FaThumbsUp/></p>
                    <p onClick={()=>dispatch(deletePost(post._id))}>delite <FaTrash /> </p>
                 </div>
             </div>
        </div>
        </div>
        </>
        
    )
}
export default Post