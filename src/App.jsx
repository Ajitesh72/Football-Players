import React from "react"

 
import Navbar from "./components/navbar"
import Card from "./components/card"
import data from "./assets/data"

export default function App() {
  
    const cards=data.map(item=>{
      return(
        <Card
        key={item.id}
        item={item}
        />
      )

    })

    return(
    <div>
      <Navbar/>
      <section className="card_list">    
      {cards}
      </section>
    </div>
  )
}