import React, { Component } from 'react';
import router from './router';
// import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />

        {router}

        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
