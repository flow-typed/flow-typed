/* @flow */
import Relay from "react-relay/classic";

const Comp = () => <span>component</span>;

const CompFragmentContainer = Relay.createContainer(Comp, {
  fragments: {
    viewer: Relay.graphql`
      fragment Comp_viewer on Viewer {
        id
      }
    `
  }
});
