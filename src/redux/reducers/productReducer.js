import { ActionTypes } from "../constant/action-types";

const initialState = {
    products:[
        {
            id: 1,
            title: "Dipesh",
            category: "Programmer",
        },
    ],
};
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }

}

// export const productsReducer = (state = intialState, { type, payload }) => {
//     switch (type) {
//       case ActionTypes.SET_PRODUCTS:
//         return { ...state, products: payload };
//       default:
//         return state;
//     }
//   };