import React from 'react';
import { Project } from '../project/Project';

import projectList from './../../data/construction_6';

export const ProjectList = () => {
    return (
        <div className='flex flex-col align-middle gap-2 flex-wrap m-4'>
            {projectList.map((project) => {
                console.log(`project: ${JSON.stringify(project)}`);
                return <Project project={project} key={project.id} />;
            })}
        </div>
    );
};
