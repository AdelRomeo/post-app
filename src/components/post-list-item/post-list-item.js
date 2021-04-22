import React, {Component} from 'react';
import './post-list-item.css';

export default class PostListItem extends Component {


  render() {

    //строка с классами
    let classes = 'app-list-item d-flex justify-content-between';
    //если important = true
    if (this.props.important) {
      //добавляем класс
      classes += ' important';
    }
    //если like = true
    if (this.props.like) {
      //добавляем класс
      classes += ' like';
    }

    return (
      <div className={classes}>
        <span className='app-list-item-label' onClick={this.props.onToggleLiked}>{this.props.label}</span>
        <div className='d-flex justify-content-center align-items-center'>
          <button className='btn-star btn-sm' type='button' onClick={this.props.onToggleLiked2}>
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
