import React, { Component } from 'react';
import './itemList.css'

class ItemList extends React.Component {
    render() {
        return (
            <div className="itemlist-containor">
                <div className="item-containor">
                    <div className="item-left">
                        <img src="" alt=""/>
                    </div>
                    <div className="item-right">
                        <div className="item-detail-containor">
                            <span className="item-detail">名称：</span>
                            <span className="item-detail">1</span>
                        </div>
                        <div className="item-detail-containor list-item-right-padding-top-bottom">
                            <span className="item-detail-tag">认知</span>
                        </div>
                        <div className="item-detail-containor list-item-right-padding-bottom">
                            <span className="item-detail">名称：</span>
                            <span className="item-detail">1</span>
                        </div>
                        <div className="item-detail-containor list-item-right-padding-bottom">
                            <span className="item-detail">名称：</span>
                            <span className="item-detail">1</span>
                        </div>
                        <div className="item-detail-containor">
                            <span className="item-detail">名称：</span>
                            <span className="item-detail">1</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

//导出组件
export default ItemList;


