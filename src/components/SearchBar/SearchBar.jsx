import React, { Component } from 'react';
import './searchBar.css'

class SearchBar extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="searchbar-containor">
                    <i className="iconfont icon-search">&#xe628;</i>
                    <input type="text" className="searchbar-input" placeholder="书名、作者、ISBN"/>
                    <button className="searchbar-btn">搜索</button>
                </div>
            </header>
        )
    }
}

//导出组件
export default SearchBar;


