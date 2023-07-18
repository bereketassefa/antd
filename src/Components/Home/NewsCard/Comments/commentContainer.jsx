import React from 'react'
import Avatar from '../../../../Fields/Avatar/avatar'
import profilePlaceHolder from '../../../../assets/logo/newCompanyPlaceHolder.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faSmile } from '@fortawesome/free-regular-svg-icons'
import CommentCard from './commentCard'
import comment1 from '../../../../assets/logo/comment1.png'
import comment2 from '../../../../assets/logo/comment2.png'


export default function CommentContainer({id , isOpen }) {

    const data = [
        {
            img: comment1,
            companyName: "AddisPay",
            time: '1day ago',
            comment: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin ullamcor per a null libero faucibus hendrerit consequat. Consectetur risus in ni.',
            likes: 12,
            repays: [
                {
                    img: comment2,
                    companyName: '',
                    time: '12hrs ago',
                    comment: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin ullamcor per a null libero faucibus hendrerit consequat. Consectetur risus in ni.',
                    likes: 14,
                },
            ]
        },
        {
            img: comment1,
            companyName: "AddisPay",
            time: '1day ago',
            comment: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin ullamcor per a null libero faucibus hendrerit consequat. Consectetur risus in ni.',
            likes: 12,
            repays: [
                {
                    img: comment2,
                    companyName: '',
                    time: '12hrs ago',
                    comment: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin ullamcor per a null libero faucibus hendrerit consequat. Consectetur risus in ni.',
                    likes: 14
                },
                {
                    img: comment2,
                    companyName: '',
                    time: '12hrs ago',
                    comment: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin ullamcor per a null libero faucibus hendrerit consequat. Consectetur risus in ni.',
                    likes: 14
                }
            ]
        }
    ]

  return (
    <div className={isOpen? 'w-full flex flex-col gap-4 p-2' : 'w-full flex flex-col gap-4 p-2 hidden'}>
        <div className='flex gap-2 items-center'>
            <div className='flex items-center justify-center w-fit'>
                <Avatar 
                    img={profilePlaceHolder}
                />
            </div>
            <div className='flex flex-col items-end justify-center border border-primary w-full h-[45px] rounded-[5px]  ' >
                 <input type="text" 
                    className='flex w-full h-full outline-none pl-3 text-smallP md:text-midP lg:text-largeP'
                    placeholder='Add a comment ...'
                 /> 
                 <div className='absolute pr-4  flex gap-2 '>
                    <FontAwesomeIcon icon={faSmile}  className='text-largeP md:smallT text-primary' />
                    <FontAwesomeIcon icon={faImage}className='text-largeP md:smallT text-primary' />
                 </div>
            </div>
        </div>

        <div className='w-full flex items-center justify-start'>
            <div className='flex p-2 bg-lightBg  '>
                <select className='outline-none bg-transparent  text-smallP md:text-midP lg:text-largeP'>
                    <option  > <p className=' text-smallP md:text-midP lg:text-largeP'>Most Recent</p></option>
                    <option value=""> <p className=' text-smallP md:text-midP lg:text-largeP'>Yesterday</p></option>
                </select>
            </div>
        </div>

        <div className='w-full flex flex-col gap-4 '>
            {
                data.map((items)=>{
                    return(
                        <>
                        <CommentCard 
                            img={items.img}
                            companyName={items.companyName}
                            time={items.time}
                            comment={items.comment}
                            likes={items.likes}
                            replays={items.repays}            
                        />
                        </>
                    )
                })
            }
            <div className='w-full flex items-center justify-center'>
                <p className='text-primary font-bold  text-smallP md:text-midP lg:text-largePunderline underline-offset-2 cursor-pointer'>
                    See More
                    <div></div>
                </p>
            </div>
        </div>
    </div>
  )
}
