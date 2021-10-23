import React from 'react'

export default function CartMain(props) {
   const productData = props.data;
    const [cartData, setCartData] = React.useState(JSON.parse(localStorage.getItem("cartData")));

const removeCart = (id) =>{
    console.log("click")
    let tempData = cartData;
    tempData.pop(id);
    console.log(tempData)
    localStorage.setItem("cartData", JSON.stringify(tempData))
    setCartData(JSON.parse(localStorage.getItem("cartData")))
}

    return (
        <>
        {
            cartData.map((id,index)=>{
                console.log(id)
                for (let i=0; i<productData.length; i++){
                    if(productData[i]._id == id){
                      return(
                          <div className="card">
                 <p>{productData[i].title}</p>
                <p>{productData[i].description}</p>
               <p>{productData[i].prince}</p>
                 <button onClick={removeCart.bind(this,id)} >Delete</button>
                 </div>
                      )  
                    }
                }
            })
        }

        </>
    )
}
