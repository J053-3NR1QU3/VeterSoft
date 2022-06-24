const controller={};

controller.material= (req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM material_quirurgico',(err,material)=>{
            conn.query('SELECT * FROM proveedor',(err,proveedor)=>{
                res.render('gest_materialq',{data: material, p: proveedor});
            });
        });
    });
}

controller.insertar=(req,res)=>{
    const data = req.body;
    console.log(data);
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO material_quirurgico set ?',[data],(err,material)=>{
            res.redirect('/material'); 
        });  
    });
}


controller.actualizar= (req,res)=>{
    const {Nombre,Presentacion,ContenidoNeto,PrecioCompra,Existencia,IDproveedor,IDmaterialquirurgico} =req.body
    req.getConnection((err,conn)=>{
        conn.query(' UPDATE material_quirurgico SET Nombre=?, Presentacion=?, ContenidoNeto=?, PrecioCompra=?, Existencia=?, IDproveedor=? WHERE IDmaterialquirurgico=?',[Nombre,Presentacion,ContenidoNeto,PrecioCompra,Existencia,IDproveedor,IDmaterialquirurgico],(err,material)=>{
            res.redirect('/material');  
        });
    });
}

controller.eliminar =(req,res)=>{
    const {IDmaterialquirurgico}=req.body;
    console.log('IDmaterialquirurgico: ',IDmaterialquirurgico);
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM material_quirurgico WHERE IDmaterialquirurgico = ?',[IDmaterialquirurgico],(err,rows)=>{
            res.redirect('/material');
        });        
    });
}

module.exports=controller;