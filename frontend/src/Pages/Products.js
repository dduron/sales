import React, {Component} from 'react';
import axios from 'axios';

class Products extends Component {

    state = {
        products: []
      }
    
    componentDidMount() {
    axios.get(`/products`)
        .then(res => {
        const products = res.data;
        this.setState({ products });
        })
    }

    render() {
        return (
            <div>
                <p>
                    <ul>
                        {
                        this.state.products
                            .map(product =>
                            <li key={product.id}>{product.id} {product.name} {product.price} {product.stock}</li>
                            )
                        }
                    </ul>
                </p>
            </div>
        );
    }
}

export default Products;