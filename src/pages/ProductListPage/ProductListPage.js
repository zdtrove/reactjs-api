import React from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import callApi from './../../utils/apiCaller';
import { Link } from 'react-router-dom';

class ProductListPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products : []
        };
    }

    componentDidMount() {
        callApi('products', 'GET', null).then(res => {
            this.setState({
                products : res.data
            })
        });
    }

    onDelete = (id) => {
        callApi('products', 'DELETE', null).then(res => {
            console.log(res);
        });
    }

    render() {
        var { products } = this.state;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/product/add" className="btn btn-info">
                    Thêm Sản Phẩm
                </Link><br /><br />
                <ProductList>
                    { this.showProducts(products) }
                </ProductList>
            </div>
        );
    }

    showProducts(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={ index }
                        product={ product }
                        index={ index }
                        onDelete = { this.onDelete }
                    />
                );
            })
        }
        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        products : state.products
    }
}

export default connect(mapStateToProps, null)(ProductListPage);
