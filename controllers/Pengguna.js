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

export const getLogin = async(req, res) => {
  try {
    const pengguna = await Model.Pengguna.findOne({
      where: {
        username: req.body.username
      },
    });
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
        nik: req.params.nik
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
        nik: req.body.nik
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
        nik: req.body.nik
      }
    });
    res.redirect('back');
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}