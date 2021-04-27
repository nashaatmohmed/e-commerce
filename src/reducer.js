export const initialState = {
    basket: [],
    addPro: [],
    user: null
};

// calc the price func
export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    
    
    switch (action.type) {
        //add to basket
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case 'ADD_PRODUCT':
          return{
            ...state,
            addPro: [...state.addPro,action.item],
          };    

           



            //this line of code remove every product in same id (that is wrong)
        // case 'REMOVE_FROM_BASKET':
        //     return {
        //         ...state,
        //         basket: state.basket.filter(item => item.id !== action.id)
        //     }  
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
              );
              let newBasket = [...state.basket];

              if (index >= 0) {
                newBasket.splice(index, 1);
        
              } else {
                console.warn(
                  `Cant remove product (id: ${action.id}) as its not in basket!`
                )
              }
              return {
                ...state,
                basket: newBasket
              }   
              
              case "SET_USER":
                return {
                  ...state,
                  user: action.user
                }

            default: 
                return state;
    }
};

export default reducer;