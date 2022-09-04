import React from 'react';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className='w-[88px] bg-[#2051FF] h-screen flex flex-col items-center space-y-5 overflow-y-auto'>
      <div>
        <Image
          layout='intrinsic'
          className='items-center'
          src='/assets/Assist_Id.png'
          width='100%'
          height='100%'
          alt='logo'
          objectFit='cover'
        />
      </div>
      <ul className='flex flex-col items-center space-y-5'>
        <li className='w-[39px] h-[34px]'>
          <Image
            layout='intrinsic'
            className='items-center'
            src='/assets/home.png'
            width='100%'
            height='100%'
            alt='logo'
            objectFit='contain'
          />
        </li>
        <li className='w-[39px] h-[34px]'>
          <Image
            layout='intrinsic'
            className='items-center'
            src='/assets/Vector (17).png'
            width='100%'
            height='100%'
            alt='logo'
            objectFit='contain'
          />
        </li>
        <li className='w-[39px] h-[34px]'>
          <Image
            layout='intrinsic'
            className='items-center'
            src='/assets/Vector (16).png'
            width='100%'
            height='100%'
            alt='logo'
            objectFit='contain'
          />
        </li>

        <li className='w-[39px] h-[34px]'>
          <Image
            layout='intrinsic'
            className='items-center'
            src='/assets/Vector (15).png'
            width='100%'
            height='100%'
            alt='logo'
            objectFit='contain'
          />
        </li>
        <li className='w-[39px] h-[34px]'>
          <Image
            layout='intrinsic'
            className='items-center'
            src='/assets/Vector (14).png'
            width='100%'
            height='100%'
            alt='logo'
            objectFit='contain'
          />
        </li>
        <li className='w-[39px] h-[34px]'>
          <Image
            layout='intrinsic'
            className='items-center'
            src='/assets/Vector (13).png'
            width='100%'
            height='100%'
            alt='logo'
            objectFit='contain'
          />
        </li>

        <li className='w-[39px] h-[34px]'>
          <Image
            layout='intrinsic'
            className='items-center'
            src='/assets/Vector (12).png'
            width='100%'
            height='100%'
            alt='logo'
            objectFit='contain'
          />
        </li>

        <li className='w-[39px] h-[34px]'>
          <Image
            layout='intrinsic'
            className='items-center'
            src='/assets/Vector (11).png'
            width='100%'
            height='100%'
            alt='logo'
            objectFit='contain'
          />
        </li>
        <li className='w-[39px] h-[34px]'>
          <Image
            layout='intrinsic'
            className='items-center'
            src='/assets/Vector (10).png'
            width='100%'
            height='100%'
            alt='logo'
            objectFit='contain'
          />
        </li>
        <li className='w-[39px] h-[34px]'>
          <Image
            layout='intrinsic'
            className='items-center'
            src='/assets/Vector (9).png'
            width='100%'
            height='100%'
            alt='logo'
            objectFit='contain'
          />
        </li>

        <li className='w-[39px] h-[34px]'>
          <Image
            layout='intrinsic'
            className='items-center'
            src='/assets/Vector (7).png'
            width='100%'
            height='100%'
            alt='logo'
            objectFit='contain'
          />
        </li>

        <li className='w-[39px] h-[34px]'>
          <Image
            layout='intrinsic'
            className='items-center'
            src='/assets/Vector (8).png'
            width='100%'
            height='100%'
            alt='logo'
            objectFit='contain'
          />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
