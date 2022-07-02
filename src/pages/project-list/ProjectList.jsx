import React from 'react';
import { Project } from '../project/Project';

import projectList from './../../data/construction_6';

export const ProjectList = () => {
    return (
        <div className='p-10 grid grid-cols-1 grid-rows-2 h-full w-full bg-green-500 md:border-purple-300 md:h-[39.75rem] md:grid-cols-2 lg:h-[48.575rem] lg:grid-cols-3 lg:overflow-auto xl:grid-cols-3 lg:gap-2 lg:pl-4 lg:mb-0 md:bg-red-500 lg:bg-yellow-500 '>
            {projectList.map((project) => {
                console.log(`project: ${JSON.stringify(project)}`);
                return <Project project={project} key={project.id} />;
            })}
        </div>
    );
};
