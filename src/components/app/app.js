import AppHeader from "../app-header";
import SearchBar from "../search-bar";
import TodoList from "../todo-list";
import AddItemItem from "../add-item-item";
import React, {Component} from "react";

export default class App extends Component{

    constructor() {
        super();

        this.deleteItem = (id) => {
            this.setState(({todo_data}) => {
                const indx = todo_data.findIndex((el) => el.id === id);

                const new_todo_data =  [... todo_data.slice(0, indx), ... todo_data.slice(indx + 1)]
                return{
                    todo_data: new_todo_data,
                }
            });
        };
    };
    state = {
        todo_data : [
            {label: 'Кортавая мери', important: false, done:false, id: 1},
            {label: 'Я клубничный данон', important: false, done:false, id: 2},
            {label: 'Разрази меня третий подбородок!', important: false, done:false, id: 3}
        ],
    };
    render(){
        return (
            <div className="app">

                <AppHeader/>

                <SearchBar/>

                <TodoList todos={this.state.todo_data}
                          onDeleted={ this.deleteItem.bind(this)}/>

                <AddItemItem/>

            </div>
        );
    }

};

