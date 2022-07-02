import './../../css/index.css';

import { Footer } from 'react-daisyui';

import { CustomNavbar } from './../navbar/CustomNavbar';
import { ProjectList } from '../../pages/project-list/ProjectList';

function App() {
    return (
        <>
            <div className='flex flex-col items-stretch h-screen'>
                <CustomNavbar />
                <main className='container flex-1 bg-gray-100 text-black mx-auto h-full'>
                    <ProjectList />
                </main>
                <Footer className='bg-yellow-300 h-4' />
            </div>
        </>
    );
}

export default App;
