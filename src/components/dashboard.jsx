import React, { Component } from 'react';
import About from './about';

class Dashboard extends Component {

    render() { 
        const { onReset, onIncrement, onDelete, about } = this.props;
        return ( 
            <div>
                <button 
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2"
                >
                    Reset
                </button>
                { about.map(about => 
                    <About 
                        key={about.id} 
                        onDelete={onDelete}
                        onIncrement={onIncrement} 
                        about={about}>
                        {/* <h4>About #{about.id}</h4> */}
                    </About>
                )}
            </div>
        );
    }
}
 
export default Dashboard;