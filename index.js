import express from 'express';
import axios from 'axios';
import expressLayouts from 'express-ejs-layouts';
import methodOverride from 'method-override';
import cors from 'cors';
import { addPengguna, deletePengguna, getAllPengguna, getLogin, getPengguna, updatePengguna } from './controllers/Pengguna.js';
import { getAllArtikel, getArtikel, addArtikel, updateArtikel, deleteArtikel } from './controllers/Artikel.js';

const app = express();
const port = 3000;

import auth from './middlewares/auth.js';
import session from 'express-session';
import cookieParser from 'cookie-parser';

app.use(cookieParser());
app.use(session({ secret: 'blogger' }));

app.set('view engine', 'ejs');
app.use(cors());
app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/login', (req, res) => {
  res.render('login', {
    layout: 'layouts/auth'
  });
});

app.post('/login', async (req, res) => {
  const session_store = req.session;
  if (req.body.username == "" || req.body.password == "") {
    res.redirect('/login');
  } else {
    const username = req.body.username;
    await axios({
      method: 'post',
      url: 'http://localhost:3000/api/login',
      data: {
        username: username
      }
    })
      .then((response) => {
        if(response.data === null){
          return res.redirect('/login');
        }
          session_store.nik = response.data.nik;
          session_store.username = response.data.username;
          session_store.status = response.data.status;
          session_store.logged_in = true;
          res.redirect('/admin/artikel');
      });
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
      if(err){
          alert("Gagal logout!");
      }else{
          res.redirect('/');
      }
  });
});

app.get('/signup', async (req, res) => {
  res.render('signup', {
    layout: 'layouts/auth'
  });
});

app.get('/admin/pengguna', auth.checkLogin, auth.checkStatus, async (req, res) => {
  const session_store = req.session;
  await axios.get('http://localhost:3000/api/pengguna/')
    .then((response) => {
      res.render('admin/pengguna', {
        layout: 'layouts/dashboard',
        data: response.data,
        url: req.originalUrl,
        user: session_store,
      });
    }).catch((error) => {
      res.send(error);
    });
});

app.get('/admin/artikel', auth.checkLogin, async (req, res) => {
  const session_store = req.session;
  await axios.get('http://localhost:3000/api/artikel/')
    .then((response) => {
      res.render('admin/artikel', {
        layout: 'layouts/dashboard',
        data: response.data,
        url: req.originalUrl,
        user: session_store,
      });
    }).catch((error) => {
      res.send(error);
    });
});

app.get('/admin/artikel/:id', auth.checkLogin, async (req, res) => {
  const session_store = req.session;
  await axios.get(`http://localhost:3000/api/artikel/${req.params.id}`)
    .then((response) => {
      res.render('admin/detailArtikel', {
        layout: 'layouts/dashboard',
        data: response.data,
        url: req.originalUrl,
        user: session_store,
      });
    }).catch((error) => {
      res.send(error);
    });
});

app.get('/', async (req, res) => {
  const session_store = req.session;
  await axios.get('http://localhost:3000/api/artikel/')
    .then((response) => {
      res.render('client/index', {
        layout: 'layouts/blog',
        data: response.data,
        url: req.originalUrl,
        user: session_store
      });
    }).catch((error) => {
      res.send(error);
    });
});

app.get('/artikel/:id', async (req, res) => {
  const session_store = req.session;
  await axios.get(`http://localhost:3000/api/artikel/${req.params.id}`)
    .then((response) => {
      res.render('client/post', {
        layout: 'layouts/blog',
        data: response.data,
        url: req.originalUrl,
        user: session_store,
      });
    }).catch((error) => {
      res.send(error);
    });
});

app.use('/api/login', getLogin);

app.use('/api/pengguna/:id', getPengguna);
app.use('/api/pengguna', getAllPengguna);
app.use('/api/addpengguna', addPengguna);
app.use('/api/updatepengguna/', updatePengguna);
app.use('/api/deletepengguna', deletePengguna);

app.use('/api/artikel/:id', getArtikel);
app.use('/api/artikel', getAllArtikel);
app.use('/api/addartikel', addArtikel);
app.use('/api/updateartikel', updateArtikel);
app.use('/api/deleteartikel', deleteArtikel);

app.listen(port, (req, res) => {
  console.log(`Apps run on http://localhost:${port}`);
});