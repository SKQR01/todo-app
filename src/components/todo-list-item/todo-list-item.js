import React, {Component} from 'react';
import "./todo-list-item.css";

export default class TodoListItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            done: false,
            important: false,
        };

        this.onDone = () => {
            this.setState(({done}) => {
                return({
                    done: !done,
                })
            })
        };
        this.onImportant = () => {
            this.setState(({important}) => {
                return({
                    important: !important,
                })
            })
        };
    }
    render() {
        const { label, onDeleted} = this.props;
        const { done, important } = this.state;


        let classNames = 'row';
        done ? classNames += ' done' : classNames += '';
        important ? classNames += ' important' : classNames += '';


        return (
            <div className={classNames}>
                <div className="col-lg-9 label-div" onClick={this.onImportant.bind(this)}>
                <span>
                    {label}
                </span>
                </div>
                <div className="col-lg-3 btn-item-group">
                    <button className="btn btn-danger" id="remvove-li" onClick={onDeleted}><i className="fa fa-trash-alt"/></button>
                    <button className="btn btn-done" id="favorite" onClick={this.onDone.bind(this)}><i className="fa fa-star"/></button>
                </div>
            </div>
        );
    }
}
