import React, {Component} from 'react';
import axios from 'axios';

class LastMonthTotal extends Component {

    state = {
        lastMonthTotal: []
      }
    
    componentDidMount() {
    axios.get(`/sales/lastmonthtotal`)
        .then(res => {
        const lastMonthTotal = res.data;
        this.setState({ lastMonthTotal });
        })
    }

    render() {
        return (
            <div>
                <p>
                        {
                        this.state.lastMonthTotal
                        }
                </p>
            </div>
        );
    }
}

export default LastMonthTotal;