import React, {  useContext } from 'react';
import { Link } from "react-router-dom";
import {PostContext} from '../PostsContext';
import Footer from './Footer'
import Header from './Header'
import './styles/posts.css';
    
export default function Posts() {
    const [posts] = useContext(PostContext)
  return (
    <div>
    <Header/>
    <div className="content">
        {posts.map((post, index) => (
            <div className="content-card">
                <Link to={"/post/" + post.slug} key={post.slug}>
                    <div>  
                        <img className="image-size"src={post.featured_image} alt=""/> 
                        {post.title.rendered}
                    </div>
                </Link>
            </div>
        ))}
    </div>
     <Footer/>
    </div>
 );
}