const controller={};

controller.medicamento= (req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM medicamento',(err,medicamento)=>{
            res.render('gest_medicamento',{data: medicamento});
        });
    });
}

controller.insertar=(req,res)=>{
    const data = req.body;
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO medicamento set ?',[data],(err,medicamento)=>{
            res.redirect('/medicamento');
        });        
    });
}

controller.actualizar= (req,res)=>{
    const {Nombre, Presentacion, ContenidoNeto, PrecioCompra, PrecioVenta, Existencia, IDmedicamento} =req.body
    req.getConnection((err,conn)=>{
        conn.query(' UPDATE medicamento SET Nombre=?, Presentacion=?, ContenidoNeto=?, PrecioCompra=?, PrecioVenta=?, Existencia=? WHERE IDmedicamento=?',[Nombre, Presentacion, ContenidoNeto, PrecioCompra, PrecioVenta, Existencia, IDmedicamento],(err,medicamento)=>{
            res.redirect('/medicamento');
        });
    });
}

controller.eliminar =(req,res)=>{
    const {IDmedicamento}=req.body;
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM medicamento WHERE IDmedicamento = ?',[IDmedicamento],(err,rows)=>{
            res.redirect('/medicamento');
        });        
    });
}

module.exports=controller;