import React from 'react';
import { Card } from 'react-daisyui';

export const Project = ({ name, imageNumber }) => {
    return (
        <Card className='p-4 h-96'>
            <Card.Title className='text-bold'>{name}</Card.Title>
            <Card.Image className='mt-4 w-80 h-36' src={`/images/construction_${imageNumber}.jpg`}></Card.Image>
            <Card.Body className='p-4'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
                alias possimus, eligendi tempora doloribus id. Deleniti suscipit
                eos, animi, incidunt at,
                consequuntur!.
            </Card.Body>
        </Card>
    );
};
