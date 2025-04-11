import { use } from "react";
import { useParams } from "react-router-dom";

interface Lista{
    nombre:String;
    precio:Number;
}

const Principal:React.FC=()=>{

    let {nombre}=useParams<Lista>();
    let {precio}=useParams<Lista>();
    const Productos=[{nombre:"Shampoo",precio: 20000},
        {nombre:"El cepillo plano de madera de Aveda",precio:3500},
        {nombre:"Pañitos",precio:5000},
        {nombre:"Jabones de coco",precio:3800}];
    return(
        <div>
            <h1>Productos</h1>
            <p></p>
           
        </div>
    )
}
export default Principal;