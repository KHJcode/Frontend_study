module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    // id: {}, 는 기본적으로 들어있음.
    src: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
  
  Image.associate = (db) => {};
  return Image;
}
