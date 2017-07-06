import { css } from 'styled-components';

const sizes = {
  large: 1200,
  desktop: 992,
  tablet: 768,
};

const media = Object.keys(sizes).reduce((accumulator, label) => {
  const acc = accumulator;
  const emSize = sizes[label] / 16;
  acc[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export default media;
