import React from 'react';


const BtnMore = ({clicked, btnMoreText}) => {

    const btn_more = "mt3 dib f6 grow no-underline ba ph3 pv2 mb2 bg-light-red pointer hover-dark-gray";

	return (

		<div><button onClick= { clicked } className={btn_more} >{btnMoreText}</button></div>

	)
}

export default BtnMore;