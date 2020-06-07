import PropTypes from 'prop-types';
import Link from 'next/link'; // Next.js 에서 자체적으로 쓰이는 router
import { Menu } from 'antd';
import React from 'react';
import MenuItem from 'antd/lib/menu/MenuItem';

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/"><a>노드버드</a></Link>
        </Menu.Item>
        <MenuItem>
          <Link href="/profile"><a>프로필</a></Link>
        </MenuItem>
        <Menu.Item>
          <Link href="/signup"><a>회원가입</a></Link>
        </Menu.Item>
      </Menu>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired, // return 안에 들어갈 수 있는 모든 것 : node
};


export default AppLayout;