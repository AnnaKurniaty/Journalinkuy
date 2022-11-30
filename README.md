# Instalasi Journalinkuy

** 1.	Instalasi back-end **

Ketik ini di terminal secara berurut dan bertahap:

cd server

nodemon app.js

(Jika terdapat error ERESOLVE, ganti parameter input “mongoose.connect()” dengan versi paling rendah (Node 2.2). Kita dapat menggantinya melalui MongoDB Atlas.)

** 2.	Instalasi front-end **

Ketik ini di terminal secara berurut dan bertahap:

npm install

cd frontend

npm install

npm run dev

(Jika terdapat error karena Tiptap Vue, install Tiptap Vue 3 menggunakan npm install …. atau yarn add … )


** 3.	Cara cek back-end di Postman **

http://localhost:5000/api/post/ (GET)

http://localhost:5000/api/post/(id) (GET)

http://localhost:5000/api/post/date (GET)

http://localhost:5000/api/post/ (POST)

http://localhost:5000/api/post/(id) (PATCH)

http://localhost:5000/api/post/(id) (DELETE)

Pastikan seluruh data dapat diambil, ditambah, diubah, dan dihapus.

** 4.	Memulai aplikasi di peramban (web) **

Peramban yang digunakan : Firefox

Ketik “http://localhost:(angka)/ yang tercantum pada terminal (Local)

** 5. Cek perfomance di Lighthouse **

Gunakan ekstensi Lighthouse menggunakan Google Chrome dan Chrome Devtools.

** Kendala yang ditemukan : **

** 1.	Situs yang tidak terload (Infinite Loading). **

Solusi : Gunakan peramban lain.

Peramban yang disarankan : Google Chrome.
