const controller={};

controller.mascota= (req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM mascota',(err,mascota)=>{
            conn.query('SELECT * FROM cliente',(err,cliente)=>{
                conn.query('SELECT * FROM especie',(err,especie)=>{
                    conn.query('SELECT * FROM razas',(err,razas)=>{
                        res.render('gest_mascota',{data: mascota, d: cliente,c: especie,e: razas}); 
                    });
                });     
            });
        });
    });
}

controller.mascota2= (req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM mascota',(err,mascota)=>{
            conn.query('SELECT * FROM cliente',(err,cliente)=>{
                conn.query('SELECT * FROM especie',(err,especie)=>{
                    conn.query('SELECT * FROM razas',(err,razas)=>{
                        res.render('gest_mascota2',{data: mascota, d: cliente, c: especie, e: razas}); 
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
            res.redirect('/mascota'); 
        });  
    });
}


controller.actualizar= (req,res)=>{
    const {Nombre,Especie,Peso,Raza,Sexo,Edad,IDcliente,IDmascota} =req.body
    req.getConnection((err,conn)=>{
        conn.query(' UPDATE mascota SET Nombre=?, Especie=?, Peso=?, Raza=?, Sexo=?, Edad=?, IDcliente=? WHERE IDmascota=?',[Nombre,Especie,Peso,Raza,Sexo,Edad,IDcliente,IDmascota],(err,mascota)=>{
            res.redirect('/mascota');  
        });
    });
}

controller.eliminar =(req,res)=>{
    const {IDmascota}=req.body;
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM mascota WHERE IDmascota = ?',[IDmascota],(err,rows)=>{
            res.redirect('/mascota');
        });        
    });
}

controller.historial= (req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM historial_clinico',(err,historial)=>{
            conn.query('SELECT * FROM mascota',(err,mascota)=>{
                res.render('historial',{data: historial, m: mascota});
            });
        });
    });
}

controller.historialInsertar=(req,res)=>{
    const data = req.body;
    console.log(data);
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO historial_clinico set ?',[data],(err,historial)=>{
            res.redirect('/mascota/historial'); 
        });  
    });
}

controller.historialActualizar= (req,res)=>{
    const {Vacunaciones,Temperaturacorporal,FechaIngreso,FechaModificacion,FrecuenciaCardiaca,FrecuenciaRespiratoria,IDmascota,IDhistorialclinico} =req.body
    req.getConnection((err,conn)=>{
        conn.query(' UPDATE historial_clinico SET Vacunaciones=?, Temperaturacorporal=?, FechaIngreso=?, FechaModificacion=?, FrecuenciaCardiaca=?, FrecuenciaRespiratoria=?, IDmascota=? WHERE IDhistorialclinico=?',[Vacunaciones,Temperaturacorporal,FechaIngreso,FechaModificacion,FrecuenciaCardiaca,FrecuenciaRespiratoria,IDmascota,IDhistorialclinico],(err,mascota)=>{
            res.redirect('/mascota/historial');  
        });
    });
}

controller.receta= (req,res)=>{
    res.render('receta',{data: null});
}

controller.consulta= (req,res)=>{
    res.render('receta',{data: null});
}

controller.diagnostico= (req,res)=>{
    res.render('receta',{data: null});
}

module.exports=controller;