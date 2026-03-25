import React, { useEffect } from "react";
import { useState } from "react";

export const Main=()=>{
const [user,setUser] = useState('');
const [weath,setWeath] = useState(null);
const [loading,setLoad] = useState(false);
const [error,setError] = useState('');
const [history,setHist] = useState([]);
const Api = '3512d9c05e9aae7feb9238c96591a941';

useEffect(()=>{
    localStorage.setItem("weather",JSON.stringify(history))
},[history]);

const GetWeath=async()=>{
setLoad(true);
setError('');
try{
const url =`https://api.openweathermap.org/data/2.5/weather?q=${user}&appid=${Api}&units=metric`;

const res = await fetch(url);
if(!res.ok){
    throw new Error("Not found Town");
}
const data = await res.json();

setWeath(data);
setHist(prev=>{
    const Index = [...prev,user];
    const Unique = [...new Set(Index)];
    return Unique.slice(0,5);
}
)
} catch(err){
    setError(err.message);
}finally{
    setLoad(false);
}
}

const CleanAll=()=>{
    setUser('');
    setWeath(null);
    setHist([]);
}
return(
    <div>
        {error && <p>{error}</p>}
        {loading && <p>loading...</p>}
        {weath && <div>
            <p>{weath.name}</p>
            <p>{weath.main.temp}</p>
            </div>}
        {history && (
            <div>
                <ul>{history.map((el,ind)=>(
                    <li value={ind} onClick={(el)=>{GetWeath(el),setUser(el)}}>{el}</li>
                ))}</ul>
            </div>
        )}
<input value={user} onKeyDown={(el)=>{if(user.trim()!=='' && el.key  == 'Enter'){GetWeath()}}} placeholder="Serch town" onChange={(e)=>setUser(e.target.value)}></input>
<button onClick={()=>GetWeath()}>Click</button>
<button onClick={CleanAll}>Clean</button>
    </div>
)
}