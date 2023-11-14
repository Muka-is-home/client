import React from 'react';

const SocialAccounts = ({ facebookUrl = false, instagramUrl = false, tiktokUrl = false }) => {
  return (
    <ul>
      {instagramUrl && (
        <li>
          <a target='_blank' href={instagramUrl}>
            <img src='/assets/images/about/icon-2.png' alt='' />
          </a>
        </li>
      )}

      {facebookUrl && (
        <li>
          <a target='_blank' href={facebookUrl}>
            <img src='/assets/images/about/icon-3.png' alt='' />
          </a>
        </li>
      )}
      {tiktokUrl && (
        <li>
          <a target='_blank' href={tiktokUrl}>
            <img src='/assets/images/about/icon-3.png' alt='' />
          </a>
        </li>
      )}
    </ul>
  );
};

export default SocialAccounts;
