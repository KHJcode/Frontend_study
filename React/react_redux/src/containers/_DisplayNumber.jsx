import { connect } from 'react-redux';

import DisplayNumber from '../components/DisplayNumber';

function mapReduxStateToReactProps(state) {
  return {
    number: state.number
  };
}

export default connect(mapReduxStateToReactProps)(DisplayNumber);
