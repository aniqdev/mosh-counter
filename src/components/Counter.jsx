import React, { Component } from 'react';

const log = console.log;
log(log);

export default class Counter extends Component {

	render() {
		// log(this.props)
		return (
			<div className="row">
				<div className="col-1">
					<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				</div>
				<div className="col">
					<button onClick={ this.props.onIncrement } className="btn btn-secondary btn-sm">+</button>
					<button onClick={ this.props.onDecrenebt } disabled={this.props.counter.value <= 0} className="btn btn-secondary btn-sm m-2">-</button>
					<button onClick={ this.props.onDelete } className="btn btn-danger btn-sm">Delete</button>
				</div>
			</div>
		);
	}

	formatCount(){
		return this.props.counter.value === 0 ? 'Zero' : this.props.counter.value;
	}

	getBadgeClasses(){
		return 'badge m-2 badge-' + (this.props.counter.value ? 'primary' : 'warning');
	}

}