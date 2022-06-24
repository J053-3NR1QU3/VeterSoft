const conn = require("express-myconnection");

const controller={};

controller.login= (req,res)=>{
    res.redirect('/usuario');
}

controller.verificar= (req,res)=>{
    const data = req.body;
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM usuario WHERE nombre = ? AND password = ?',[data.nombre,data.password],(err,cliente)=>{
            if(cliente[0].nombre=='admin' && cliente[0].password=='123') {
                res.redirect('/usuario/usuario');
            } else {
                res.redirect('/Inicio')
            }
        });
    });
}

//funcion list que contiene los parametros   //para entrar a la vista principal
controller.list= (req,res)=>{
    req.getConnection((err,conn)=>{//un parametro por si surge un error y el otro para guardar la consulta
        conn.query('SELECT * FROM cliente',(err,cliente)=>{
            if(err){
                res.json(err);
            }
            console.log(cliente)
            res.render('gest_clientes',{
                data: cliente
            });//Renderizar vista
        });
    });

};

controller.listc= (req,res)=>{
    req.getConnection((err,conn)=>{//un parametro por si surge un error y el otro para guardar la consulta
        conn.query('SELECT * FROM cliente',(err,cliente)=>{
            if(err){
                res.json(err);
            }
            console.log(cliente)
            res.render('gest_clientes',{
                data: cliente
            });//Renderizar vista
        });
    });

};
//método guardar
controller.save=(req,res)=>{
    const data = req.body;
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO customer set ?',[data],(err,cliente)=>{
            //res.send('Se insertó');
            res.redirect('gest_clientes');  //para redireccionar a la misma vista principal
            console.log(data);

        });        
    });
    
    /*console.log(req.body);
    res.send('prueba de datos enviados');*/
}

//Metodo eliminar 
controller.delete =(req,res)=>{
    const {id}=req.params;
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM cliente WHERE id = ?',[id],(err,rows)=>{
            
            res.redirect('gest_clientes');  //para redireccionar a la misma vista principal
            
        });        
    });
    /*console.log(req.params);
    res.send('Se elimino');*/
}

//Metodo editar
controller.edit = (req,res)=>{
    const {id}=req.params;
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM cliente WHERE id = ?',[id],(err,cliente)=>{
            res.render('customer_edit', {    //para redireccionar a la  vista DE EDITAR
                data:customer[0]
            });  
            
        });        
    });
    
}


//metodo guardar la informacion editada
controller.update= (req,res)=>{
    const data =req.body
    const data1 =req.params
    req.getConnection((err,conn)=>{
        conn.query(' UPDATE customer SET ? WHERE id =' +data1.id,[data],(err,cliente)=>{
            res.redirect('gest_clientes');  
        });  
           
    });
    
}

controller.Inicio= (req,res)=>{
    //Renderizar vist
    res.render('customers',{data:null});
}

module.exports=controller; //exportación del controlador