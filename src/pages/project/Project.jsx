import React from 'react';
import { Button } from 'react-daisyui';
import { NavLink } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import { Card } from 'react-daisyui';

export const Project = ({ project }) => {
    const { name, imageName, id, description } = project;
    console.log(`imageName: ${imageName}`);

    const navigateToDetails = () => {
        console.log(`id: ${id}`);
        return <NavLink to={`project-details/${id}`} />;
    };

    return (
        <div className='bg-slate-300 overflow-hidden shadow-lg'>
            <div className='mt-4 pl-4 text-bold text-2xl'>{name}</div>
            <div className='px-8 py-4'>
                <img
                    className='w-80 h-40'
                    src={`/images/${imageName}`}
                    alt={description}
                />
            </div>
            <div className='mb-4 px-8'>
                <Button
                    className='bg-customDarkGreen text-white'
                    onClick={() => navigateToDetails(id)}>
                    See More
                </Button>
            </div>
        </div>
    );

    // return (

    // <Card className='p-4'>
    //     <Card.Title className='text-bold'>{name}</Card.Title>
    //     <Card.Image className='mt-4 w-80 h-36' src={`/images/construction_${imageNumber}.jpg`}></Card.Image>
    //     <Card.Body className='p-4'>
    //         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
    //         alias possimus, eligendi tempora doloribus id. Deleniti suscipit
    //         eos, animi, incidunt at,
    //         consequuntur!.
    //     </Card.Body>
    // </Card>
    // );
};
