import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { FlexWrapper } from '../../style/layout';

export const SearchWrap = styled(FlexWrapper)`
  max-width: 1440px;
  width: 100%;
  margin-top: 50px;
  box-sizing: border-box;
  align-content: center;
  svg:first-of-type {
    margin-right: 20px;
  }
`;
export const Input = styled.input`
  font-family: ${({ theme }) => theme.fontFamilyRegular};
  width: 100%;
  font-size: 20px;
  ${breakpoint('tablet')`
    font-size: 25px;
  `}
  ${breakpoint('desktop')`
    font-size: 30px;
  `}
  background: transparent;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.blue};
  padding: 7px 12px;
  color: white;
  border: transparent;
  border-radius: 5px;
  cursor: pointer;
  font-size: 13px;
  ${breakpoint('tablet')`
    font-size: 16px;
  `}
  ${breakpoint('desktop')`
    font-size: 20px;
  `}
`;

export const ResultsWrapper = styled(FlexWrapper)`
  font-size: 13px;
  ${breakpoint('tablet')`
    font-size: 16px;
  `}
  ${breakpoint('desktop')`
    font-size: 20px;
  `}
  font-weight: 700;
`;

export const Result = styled.div`
  margin-bottom: 20px;
  border-radius: 10px;
  &:hover {
    color: #fa1d13;
  }
  &:first-of-type {
    margin-top: 20px;
  }
`;

export const Link = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.red};
  }
`;

export const SuggestionWrapper = styled.div`
  width: 100%;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
  padding: 10px 20px;
  font-size: 10px;
  ${breakpoint('tablet')`
    font-size: 11px;
  `}
  ${breakpoint('desktop')`
    font-size: 13px;
  `}
`;
