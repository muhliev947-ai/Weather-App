import React from "react";

export const WeatgerCard =({weath})=>{

    return(
        <div>
        {weath && (
               <div>
                   <p>{weath.name}</p>
                   {(() => {
         const icon = weath.weather[0].icon;
         const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
         return <img src={iconUrl} alt="weather icon" />;
       })()}
                   <p>Temperature: {weath.main.temp} C</p>
                   <p>Description: {weath.weather[0].description}</p>
               </div>
           )}
        </div>
    );
}