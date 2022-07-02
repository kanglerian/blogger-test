import Model from '../models/index.js';

export const getAllArtikel = async(req, res) => {
  try {
    const artikel = await Model.Artikel.findAll({
      include: [
        {model: Model.Pengguna, attributes: ['nik','username']}
      ],
    });
    res.json(artikel);
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}

export const getArtikel = async(req, res) => {
  try {
    const artikel = await Model.Artikel.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {model: Model.Pengguna, attributes: ['nik','username']}
      ],
    });
    res.json(artikel);
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}

export const addArtikel = async(req, res) => {
  try {
    await Model.Artikel.create(req.body)
    res.redirect('back');
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}

export const updateArtikel = async(req, res) => {
  try {
    await Model.Artikel.update(req.body,{
      where: {
        id: req.body.id
      }
    });
    res.redirect('back');
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}

export const deleteArtikel = async(req, res) => {
  try {
    await Model.Artikel.destroy({
      where: {
        id: req.body.id
      }
    });
    res.redirect('back');
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}