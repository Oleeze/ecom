module.exports = (sequelize, Sequelize) => {
  const Item = sequelize.define('item', {
    category: Sequelize.STRING,
    type: Sequelize.STRING,
    itemId: Sequelize.INTEGER,
    name: Sequelize.STRING,
    price: Sequelize.INTEGER,
    color: Sequelize.STRING,
    size: Sequelize.STRING,
    quantity: Sequelize.INTEGER,
  })

  return Item;
}

