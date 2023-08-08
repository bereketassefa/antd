import React from 'react'
import verified from '../../../../assets/logo/verified.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faPencil, faShare, faShareNodes, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import profileHolder from '../../../../assets/img/profileHolder.png'
import Button from '../../../../Fields/Button/button'

export default function CompanyInfo() {
    return (
        <>
            <div className='w-full flex flex-col gap-2  mt-[-5rem]  md:mt-[-10rem]  ' >
                <div className='w-full flex items-end justify-between'>
                    <div className='bg-white w-fit p-0  ml-[1rem] md:ml-[3rem]  mt-[2rem] md:mt-[6rem]  w-[100px] md:w-[130px] aspect-square  flex justify-end'>
                        <div className='w-full' >
                            <img src={profileHolder} alt="" />
                        </div>
                        <div className='bg-white p-[3px] rounded-full absolute mt-[-0.5rem] mr-[-0.5rem]'>
                            <div className='bg-secondary w-fit p-2 rounded-full flex cursor-pointer' >
                                <FontAwesomeIcon icon={faPencil} className='text-white text-midP' />
                            </div>
                        </div>
                    </div>
                    <div className=' mr-[1rem]'>
                        <Button 
                            text={'Edit Profile'}
                            filled={false}
                            color={'secondary'}
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-4 w-full  md:ml-[3rem] max-w-[600px]   ' >
                    <div className='w-full flex flex-col gap-1'>
                        <h1 className='flex gap-2 items-center text-smallT font-bold' >Company Name  <img src={verified} alt="" />   </h1>

                        <p className='w-full text-smallP'>Lorem ipsum dolor sit amet csdf asdf adsf sd asd fasdf  asdf onsectetur.sdfadsfadsfadfas dfa dfa da f df adf df adf adf a adf adf sdfa df am dolor sit amet</p>

                        <div className='flex gap-4 items-center'>
                            <span className='flex gap-2 items-center'>
                                <h1 className='font-bold text-smallP'>500K</h1>
                                <p className='text-smallP'>Relations</p>
                            </span>
                            <span className='flex gap-2 items-center'>
                                <h1 className='font-bold text-smallP'>2.4K</h1>
                                <p className='text-smallP'>Views</p>
                            </span>
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-start gap-2 flex-wrap'>
                        <Button 
                            text='Connect'
                            filled={true}
                            color={'secondary'}
                            icon={<FontAwesomeIcon icon={faUserPlus} />}
                            iconPossition='left'
                        />
                        <Button 
                            text={'Message'}
                            filled={false}
                            color={'secondary'}
                            icon={ <FontAwesomeIcon icon={faMessage} />}
                            iconPossition='left'
                        />
                        <Button
                            text={"Invite"}
                            filled={false}
                            color={'primary'} 
                            icon={ <FontAwesomeIcon icon={faShareNodes} />}
                            iconPossition={'left'}

                        />
                    </div>
                </div>
            </div>



        </>
    )
}
