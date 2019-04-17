import React, { Component } from 'react';

import PhysiciansList from './PhysiciansList.jsx';
import AppointmentsList from './AppointmentsList.jsx';
import '../style.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            physicians: null,
            selectedPhysician: null,
        }
        this.selectPhysicianHandler = this.selectPhysicianHandler.bind(this);
    }

    selectPhysicianHandler(e) {
        fetch('/appointments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: e.currentTarget.textContent })
        })
        .then(res => res.json())
        .then(json => {
            this.setState({ selectedPhysician: json })
        })
    }

    componentDidMount() {
        fetch('/physicians')
        .then(res => res.json())
        .then(json => {
            this.setState({ physicians: json })
        })
    }

    render() {
        return (
            <div className='content'>
                <PhysiciansList 
                    physicians={this.state.physicians} 
                    selectPhysicianHandler={this.selectPhysicianHandler}
                    physician={this.state.selectedPhysician}
                />
                <AppointmentsList physician={this.state.selectedPhysician} />
            </div>
        )
    }
}