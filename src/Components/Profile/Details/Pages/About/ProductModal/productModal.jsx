import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal } from 'antd'
import React from 'react'
import ProductCard from '../ProductCard/productCard'
import addisLogoS from '../../../../../../assets/logo/addisLogoS.png'
export default function ProductModal({isVisisble , onClose}) {
  return (
    <Modal
        open={isVisisble}  
        onCancel={onClose}
        footer={[]}
        style={{
            top: 80,
            borderRadius: 0
           
        }}
        width={700}
        
        >
        <div className='w-full flex flex-col gap-4 mt-6' >
           <div className='w-full flex items-center justify-between border-b border-b-1 border-b-gray-300 py-4'>
                <h1 className='text-smallT font-bold'>Products</h1>
                <FontAwesomeIcon icon={faPlus} className='text-secondary text-smallT' />
           </div>
           <div className='w-full flex flex-col gap-2'>
           <ProductCard 
                        logo={addisLogoS}
                        productName={'ERP'}
                        size={'large'}
                     

                     />
                      <ProductCard 
                        logo={addisLogoS}
                        productName={'POS'}
                        size={'large'}
                        
                     />
                     <ProductCard 
                        logo={addisLogoS}
                        productName={'M-POS'}
                        size={'large'}
                        
                     />
                     <ProductCard 
                        logo={addisLogoS}
                        productName={'Exchange'}
                        size={'large'}
                        
                     />
                       <ProductCard 
                        logo={addisLogoS}
                        productName={'M-POS'}
                        size={'large'}
                        
                     />
                     <ProductCard 
                        logo={addisLogoS}
                        productName={'Exchange'}
                        size={'large'}
                        
                     />
           </div>
           
        </div>
        
        
      </Modal>
  )
}
