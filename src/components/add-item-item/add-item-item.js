import React, {Component} from 'react';
import "./add-item-item.css";

class AddItemItem extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-10" id="add-item-input">
                    <input type="text" className="form-control mr-sm-2" placeholder="Текст вашей заметки..."/>
                </div>
                <div className="col-sm-2">
                    <button className="btn btn-success" id="add-item-button">Добавить</button>
                </div>
            </div>
        );
    }
}

export default AddItemItem;