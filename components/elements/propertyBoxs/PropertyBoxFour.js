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
  const [show, setShow] = useState();
  return (
    <>
      {!load ? (
        <Link href={`/pro/${type}/${data?.id}`}><div className='property-box'>
          <div className='agent-image'>
            <div>
              <Img src={data?.image || ''} className='bg-img' alt='' />
              {data?.featured && <span className='label label-shadow'>FEATURED</span>}
            </div>
          </div>
          <div className='agent-content'>
            <h3>
              {data?.name}
            </h3>
            <ul className='agent-contact'>
              <li>
                <i className='fas fa-envelope'></i>
                <span className='character'>{data?.email === show ? data?.email : data?.email.slice(0, 5) + '*****'}</span>
                <span
                  className='label label-light label-flat'
                  onClick={() => {
                    setShow(data?.email);
                    data?.email === show && setShow();
                  }}
                >
                  {show === data?.email ? 'show' : 'hide'}
                </span>
              </li>
            </ul>
            <Link href={`/pro/${type}/${data?.id}`}>
              View profile <i className='fas fa-arrow-right'></i>
            </Link>
          </div>
        </div></Link>
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
