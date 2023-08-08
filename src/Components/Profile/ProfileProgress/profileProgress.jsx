import React from 'react'
import { Progress } from 'antd';

export default function ProfileProgress() {
  return (
    <div className='flex gap-2 items-center bg-lightBg px-2'>
        <p className='text-smallP'>
            Profile Completeness: 
        </p>
        <div className='w-full flex items-center gap-2'>
            <h1 className='text-largeP text-secondary'>20%</h1>
            <Progress percent={20} status="active" className='w-full ' showInfo={false}  />
        </div>
    </div>
  )
}
