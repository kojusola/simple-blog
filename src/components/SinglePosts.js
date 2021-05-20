import React, {  useContext } from 'react';
import { useParams } from "react-router"; 
import {PostContext} from '../PostsContext';

export default function SinglePost() {
    const [posts] = useContext(PostContext)
    function findPostBySlug(slug) {
        return posts.find(o => o.slug === slug);
      }
    const { slug } = useParams(),
    post = findPostBySlug(slug);
    return (
      <div className="post-content-view">
        <h1 className="title">{post.title.rendered}</h1>
        <content>{post.content.rendered}</content>
      </div>
    );
  }
