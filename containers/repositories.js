import { connect } from "react-redux";

import Repositories from "../components/repositories";
import { loadRepos } from "../actions";

const mapStateToProps = ({ waiting, response, error }) => {
  return { waiting, response, error };
};

const mapDispatchToProps = dispatch => {
  return {
    loadRepos: () => dispatch(loadRepos())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repositories);
