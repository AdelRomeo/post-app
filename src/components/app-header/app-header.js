import React from 'react';
import './app-header.css';

const AppHeader = ({likedPosts, totalPosts}) => {
  return (
    <div className='app-header d-flex'>
      <h1>Account Name</h1>
      <h2>{totalPosts} записей, из них понравлось {likedPosts}</h2>
    </div>
  )
}

export default AppHeader;