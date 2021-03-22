import React from "react";
import Header from "../Header";
import List from "../List";
import Search from "../Search";
import Filter from "../Filter";
import ItemAddForm from "../ItemAddForm";
import "./index.css";


class App extends React.Component {

    state = {
        todoData: [],
        searchValue: '',
        filter: 'all'
    }

    createTodoItem(label) {
        return {
            id: Date.now().toString(),
            label,
            isImportant: false,
            isDone: false
        }
    }

    deleteTodoItem = (id) => {
        this.setState(({ todoData }) => {
            const todoIndex = todoData.findIndex(item => item.id === id)
            const newTodoData = [
                ...todoData.slice(0, todoIndex),
                ...todoData.slice(todoIndex + 1)
            ]
            return {
                todoData: newTodoData
            }
        })
    }

    addTodoItem = (text) => {
        const newTodo = this.createTodoItem(text)
        this.setState(({ todoData }) => {
            const newTodoData = [
                ...todoData,
                newTodo
            ]
            return {
                todoData: newTodoData
            }
        })
    }

    toggleProperty = (array, id, propertyName) => {
        const todoIndex = array.findIndex(item => item.id === id)
        const oldTodo = array[todoIndex]
        const newTodo = {
            ...oldTodo,
            [propertyName]: !oldTodo[propertyName]
        }
        return [
            ...array.slice(0, todoIndex),
            newTodo,
            ...array.slice(todoIndex + 1)
        ]
    }

    onClickImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'isImportant')
            }
        })
    }

    onClickDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'isDone')
            }
        })
    }

    onChangeSearch = (searchValue) => {
        this.setState({
            searchValue
        })
    }

    onChangeFilter = (filter) => {
        this.setState({
            filter
        })
    }

    searchTodos(todos, searchValue) {
        if (searchValue === '') {
            return todos
        }
        return todos.filter(todo => {
            return todo.label.toLowerCase()
                .indexOf(searchValue
                    .toLowerCase()) > -1
        })
    }

    filterTodos(todos, filter) {
        switch (filter) {
            case 'active':
                return todos.filter(todo => !todo.isDone)
            case 'done':
                return todos.filter(todo => todo.isDone)
            case 'all':
                return todos
            default:
                return todos
        }
    }

    render() {
        const { todoData, searchValue, filter } = this.state
        const visibleTodos = this.filterTodos(this.searchTodos(todoData, searchValue), filter)
        const countDoneItems = todoData.filter(todo => todo.isDone).length
        const countTodoItems = todoData.filter(todo => !todo.isDone).length

        return (
            <div className='todo-app'>
                <Header toDo={countTodoItems} done={countDoneItems} />
                <div className='search-filter d-flex'>
                    <Search onChangeSearch={this.onChangeSearch} />
                    <Filter filter={filter} onChangeFilter={this.onChangeFilter} />
                </div>
                {visibleTodos.length
                    ? <List
                        todos={visibleTodos}
                        onClickDelete={this.deleteTodoItem}
                        onClickImportant={this.onClickImportant}
                        onClickDone={this.onClickDone} />
                    : <div className='emptyList'>The list is empty</div>
                }
                <ItemAddForm onClickAdd={this.addTodoItem} />
            </div>
        )
    }
}

export default App;