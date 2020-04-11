import React, { Component } from "react";
import "../css/HomePage.css";
import "../css/Currency.css"
import { connect } from "react-redux";
import { dataAction, ProductActionCurrency } from "../actions/ProductAction";
class HomePage extends Component {

    componentDidMount() {
        this.props.proData()
        this.props.currencyToProps("INR")
    }
    render() {
        var dataAppened = this.props.dataFromReducer;
        var currAppend = this.props.currncyFromReducer;
        return (
            <section className="product_box">
                <article className="product_display">
                    <div className="row">
                        {dataAppened !== "" ?
                            dataAppened.map((item, index) => (
                                <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                    <div className="cart">
                                        <img src={item.image} alt="hi" />
                                        <h6>{item.name}</h6>
                                        <h6>{currAppend[0] === "INR" ?
                                            <span> <i className="fa fa-inr" aria-hidden="true"></i> {(item.price / parseInt(currAppend[1])).toFixed(2)} </span>
                                            : "$ " + (item.price / parseInt(currAppend[1])).toFixed(2)}</h6>
                                    </div>
                                </div>
                            ))
                            : "Loading..."}
                    </div>
                </article>
                <article className="currency_display">
                    <div className="row">
                        <div className="col-sm-4">
                            Currency
                        </div>
                        <div className="col-sm-8">
                            <select className="custom-select" id="inputGroupSelect01" onChange={(e) => this.props.currencyToProps(e.target.value)}>
                                <option value="INR">INR</option>
                                <option value="USD">USD</option>
                            </select>
                        </div>
                    </div>

                </article >
            </section>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        dataFromReducer: state.data,
        currncyFromReducer: state.currncy
    }
}
const dispatchStateToProps = (dispatch) => {
    return {
        proData: () => {
            dispatch(dataAction())
        },
        currencyToProps: (curr) => {
            dispatch(ProductActionCurrency(curr))
        }
    }
}
export default connect(mapStateToProps, dispatchStateToProps)(HomePage);