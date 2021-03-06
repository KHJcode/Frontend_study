module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', { // MySQL 에는 comments 테이블 생성
    // id: {}, 는 기본적으로 들어있음.
    content: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    // UserId: {},
    // PostId: {}, belongsTo 가 있는 곳에 컬럼이 생김.
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci', // + 이모티콘 저장
  });
  
  Comment.associate = (db) => {
    db.Comment.belongsTo(db.User);
    db.Comment.belongsTo(db.Post);
  };
  return Comment;
}