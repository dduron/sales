import React, {Component} from 'react';
import axios from 'axios';

class Clients extends Component {

    state = {
        clients: []
      }
    
    componentDidMount() {
    axios.get(`/clients`)
        .then(res => {
        const clients = res.data;
        this.setState({ clients });
        })
    }

    render() {
        return (
            <div>
                <p>
                    <ul>
                        {
                        this.state.clients
                            .map(client =>
                            <li key={client.id}>{client.name} {client.email}</li>
                            )
                        }
                    </ul>
                </p>
            </div>
        );
    }
}

export default Clients;