import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px;
  ${breakpoint('mobile', 'tablet')`
  `}
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  flex-wrap: ${({ wrap }) => wrap};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
`;

export const Title = styled.h2`
  background: ${({ theme }) => theme.yellow};
  width: fit-content;
  padding: 10px 20px;
`;
