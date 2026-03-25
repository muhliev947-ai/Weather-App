import React from "react";


export const SerchIn=({user,setUser,GetWeath})=>{
    const HandleSerch = (e)=>{
        if(e.key ==='Enter' && user.trim()!==''){
            GetWeath();
        }
    }

    return(
        <div>
            <input type="text" 
            placeholder="Write the town" 
            onChange={(e)=>setUser(e.target.value)} 
            onKeyDown={HandleSerch}
            className="text-amber-200 border-amber-300 bg-amber-600 text-3xl"
            />
        </div>
    );
} 