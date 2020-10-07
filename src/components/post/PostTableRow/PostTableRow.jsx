import React, { useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

import './style.scss';

const socialNetworkIcons = {
  facebook: ['fab', 'facebook-f'],
  twitter: ['fab', 'twitter'],
  instagram: ['fab', 'instagram'],
  share: 'share-alt'
};
const socialNetworkNames = ['facebook', 'twitter', 'instagram'];

const PostTableRow = ({ data }) => {
  const headers = useMemo(() => [
    {
      key: 'id',
    },
    {
      key: 'property',
      renderer: (item) => <div>{item ? item.name : 'Unknown'}</div>
    },
    {
      key: 'user',
      renderer: (item) => (
        <>
          <div>{item ? item.name : 'Unknown'}</div>
          <div>
            {item
              ? <img src={item.profile_picture} alt="user_img" />
              : <div>no image</div>
            }
          </div>
        </>
      )
    },
    {
      key: 'social_network',
      renderer: (name) => {
        let icon = 'share-alt';
        if (name) {
          const socialNetwork = socialNetworkNames.find(sn => name.includes(sn));
          icon = (socialNetwork && socialNetworkIcons[socialNetwork]) || 'share-alt'
        }

        return (
          <><FontAwesomeIcon icon={icon} />sdf</>
        );
      }
    },
    {
      key: 'post_date',
      renderer: (date) => <>{moment(date).format('Mo dd yyyy')}</>
    },
    {
      key: 'post_media',
      renderer: (image) => (
        <>
          {image ? <img src={image} alt="post_img" /> : <div>no image</div>}
        </>
      )
    },
    {
      key: 'post_content',
      renderer: (content) => <div dangerouslySetInnerHTML={{__html: content}} />
    }
  ], []);

  return (
    <div className="post-table__row">
      {headers.map(({ key, renderer }) => (
        <div key={key} className={`post-table__row-cell--${key}`}>
          {typeof renderer === 'function' ? renderer(data[key]) : data[key]}
        </div>
      ))}
    </div>
  );
};

export default PostTableRow;
