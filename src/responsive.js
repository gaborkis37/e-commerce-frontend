import { css } from "styled-components";

export const min = (props) => {
  return css`
    @media only screen and (max-width: 340px) {
      ${props}
    }
  `;
};

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 675px) {
      ${props}
    }
  `;
};

export const px980 = (props) => {
  return css`
    @media only screen and (max-width: 980px) {
      ${props}
    }
  `;
};
