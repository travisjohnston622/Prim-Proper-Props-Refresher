import React, { Component } from 'react';

class PartyLeader extends Component {
    render() {
        const leader = 5 > 0 ? 'WOW' : 'suck';
        return (
            <div>
                <h2>Party Leader</h2>
                {this.props.leader && <h3>{this.props.leader.name}</h3>}
            </div>
        );
    }
};

export default PartyLeader;