import React from 'react';
import { Project } from '../project/Project';

export const ProjectList = () => {
    return (
        <div className='flex flex-col align-middle  gap-2 flex-wrap m-4 w-96'>
            <Project name='project 1' imageNumber={1} />
            <Project name='project 2' imageNumber={2} />
            <Project name='project 3' imageNumber={3} />
            <Project name='project 4' imageNumber={4} />
        </div>
    );
};
