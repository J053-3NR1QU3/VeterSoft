const controller={};

controller.proveedor= (req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM proveedor',(err,proveedor)=>{
            res.render('gest_proveedor',{data: proveedor});
        });
    });
}

controller.insertar=(req,res)=>{
    const data = req.body;
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO proveedor set ?',[data],(err,proveedor)=>{
            res.redirect('/proveedor');
        });        
    });
}

controller.actualizar= (req,res)=>{
    const {Nombre, Apellido, Telefono, Direccion, IDproveedor} =req.body
    req.getConnection((err,conn)=>{
        conn.query(' UPDATE proveedor SET Nombre=?, Apellido=?, Telefono=?, Direccion=? WHERE IDproveedor=?',[Nombre, Apellido, Telefono, Direccion,IDproveedor],(err,proveedor)=>{
            res.redirect('/proveedor');
        });
    });
}

controller.eliminar =(req,res)=>{
    const {IDproveedor}=req.body;
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM proveedor WHERE IDproveedor = ?',[IDproveedor],(err,rows)=>{
            res.redirect('/proveedor');
        });        
    });
}

module.exports=controller;