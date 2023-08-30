import React, { useState } from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, Outlet, useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie'




export default function Details() {
  const [cookies, setCookie, removeCookie] = useCookies(['User']);
    const [current, setCurrent] = useState('about');

    const {id} =useParams()
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  const items = [
    {
      label: (<Link to={`/feed/profile/${id}`}><p>About</p></Link>),
      key: 'about',
    },
    {
      label: (<Link to={`/feed/profile/${id}/post`} ><p>Post</p></Link>),
      key: 'post',
    },
    // {
    //   label: (
    //     <Link to={`/feed/profile/${id}/demand-products`} ><p>Demand Products</p></Link>
    //   ),
    //   key: 'demProducts',
    // },
    // {
    //     label: (
    //       <Link to={`/feed/profile/${id}/relations`} > <p>Relations</p></Link>
    //     ),
    //     key: 'relations',
    // },
    // {
    //     label: (
    //       <Link to={`/feed/profile/${cookies.user._id}/bids`}> <p>Bids</p></Link>
    //     ),
    //     key: 'bids',
    //   },
  ];
  return (
    <div className='w-full'>
        <div className='w-full' >
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className='w-full bg-violet-200' />
        </div>
        <Outlet />
    </div>
  )
}
