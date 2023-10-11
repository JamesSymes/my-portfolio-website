// mixines.jsx
import { css } from 'styled-components'; 

const button = css;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css` 
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

};

export default mixins;