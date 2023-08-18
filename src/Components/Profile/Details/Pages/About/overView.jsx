import { faPencil, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Collapse } from 'antd';
export default function OverView() {
  return (
    <>
     <Collapse
        className='w-full bg-zinc-50'
        defaultActiveKey={'1'}
        items={[
            {
            key: '1',
            label: (
                <div className='w-full flex items-center justify-between'>
                     <h1 className='font-bold text-smallP'>Overview</h1>
                    <div className='flex gap-2 items-center'>
                        <FontAwesomeIcon icon={faPencil}   className='text-secondary text-smallT cursor-pointer'/>
                        <FontAwesomeIcon icon={faPlus} className='text-secondary text-smallT cursor-pointer'/>
                    </div>
                </div>
            ),
            children: (
              <div className='w-full'>
                <p className='text-smallP'>
                Lorem ipsum dolor sit amet consectetur. Sollicitudin 
                ullamcorper a null libero faucibus hendrerit 
                consequat. Consectetur risus in nibh etiam.
                </p>
          </div>
            ),
            },
        ]}
    />
    </>
    // <div className='flex flex-col w-full gap-2 bg-white p-2 '>
    //     <div className='w-full flex items-center justify-between'>
    //         <h1 className='font-bold text-smallP'>Overview</h1>
    //         <div className='flex gap-2 items-center'>
    //             <FontAwesomeIcon icon={faPencil}   className='text-secondary text-smallT cursor-pointer'/>
    //             <FontAwesomeIcon icon={faPlus} className='text-secondary text-smallT cursor-pointer'/>
    //         </div>
    //     </div>
        // <div className='w-full'>
        //     <p className='text-smallP'>
        //     Lorem ipsum dolor sit amet consectetur. Sollicitudin 
        //     ullamcorper a null libero faucibus hendrerit 
        //     consequat. Consectetur risus in nibh etiam.
        //     </p>
        // </div>
    // </div>
  )
}
