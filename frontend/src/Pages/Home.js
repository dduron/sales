import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Home extends Component {

    render() {
        return (
            <>
                <h1>Homepage</h1>
                <Link to="/products">Products<br/></Link>
                <Link to="/newproduct">New Product<br/></Link>
                <Link to="/updateproduct">Update Product<br/></Link>
                <Link to="/deleteproduct">Delete Product<br/></Link>
                <Link to="/clients">Clients<br/></Link>
                <Link to="/topproducts">Top Products<br/></Link>
                <Link to="/topclient">Top Client<br/></Link>
                <Link to="/lastmonthtotal">Last Month Total</Link>
            </>
        );
    }

}

export default Home;