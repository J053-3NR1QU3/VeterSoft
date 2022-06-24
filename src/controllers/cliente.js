const controller={};

controller.cliente= (req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM cliente',(err,cliente)=>{
            res.render('gest_clientes',{data: cliente});
        });
    });
}

controller.insertar=(req,res)=>{
    const data = req.body;
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO cliente set ?',[data],(err,cliente)=>{
            res.redirect('/cliente');
        });        
    });
}

controller.actualizar= (req,res)=>{
    const {IDcliente, Nombre, Apellido, Telefono, Direccion} =req.body
    req.getConnection((err,conn)=>{
        conn.query(' UPDATE cliente SET Nombre=?, Apellido=?, Telefono=?, Direccion=? WHERE IDcliente=?',[Nombre, Apellido, Telefono, Direccion,IDcliente],(err,cliente)=>{
            res.redirect('/cliente');  
        });
    });
}

controller.eliminar =(req,res)=>{
    const {IDcliente}=req.body;
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM cliente WHERE IDcliente = ?',[IDcliente],(err,rows)=>{
            res.redirect('/cliente');
        });        
    });
}

module.exports=controller;