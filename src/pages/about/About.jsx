import React, { Fragment } from 'react';
import { Carousel } from 'react-daisyui';

export const About = () => {
    return (
        <Fragment>
            <div className='w-1/2 mx-auto' >
                <h1 className='font-bold my-6 text-3xl'>About Us</h1>
                <p className='font-semibold'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Autem voluptate earum quidem ullam nam! Totam expedita eum
                    asperiores quos obcaecati? Consequuntur ipsum architecto
                    officiis, alias unde possimus nulla quam, voluptatem
                    accusantium tempore recusandae rem optio odit porro nemo
                    maxime ab, nihil inventore illum temporibus atque nesciunt
                    fugiat. Fugit, minus vitae. Sunt ratione recusandae magni
                    facere dolores ad fuga modi praesentium libero perferendis
                    quam nemo velit officiis repellendus sint labore vero quas
                    dolorem atque ipsa distinctio, doloremque ullam maxime!
                    Alias fugit nam temporibus quae impedit exercitationem
                    molestiae, assumenda doloribus cumque sequi deleniti,
                    dolore, tempore sapiente adipisci. Eum provident explicabo
                    alias earum?
                </p>
            </div>
            <div className='mx-auto'>
                <div className='mt-12 mx-auto h-[10rem] w-[30rem] lg:min-w-[50%] max-h-92 min-h-72'>
                    <Carousel display='sequential' className='rounded-box'>
                        <Carousel.Item
                            className='w-full h-full'
                            src='/images/construction_1.jpg'
                            alt='Construction 1'
                        />
                        <Carousel.Item
                            className='w-full h-full'
                            src='/images/construction_2.jpg'
                            alt='Construction 2'
                        />
                        <Carousel.Item
                            className='w-full h-full'
                            src='/images/construction_3.jpg'
                            alt='Construction 3'
                        />
                        <Carousel.Item
                            className='w-full h-full'
                            src='/images/construction_4.jpg'
                            alt='Construction 4'
                        />
                        <Carousel.Item
                            className='w-full h-full'
                            src='/images/construction_5.jpg'
                            alt='Construction 5'
                        />
                        <Carousel.Item
                            className='w-full h-full'
                            src='/images/construction_6.jpg'
                            alt='Construction 6'
                        />
                    </Carousel>
                </div>
            </div>
        </Fragment>
    );
};
