# Blogger Apps

> Halo semuanya, ini adalah blogger apps yang diperuntukan untuk tes programming. Bahasa yang digunakan adalah Javascript dengan stack NodeJS dan ExpressJS menggunakan database MySQL.

## Install Database

Di dalamnya saya sudah siapkan database dengan format .sql, kemudian tinggal import saja di phpmyadmin dengan nama database `blogger`.

## Running Apps

Untuk menjalankan aplikasi. Cukup dengan memakai perintah

```bash
$ nodemon .
```

## Tersedia API

Selain mengakses dashboard, ataupun blognya. Disini saya juga menyiapkan APInya.

```host
http://localhost:3000/api/pengguna/:id
http://localhost:3000/api/pengguna
http://localhost:3000/api/addpengguna
http://localhost:3000/api/updatepengguna/
http://localhost:3000/api/deletepengguna

http://localhost:3000/api/artikel/:id
http://localhost:3000/api/artikel
http://localhost:3000/api/addartikel
http://localhost:3000/api/updateartikel
http://localhost:3000/api/deleteartikel
```