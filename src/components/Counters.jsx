import React, { Component } from 'react';
import Counter from './Counter.jsx';

const log = console.log;
log(log);

export default class Counters extends Component {
	render() {

		const { counters, onReset, onIncrement, onDecrenebt, onDelete } = this.props;

		return (
			<div className="counters-wrapper">
				<button onClick={ this.props.onReset } className="btn btn-primary btn-sm m-2">Reset</button>
				{this.props.counters.map( counter => 
					<Counter key={counter.id}
							counter={counter}
							onIncrement={ () => this.props.onIncrement(counter) }
							onDecrenebt={ () => this.props.onDecrenebt(counter) }
							onDelete={ () => this.props.onDelete(counter.id) } />
				)}
			</div>
		);
	}

}