import React from "react";

export const History=({history,setUser,onHistory})=>{


    return(
        <div>
          <p>History:</p>
          {history.length > 0 && (
            <ul>
                {history.map((el,ind)=>(
                    <li
                    key={ind}
                    onClick={()=>{setUser(el);onHistory(el)}}
                    >{el}</li>
                ))}
            </ul>
          )}
        </div>
    );
}