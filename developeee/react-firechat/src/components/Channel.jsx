
// import { QuerySnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
// import {db} from '../firebase'

// eslint-disable-next-line react/prop-types
export const Channel = (db=null) => {
const [message,setMessage]=useState([])
 
useEffect(()=>{
    if(db){
        const unsubscribe= db.collection('messages').orderBy('createdAt').limit(100).onSnapshot(
            querySnapshot=>{
                const data=querySnapshot.docs.map(doc=>({
                    ...doc.data(),
                    id : doc.id,
                }))
                setMessage(data)
            }
        )
        return unsubscribe
    }
 },[db])
        

    return(
        <ul>
            {message.map(m=>(
                <li key={m.id}>{m.text}</li>
            ))}
        </ul>
    )

}
