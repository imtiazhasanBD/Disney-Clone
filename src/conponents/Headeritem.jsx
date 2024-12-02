import React from 'react';

const Headeritem = ({name, Icon}) => {
  return (
    <div className='text-white flex items-center gap-3 text-[14px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-2'>
       <Icon/>
       <h2 className=' md:block'>{name}</h2>  
    </div>
  )
}

export default Headeritem;
