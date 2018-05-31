import { connect } from "react-redux";

import Repositories from "../components/repositories";
import { loadRepos } from "../actions";

const getNameAndLanguage = obj => {
  return {
    name: obj.name,
    language: obj.language
  };
};

const mapStateToProps = ({ waiting, response, error }) => {
  const data = response.data;
  const simplifiedRepos = !data ? null : data.map(getNameAndLanguage);

  return {
    waiting,
    response: { status: response. status, data: simplifiedRepos },
    error
  };
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
