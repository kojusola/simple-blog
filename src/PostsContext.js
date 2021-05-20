import React, { useEffect ,useState, createContext } from 'react';

export const PostContext = createContext();

export const PostsProvider = props => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function loadPosts() {
            const response = await fetch('https://blog.epower.ng/wp-json/wp/v2/posts',{
                headers : { 
                  'Accept': '*'
                 }
          
              });
            if(!response.ok) {
                return;
            }
    
            const posts = await response.json();
            setPosts(posts);
        }
    
        loadPosts();
   }, []);
   return (
       <PostContext.Provider value={[posts, setPosts]}>
            {props.children}
       </PostContext.Provider>
   )
};