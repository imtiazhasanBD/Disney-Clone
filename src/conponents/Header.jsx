import React, { useState } from 'react'
import logo from './../assets/Images/logo.png'
import Headeritem from './Headeritem'
import { v4 as uuidv4 } from 'uuid';

import { HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv } from "react-icons/hi2";
import { HiPlus,HiDotsVertical } from "react-icons/hi";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const menu = [
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }
    ]


  return (
     <div className="flex items-center justify-between p-5">
       <div className="flex items-center gap-8">
        <img src={logo} className='w-[80px] md:w-[115px] object-cover'/>
          <div className='hidden md:flex gap-8 items-center'>
         {menu.map((item) => (
            <Headeritem name = {item.name} Icon = {item.icon} key={uuidv4()}/>
        ))}
          </div>
          <div className='flex md:hidden gap-5'>
         {menu.map((item, index) => index<3&& (
            <Headeritem name = {''} Icon = {item.icon} key={uuidv4()}/>
        ))}
         <div onClick={() => {setToggle(!toggle)}} className='md:hidden'>
            <Headeritem name={""} Icon={HiDotsVertical} key={uuidv4()}/>
           {toggle?  <div className='absolute mt-3 bg-[#121212] p-3 border-[1px] border-gray-700'>
                {menu.map((item, index) => index>2&& (
                <Headeritem name = {item.name} Icon = {item.icon} key={uuidv4()}/>
            ))}
            </div> : null }
         </div>
          </div>
       </div>
       <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className='w-[40px] rounded-full'/>
     </div>
  )
}

export default Header;
