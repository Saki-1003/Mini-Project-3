const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Cart extends Model { }

Cart.init({
  CartId: {
    type: DataTypes.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
  }},
  {
  sequelize: sequelizeInstance, 
  modelName: 'carts', 
  }
)
module.exports = Cart;