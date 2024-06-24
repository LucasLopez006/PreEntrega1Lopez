import {useState, useEffect} from 'react';
import {getProducts} from '../firebase/firebase';


export default function ProductsComponents  (){
    
    const [myProds, setMyProds] = useState ([]);

    useEffect(()=>{
        getProducts().then(products => setMyProds(products))
    })

    return(<>
    
        {myProds.map((Prod)=> (
        <h2 key={Prod.title}>{Prod.title}</h2>
        ))}

    </>)

}