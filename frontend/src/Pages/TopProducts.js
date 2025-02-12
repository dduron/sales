import React, {Component} from 'react';
import axios from 'axios';

class TopProducts extends Component {

    state = {
        topProducts: []
      }
    
    componentDidMount() {
    axios.get(`/sales/findtopproducts`)
        .then(res => {
        const topProducts = res.data;
        this.setState({ topProducts });
        })
    }

    render() {
        return (
            <div>
                <p>
                    <ul>
                        {
                        this.state.topProducts
                            .map(topProduct =>
                            <li key={topProduct.id}>{topProduct.name} {topProduct.price} {topProduct.stock}</li>
                            )
                        }
                    </ul>
                </p>
            </div>
        );
    }
}

export default TopProducts;