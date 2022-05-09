const Sequelize = require("sequelize");
const connection = require("../database/db");

const Pokemon = connection.define("pokemon", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  height: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  weight: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  skill: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imagem: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
    freezeTableName: true,
    timestaps: false,
    createdAt: false,
    updatedAt: false,
}
);

const initTable = async () => {
  await Pokemon.sync();
};

initTable();

module.exports = Pokemon;
