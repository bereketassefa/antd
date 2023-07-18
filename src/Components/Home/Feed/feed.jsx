import React from 'react'
import NewsPost from '../NewsPost/newsPost'
import NewsHolder from '../NewsHolder/newsHolder'

export default function Feed() {
  return (
    <div className='w-full flex flex-col gap-2 items-center justify-center px-2'>
        <NewsPost />

        <NewsHolder />
    </div>
  )
}
