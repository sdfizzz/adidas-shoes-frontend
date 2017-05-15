/* eslint-disable global-require */
import React from 'react';
import classNames from 'classnames';

import './styles.css';

export default props => (
  <div
    className={classNames('thumbnail-card', {
      'card-selected': props.isSelected,
    })}
  >
    <button>
      <img
        src={require('./img.jpg')}
        srcSet={`${require('./img@2x.jpg')} 2x, ${require('./img@3x.jpg')} 3x`}
        alt=""
      />
    </button>
  </div>
);
