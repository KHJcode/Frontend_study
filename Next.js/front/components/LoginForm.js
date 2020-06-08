import React, { useState, useCallback } from 'react';
import { Form, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  margin-top: 10px;
`; // 인라인 스타일 대신 스타일 컴포넌트를 이용하자

const LoginForm = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  },[]);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  },[]);

  return (
    <Form>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <input
          name="user-id"
          value={id}
          onChange={onChangeId}
          required
        />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <input
          name="user-id"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </ButtonWrapper>
    </Form>
  );
}

export default LoginForm;