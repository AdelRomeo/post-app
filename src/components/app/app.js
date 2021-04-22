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
      {label: 'Going to learn React', important: true, like: false, id: 1},
      {label: 'That is so good', important: false, like: false, id: 2},
      {label: 'I need a break...', important: false, like: false, id: 3},
    ]
  }

  //удаление постов
  deleteItem = (id) => {
    this.setState((state) => {
      //индекс элемента на который кликнули
      const index = state.data.findIndex(elem => elem.id === id)

      //новый массив без удаленного элемента
      const newData = [...state.data.slice(0, index), ...state.data.slice(index + 1)]

      //возвращаем измененный state
      return {
        data: newData
      }
    })
  }

  //добавление постов
  addItem = (text) => {
    //структура нового элемента
    const newItem = {
      label: text, important: false, id: this.state.data.length + 1
    }

    this.setState(({data}) => {
      //создаем промежуточный массив из data и ного элемента
      const arr = [...data, newItem];

      //возвращаем измененный state
      return {
        data: arr
      }
    })
  }

  //добавление постов в 'важное'
  onToggleImportant = (id) => {
    console.log(`Impor ${id}`)
  }

  //лайки постов
  onToggleLiked = (id, sec) => {

    this.setState(({data}) => {
      //индекс элемента на который кликнули
      const index = data.findIndex(elem => elem.id === id)
      //объект на который кликнули
      const old = data[index];
      //old[sec] = !old[sec]
      //измененный объект
      const newItem = {...old}
      newItem[sec] = !newItem[sec]
      //const newItem = {...old, important: !old.important}
      //создаем новый массив постов
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      //возвращаем измененный state
      return{
        data: newArr
      }
    })
  }

  render() {

    //количество лайкнутых постов
    let likedPosts = this.state.data.filter(item => item.like).length
    //общее количество постов
    let totalPosts = this.state.data.length

    return (
      <div className='app'>
        <AppHeader likedPosts={likedPosts} totalPosts={totalPosts}/>
        <div className='search-panel d-flex'>
          <SearchPanel/>
          <PostStatusFilter/>
        </div>
        <PostList
          posts={this.state.data}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />
        <PostAddForm
          onAdd={this.addItem}
        />
      </div>
    )
  }
}