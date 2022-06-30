import { Sequelize } from "sequelize";
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const Artikel = db.define('artikel',{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_pengguna: {
    type: DataTypes.INTEGER,
  },
  judul: {
    type: DataTypes.STRING
  },
  sub_judul: {
    type: DataTypes.TEXT
  },
  konten: {
    type: DataTypes.TEXT,
  },
  tanggal: {
    type: DataTypes.DATE,
  },
},{
  freezeTableName: true,
  timestamps: false
});

export default Artikel;