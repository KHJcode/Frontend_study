import React, { useCallback, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import useInput from '../hooks/useInput';
import { ADD_COMMENT_REQUEST } from '../reducers/post';

const CommentForm = ({ post }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.me?.id);
  const { addCommentDone } = useSelector((state) => state.post);
  const [commentText, onChangeCommentText, setCommentText] = useInput('');

  useEffect(() => {
    if (addCommentDone) setCommentText('');
  }, [addCommentDone]);

  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText);
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: { content: commentText, postId: post.id, userId: id },
    });
  }, [commentText, id]);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item>
        <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
        <Button type="primary" htmlType="submit">삐약</Button>
      </Form.Item>
    </Form>
  );
};

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;