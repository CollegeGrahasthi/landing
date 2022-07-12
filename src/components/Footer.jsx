import React from 'react';
// import logo from '../images/CGLogo.png'
import star from '../images/star.png';
import call from '../images/call.png';
import mail from '../images/mail.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';

const Footer = ({ bgColor }) => {
  return (
    <div className={`bg-${bgColor} text-white pt-20 pb-10 md:px-32 flex md:flex-row flex-col md:justify-between justify-center`}>

        <div className='flex flex-col '>
            <h1 className='text-4xl font-bold pb-2 md:text-left text-center'>College Grahasthi</h1>
            <p className='text-gray-200 text-sm md:text-left text-center' >© 2022 All Rights Reserved.</p>
            <p className='md:flex hidden text-gray-200 text-xs w-64 text-justify '>
                The content, images and logos used on this are copyright protected and copyrights vests with the respective owners. 
                The usage is intended to promote, identify and search. 
                No endorsement or partnership is implied.
            </p>
            <div className='md:hidden flex align-middle justify-center my-3'>
            <p className=' text-gray-200 text-xs w-64 text-justify '>
                The content, images and logos used on this are copyright protected and copyrights vests with the respective owners. 
                The usage is intended to promote, identify and search. 
                No endorsement or partnership is implied.
            </p>
            </div>
            <div className='md:flex hidden gap-2 pt-20'>
                <img src={star} alt="star" className='w-10' />
                <img src={star} alt="star" className='w-10' />
                <img src={star} alt="star" className='w-10' />
                <img src={star} alt="star" className='w-10' />
                <img src={star} alt="star" className='w-10' />
            </div>
        </div>

        <div className='flex  justify-between md:w-3/5'>
            <div className='md:flex hidden flex-col gap-7'>
                <h1 className='text-xl font-bold'>Company</h1>
                <div className='flex flex-col gap-2'>
                    <a href="/" className={`border-${bgColor} border-b-2 hover:border-white`}>About</a>
                    <a href="/" className={`border-${bgColor} border-b-2 hover:border-white`}>Careers</a>
                    <a href="/" className={`border-${bgColor} border-b-2 hover:border-white`}>Blogs</a>
                </div>
            </div>
            
            <div className='md:flex hidden flex-col gap-7'>
                <h1 className='text-xl font-bold'>Get Help</h1>
                <div className='flex flex-col gap-2'>
                    <a href="/" className={`border-${bgColor} border-b-2 hover:border-white`}>How It Works</a>
                    <a href="/" className={`border-${bgColor} border-b-2 hover:border-white`}>FAQs</a>
                    <a href="/" className={`border-${bgColor} border-b-2 hover:border-white`}>Contact</a>
                    <a href="/" className={`border-${bgColor} border-b-2 hover:border-white`}>Terms</a>
                    <a href="/" className={`border-${bgColor} border-b-2 hover:border-white`}>Privacy</a>
                    <a href="/" className={`border-${bgColor} border-b-2 hover:border-white`}>Sitemap</a>
                </div>          
            </div>
            <div className='md:flex hidden flex-col md:w-[40%] w-[90%]  gap-7 md:text-left text-center'>
                <h1 className='text-xl font-bold md:text-left text-center'>Contact Us</h1>
                <div className='flex flex-col gap-2 justify-center'>
                    <a href="tel:7850037958" className='bg-white text-black rounded-lg p-1 flex items-center border-black border-b-2 hover:border-white'>
                        <img src={call} alt="call" className='w-6 pr-2' />
                        <p className='text-sm'>+91 7850037958</p>
                    </a>

                    <a href="tel:7091045216" className='bg-white text-black rounded-lg p-1 flex items-center border-black border-b-2 hover:border-white'>
                        <img src={call} alt="call" className='w-6 pr-2' />
                        <p className='text-sm'>+91 7091045216</p>
                    </a>

                    <a href="mailto:collegegrahasthi@gmail.com" target="_blank" rel="noopener noreferrer" className='bg-white text-black rounded-lg p-1 flex items-center border-black border-b-2 hover:border-white'>
                        <img src={mail} alt="mail" className='w-6 pr-2' />
                        <p className='text-sm'>collegegrahasthi@gmail.com</p>
                    </a>
                    
                    <a href="/" target="_blank" rel="noopener noreferrer" className={`p-1 flex items-center border-${bgColor} border-b-2 hover:border-white`}>
                        <img src={facebook} alt="mail" className='w-6 pr-2' />
                        <p>facebook</p>
                    </a>

                    <a href="/" target="_blank" rel="noopener noreferrer" className={`p-1 flex items-center border-${bgColor} border-b-2 hover:border-white`}>
                        <img src={instagram} alt="mail" className='w-6 pr-2' />
                        <p>Instagram</p>
                    </a>

                    <a href="/" target="_blank" rel="noopener noreferrer" className={`p-1 flex items-center border-${bgColor} border-b-2 hover:border-white`}>
                        <img src={twitter} alt="mail" className='w-6 pr-2' />
                        <p>Twitter</p>
                    </a>

                    <a href="/" target="_blank" rel="noopener noreferrer" className={`p-1 flex items-center border-${bgColor} border-b-2 hover:border-white`}>
                        <img src={linkedin} alt="mail" className='w-6 pr-2' />
                        <p>LinkedIn</p>
                    </a>
                </div>          
            </div>
           
        </div>
    </div>
  );
};

export default Footer;
