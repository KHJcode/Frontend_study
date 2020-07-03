module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', { // MySQL 에는 comments 테이블 생성
    // id: {}, 는 기본적으로 들어있음.
    content: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci', // + 이모티콘 저장
  });
  
  Comment.associate = (db) => {};
  return Comment;
}