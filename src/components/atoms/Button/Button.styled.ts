/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from 'styled-components/macro';

interface IButton {
  primary: boolean;
}

export const Button = styled.button`
  padding: 6px 12px;
  margin: 0 8px 0 0;
  border-radius: 4px;
  border: 1px solid
    ${(props: IButton) =>
      props.primary ? ({ theme }) => theme.color.white : ({ theme }) => theme.color.primaryBlue};
  background: ${(props: IButton) =>
    props.primary ? ({ theme }) => theme.color.primaryBlue : ({ theme }) => theme.color.white};
  color: ${(props: IButton) =>
    props.primary ? ({ theme }) => theme.color.white : ({ theme }) => theme.color.primaryBlue};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.semiStrong};
  line-height: normal;
  cursor: pointer;
`;
