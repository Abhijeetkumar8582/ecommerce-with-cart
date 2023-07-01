const initialValue = {
    list:[]
}

const AddCart =(state=initialValue,action)=>{
    
    switch(action.type){
        case 'addToCart' :{
            const {id,title,quantity,image,desc,price}=action.payload
            return{
                ...state,
                list:[
                    ...state.list,
                    {
                    id:id,
                    title:title,
                    quantity:quantity,
                    image:image,
                    desc:desc,
                    price:price
                    }
                ]
            }
        }
        case 'deleteCart': {
            const filterData = state.list.filter(element => element.id !== action.payload);
            return {
              ...state,
              list: filterData
            };
          }
        default:
            return state
    }
}
export default AddCart