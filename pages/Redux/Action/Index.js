export const AddTOCart =(id,title,quantity,image,desc,price)=>{
    return{
        type:'addToCart',
        payload:{
            id:id,
            title:title,
            quantity:quantity,
            image:image,
            desc:desc,
            price:price
        }

    }
}
export const DeleteCart =(id)=>{
    return{
        type:'deleteCart',
        payload:id
    }
}
