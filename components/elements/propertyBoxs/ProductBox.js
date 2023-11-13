import React from 'react';
import ProductImg from '../../../utils/ProductBackgroundImageRatio';

const ProductBoxFour = ({ data }) => {
  return (
    <>
      <div className='property-box'>
        <div className='agent-image'>
          <div>
            <ProductImg src={data?.image || ''} className='bg-img' alt='' />
            {data?.sale && <span className='label label-shadow'>SALE</span>}
          </div>
        </div>
        <div className='agent-content'>
          <h3>{data?.name}</h3>
          <p>{data.price}</p>
          <p>{data.description}</p>
          <a target='_blank' href={data.link}>
            BUY NOW <i className='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductBoxFour;
