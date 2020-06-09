import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
      setIsLoggedIn(false);
    }, []);

  return (
    <Card
      actions={[
        <div key="twit">근근<br />0</div>,
        <div key="followings">팔로잉<br />0</div>,
        <div key="followings">팔로워<br />0</div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>K</Avatar>}
        title="KHJcode"
      />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;