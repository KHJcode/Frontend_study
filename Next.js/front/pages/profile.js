import React from 'react';
import Head from 'next/head';


import AppLayout from '../components/AppLayout';
import NickNameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
  const followerList = [{ nickname: 'KHJcode'}, { nickname: '바보'}, { nickname: '노드버드' }];
  const followingList = [{ nickname: 'KHJcode'}, { nickname: '바보'}, { nickname: '노드버드' }];

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>내 프로필</title>
      </Head>
      <AppLayout>
        <NickNameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  )
};

export default Profile;