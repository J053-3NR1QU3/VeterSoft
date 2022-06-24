const controller={};

controller.razas= (req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM razas',(err,razas)=>{
            res.render('gest_razas',{data: razas});
        });
    });
}