module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', { // MySQL 에는 posts 테이블 생성
    // id: {}, 는 기본적으로 들어있음.
    content: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    // RetweetId
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci', // + 이모티콘 저장
  });

  Post.associate = (db) => {
    db.Post.belongsTo(db.User);
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
    // 다:다 관계에는 둘다 belongsToMany() 를 사용. -> 중간 테이블이 생김. 
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' });
    db.Post.belongsTo(db.Post, { as: 'Retweet' });
  };
  return Post;
}