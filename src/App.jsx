import React, { Component } from 'react';
import Navbar from './components/Navbar.jsx';
import Counters from './components/Counters.jsx';

const log = console.log;
log(log);

export default class Counter extends Component {

	state = {
		counters: [
			{ id: 1, value: 4 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 },
		]
	}

	handleDelete = (counerId) => {
		const counters = this.state.counters.filter( counter => counter.id !== counerId )
		this.setState({ counters })
	}

	handleReset = () => {
		const counters = this.state.counters.map( counter => {
			counter.value = 0;
			return counter;
		})
		this.setState({ counters })
	}

	handleIncrement = (counter) => {

		this.setState({
	        counters: this.state.counters.map(c => {
	            return c.id === counter.id ? { ...c, value: ++c.value } : c;
	        })
	    });
	}

	handleDecrenebt = (counter) => {

		this.setState({
	        counters: this.state.counters.map(c => {
	            return c.id === counter.id ? { ...c, value: --c.value } : c;
	        })
	    });
	}

	render() {
		return (
			<React.Fragment>
				<Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
				<main className="container">
					<Counters
						counters={this.state.counters}
						onReset={this.handleReset}
						onIncrement={this.handleIncrement}
						onDecrenebt={this.handleDecrenebt}
						onDelete={this.handleDelete}
					/>
				</main>
			</React.Fragment>
		);
	}

}