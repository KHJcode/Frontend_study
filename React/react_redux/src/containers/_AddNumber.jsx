import { connect } from 'react-redux';

import AddNumber from '../components/AddNumber';

function mapReduxDispatchToReactProps(dispatch) {
  return {
    onClick: function(size){
      dispatch({ type: 'INCREMENT', size: size });
    }
  };
}

export default connect(null, mapReduxDispatchToReactProps)(AddNumber);