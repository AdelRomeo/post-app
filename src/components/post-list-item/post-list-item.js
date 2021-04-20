import React, {Component} from 'react';
import './post-list-item.css';

export default class PostListItem extends Component {

  state = {
    important: false,
    like: false
  }

  //отмечаем пост как важный (клик по звездочке)
  onImportant = () => {
    //изменение state
    this.setState((state) => ({
      important: !state.important
    }))
  }

  //лайк поста
  onLike = () => {
    //изменение state
    this.setState((state) => ({
      like: !state.like
    }))
  }

  render() {

    //строка с классами
    let classes = 'app-list-item d-flex justify-content-between';
    //если important = true
    if (this.state.important) {
      //добавляем класс
      classes += ' important';
    }
    //если like = true
    if (this.state.like) {
      //добавляем класс
      classes += ' like';
    }

    return (
      <div className={classes}>
        <span className='app-list-item-label' onClick={this.onLike}>{this.props.label}</span>
        <div className='d-flex justify-content-center align-items-center'>
          <button className='btn-star btn-sm' type='button' onClick={this.onImportant}>
            <i className='fa fa-star'/>
          </button>
          <button className='btn-trash btn-sm' type='button' onClick={this.props.onDelete}>
            <i className='fa fa-trash'/>
          </button>
          <i className='fa fa-heart'/>
        </div>
      </div>
    )
  }
}
