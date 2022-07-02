import './../../css/index.css';

import { CustomNavbar } from '../navbar/CustomNavbar';
// import { ProjectList } from '../../pages/project-list/ProjectList';
import { CustomFooter } from '../footer/CustomFooter';
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { About } from '../../pages/about/About';
import { Contact } from '../../pages/contact/Contact';
import { PageNotFound } from '../../pages/page-not-found/PageNotFound';
import { Home } from '../../pages/home/Home';
import { ProjectList } from '../../pages/project-list/ProjectList';
import { ProjectDetails } from '../../pages/project-details/ProjectDetails';

const App = () => {
    return (
        <Fragment>
            <div className='flex flex-col items-stretch justify-around h-screen overflow-auto'>
                <header>
                    <CustomNavbar />
                </header>
                <main className=' flex bg-gray-100 text-black mx-auto h-full w-full'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/projects' element={<ProjectList />} />
                        <Route
                            path='/projects-details'
                            element={<ProjectDetails />}
                        />

                        <Route path='*' element={<PageNotFound />} />
                    </Routes>
                </main>
                <footer>
                    <CustomFooter className='' />
                </footer>
            </div>
        </Fragment>
    );
};

export default App;
