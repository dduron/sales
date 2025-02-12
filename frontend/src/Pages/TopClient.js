import React, {Component} from 'react';
import axios from 'axios';

class TopClient extends Component {

    state = {
        topClient: []
      }
    
    componentDidMount() {
    axios.get(`/sales/findtopclient`)
        .then(res => {
        const topClient = res.data;
        this.setState({ topClient });
        })
    }

    render() {
        return (
            <div>
                <p>
                    <ul>
                        {
                        this.state.topClient
                            .map(theTopClient =>
                            <li key={theTopClient.id}>{theTopClient.name} {theTopClient.email}</li>
                            )
                        }
                    </ul>
                </p>
            </div>
        );
    }
}

export default TopClient;