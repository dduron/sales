import React, {Component} from 'react';
import axios from 'axios';

class NewProduct extends Component {

    state = {
        idDelete: ''
      }
    
    handleChange = event => {
        this.setState({ idDelete: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.delete(`/products/${this.state.idDelete}`)
            .then(res => {
                alert("Product Deleted!");
                console.log(res);
                console.log(res.data);
            })
     }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        ID:
                        <input type="idDelete" id="idDelete" name="idDelete" onChange={this.handleChange} />
                    </label>
                    <br/>
                    <button type="submit">Delete</button>
                </form>
            </div>
        );
    }
}

export default NewProduct;