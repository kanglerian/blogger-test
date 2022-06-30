import Pengguna from '../models/pengguna.js';
import Artikel from '../models/artikel.js';
const Model = {};

Model.Pengguna = Pengguna;
Model.Artikel = Artikel;

Pengguna.hasMany(Artikel, {foreignKey: 'id_pengguna'});
Artikel.belongsTo(Pengguna, {foreignKey: 'id_pengguna'});

export default Model;