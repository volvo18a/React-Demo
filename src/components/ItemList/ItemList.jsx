import React, { Component } from 'react';
import './itemList.css'

class ItemList extends React.Component {
    render() {
        const items = this.props.items;
        console.log(this.props.items);
        return (
            <div className="itemlist-containor">
                {items.map((item, index) => 
                <div className="item-containor" key={index}>
                    <div className="item-left">
                        <img src={item.image} alt={item.alt}/>
                    </div>
                    <div className="item-right">
                        <div className="item-detail-containor">
                            <span className="item-detail">名称：{item.title}</span>
                            <span className="item-detail">1</span>
                        </div>
                        <div className="item-detail-containor list-item-right-padding-top-bottom">
                            {item.tags.length > 0 ? <span className="item-detail-tag">{item.tags.map((tag, index) => {
                                return tag.name + '';
                            })}</span>  : ''}
                        </div>
                        <div className="item-detail-containor list-item-right-padding-bottom">
                            <span className="item-detail">作者：</span>
                            <span className="item-detail">{item.author.length > 0 ? item.author.map((author, index) => {
                                return author + ' ';
                            }) : ''}</span>
                        </div>
                        <div className="item-detail-containor list-item-right-padding-bottom">
                            <span className="item-detail">评分：</span>
                            <span className="item-detail">{item.rating.average}</span>
                        </div>
                        <div className="item-detail-containor">
                            <span className="item-detail">时间：</span>
                            <span className="item-detail">{item.pubdate}</span>
                        </div>
                    </div>
                </div>
                )};
            </div>
        )
    }
}

//导出组件
export default ItemList;


