import React from "react";
import { BrowserRouter } from "react-router-dom";
import Page from "./Routes";
import {PostsProvider} from "./PostsContext"
 
function App() {
  return (
    <BrowserRouter>
    <PostsProvider>
    <div className="App">
        <Page />
      </div>
    </PostsProvider>
    </BrowserRouter>
  );
}

export default App;
