/**
 * Function Base Component
 */

import React, { useState, useEffect } from 'react';

const dbCall = () => {
	console.log( 'expensive DBCall' );
	return 0;
}

const FuncMainComp = (props) => {
	console.log("Function: ", props);

	// const [state, setState] = useState({ counter: 0, name: 'Mukul' });

	/**
	 * this is the example I was trying to show you guys.
	 * in this scenario, dbCall() is called in each render.
	 * like, I say useState( 0 ) <- this will call in each render.
	 *
	 * i.e: useState( 0 ) === useState( dbCall() ) as dbCall returns 0.
	 * now you can check console, "expensive DBCall" will be printed in each render.
	 */
	const [counter, setCounter] = useState( dbCall() );
	/**
	 * But in this scenario, dbCall passed as ref will be called in just initial render.
	 * Like I said, if you pass a function in useState as initialState, the function will be called once only.
	 * useState( () => 0 ) === useState( dbCall ) as dbCall return function reference.
	 */
	// const [counter, setCounter] = useState( dbCall );

	const handleClick = () => {}

	/**
	 * Component Did Mount
	 */
	useEffect(() => {
		console.log( 'Function did mount' );

		document.addEventListener('click', handleClick )

		// For Component Unmount / Cleanup Function For this Effect.
		return () => {
			console.log( 'component unmount' );
			document.removeEventListener('click', handleClick )
		}
	}, [])

	// /**
	//  * Side effect on every state update
	//  */
	// useEffect(() => {
	// 	console.log( 'Side effect on every state update' );
	// })

	// /**
	//  * If counter state is changed then this will run
	//  */
	// useEffect(() => {
	// 	console.log( 'if counter change' );
	// }, [counter])


	return (
		<div>
			<button
				onClick={() => {
					setCounter( ( prev ) => prev + 1 )
					// setCounter(++counter)
					// setCounter({ ...state, counter: ++state.counter })
				}}>
				click {counter}
			</button>
		</div>
	)
}

export default FuncMainComp;