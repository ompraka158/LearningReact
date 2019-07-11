import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/dashboard'
import NavBar from './components/NavBar';

class App extends Component {
  state = { 
    about: [
        { id: 1, value: 0},
        { id: 2, value: 1},
        { id: 3, value: 3},
        { id: 4, value: 2}
    ] 
  };

  constructor() {
    super();
    console.log("App - Constructor");
  };

  componentDidMount() {
    console.log("App mounted");
  }

  handleReset = () => {
    const dashboard = this.state.about.map(c => {
        c.value = 0;
        return c;
    });
    this.setState({ dashboard })
  };

  handleDelete = (counterId) => {
    const about = this.state.about.filter(c => c.id !== counterId);
    this.setState({ about });
  };

  handleIncrement = product => {
    const about = [...this.state.about];
    const index = about.indexOf(product);
    about[index] = {...product}
    about[index].value++;
    this.setState({about})
  };
  render(){
    console.log('App Rendered');
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.about.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Dashboard 
            about={this.state.about}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
