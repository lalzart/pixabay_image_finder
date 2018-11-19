import React, { Component } from 'react';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './component/navbar/NavBar';
import Search from './component/search/Search';


class App extends Component {
  render() {
    return (
      <MultiThemeProvider>
        <div>
          <NavBar />
          <Search />
        </div>
      </MultiThemeProvider>
    )
  }
}

export default App;
