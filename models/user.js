const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class User extends Model { }

User.init({
  UserId: {
    type: DataTypes.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING, allowNull: false, 
  },
  lastName: {
    type: DataTypes.STRING, allowNull: false, 
  },
  username: {
    type: DataTypes.STRING, allowNull: false,
  },
  phone: {
    type: DataTypes.STRING, allowNull: false, 
  },
  email: {
    type: DataTypes.STRING, allowNull: false, 
  }},
  {
  sequelize: sequelizeInstance, 
  modelName: 'users', 
  }
)
module.exports = User;