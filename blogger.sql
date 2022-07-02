CREATE TABLE `pengguna` (
  `nik` int PRIMARY KEY,
  `username` varchar(50),
  `password` varchar(20),
  `status` boolean
);

CREATE TABLE `artikel` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `id_pengguna` int,
  `judul` varchar(255),
  `sub_judul` text,
  `konten` text,
  `tanggal` date
);

ALTER TABLE `artikel` ADD FOREIGN KEY (`id_pengguna`) REFERENCES `pengguna` (`nik`);
