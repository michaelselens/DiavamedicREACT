import React, {Fragment, useState, useEffect} from 'react';

const ListadoProductos = () => {
    const [lista,setLista]=useState([]);
    useEffect(()=>{
        fetch("https://localhost:44342/api/Productos")
        .then( async (response) => {
            if(response.ok){
                setLista(await response.json())
            }else {
                console.log(await response.text());
            }
        })
        .catch ((err)=> {
            console.log(err.message);
        });

    },[]);
    return (
        <Fragment>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th><th>NOMBRE</th><th>CODIGO</th><th>LOTE</th><th>VENCIMIENTO</th>
                    </tr>
                </thead>
                <tbody>
            {
                lista.map((producto)=> {
                    return <tr><td>{producto.id}</td><td>{producto.nombre}</td><td>{producto.codigo}</td><td>{producto.lote}</td><td>{producto.aniovencimiento}</td></tr>

                })
            }
                </tbody>
            </table>
        </Fragment> 
        
     );
}
 
export default ListadoProductos;