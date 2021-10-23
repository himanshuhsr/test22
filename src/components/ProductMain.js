import React from 'react';

export default function ProductMain(props) {
    const productData = props.data;
    const n = productData.length;
    
    const addCart = (id) =>{
    console.log("click")
    let tempData =[];
    if(localStorage.getItem("cartData") != null){
        console.log(localStorage.getItem("cartData"))
        let x = JSON.parse(localStorage.getItem("cartData"))
        x.map((item,index)=>{
            tempData.push(item)
        }) 
        console.log(tempData)
    }
    tempData.push(id);
    console.log(tempData)

    localStorage.setItem("cartData",JSON.stringify(tempData))
    window.location.reload()
}


    console.log(n)
    console.log(productData)

     return(
         <>
         {productData.map((product,index)=>{
             console.log(product.title)
             return (
                 <div className="card">
                 <p>{product.title}</p>
                <p>{product.description}</p>
               <p>{product.prince}</p>
                 <button onClick={addCart.bind(this, product._id)} >Add to Cart</button>
                 </div>
             )
         })}
         </>
     )

     
    // for (let i=0; i<n; i++){
    //     return(
    //         <>
    //         <div className="card">
    //             <img src={productData[i].image} />
    //             <p>{productData[i].title}</p>
    //             <p>{productData[i].description}</p>
    //             <p>{productData[i].prince}</p>
    //             <button onClick={addProduct(productData[i]._id)}>Add to Cart</button>
    //         </div>
    //         </>
    //     )
    // }

   
}
