import React from 'react';


const BtnShow = ({show, btnShowText}) => {

	const btn = "f6 grow no-underline br-pill ba ph3 pv2 mb2 dib bg-light-red pointer white tracked ";

	return (

		<div><button onClick={show} className={btn}>{btnShowText}</button></div>

	)
}

export default BtnShow;