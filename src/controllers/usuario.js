const controller={};

controller.usuario= (req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM usuario',(err,usuario)=>{
            res.render('gest_usuarios',{data: usuario});
        });
    });
}

controller.actualizar= (req,res)=>{
    const {IDusuario, nombre, password} =req.body;
    req.getConnection((err,conn)=>{
        conn.query(' UPDATE usuario SET nombre=?, password=? WHERE IDusuario=?',[nombre, password, IDusuario],(err,usuario)=>{
            res.redirect('/usuario/usuario');  
        });
    });
}

controller.eliminar =(req,res)=>{
    const {IDusuario}=req.body;
    console.log('id:',IDusuario);
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM usuario WHERE IDusuario = ?',[IDusuario],(err,rows)=>{
            res.redirect('/usuario/usuario');
        });        
    });
}

controller.signin= (req,res)=>{
    res.render('login');
}

controller.signinP= (req,res)=>{
    const data = req.body;
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM usuario WHERE nombre = ? AND password = ?',[data.nombre,data.password],(err,cliente)=>{
            if(cliente[0]!=null) {
                res.redirect('/Inicio');
            } else {
                res.redirect('/')
            }
        });
    });
}

controller.signupP= (req,res)=>{
    const data = req.body;
    if (data.nombre != 'admin') {
        req.getConnection((err,conn)=>{
            conn.query('INSERT INTO usuario set ?',[data],(err,cliente)=>{
                res.redirect('/usuario/usuario');
            });
        });
    } else {
        res.redirect('/usuario/usuario');
    }
}

module.exports=controller;