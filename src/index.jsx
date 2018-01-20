import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import fetchJsonp from 'fetch-jsonp';

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
		const api = 'https://api.douban.com/v2/book/search?q=a';

		var result = fetchJsonp(api).then((response) => {
				return response.json()
		  }).then((json) => {
				console.log(json.books)
				this.setState({items: json.books});
		  }).catch((ex) => {
				console.log(ex)
		  })
	}

	render() {
		return (
			<div className="app">
				<SearchBar />
				<ItemList items={this.state.items} />
				<SwitchFooter />
			</div>	
		)
	}
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
