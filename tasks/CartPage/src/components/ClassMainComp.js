/**
 * Class Base Component
 */
import React, { Component } from 'react';
import FuncMainComp from './FuncMainCompo';

class ClassMainComp extends Component {
	constructor(props){
		super( props );

		this.state = {
			counter: 0,
			name: 'Mukul'
		}

		// this.setState({
		// 	counter: 0
		// })
	}

	componentDidMount(){
		console.log( 'Did Mount' )
	}

	componentWillUnmount(){
		console.log( 'Unmount' )
	}

	render(){
		return (
			<div>
				<button
					onClick={() => {
						this.setState({ counter: ++this.state.counter })
					}}>
						Increment Counter {this.state.counter }
				</button>

				{ this.state.counter % 2 == 0 && <FuncMainComp/>}
			</div>
		)
	}
}


export default ClassMainComp;