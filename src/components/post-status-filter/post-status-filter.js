import React, {Component} from 'react';
import './post-status-filter.css';

export default class PostStatusFilter extends Component {

  state = {
    buttons: [
      {name: 'all', label: 'Все'},
      {name: 'like', label: 'Понравившиеся'}
    ]
  }

  render() {

    //формируем список кнопок
    const buttons = this.state.buttons.map(btn => {
      const active = this.props.filter === btn.name;
      //если фильтр совпадает с кнопкой добавляем класс активности, иначе обычный класс
       const classes = active ? 'btn btn-info' : 'btn btn-outline-secondary'
      return (
        <button
          key={btn.name}
          type='button'
          className={`btn ${classes}`}
          onClick={()=>this.props.onFilterSelect(btn.name)}
        >
          {btn.label}
        </button>
      )
    })

    return (
      <div className='btn-group'>
        {buttons}
      </div>
    )
  }
}