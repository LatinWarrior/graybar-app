import React from 'react';
import { Button } from 'react-daisyui';

export const Contact = () => {
    const onContactUs = () => {
        console.log(`contact us`);
    };

    return (
        <div class='form-control w-full max-w-xs h-[85%] lg:max-w-lg mx-auto my-10 px-6 bg-customLightGray'>
            <label class='label mt-4'>
                <span class='label-text text-xl text-black'>Please enter your Name</span>
            </label>
            <input
                type='text'
                placeholder='Your Name'
                class='input input-bordered max-w-xs lg:max-w-lg bg-slate-200 mb-6'
            />
            <label class='label'>
                <span class='label-text text-xl text-black'>Please enter your email address</span>
            </label>
            <input
                type='text'
                placeholder='Your email'
                class='input input-bordered max-w-xs lg:max-w-lg bg-slate-200 mb-6'
            />
            <label class='label'>
                <span class='label-text text-xl text-black'>Please enter your message</span>
            </label>
            <textarea class="textarea bg-slate-200 h-80 max-w-xs lg:max-w-lg" placeholder="Your Message"></textarea>
            <Button className='text-white mb-6  bg-customDarkBlue hover:bg-customMediumBlue mx-auto w-40 mt-10 outline-none lg:mb-0 '>Send</Button>
        </div>
        // <div className='mx-auto mt-10 h-[24rem] bg-customLightGray'>
        //     <div class='w-full md:w-96 md:max-w-full mx-auto'>
        //         <div class='p-6 sm:rounded-md'>
        //             <form method='POST' action=''>
        //                 <label class='block mb-6'>
        //                     <span class='text-gray-700'>Your name</span>
        //                     <input
        //                         type='text'
        //                         name='name'
        //                         className='block w-full mt-1 border-customDarkGreen rounded-sm shadow-sm focus: border-customLightGray focus:ring focus:ring-indigo-200'

        //                         placeholder=''
        //                     />
        //                 </label>
        //                 <label class='block mb-6'>
        //                     <span class='text-gray-700'>Email address</span>
        //                     <input type="email" name="email" placeholder="Type here" class="input input-bordered input-accent w-full max-w-xs" />
        //                     <input
        //                         name='email'
        //                         type='email'
        //                         class='
        //                                 block
        //                                 w-full
        //                                 mt-1
        //                                 border-gray-300
        //                                 rounded-md
        //                                 shadow-sm
        //                                 focus:border-indigo-300
        //                                 focus:ring
        //                                 focus:ring-indigo-200
        //                                 focus:ring-opacity-50
        //   '
        //                         placeholder='jane.doe@yourmail.com'
        //                         required
        //                     />
        //                 </label>
        //                 <label class='block mb-6'>
        //                     <span class='text-gray-700'>Message</span>
        //                     <textarea
        //                         name='message'
        //                         class='
        //                                 block
        //                                 w-full
        //                                 mt-1
        //                                 border-gray-300
        //                                 rounded-md
        //                                 shadow-sm
        //                                 focus:border-indigo-300
        //                                 focus:ring
        //                                 focus:ring-indigo-200
        //                                 focus:ring-opacity-50
        //                             '
        //                         rows='3'
        //                         placeholder="Tell us what you're thinking about..."></textarea>
        //                 </label>
        //                 <div class='mb-6'>
        //                     <Button
        //                         className='h-10 px-5 text-white bg-customDarkBlue rounded-lg transition-colors duration-100 focus:no-outline hover:bg-customDarkGray'
        //                         onClick={(e) => onContactUs(e)}>
        //                         Contact Us
        //                     </Button>
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
        // </div>
    );
};
