import React, {Component} from 'react';

import "./items-filter.css";

export default class ItemsFilter extends Component {
    render() {
        return (
            <div className="btn-group col-lg-4" id="btn-group-filter">
                <button className="btn btn-info btn-filter">Все</button>
                <button className="btn btn-info btn-filter">Активные</button>
                <button className="btn btn-info btn-filter">Выполненные</button>
            </div>
        );
    }
}
