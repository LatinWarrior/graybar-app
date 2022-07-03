import React from 'react';
import { NavLink } from 'react-router-dom';
import { Hero, Button, Navbar } from 'react-daisyui';

export const Home = () => {
    return (
        <main role='main' class='w-full h-full bg-slate-100'>
            <Hero
                className='h-full opacity-80 z-0 relative'
                style={{ backgroundImage: 'url(/images/houston_skyline.jpg)' }}>
                <Hero.Content>
                    <div className='flex flex-col md:flex-row md:justify-around z-1'>
                        <div className='md:mr-10 md:mt-6'>
                            {/* <img
                                src='/images/construction_6.jpg'
                                className='mx-auto rounded-lg shadow-2xl md:max-w-sm'
                                alt='Construction'
                            /> */}
                        </div>
                        <div>
                            <h1 className='mt-2 absolute top-10 left-8 text-4xl text-lightGray text-bold font-bold z-1 md:top-4 md:left-[58%] md:text-5xl '>
                                Welcome to Greenbar & Artisans
                            </h1>
                            {/* <p className='hidden z-1 text-yellow-400 text-bold md:flex md:py-6 md:text-1xl md:font-medium md:ml-40'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Tenetur ut soluta atque
                                reprehenderit libero praesentium magnam
                                voluptatum magni eius quia ea a, distinctio ex
                                odit autem corrupti qui ullam. Repellendus
                                maxime quas ratione sint sed quia deleniti qui.
                                Illo voluptas recusandae quod maiores facilis
                                distinctio nisi nemo cumque! Nam molestiae
                                similique, expedita fugiat dicta magnam hic
                                praesentium aliquam voluptas perspiciatis
                                reprehenderit dolorem quod ratione autem, alias
                                voluptate, quas assumenda enim. Mollitia
                                assumenda commodi tempora aut suscipit amet
                                corrupti recusandae, natus rem expedita itaque
                                explicabo maxime inventore harum non voluptatem
                                asperiores officiis dolores? Vitae rem sed
                                deserunt nisi. Eos, molestias dicta.
                            </p> */}
                            {/* <Button className='hidden md:flex md:mx-4' color='primary'>Get Started</Button> */}
                        </div>
                    </div>
                </Hero.Content>
            </Hero>
        </main>
    );
};
