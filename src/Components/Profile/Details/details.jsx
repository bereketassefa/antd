import React, { useState } from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';


const items = [
    {
      label: (<Link to={'/profile'}><p>About</p></Link>),
      key: 'about',
    },
    {
      label: (<Link to={'/profile/post'} ><p>Post</p></Link>),
      key: 'post',
    },
    {
      label: (
        <Link to={'/profile/demand-products'} ><p>Demand Products</p></Link>
      ),
      key: 'demProducts',
    },
    {
        label: (
          <Link to={'/profile/relations'} > <p>Relations</p></Link>
        ),
        key: 'relations',
    },
    {
        label: (
          <Link to={'/profile/bids'}> <p>Bids</p></Link>
        ),
        key: 'bids',
      },
  ];

export default function Details() {

    const [current, setCurrent] = useState('about');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <div className='w-full'>
        <div className='w-full' >
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className='w-full bg-violet-200' />
        </div>
        <Outlet />
    </div>
  )
}
