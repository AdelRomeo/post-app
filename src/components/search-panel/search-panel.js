import React, {Component} from "react";
import './search-panel.css';

export default class SearchPanel extends Component {

  state = {
    term: ''
  }


  //изменение строки поиска (того что ищем)
  onUpdateSearch = (e) => {
    const term = e.target.value;
    //изменяем state
    this.setState({term})
    //передаем строку для поиска в главный state
    this.props.onUpdateMainSearch(term)
  }

  render() {
    return (
      <input
        className='form-control search-input'
        type='text'
        placeholder='Поиск по записям'
        onChange={this.onUpdateSearch}
      />
    )
  }
}