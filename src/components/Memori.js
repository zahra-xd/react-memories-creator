import React, { useState,useEffect } from "react";
import ReactDOM from 'react-dom';
 import {useDispatch} from "react-redux";
 import { getPosts } from "../actions/post";
import './styleform.css';
import memori from '../image/memories.9cfa8a46.png';
import Form from './Form'
import Posts from "./Posts";
function Memori() {
   const dispatch = useDispatch();
   const [currentId, setCurrentId] = useState(null);
   useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <>
    <div>
       <div>
         <header className="box-memori">
           <h2 className="memore-tag">Memories</h2>
           <img className="img-memori" src={memori}></img>
         </header>
           <div className="w-100">
             <div className="header-boxx">
             <Form currentId={currentId} setCurrentId={setCurrentId} ></Form>
             </div>
             <div className="post-box">
             <Posts setCurrentId={setCurrentId}  />
             </div>
           </div>
       </div>
    </div>
    </>
  )
}
export default Memori;