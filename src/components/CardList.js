import React from 'react';
import Card from './Card';

const CardList = ({profils}) => {
    return profils.map( (user, i) => <Card key={user.id} name={user.name} email={user.email} /> );
}

export default CardList;