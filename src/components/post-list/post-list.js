import React from 'react';
import './post-list.css';
import PostListItem from "../post-list-item/post-list-item";

const PostList = ({posts})=>{

  const items = posts.map(post =>{

    //разбиваем post на id и объект со всеми остальными данными
    const {id, ...itemsProps} = post;

    //генерируем html
    return(
      <li key={post.id} className='list-group-item'>
        <PostListItem {...itemsProps}/>
      </li>
    );
  });


  return(
    <ul className='app-list list-group'>
      {items}
    </ul>
  )
}

export default PostList