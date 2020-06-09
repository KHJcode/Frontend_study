import PropTypes from 'prop-types';
import Link from 'next/link'; // Next.js 에서 자체적으로 쓰이는 router
import { Menu, Input, Row, Col } from 'antd';
import React, { useState } from 'react';
import MenuItem from 'antd/lib/menu/MenuItem';
import styled from 'styled-components';

import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/"><a>노드버드</a></Link>
        </Menu.Item>
        <MenuItem>
          <Link href="/profile"><a>프로필</a></Link>
        </MenuItem>
        <MenuItem>
          <SearchInput enterButton />
        </MenuItem>
        <Menu.Item>
          <Link href="/signup"><a>회원가입</a></Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://khj.now.sh" target="_blank" rel="noreferrer noopener">Made by KHJcode</a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired, // return 안에 들어갈 수 있는 모든 것 : node
};


export default AppLayout;