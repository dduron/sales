import React, {Component} from 'react';
import axios from 'axios';

class NewProduct extends Component {

    state = {
        name: '',
        price: '',
        stock:''
      }
    
    handleChangeName = event => {
        this.setState({ name: event.target.value });
    }

    handleChangePrice = event => {
        this.setState({ price: event.target.value });
    }

    handleChangeStock = event => {
        this.setState({ stock: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.post('/products', { name: this.state.name,
            price: this.state.price,
            stock: this.state.stock })
            .then(res => {
                alert("Product Added!");
                console.log(res);
                console.log(res.data);
            })
     }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Product Name:
                        <input type="name" id="name" name="name" onChange={this.handleChangeName} />
                    </label>
                    <br/>
                    <label>
                        Product Price:
                        <input type="price" id="price" name="price" onChange={this.handleChangePrice} />
                    </label>
                    <br/>
                    <label>
                        Product Stock:
                        <input type="stock" id="stock" name="stock" onChange={this.handleChangeStock} />
                    </label>
                    <br/>
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}

export default NewProduct;