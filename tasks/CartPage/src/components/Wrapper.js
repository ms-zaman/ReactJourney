import React from 'react'
import ClassMainComp from './ClassMainComp'
import FuncMainComp from './FuncMainCompo'


const Wrapper = () => {
	// let render = true;

	// let timeout = setTimeout(() => {
	// 	render = false;

	// 	console.log( 'test');

	// 	clearTimeout( timeout );
	// }, 2000)

  return (
	<div>
		<ClassMainComp name="Monir" />
		{/* <FuncMainComp name="Al-amin" /> */}
	</div>
  )
}

export default Wrapper