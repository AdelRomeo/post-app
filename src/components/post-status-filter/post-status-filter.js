import React from 'react';
import './post-status-filter.css';

const PostStatusFilter = () => {
  return (
    <div className='btn-group'>
      <button type='button' className='btn btn-info'>Все посты</button>
      <button type='button' className='btn btn-outline-secondary'>Понравившиеся посты</button>
    </div>
  )
}

export default PostStatusFilter;