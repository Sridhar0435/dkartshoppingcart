const proDetails = [
    {
        image: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        name: "Adidas",
        price: 100
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRApu_nFlRM64aXFCtCEVhg7eRgGVVitMGtLfemn9VomtNvPBtEFQ&s",
        name: "Nike",
        price: 500
    },
    {
        image: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        name: "Puma",
        price: 1000
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRApu_nFlRM64aXFCtCEVhg7eRgGVVitMGtLfemn9VomtNvPBtEFQ&s",
        name: "Nike",
        price: 500
    }
]
export const dataAction = () => {
    return async (dispatch) => {
        dispatch({ type: "GET_DATA", payload: proDetails })
    }
}
export const ProductActionCurrency = (curr) => {
    return async (dispatch) => {
        var fetchCurr = await fetch(`https://api.exchangeratesapi.io/latest?base=${curr}`)
        var toJson = await fetchCurr.json()
        var checkCurr;
        { curr === "INR" ? checkCurr = toJson.rates["INR"] : checkCurr = toJson.rates["INR"] }
        dispatch({ type: "GET_CURR", payload: [curr, checkCurr] })
    }
}