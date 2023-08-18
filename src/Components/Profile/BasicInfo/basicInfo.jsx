import React from 'react'
import { Collapse } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsLeftRight, faBuilding, faCalendarAlt, faCode, faContactBook, faGlobe, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';


export default function BasicInfo() {
  return (
    <Collapse
      defaultActiveKey={'1'}
      className='w-full bg-violet-200 basicInfo'
      items={[
        {
          key: '1',
          label: (<p>Basic Info</p>),
          children: (
            <div className='' >
                <ul className='flex flex-col gap-2'>
                    <li className='flex items-center justify-between w-full'>
                        <div>
                            <h1 className='font-bold text-smallP P'>Company Name</h1>
                            <p>Aman PLC.</p>
                        </div>
                        <FontAwesomeIcon icon={faBuilding} className='text-primary text-smallT'  />
                    </li>
                    <li className='flex items-center justify-between w-full'>
                        <div>
                            <h1 className='font-bold text-smallP '>CEP</h1>
                            <p>Dano</p>
                        </div>
                        <FontAwesomeIcon icon={faUser} className='text-primary text-smallT' />
                    </li>
                    <li className='flex items-center justify-between w-full'>
                        <div>
                            <h1 className='font-bold text-smallP '>LoggedIn User</h1>
                            <p>Amanuel Wakshum</p>
                        </div>
                        <FontAwesomeIcon icon={faContactBook} className='text-primary text-smallT'  />
                    </li>
                    <li className='flex items-center justify-between w-full'>
                        <div>
                            <h1 className='font-bold text-smallP '>Website</h1>
                            <p className='text-primary text-smallP md:text-midP'>www.helloworld.com</p>
                        </div>
                        <FontAwesomeIcon icon={faGlobe}   className='text-primary text-smallT'  />
                    </li>
                    <li className='flex items-center justify-between w-full'>
                        <div>
                            <h1 className='font-bold text-smallP '>Company Phone Number</h1>
                            <p className='text-primary text-smallP md:text-midP'>0987776767</p>
                        </div>
                        <FontAwesomeIcon icon={faPhone} className='text-primary text-smallT' />
                    </li>
                    <li className='flex items-center justify-between w-full'>
                        <div>
                            <h1 className='font-bold text-smallP '>Sales Phone Number</h1>
                            <p className='text-primary text-smallP md:text-midP'>0932343454</p>
                            <p className='text-primary text-smallP md:text-midP'>0986575645</p>
                        </div>
                        <FontAwesomeIcon icon={faPhone} className='text-primary text-smallT' />
                    </li>
                    <li className='flex items-center justify-between w-full'>
                        <div>
                            <h1 className='font-bold text-smallP '>Location</h1>
                            <p>Addis Ababa , Ethiopia</p>
                        </div>
                    </li>
                    <li className='flex items-center justify-between w-full'>
                        <div>
                            <h1 className='font-bold text-smallP '>Founded</h1>
                            <p>Jul 2020</p>
                        </div>
                        <FontAwesomeIcon icon={faCalendarAlt}   className='text-primary text-smallT'/>
                    </li>
                    <li className='flex items-center justify-between w-full'>
                         <div>
                             <h1 className='font-bold text-smallP '>Relations</h1>
                             <p>501</p>
                         </div>
                         <FontAwesomeIcon icon={faArrowsLeftRight}  className='text-primary text-smallT' />
                    </li>
                </ul>
            </div>
          ),
        },
      ]}
    />
  )
}
