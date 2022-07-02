import React from 'react';
import { Project } from '../project/Project';

import projectList from './../../data/construction_6';

export const ProjectList = () => {
    return (
        <div className='p-10 grid grid-cols-1 h-full bg-green-500 md:border-purple-300 md:border-8 md:h-[39.75rem] md:grid-rows-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 lg:gap-2 lg:pl-4 lg:mb-0 md:bg-red-500 lg:bg-yellow-500 '>
            {projectList.map((project) => {
                console.log(`project: ${JSON.stringify(project)}`);
                return <Project project={project} key={project.id} />;
            })}
        </div>
    );
};
