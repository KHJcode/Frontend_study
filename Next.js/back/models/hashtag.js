module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define('Hashtag', { // MySQL 에는 hashtags 테이블 생성
    // id: {}, 는 기본적으로 들어있음.
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci', // + 이모티콘 저장
  });
  
  Hashtag.associate = (db) => {
    db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
  };
  return Hashtag;
}