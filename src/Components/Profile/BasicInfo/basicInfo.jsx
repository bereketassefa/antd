import React from 'react'
import { Collapse } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsLeftRight, faBuilding, faCalendarAlt, faCode, faContactBook, faGlobe, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';

export default function BasicInfo({data}) {
    const formattedDate = data?.dataParty?.party[0]?.party?.CompanyFounded ? format(new Date(data?.dataParty?.party[0]?.party?.CompanyFounded), 'MMM yyyy') : "";
// console.log(data)
const Location =  data?.dataParty?.party[0]?.branch[0]?.address?.country
const City =  data?.dataParty?.party[0]?.branch[0]?.address?.city
const phone =  data?.dataParty?.party[0]?.branch[0]?.address?.phone
const Website =  data?.dataParty?.party[0]?.party?.website
    return (
    <Collapse
      defaultActiveKey={'1'}
      className='dark:bg-[#1b1f23] w-full bg-violet-200 basicInfo'
      items={[
        {
          key: '1',
          label: (<p className='dark:text-white' >Basic Info</p>),
          children: (
            <div className='' >
                <ul className='flex flex-col gap-2'>
                    <li className='flex items-center justify-between w-full'>
                        <div>
                            <h1 className='font-bold text-smallP P'>Company Name</h1>
                            <p>{data?.account[0]?.party} </p>
                        </div>
                        <FontAwesomeIcon icon={faBuilding} className='text-primary text-smallT'  />
                    </li>
                    {/* <li className='flex items-center justify-between w-full'>
                        <div>
                            <h1 className='font-bold text-smallP '>CEP</h1>
                            <p>Dano</p>
                        </div>
                        <FontAwesomeIcon icon={faUser} className='text-primary text-smallT' />
                    </li> */}
                    <li className='flex items-center justify-between w-full'>
                        <div>
                            <h1 className='font-bold text-smallP '>LoggedIn User</h1>
                            <p>{data?.account[0]?.Fname}</p>
                        </div>
                        <FontAwesomeIcon icon={faContactBook} className='text-primary text-smallT'  />
                    </li>
                    <li className='flex items-center justify-between w-full'>
                        <div>
                            <h1 className='font-bold text-smallP '>Website</h1>
                            <p className='text-primary text-smallP md:text-midP'>{Website}</p>
                        </div>
                        <FontAwesomeIcon icon={faGlobe}   className='text-primary text-smallT'  />
                    </li>
                    <li className='flex items-center justify-between w-full'>
                        <div>
                            <h1 className='font-bold text-smallP '>Company Phone Number</h1>
                            <p className='text-primary text-smallP md:text-midP'>{phone}</p>
                        </div>
                        <FontAwesomeIcon icon={faPhone} className='text-primary text-smallT' />
                    </li>
                    {/* <li className='flex items-center justify-between w-full'>
                        <div>
                            <h1 className='font-bold text-smallP '>Sales Phone Number</h1>
                            <p className='text-primary text-smallP md:text-midP'>{}</p>
                            <p className='text-primary text-smallP md:text-midP'>{}</p>
                        </div>
                        <FontAwesomeIcon icon={faPhone} className='text-primary text-smallT' />
                    </li> */}
                    <li className='flex items-center justify-between w-full'>
                        <div>
                            <h1 className='font-bold text-smallP '>Location</h1>
                            <p>{Location}</p>
                        </div>
                    </li>
                    <li className='flex items-center justify-between w-full'>
                        <div>
                            <h1 className='font-bold text-smallP '>Founded</h1>
                            <p>{formattedDate}</p>
                        </div>
                        <FontAwesomeIcon icon={faCalendarAlt}   className='text-primary text-smallT'/>
                    </li>
                    <li className='flex items-center justify-between w-full'>
                         <div>
                             <h1 className='font-bold text-smallP '>City</h1>
                             <p>{City}</p>
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
