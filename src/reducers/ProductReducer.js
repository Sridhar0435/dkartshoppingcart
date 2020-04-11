const productState = {
    data: "",
    currncy: 1
}

const ProductReducer = (state = productState, action) => {

    switch (action.type) {

        case "GET_DATA":
            return {
                ...state,
                data: action.payload
            }
            break;

        case "GET_CURR":
            return {
                ...state,
                currncy: action.payload
            }
            break;

    }
    return state;
}
export default ProductReducer;
