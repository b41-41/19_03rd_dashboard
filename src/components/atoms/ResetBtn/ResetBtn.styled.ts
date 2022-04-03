import styled from 'styled-components/macro';

export const ResetWrapper = styled.button`
  margin: auto 3px;
  display: flex;
  cursor: pointer;
  ${props => props.theme.breakpoints.tablet} {
    margin: auto 16px;
  }

  //불필요한 요소 초기화
  border: none;
  background-color: inherit;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  line-height: unset; //
`;

export const ResetTitle = styled.div`
  margin: auto;
  white-space: nowrap;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.color.primaryBlue};
  ${props => props.theme.breakpoints.tablet} {
    margin: 1px 12px;
  }
`;
