import { Sequelize } from "sequelize";
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const Pengguna = db.define('pengguna',{
  nik: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.BOOLEAN
  }
},{
  freezeTableName: true,
  timestamps: false
});

export default Pengguna;