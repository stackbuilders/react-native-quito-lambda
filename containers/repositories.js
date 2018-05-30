import { connect } from "react-redux";

import Repositories from "../components/repositories";
import { loadRepos } from "../actions";

const mapStateToProps = state => {
  return {
    repos: state.repos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRepos: () => dispatch(loadRepos())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repositories);
