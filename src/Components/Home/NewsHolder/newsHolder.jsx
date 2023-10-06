import { useEffect, useRef, useState } from "react";
import NewsCard from "../NewsCard/newsCard";
import oopsno from "../../../assets/image/oops-no.png";
// import { ErrorContext } from '../../Error/ErrorContext';

import { message } from "antd";
import axios from "axios";
// import { useCookies } from 'react-cookie';
export default function NewsHolder() {
  // const { displayError } = useContext(ErrorContext);
  const [loading, setLoading] = useState(false);
  const [timeline, setTimeline] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  // const [page, setPage] = useState(1); // Start from page 1
  const elementRef = useRef(null);
  const [error] = useState(null);
  // const [cookies] = useCookies(['user'])

  // useEffect(() => {
  //   const observer = new IntersectionObserver(onIntersection, {
  //     threshold: 1.0
  //   });

  //   if (elementRef.current) {
  //     observer.observe(elementRef.current);

  //   }

  //   return () => observer.disconnect();
  // }, [timeline, hasMore]);

  useEffect(() => {
    async function fetchMoreTimelines() {
      try {
        // loadingMsgId = message.loading('Loading news...', 0);

        const Url = `https://timeline.qa.addissystems.et/time-line`;
        const response = await axios.get(Url);

        if (response.status === 200) {
          setTimeline((prevTimeline) => [...prevTimeline, ...response.data]);
        }

        setLoading(false);
        setHasMore(false);
      } catch (error) {
        setLoading(false);
        setHasMore(false);

        if (error.message === "Failed to fetch") {
          setLoading(true);
          console.warn("Network Error: Failed to fetch data.");
        } else {
          console.warn("Error fetching data.");
          setLoading(true);
        }
      }
    }
    fetchMoreTimelines();
  });

  // useEffect(() => {
  //   setLoading(true);

  //   const eventSource = new EventSource(
  //     `${import.meta.env.VITE_GET_ALL_POST_V2}`
  //   );

  //   eventSource.onmessage = (event) => {
  //     setLoading(false);
  //     const eventData = JSON.parse(event.data);
  //     console.log(eventData);
  //     if (eventData.length === 0) {
  //       // message.error('Data is empty');
  //     }

  //     setTimeline(eventData);
  //   };

  //   eventSource.onerror = (error) => {
  //     console.error("SSE Error:", error);
  //     setLoading(false);
  //     eventSource.close();
  //     // Retry logic: wait for 5 seconds and then try to reconnect.
  //     setTimeout(() => {
  //       // Your reconnection logic here...
  //     }, 5000);
  //   };

  //   return () => {
  //     eventSource.close();
  //   };
  // }, []);

  function onIntersection(entries) {
    if (entries[0].isIntersecting && hasMore) {
      // fetchMoreTimelines();
    }
  }
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

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">{error}</div>
    );
  }
  console.log("Rendering with timeline:", timeline);

  return (
    <div className="flex flex-col gap-2 w-full max-w-[550px]">
      {loading
        ? // Show 5 skeleton cards while loading
          Array.from({ length: 5 }).map((_, index) => (
            <NewsCardSkeleton key={index} />
          ))
        : Array.isArray(timeline)
        ? timeline.map((item, index) => (
            <NewsCard
              key={index}
              image={
                Array.isArray(item?.images)
                  ? item?.images
                  : item?.images?.split(",")
              }
              index={index}
              newContent={item?.description}
              profilePic={item?.account?.profilePicture}
              timestamp={item?.time}
              id={item?.id}
              like={item?.like}
              companyName={item?.party?.party[0]?.party?.businessname}
              account_id={item?.account?._id}
              Uid={item?.uid}
            />
          ))
        : null}
      <div ref={elementRef}></div>
    </div>
  );
}
