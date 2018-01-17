import React, { Component } from 'react';
import ReactDOM from 'react-dom';



import './style.css';
import './viewport.js';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import SwitchFooter from './components/SwitchFooter/SwitchFooter.jsx';
import ItemList from './components/ItemList/ItemList.jsx';

class App extends Component {

	constructor() {
		super();
		this.state = {
			items: []
		}
	}

	componentDidMount() {
		const api = 'https://developers.douban.com/wiki/?title=book_v2#get_book_search'
		// var result = fetchJsonp(api)
		//   .then(function(response) {
		// 	return response.json()
		//   }).then(function(json) {
		// 	console.log('parsed json', json)
		//   }).catch(function(ex) {
		// 	console.log('parsing failed', ex)
		//   })
	}

	render() {
		return (
			<div className="app">
				<SearchBar />
				<ItemList />
				<SwitchFooter />
			</div>	
		)
	}
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
