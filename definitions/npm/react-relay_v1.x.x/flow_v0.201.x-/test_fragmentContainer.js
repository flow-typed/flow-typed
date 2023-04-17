/* @flow */
import { graphql, createFragmentContainer } from "react-relay";

const Comp = () => <span>component</span>;

const CompFragmentContainer = createFragmentContainer(Comp, {
  viewer: graphql`
    fragment Comp_viewer on Viewer {
      id
    }
  `
});
