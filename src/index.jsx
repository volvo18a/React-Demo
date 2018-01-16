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
