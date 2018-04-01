/**
 * @Author: Ali Ismail
 * @Date:   2018-04-01T15:31:33+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-01T15:49:16+02:00
 */
 import React, { Component } from "react";

 class TodoItems extends Component {
   constructor(props){
     super(props);
     this.createTasks = this.createTasks.bind(this);
   }
   createTasks(item) {
     return<li onClick={() => this.delete(item.key)}
       key={item.key}>{item.text}</li>
   }

   delete(key) {
     this.props.delete(key);
   }
   render() {
     var todoEntries = this.props.entries;
     var listItems = todoEntries.map(this.createTasks);

     return (
       <ul className="theList">
         {listItems}
       </ul>
     );
   }
 }
 export default TodoItems;
