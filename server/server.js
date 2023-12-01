import express from 'express';
import mysql from 'mysql';
import cors from  'cors';

const app = express();
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "revminder"
})

app.get('/', (req, res) => {
    const sql = "SELECT * FROM mobil" ;
    db.query(sql, (err, result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })  
})

app.post('/mobil', (req, res) => {
    const sql = "INSERT INTO mobil (`nama_pemilik`, `no_pol`, `nama_kendaraan`, `merek`, `model`, `transmisi`, `tahun`, `warna`, `jenis`, `produk`) VALUES (?)";
    console.log(req.body)
    const values = [
        req.body.nama_pemilik,
        req.body.no_pol,
        req.body.nama_kendaraan,
        req.body.merek,
        req.body.model,
        req.body.transmisi,
        req.body.tahun,
        req.body.warna,
        req.body.jenis,
        req.body.produk,
    ]
    db.query(sql, [values], (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.get('/read/:id', (req, res) => {
    const sql = "SELECT * FROM mobil WHERE ID = ?";
    const id = req.params.id;

    db.query(sql,[id], (err, result)=> {
        if(err) return res.json({Message: "Error Inside Server"});
        return res.json(result);
    })
})

app.delete('/delete/:id', (req, res) => {
    const sql = "DELETE FROM mobil WHERE ID = ?";
    const id = req.params.id;

    db.query(sql, [id], (err, result)=> {
        if(err) return res.json({Message: "Error Inside Server"});
        return res.json(result);
    })
})

app.get('/jumlahdata', (req, res)=> {
    const sql = 'SELECT COUNT(*) FROM mobil';

    db.query(sql, (err, result)=> {
        if (err) {
            return res.json({ message: 'Error Inside Server' });
          }
            
          const totalCount = result[0].total;
          return res.json({ total: totalCount });
        });
});

app.listen(8081, ()=> {
    console.log("Listening...");
})