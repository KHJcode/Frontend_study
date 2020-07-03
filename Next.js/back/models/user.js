module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', { // MySQL 에는 users 테이블 생성
    // id: {}, 는 기본적으로 들어있음.
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    nickname: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci', // 한글 사용
  });
  User.associate = (db) => {};
  return User;
}