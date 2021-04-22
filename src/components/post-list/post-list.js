import React from 'react';
import './post-list.css';
import PostListItem from "../post-list-item/post-list-item";

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

  const items = posts.map(post => {



    //разбиваем post на id и объект со всеми остальными данными
    const {id, ...itemsProps} = post;

    //генерируем html
    return (
      <li key={id} className='list-group-item'>
        <PostListItem
          {...itemsProps}
          onDelete={()=>onDelete(id)}
          //onToggleImportant={()=>onToggleImportant(id)}
          onToggleLiked={()=>onToggleLiked(id, 'like')}
          onToggleLiked2={()=>onToggleLiked(id)}
        />
      </li>
    );
  });


  return (
    <ul className='app-list list-group'>
      {items}
    </ul>
  )
}

export default PostList