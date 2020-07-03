module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', { // MySQL 에는 posts 테이블 생성
    // id: {}, 는 기본적으로 들어있음.
    content: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci', // + 이모티콘 저장
  });

  Post.associate = (db) => {};
  return Post;
}