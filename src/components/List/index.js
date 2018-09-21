import React, { Component } from 'react';
import './List.css';
import SearchInput, {createFilter} from 'react-search-input';

const KEYS_TO_FILTERS = ['name', 'age', 'sex', 'lastname']
class List extends Component {
  constructor (props) {
     super(props)
     this.state = {
       searchTerm: '',
       apidata:[]
     }
     this.searchUpdated = this.searchUpdated.bind(this)
   }

  componentDidMount(){
  fetch('https://venbest-test.herokuapp.com/')
  .then((response)=>response.json())
  .then(json => this.setState({apidata:json})).then(console.log( this.state.apidata))
  }
  render() {

 const filteredNames = this.state.apidata.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (



         <div class="flex">
         <div class="flex-venbest">
               <div class="flex-venbest__item "><div class="flex-venbest__item__heading">
               <strong>         <SearchInput placeholder="age" className="search-input" onChange={this.searchUpdated} /></strong>
               </div>{filteredNames.map(key => (
               <div class="flex-venbest__item__content">
               <p>{key.age}</p>
               </div>
               )
             )
             }
               </div>
               <div class="flex-venbest__item "><div class="flex-venbest__item__heading">
               <strong>         <SearchInput placeholder="sex" className="search-input" onChange={this.searchUpdated} /></strong>
               </div>{filteredNames.map(key => (
               <div class="flex-venbest__item__content">
               <p>{key.sex}</p>
               </div>
               )
             )
             }
               </div>
               <div class="flex-venbest__item "><div class="flex-venbest__item__heading">
               <strong>         <SearchInput placeholder="lastname" className="search-input" onChange={this.searchUpdated} /></strong>
               </div>{filteredNames.map(key => (
               <div class="flex-venbest__item__content">
               <p>{key.lastname}</p>
               </div>
               )
             )
             }
               </div>
               <div class="flex-venbest__item "><div class="flex-venbest__item__heading">
               <strong>         <SearchInput placeholder="name" className="search-input" onChange={this.searchUpdated} /></strong>
               </div>{filteredNames.map(key => (
               <div class="flex-venbest__item__content">
               <p>{key.name}</p>
               </div>
               )
             )
             }
               </div>
   </div>
         </div>
       )
     }

     searchUpdated (term) {
       this.setState({searchTerm: term})
     }

}




export default List;
