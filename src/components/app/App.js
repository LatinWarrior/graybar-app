import './../../css/index.css';

import { CustomNavbar } from './../navbar/CustomNavbar';
import { ProjectList } from '../../pages/project-list/ProjectList';
import { CustomFooter } from '../footer/CustomFooter';

function App() {
    return (
        <>
            <div className='flex flex-col items-stretch justify-around h-screen overflow-auto'>
                <header>
                    <CustomNavbar />
                </header>
                <main className=' flex  bg-gray-100 text-black mx-auto h-full w-full'>
                    <ProjectList />
                </main>
                <footer>
                    <CustomFooter className='' />
                </footer>
            </div>
        </>
    );
}

export default App;
