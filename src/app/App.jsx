import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Blog } from '../features/blog/Blog';
import { Notfoundpage } from '../pages/Notfoundpage';
import { Post } from '../features/post/Post';

function App() {
  return (
    <Routes>
      <Route path = '' element = {<Blog />}/>
      <Route path="/posts/:id" element={<Post />} />
      <Route path = '*' element = {<Notfoundpage />}/>
    </Routes>
  );
}

export default App



