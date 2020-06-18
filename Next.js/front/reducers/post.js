export const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: 'KHJ',
    },
    content: '첫 번째 게시글 #해시태그 #익스프레스',
    Images: [{
      src: 'https://khjcode.netlify.app/KHJ%20code.png'
    },{
      src: 'https://dailycon.ks-kimstudio.com/images/logo.png'
    },{
      src: 'https://khjcode.netlify.app/KHJ%20code.png'
    }],
    Comments: [
    {
      User:{
        nickname: 'hero',
      },
      content: '너무 쉬워요'
    },
    {
      User:{
        nickname:'khj',
      },
      content: '겁나 어려워요'
    }
    ]
  }],
  imagePaths: [],
  postAdded: false,
}

const ADD_POST = 'ADD_POST';

export const addPost = {
  type: ADD_POST,
}

const dummyPost = {
  id: 2,
  content: '더미데이터',
  User: {
    id: 1,
    nickname: '근근맨',
  },
  Images: [],
  Comments: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
}

export default reducer;