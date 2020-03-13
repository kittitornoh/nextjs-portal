import React, { Component } from "react";
import initialize from "../../_helpers/initialize";

export function withPrivate(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
    }

    // #TODO: replace with new getServerSideProps??
    // disables automatic static optimization
    static async getInitialProps(ctx) {
      initialize(ctx);
      return {};
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
