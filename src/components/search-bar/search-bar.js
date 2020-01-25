import React from "react";
import "./search-bar.css";
import ItemsFilter from "../items-filter";



const SearchBar = () => {
    return (
        <div className="row search-bar">

            <div className="col-lg-8 " id="s-line">
                <form className="form-inline h-100">
                    <input className="form-control mr-sm-2 h-100" type="search" placeholder="Search" id="search-line"/>
                </form>
            </div>

            <ItemsFilter/>

        </div>


    );
};

export default SearchBar;