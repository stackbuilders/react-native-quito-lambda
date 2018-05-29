import { connect } from "react-redux";

import Repositories from "../components/repositories";
import { getRepos } from "../actions";

const mapStateToProps = state => {
  return {
    repos: state.repos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRepos: () => dispatch(getRepos())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repositories);
