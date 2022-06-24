const controller={};

controller.consulta= (req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM consulta',(err,consulta)=>{
            res.render('gest_mascota',{data: consulta}); 
            
        });
    });
}

controller.insertar=(req,res)=>{
    const data = req.body;
    console.log(data);
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO consulta set ?',[data],(err,consulta)=>{
            res.redirect('/consulta');
        
        });  
    });
}

controller.actualizar= (req,res)=>{
    const {Costo,Fecha,IDconsulta,IDmascota} =req.body
    req.getConnection((err,conn)=>{
        conn.query(' UPDATE mascota SET Costo=?, Fecha=?, IDconsulta=?, IDmascota=?',[Costo,Fecha,IDconsulta,IDmascota],(err,consulta)=>{
            res.redirect('/consulta');  
        });
    });
}

module.exports=controller;