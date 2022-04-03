import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyledComponent = createGlobalStyle`
  * {
    ${reset}
    font-family: 'Noto Sans KR', sans-serif;
    box-sizing: border-box;
  }

  button {
    border: none;
    background-color: inherit;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    line-height: unset;
  }
`;

export const a11yHidden = css`
  overflow: hidden;
  position: absolute;
  clip: rect(0, 0, 0, 0);
  clip-path: circle(0);
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
`;
