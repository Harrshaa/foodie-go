import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory=({data,showItems,setShowItems})=>{
    // console.log(props);
   
    

   
    const handleAccordian=()=>{
        setShowItems();

    }
    
    
    
    return  (

        <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4  ">
            {/* Header */} 
            <div className="flex justify-between cursor-pointer" onClick={()=>handleAccordian()}>
           <span className="font-bold text-lg">{data.title} ({data.itemCards.length}) </span>
           <button className="mx-2"  >⬇️</button>
           </div>

            {/* Accordian Body */}
            {showItems && <ItemList  data={data.itemCards}  />}
        </div>
    )

}

export default RestaurantCategory;