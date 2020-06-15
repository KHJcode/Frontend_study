import React from 'react';
import { useSelector } from 'react-redux';

import AppLayout from '../components/AppLayout';

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post.mainPosts);
  return (
    <AppLayout>
      {isLoggedIn && <PostForm /> }
      {mainPosts.map((post, index) => <PostCard key={post.id} />}
    </AppLayout> // 10:03 초까지함
 );
}

export default Home;