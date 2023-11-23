import { useEffect, useRef, useState } from "react";
import oopsno from "../../../assets/image/oops-no.png";
import NewsCard from "./newsCard";
import { message } from "antd";
import axios from "axios";
import BottomNav from "../../../Layouts/Primary/BottomNav";
import { useScrollPosition } from "./useScrollPosition";
import InfiniteScroll from "react-infinite-scroll-component";
import ScrollToTop from "./ScrollToTop";

export default function NewsHolder() {
  const [loading, setLoading] = useState(true);
  const [timeline, setTimeline] = useState([]);
  const [error, setError] = useState(null);
  const elementRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [, forceUpdate] = useState();
  const [hasMores, setHasMores] = useState(true)

  

  // const scrollPosition = useScrollPosition()

  // window.addEventListener('scroll', ()=>{
  //   console.log(scrollPosition,"........");
  // })

  useEffect(() => {
    forceUpdate({});
  }, [timeline]);
  const headers = {
    "x-auth-token": `${import.meta.env.VITE_TOKEN_TIMELINE}`,
  };

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const url = `${import.meta.env.VITE_WITH_OUT_SSE_GET_TIMELINE}`;
        const response = await axios.get(url, { headers: headers });

        const data = response.data;

        setTimeline(response.data.slice(0, 10));
        //  console.log(data);
      } catch (err) {
        const url = `${import.meta.env.VITE_WITH_OUT_SSE_GET_TIMELINE}`;
        const response = await axios.get(url, { headers: headers });
        setTimeline(response.data.slice(0, 10));
        console.warn("Error fetching initial data");
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  const deletePostHandler =(postId)=>{
    // console.log(postId,"deleted ...")

    // delete from  db
    setTimeline((prevPost)=>{
      return prevPost.filter((post)=>post.id != postId)
    })
  }
  
        const fetchData = async () => {
          try {
            const url = `${import.meta.env.VITE_WITH_OUT_SSE_GET_TIMELINE}`;
            const response = await axios.get(url, { headers: headers });

            const data = response.data;

            setTimeline(prevTimeline => [...prevTimeline, ...data.slice(prevTimeline.length, prevTimeline.length + 10)]);
          } catch (err) {
            console.warn("Error fetching more data");
            setHasMores(false)
          } finally {
            setLoading(false);
          }
        };

  





  useEffect(() => {
    const eventSource = new EventSource(
      `${import.meta.env.VITE_GET_ALL_POST_V2}`
    );

    eventSource.onmessage = (event) => {
      try {
        const newData = JSON.parse(event.data);
        // Append the new data to the existing timeline
        setTimeline((prevTimeline) => [newData, ...prevTimeline]);
      } catch (err) {
        console.error("Error parsing SSE data:", err);
      }
    };

    eventSource.onerror = (err) => {
      console.error("SSE Error:", err);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">{error}</div>
    );
  }

  const NewsCardSkeleton = () => (
    <div className="dark:bg-[#1b1f23] w-full p-4 rounded shadow bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="flex flex-col gap-1">
            <div className="w-24 h-4 rounded bg-gray-200 animate-pulse"></div>
            <div className="w-16 h-4 rounded bg-gray-200 animate-pulse"></div>
          </div>
        </div>
        <div className="w-6 h-6 rounded bg-gray-200 animate-pulse"></div>
      </div>

      <div className="flex flex-col mt-4">
        <div className="w-full h-4 rounded bg-gray-200 animate-bounce"></div>
        <div className="w-full h-32 mt-4 rounded bg-gray-200 animate-pulse"></div>
      </div>

      <div className="flex gap-4 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-gray-200 animate-pulse"></div>
          <div className="w-8 h-4 rounded bg-gray-200 animate-bounce"></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-gray-200 animate-pulse"></div>
          <div className="w-8 h-4 rounded bg-gray-200 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
  // console.log(window.screenY,"...,,,");
  
  return (
    <div className="flex flex-col gap-2 w-full max-w-[550px] relative scrollbar-hide ">
      <InfiniteScroll 
      dataLength={timeline.length}
      next={fetchData}
    hasMore={hasMores}
  loader={<div class="flex space-x-2 justify-center align-middle">
  <div class="w-4 h-4 bg-black rounded-full animate-bounce"></div>
  <div class="w-4 h-4 bg-black rounded-full animate-bounce"></div>
  <div class="w-4 h-4 bg-black rounded-full animate-bounce"></div>
</div>
}
  
  endMessage={
    <p style={{ textAlign: 'center', padding:'30px', width:'full' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
  height={window.innerWidth< 660 ?'':''}
  // scrollThreshold={60}
  // below props only if you need pull down functionality
  refreshFunction={fetchData}
  pullDownToRefresh
  pullDownToRefreshThreshold={50}
  pullDownToRefreshContent={
    <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
  }
  releaseToRefreshContent={
    <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
  }

    >
      <>
      <div className="" ></div>

      {loading
        ? Array.from({ length: 5 }).map((_, index) => (
            <NewsCardSkeleton key={index} />
          ))
        : Array.isArray(timeline)
        ? timeline.map((item, index) => (
            <NewsCard
              key={index?.id}
              image={item?.images}
              newContent={item?.description}
              profilePic={item?.account?.profilePicture}
              timestamp={item?.time}
              id={item?.id}
              like={item?.like}
              companyName={item?.account?.party}
              account_id={item?.account?._id}
              Uid={item?.uid}
              onDeletePost ={deletePostHandler}
              

            />
          ))
        : null}
      <div ref={elementRef}></div>
      {/* <BottomNav/> */}
      </>
      </InfiniteScroll>
      <div className="lg:flex hidden">
        <ScrollToTop />
      </div>
      

    </div>
  );
}
