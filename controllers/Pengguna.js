import Model from '../models/index.js';

export const getAllPengguna = async(req, res) => {
  try {
    const pengguna = await Model.Pengguna.findAll();
    res.json(pengguna);
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}

export const getPengguna = async(req, res) => {
  try {
    const pengguna = await Model.Pengguna.findOne({
      where: {
        id: req.params.id
      },
    });
    res.json(pengguna);
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}


export const addPengguna = async(req, res) => {
  try {
    await Model.Pengguna.create(req.body)
    res.redirect('back');
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}

export const updatePengguna = async(req, res) => {
  try {
    await Model.Pengguna.update(req.body,{
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

export const deletePengguna = async(req, res) => {
  try {
    await Model.Pengguna.destroy({
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