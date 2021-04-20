import React, {Component} from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

import './app.css'

export default class App extends Component {

  state = {
    data: [
      {label: 'Going to learn React', important: true, id: 1},
      {label: 'That is so good', important: false, id: 2},
      {label: 'I need a break...', important: false, id: 3},
    ]
  }

  //удаление постов
  deleteItem = (id) =>{
    this.setState((state)=>{
      //элемент на который кликнули
      const index = state.data.findIndex(elem => elem.id === id)

      //часть массива от начала до того элемента на котоый кликнули (который нужно удалить)
      const before = state.data.slice(0, index)
      //часть массива со следующего элемента на который кликнули и до конца
      const after = state.data.slice(index +1)
      //новый массив без удаленного элемента
      const newData = [...before, ...after]

      //возвращаем измененный state
      return{
        data: newData
      }
    })
  }

  //добавление постов
  addItem = (text)=>{

    //структура нового элемента
    const newItem = {
      label: text, important: false, id: this.state.data.length+1
    }

    this.setState(({data})=>{
      //создаем промежуточный массив из data и ного элемента
      const arr = [...data, newItem];

      //возвращаем измененный state
      return{
        data: arr
      }
    })
    console.log(this.state.data)
  }

  render() {
    return (
      <div className='app'>
        <AppHeader/>
        <div className='search-panel d-flex'>
          <SearchPanel/>
          <PostStatusFilter/>
        </div>
        <PostList
          posts={this.state.data}
          onDelete={this.deleteItem}
        />
        <PostAddForm
          onAdd={this.addItem}
        />
      </div>
    )
  }
}