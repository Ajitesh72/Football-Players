import React from "react"

export default function Card(props){
    return(
        <div className="Card">
            <div className="Images"> 
                <img src={`public/${props.item.coverImg}`} className="card_image" />
                
            </div>
          
           
            <div> 
            <img src={`public/${props.item.ovr}`} className="card_ovr" />
            
            <div className="Card_Info">
                <p>Player:{props.item.title}</p>
                <p>Position:{props.item.position}</p>
                <p>Nationality:{props.item.Nationality}</p>
                <p>Age:{props.item.Age}</p>
                <p>Goals:{props.item.stats.goals}                      Assists:{props.item.stats.assists}</p>
               </div>      
                
                
            </div>
        </div>
    )
}
