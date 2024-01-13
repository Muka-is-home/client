/**
 * It's a function that returns a div with a bunch of other divs and spans inside it
 * @returns A React component
 */
import Link from 'next/link';
import React, { useState } from 'react';
import ContentLoader from 'react-content-loader';
import Img from '../../../utils/BackgroundImageRatio';

const PropertyBoxFour = ({ data, type }) => {
  const [load, setLoad] = useState(true);
  const [show, setShow] = useState(false);
  return (
    <>
      {!load ? (
        <>
          <div className='property-box'>
            <div className='agent-image'>
              <Img src={data?.image || 'https://placehold.co/600x400?text=Image+Not+Available'} className='bg-img' alt={data?.name} />
              {data?.featured && <span className='label label-shadow'>FEATURED</span>}
            </div>
            <div className='agent-content'>
              <h3>{data?.name}</h3>
              <h4 style={{fontSize: '16px', marginBottom: '1em'}}>{data?.company}</h4>

              <ul className='agent-contact'>
                <li>
                  <i className='fas fa-envelope' style={{fontSize: '16px'}}></i>
                  <span className='character'>{data?.email === show ? data?.email : data?.email.slice(0, 0) + '*****'}</span>
                  <span
                    className='label label-light label-flat'
                    onClick={() => {
                      setShow(data?.email);
                      data?.email === show && setShow();
                    }}
                  >
                    {show === data?.email ? 'hide' : 'show'}
                  </span>
                </li>
                <li>
                <i class="fas fa-map-pin" style={{fontSize: '16px'}}></i>
                  {data.company_address}
                </li>
              </ul>
              <Link style={{fontSize: '18px', padding: '5px'}} href={`/pro/${type}/${data?.id}`}>
                View profile <i className='fas fa-arrow-right'></i>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <ContentLoader className='skeleton-svg'>
          {setTimeout(() => {
            setLoad(false);
          }, 2000)}
          <rect className='skeleton-img' />
          <rect className='skeleton-c1' />
          <rect className='skeleton-c2' />
          <rect className='skeleton-c3' />
        </ContentLoader>
      )}
    </>
  );
};

export default PropertyBoxFour;
