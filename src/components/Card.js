import React from 'react';
import '../ressources/card.css';
const profile_image = require('../ressources/person.jpg');

const Card = ({id, name, email}) => {
	return (

		<div id={id} className='tc bg-light-purple dib br3 pa3 ma2 bw2 shadow-5 grow'>
			<img className='profil_img'  src={profile_image}  alt='profile'/>
			<div>
				<h2>{name}</h2>
				<p>{email} </p>
			</div>			
		</div>
	)
}

export default Card;