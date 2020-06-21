// _app.js 는 모든 page 가 공통일 때 쓰입니다. 
import 'antd/dist/antd.css';
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import withReduxSaga from 'next-redux-saga';

import wrapper from '../store/configureStore';

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  )
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(withReduxSaga(App));