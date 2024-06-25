const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class CartItem extends Model { }

CartItem.init({
  CartItemId: {
    type: DataTypes.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
  }},
  {
  sequelize: sequelizeInstance, 
  modelName: 'cartItems', 
  }
)
module.exports = CartItem;