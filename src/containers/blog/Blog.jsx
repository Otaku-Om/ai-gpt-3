import React from 'react';
import "./blog.css";
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

function Blog() {
  return (
    <div className='blog section__padding section__margin1' id='blog'>
      <div className="blog-heading">
        <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
      </div>
      <div className="blog-container">
        <div className="blog-container-groupA">
          <Article imgUrl={blog01} date="Oct 20, 2023" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
        <div className="blog-container-groupB">
          <Article imgUrl={blog02} date="Oct 20, 2023" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={blog03} date="Oct 20, 2023" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={blog04} date="Oct 20, 2023" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={blog05} date="Oct 20, 2023" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
      </div>
    </div>
  )
}

export default Blog;
