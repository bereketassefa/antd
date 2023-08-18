import React, { useState } from 'react'
import { Collapse } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faPlus } from '@fortawesome/free-solid-svg-icons';
import ProductCard from './ProductCard/productCard';
import addisLogoS from '../../../../../assets/logo/addisLogoS.png'
import ProductModal from './ProductModal/productModal';
export default function Products() {
    const [openProductModal , setOpenProductModal ] = useState(false)
    const handleProductModal = ()=>{
         setOpenProductModal(!openProductModal)
    }
  return (
     <>
     <Collapse
        className='w-full bg-zinc-50'
        items={[
            {
            key: '1',
            label: (
                <div className='w-full flex items-center justify-between'>
                      <h1 className='font-bold text-smallP'>Products</h1>
                    <div className='flex gap-2 items-center'>
                        <FontAwesomeIcon icon={faPencil}   className='text-secondary text-smallT cursor-pointer'/>
                        <FontAwesomeIcon icon={faPlus} className='text-secondary text-smallT cursor-pointer'/>
                    </div>
                </div>
            ),
            children: (
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center justify-center gap-2'> 
                     <ProductCard 
                        logo={addisLogoS}
                        productName={'ERP'}
                        size={'small'}
                        onClick={handleProductModal}

                     />
                      <ProductCard 
                        logo={addisLogoS}
                        productName={'POS'}
                        size={'small'}
                        onClick={handleProductModal}
                     />
                     <ProductCard 
                        logo={addisLogoS}
                        productName={'M-POS'}
                        size={'small'}
                        onClick={handleProductModal}
                     />
                     <ProductCard 
                        logo={addisLogoS}
                        productName={'Exchange'}
                        size={'small'}
                        onClick={handleProductModal}
                     />
                       <ProductCard 
                        logo={addisLogoS}
                        productName={'M-POS'}
                        size={'small'}
                        onClick={handleProductModal}
                     />
                     <ProductCard 
                        logo={addisLogoS}
                        productName={'Exchange'}
                        size={'small'}
                        onClick={handleProductModal}
                     />

                </div>
            ),
            },
        ]}
    />
     <ProductModal isVisisble={openProductModal} onClose={handleProductModal}  />
     </>
 
  )
}
