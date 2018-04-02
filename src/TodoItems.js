/**
 * @Author: Ali Ismail
 * @Date:   2018-04-01T15:31:33+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-02T07:53:58+02:00
 */
 import React, { Component } from "react";
 import FlipMove from "react-flip-move";
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
         <FlipMove duration={250} easing="ease-out">
         {listItems}
       </FlipMove>
       </ul>
     );
   }
 }
 export default TodoItems;
