import { faPencil, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse } from 'antd';
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
export default function OverView() {
  const { id } = useParams();  // Destructure id from useParams
  const [cookies] = useCookies(['user']);
  const isUserIdEqual = cookies.user._id === id;
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
                     {
                      isUserIdEqual && (
<div className='flex gap-2 items-center'>
                        <FontAwesomeIcon icon={faPencil}   className='text-secondary text-smallT cursor-pointer'/>
                        <FontAwesomeIcon icon={faPlus} className='text-secondary text-smallT cursor-pointer'/>
                    </div>
                      )
                     }
                    
                </div>
            ),
            children: (
              <div className='w-full'>
                <p className='text-smallP'>
                  Overview
                </p>
              </div>
            ),
          },
        ]}
      />
    </>
  );
}
