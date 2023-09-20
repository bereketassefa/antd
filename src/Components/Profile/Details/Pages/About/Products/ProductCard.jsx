import React from 'react'
const ProductCard =( {image, productName,place , price })=> {
  return (
    <div className='flex flex-col items-center gap-2 border-2 rounded-md  '>
      <div>
        <img src={image} alt="Product photo" />
      </div>
      <h1>{productName}</h1>
      <h2>{place}</h2>
      <p>{price}</p>
    </div>
  );
}

export default ProductCard



