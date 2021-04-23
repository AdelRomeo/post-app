import React, {Component} from 'react';
import './post-add-form.css';

export default class PostAddForm extends Component {

  state = {
    text: ''
  }

  //записываем в state значение из инпута
  onValueChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  //отправлям форму
  onSubmit = (e) => {
    e.preventDefault();
    //создаем на странице новый элемент
    this.props.onAdd(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <form
        className='bottom-panel d-flex'
        onSubmit={this.onSubmit}
      >
        <input
          type="text"
          placeholder='О чем вы сейчас думаете?'
          className='form-control new-post-label'
          onChange={this.onValueChange}
          value={this.state.text}
        />
        <button type='submit' className='btn btn-outline-secondary'>Добавить</button>
      </form>
    )
  }
}

