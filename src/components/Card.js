import React from 'react';
import '../ressources/card.css';
import profile_image from '../ressources/person.jpg';

const Card = ({i, id, name, email, clicked}) => {

	return (

		<div className='tc bg-light-purple dib br3 pa3 ma2 bw2 shadow-5 grow'>
			<img className='profil_img'  src={profile_image}  alt='profile'/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
			<a onClick={ () => {clicked(id)} } class="f6 link dim ba ph3 pv2 mb2 dib dark-pink" href="#0">Supprimer</a>		
		</div>
	)
}

export default Card;