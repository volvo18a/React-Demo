import React, { Component } from 'react';
import './switchfooter.css'

class SwitchFooter extends React.Component {
    render() {
        const items = [
            {imgUrl: '&#xe640;', name:'图书'},
            {imgUrl: '&#xe6bb;',name: '电影'},
            {imgUrl: '&#xe6a9;',name: '音乐'}
        ]

        return (
            <nav className="switchfooter-containor">
                <div className="switchfooter-item">
                    <i className="iconfont switchfooter-item-img">&#xe640;</i>
                    <span className="switchfooter-item-word">图书</span>
                </div>
                <div className="switchfooter-item">
                    <i className="iconfont switchfooter-item-img">&#xe6bb;</i>
                    <span className="switchfooter-item-word">电影</span>
                </div>
                <div className="switchfooter-item">
                    <i className="iconfont switchfooter-item-img">&#xe6a9;</i>
                    <span className="switchfooter-item-word">音乐</span>
                </div>
            </nav>
        )
    }
}

//导出组件
export default SwitchFooter;