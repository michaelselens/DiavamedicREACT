import React, { Fragment,useState } from 'react'

const AgregarProducto = () => {
    const [producto, setproducto] = useState({
        id:0,
        nombre:'',
        codigo:"",
        lote:'',
        aniovencimiento:""
    })
    const [creado, setCreado] = useState(false);
    const cambioValoresHandler=(evento)=>{ 
        setproducto({
            ...producto,
            [evento.target.name]: evento.target.value
        });
    }
    const enviar= (e)=>{
        e.preventDefault();
        
        fetch("https://localhost:44342/api/Productos",{
                method:"POST",
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                    nombre:producto.nombre,
                    codigo:producto.codigo,
                    lote:producto.lote,
                    aniovencimiento:producto.aniovencimiento}),
        })
        .then(response=>{
            console.log(response);
            if(response.ok)
                setCreado(true)
                
        })
        .catch((err)=> {
            console.error("error",err);
            alert(err.message);
        })
    }
    return (
        <Fragment>
            {
                !creado ? (         
                    <form onSubmit={enviar}>
                        <h3>Agregar Producto</h3>
                        
                        <div className="form-group">
                            <label>Nombre: </label>
                            <input className="form-control" type="text" name="nombre"  onChange={cambioValoresHandler}></input>
                        </div>
                        <div className="form-group">
                            <label>Codigo: </label>
                            <input className="form-control" type="text" name="codigo"  onChange={cambioValoresHandler}></input>
                        </div>
                        <div className="form-group">
                            <label>Lote: </label>
                            <input className="form-control" type="text" name="lote"  onChange={cambioValoresHandler}></input>
                        </div>
                        <div className="form-group">
                            <label>Vencimiento: </label>
                            <input className="form-control" type="text" name="aniovencimiento"  onChange={cambioValoresHandler}></input>
                        </div>
                        <br></br>
                        <button type="submit" className="btn btn-success" >Guardar</button>

                    </form>
                    )
                :(
                    <h3>Producto agregado exitosamente</h3>
                )

            }
   

        </Fragment>
    )
}

export default AgregarProducto