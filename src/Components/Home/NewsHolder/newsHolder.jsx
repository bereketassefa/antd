import React from 'react'
import NewsCard from '../NewsCard/newsCard'

export default function NewsHolder() {
  return (
    <div className='flex flex-col gap-2 w-full max-w-[550px] '>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
    </div>
  )
}
