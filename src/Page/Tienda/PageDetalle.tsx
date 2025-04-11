import { useParams } from "react-router-dom";

interface Detale{
    informacion:string;
}
const Detalle: React.FC=()=>{
    let {informacion}=useParams<Detale>();
    const DetallesProductos=[{informacion:"Este Shampoo tiene estracto de Sabila,Arga, Vitaminas que hacen crecer y da brillo a tu cabello"},
        {informacion:"Se trata de un cepillo que puede con todo: es perfecto para desenredar cabellos largos y gruesos, además de ayudarte a trabajar el cabello con el secador para un acabado liso sin ondas. Los hay en formato cepillo alisador, muy prácticos."},
        {informacion:"Toallitas de limpieza diaria, con suave fragancia y sin irritantes, perfectas para la piel delicada del bebé"},
        {informacion:"Para pieles secas: busca un jabón con ingredientes hidratantes como la glicerina o el aceite de coco."}
    ]
    return(
        <div>
            

        </div>
    )
}

export default Detalle;