const controller={};

controller.mascota2= (req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM mascota',(err,mascota)=>{
            conn.query('SELECT * FROM cliente',(err,cliente)=>{
                conn.query('SELECT * FROM especie',(err,especie)=>{
                    conn.query('SELECT * FROM razas',(err,razas)=>{
                        res.render('gest_mascota2',{data: mascota, d: cliente,c: especie,e: razas}); 
                    });
                });     
            });
        });
    });
}

controller.insertar=(req,res)=>{
    const data = req.body;
    console.log(data);
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO mascota set ?',[data],(err,cliente)=>{
            conn.query('INSERT INTO mascota set ?',[data],(err,especie)=>{
                conn.query('INSERT INTO mascota set ?',[data],(err,razas)=>{
                    res.redirect('/mascota2');
                }); 
            }); 
        });  
    });
}

controller.actualizar= (req,res)=>{
    const {Nombre,Especie,Peso,Raza,Sexo,Edad,IDcliente,IDmascota} =req.body
    req.getConnection((err,conn)=>{
        conn.query(' UPDATE mascota SET Nombre=?, Especie=?, Peso=?, Raza=?, Sexo=?, Edad=?, IDcliente=? WHERE IDmascota=?',[Nombre,Especie,Peso,Raza,Sexo,Edad,IDcliente,IDmascota],(err,mascota)=>{
            res.redirect('/mascota2');  
        });
    });
}

controller.eliminar =(req,res)=>{
    const {IDmascota}=req.body;
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM mascota WHERE IDmascota = ?',[IDmascota],(err,rows)=>{
            res.redirect('/mascota2');
        });        
    });
}

module.exports=controller;