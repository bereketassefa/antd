import React, { useEffect, useRef, useState } from 'react'
import NewsCard from '../NewsCard/newsCard'
import { Item } from 'rc-menu';

export default function NewsHolder() {

  const [loading, setLoading] = useState(false);
  const [timeline, setTimeline] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0)
 
  const elementRef = useRef(null); console.log(hasMore)

  function onIntersection(entries) {
    const firstEntry = entries[0];

    if (firstEntry.isIntersecting && hasMore) {
      fetchMoreTimelines();
      console.log(firstEntry)
    }
  }

  useEffect(() => {
    console.log('helloo')
    const observer = new IntersectionObserver(onIntersection);
    console.log(observer)
    if (observer && elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);
  

  async function fetchMoreTimelines() {
    try {
      setLoading(true);
    const response = await fetch(
      `http://localhost:8072/time-line?limit=10&skip=${page * 2}`
    );
    const data = await response.json();
    console.log(data);

    if (data.length == 0) {
      setLoading(false);
      setHasMore(false);
    } else {
      setTimeout(() => {
        setTimeline((prevTimeline) => [...prevTimeline, ...data]);
        setPage((prevPage) => prevPage + 1);
        setLoading(false);
      }, 3000);
    }
    } catch (error) {
      console.log(error);
    }
  }

 
  return (
    <div className='flex flex-col gap-2 w-full max-w-[550px] ' ref={elementRef}>
        {
          timeline?.map((Item,index)=>{
            return (
              <NewsCard
              key={index}
              image={Item.image}
              newContent={Item.description}
              timestamp={Item.time}
              id={Item.id}
              comanyName={Item?.party?.branch[0]?.branchName}
              />
           )
          })
        }
    </div>
  )
}
