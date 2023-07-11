import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <>

            <footer className="bg-white shadow bg-gray-300 dark:bg-gray-900">
                <div className="w-full max-w-screen-xl mx-auto ">
                    <div className="sm:flex sm:items-center justify-between flex flex-row">
                        <a href="#" className="flex items-center my-4 sm:mb-0 px-5">
                            <h1 className='text-2xl font-medium dark:text-gray-400'><span className='text-red-500'>Surya</span><span className=''>News24</span></h1>
                        </a>
                        <ul className="flex flex-wrap items-center my-4 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 px-5">
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6 "><FacebookIcon /></a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6">  <LinkedInIcon /></a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6 "><YouTubeIcon /></a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline"><EmailIcon /></a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block bg-black text-center text-sm text-yellow-500 sm:text-center dark:text-gray-400 py-3">All Copyrigths 2023 Reserved by @SuryaNews24 <br /> SuryaNews24 Associated by Ganesh Suryawanshi</span>

                </div>
            </footer>


        </>)
}

export default Footer;