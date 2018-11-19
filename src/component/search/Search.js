 import React, { Component } from 'react'
 import TextField from 'material-ui/TextField/';
 import SelectField from 'material-ui/SelectField';
 import MenuItem from "material-ui/MenuItem";
 
class Search extends Component {
  state = {
    searchText: '',
    amount: 15,
    apiUrl: 'https://pixabay.com/api',
    apiKey: '10735772-81ce68098dfa6c924d804d3c0',
    images: []
  }

   render() {
     return (
       <div>
         <TextField 
          name="seachText"
          value={this.state.search}
          onChange={this.onTextChange}
          floatingLabelText="Search For  Free Stock Images"
          fullWidth={true}
         />
       </div>
     )
   }
 }
 
 export default Search;