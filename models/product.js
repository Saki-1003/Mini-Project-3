const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Product extends Model { }

Product.init({
  ProductId: {
    type: DataTypes.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
  },
  title: {
    type: DataTypes.STRING, allowNull: false, 
  },
  price: {
    type: DataTypes.FLOAT, allowNull: false, 
  },
  description: {
    type: DataTypes.TEXT('medium'), allowNull: false,
  },
  category: {
    type: DataTypes.STRING, allowNull: false, 
  },
  image: {
    type: DataTypes.STRING, allowNull: false, 
  }},
  {
  sequelize: sequelizeInstance, 
  modelName: 'products', 
  }
)
module.exports = Product;