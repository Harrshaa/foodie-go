import { CDN_URL } from "../utils/constants";
const ItemList=(props)=>{
    const {dummy}=props;
    const items = props?.data || [];
    console.log(items)

    const handleClick=()=>{
        console.log("clicked")

    }
    console.log(dummy);
   




    return (
        <div>
            {items.map((item)=>(
                <div key ={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex">
                  
                
                    
                    <div className="w-9/12">
                    <div className="py-2">
                    <span>{item.card.info.name}</span>
                    <span>- ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                    </div>
                    <p className="text-md">{item.card.info.description}</p>
                    </div>

                    <div className="w-3/12 p-4">
                        <button className="bg-gray-200 absolute text-sm" onClick={()=>handleClick()}>+ Add</button>
                        <img className="w-full" src={CDN_URL + item.card.info.imageId }></img>
                    </div>


               </div>
            

            ))}
          
            
      
        

            
                
            
        
    
        
        </div>

    )

  
    
  
     
    
   
}

export default ItemList;