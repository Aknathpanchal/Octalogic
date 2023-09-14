import React from 'react';
import { Link } from 'react-router-dom'; 
import {MdOutlineDashboard,MdOutlineQueueMusic,MdLogout} from "react-icons/md"
import { FiSettings } from 'react-icons/fi';
import MainRoutes from '../Routes/mainRoutes';
import Logo from '../assets/Logo.svg';

const Sidebar = () => {
  return (
  
<>
<div className='min-h-screen w-28 p-4 bg-white flex flex-col justify-between border-r-4 border-gray-500'>
        <div className='flex flex-col items-center'>
            <div> <Link to='/'>
            <div>
            <img src={Logo} alt="" />
            </div>
          </Link>
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
          </div>
         <div> 
            <Link to='/'>
            {/* <div className='bg-gray-100 selection:bg-red-500 active:bg-red-300 w-11/12 hover:bg-red-200 cursor-pointer my-4 p-2 rounded-lg inline-block'>
              <MdOutlineDashboard size={20} className='m-auto'/>
              <p>Home</p>
            </div> */}


<div className='bg-gray-100 w-11/12 hover:bg-red-200 cursor-pointer my-4 p-2 rounded-lg inline-block' style={{borderRadius:"10px"}}>
  <MdOutlineDashboard size={20} className='m-auto' />
  <p>Home</p>
</div>

          </Link>
          <Link to='/courses'>
            <div className='bg-gray-100 hover:bg-red-300  active:bg-red-300 w-11/12 hover.bg-gray-200 cursor-pointer my-4 p-2 rounded-lg inline-block' style={{borderRadius:"10px"}}>
              <MdOutlineQueueMusic size={20} className='m-auto'/>
              <p>Courses</p>
            </div>
          </Link>
          </div>
        
        </div>

        <div className=''>  
            <Link to='/#'>
            <div className='bg-gray-100 selection:bg-red-500 active:bg-red-300 w-11/12 hover:bg-red-200 cursor-pointer my-4 p-2 rounded-lg inline-block' style={{borderRadius:"10px"}}>
              <MdLogout size={20} className='m-auto'/>
              <p>Logout</p>
            </div>
          </Link>
          </div>

      </div>
</>

  );
};

export default Sidebar;

