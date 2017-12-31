// @flow
import type { TaggedTemplateLiteral, Interpolation } from 'styled-components';

declare module 'styled-normalize' {
  declare export const version: string;
  declare export default Interpolation;
}
