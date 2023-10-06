import React from 'react'
const ProductCard =( {image, productName,place , price })=> {
  return (
    <div className='flex flex-col items-center gap-2 border-2 rounded-md  '>
      <div className=''>
        <img src={image} alt="Product photo"  className='object-cover w-[200px] h-[120px]'/>
      </div>
      <h1>{productName}</h1>
      <h2>{place}</h2>
      <p>{price}</p>
    </div>
  );
}

export default ProductCard



