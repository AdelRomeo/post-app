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
    ],
    term: '',
    filter: 'all'
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

  //лайки постов / занос постов в 'важное'
  onToggle = (id, attr) => {
    this.setState(({data}) => {
      //индекс элемента на который кликнули
      const index = data.findIndex(elem => elem.id === id)
      //объект на который кликнули
      const old = data[index];
      //old[sec] = !old[sec]
      //измененный объект
      const newItem = {...old}
      newItem[attr] = !newItem[attr]
      //создаем новый массив постов
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      //возвращаем измененный state
      return {
        data: newArr
      }
    })
  }

  //поиск постов
  //posts - посты в которых ищем
  //term - строка которую ищем
  searchPost = (posts, term) => {
    //если пользователь ничего не ввел
    if (term.length === 0) {
      //просто возвращаем все посты
      return posts
    }

    //возвращаем все посты в которых что-то нашли
    return posts.filter(post => post.label.indexOf(term) > -1)
  }

  //изменение строки поиска
  onUpdateMainSearch = (term) => {
    this.setState({term})
  }

  //фильтрация постов
  //posts - список постов для фитрации
  //filter - способ фильтрации
  filterPosts = (posts, filter) => {
    if (filter === 'like') {
      //возвращаем все посты в которых like === true
      return posts.filter(post => post.like)
    } else {
      //возвращаем все посты
      return posts
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter})
    console.log(this.state.filter)
  }

  render() {

    //количество лайкнутых постов
    let likedPosts = this.state.data.filter(item => item.like).length
    //общее количество постов
    let totalPosts = this.state.data.length

    //посты которые будут рендериться на странице
    //this.searchPost(this.state.data, this.state.term) - массив постов
    const visiblePosts = this.filterPosts(this.searchPost(this.state.data, this.state.term), this.state.filter)

    return (
      <div className='app'>
        <AppHeader likedPosts={likedPosts} totalPosts={totalPosts}/>
        <div className='search-panel d-flex'>
          <SearchPanel onUpdateMainSearch={this.onUpdateMainSearch}/>
          <PostStatusFilter
            filter={this.state.filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
        <PostList
          posts={visiblePosts}
          onDelete={this.deleteItem}
          onToggle={this.onToggle}
        />
        <PostAddForm
          onAdd={this.addItem}
        />
      </div>
    )
  }
}