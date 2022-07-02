import React from 'react';
import { Card } from 'react-daisyui';

export const Project = ({ name }) => {
    return (
        <Card className='p-4'>
            <Card.Title className='text-bold'>{name}</Card.Title>
            <Card.Image></Card.Image>
            <Card.Body>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
                alias possimus, eligendi tempora doloribus id. Deleniti suscipit
                eos, animi, incidunt at, fugiat alias sapiente ipsam voluptates
                quasi rerum! Unde error, officiis dolor magni maiores voluptatem
                vero, ullam nesciunt, ipsam sint corporis similique
                consequuntur!.
            </Card.Body>
        </Card>
    );
};
