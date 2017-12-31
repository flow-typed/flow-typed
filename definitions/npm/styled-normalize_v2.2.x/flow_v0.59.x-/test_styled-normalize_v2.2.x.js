// @flow
import styled, { injectGlobal } from 'styled-components';
import normalize from 'styled-normalize';

const Component = styled.div`
  display: block;
  ${normalize}
`;

injectGlobal`
  ${normalize}
`;
