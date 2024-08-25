/*import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
function App(){
  return(  
    <> 
    <Footer></Footer>
<h1>testing </h1>
    <Header></Header>
    <Food></Food>
    </>
  );
}
export default App */
 
/* import Card from './Card.jsx'
function App(){
       
  return(
    <> 
       <Card></Card>
       <Card></Card>
       <Card></Card>
   </>
  );
}
export default App  */

//HOW TO STYLE REACT COMPONENTS WITH CSS
//------------------------------------------
//(not including external frameworks or preprocessors)

//1.EXTERNAL
//2.MODULES
//3.INLINE

/*
import Button from './Button/Button.jsx'
function App(){

  return(
      <Button></Button>
  );
}
export default App   */

//props=read-only properties that are shared between components.
//       A parent can send data to a child component.
//            <componenet key=value/>

//propTypes =a mechanism that ensures that the passed value
//              is of the correct datatype
//             age:propTypes.number

//defaultProps =default values for props in case they aare not 
//               passed from the parent component
//               name:"Guest"
/*  import Student from './Student.jsx'
function App(){
  return(
    <>
  <Student name="ram" age = {23} isStudent={true} ></Student>
    <Student name="srinu" age = {28} isStudent={false} ></Student>
    <Student name="chiru" age = {25} isStudent={true} ></Student>
    <Student></Student>
    <Student name ="jayant"></Student>
    </>
    
  );

}
export default App  */

//conditional rendering = allows you to control what gets rendered
//                        in your application based on certain conditions 
//                        (show ,hide,or change components)


/* import UserGreeting from './UserGreeting.jsx'
function App(){
  return(
    <>
    <UserGreeting isLoggedIn={ true}  username="Bro code"    ></UserGreeting>
    </>
  );

}
export default App */

/*
import List from './List.jsx'
function App(){
  return(
    <List></List>
  );
      
}
export default App
*/

/*
import List2 from './List2.jsx'
function App(){
const fruits=[  {id: 1,name:"apple",calories: 95},
     {id: 3,name:" orange",calories: 105},
      {id: 2,name:"banana",calories: 45},
      {id: 4,name:" coconut",calories: 159}, 
      {id: 5,name:" pineapple",calories: 37}];
const vegetables=[{id: 6,name:"potatos",calories: 39},
                {id: 7,name:"  tamatos",calories:  123},
                {id: 8,name:" carrots",calories:  55},
                {id: 9,name:"  corn",calories:  178}, 
                {id: 10,name:"  bringel",calories:  35}];            
  return(
    <> 
    {fruits.length  > 0 ? <List2 items={fruits} category="Fruits"></List2> : null}
    {vegetables.length > 0 ? <List2 items={vegetables} category="Vegetables"></List2> : null}
    </>
  );
      
}
export default App  */

//click event =An interaction when a user clicks on a specific element.
//                we can respond to click by passing
//                a callback to the onClick event handler.

  /*import Button2 from './Button2.jsx'
function App(){
  return(
     <>
       <Button2></Button2>
     </>
        );
}
export default App  */

/*
   import ProfilePicture from './ProfilePicture.jsx'
function App(){
  return(<ProfilePicture></ProfilePicture>)
}
export default ProfilePicture   */


//React hook =Special function that allows functional components
//              to use React features without writing  class components(React v16.8)
//              (useState,useEffect,useContext,useReducer,useCallback, and more...)

//useState()= A React hook that allows the creation of the stateful variable
//            AND a setter function to update its value in the virtual DOM.
//            [name,setName]

/*  import MyComponent from './MyComponent.jsx'
function App(){
  return(<MyComponent></MyComponent>);
}
export default App  */

/*  import  Counter from './Counter.jsx'
function App(){
  return(
    <Counter></Counter>
  );
}  
export default App   */

/*
import MyComponent from './MyComponent2.jsx'
function App(){
  return(
    <MyComponent></MyComponent>
  );
}
export default MyComponent  */

/*   import ColorPicker from './ColorPicker.jsx'
function App(){
  return(
     <ColorPicker></ColorPicker>
  );
}
export default App  */
/*
import MyComponent from './MyComponent3.jsx'
function App(){
  return(
    <MyComponent></MyComponent>
  );
}
export default App  */
/*
import MyComponet from './MyComponent4.jsx'
function App(){
  return(
    <MyComponet></MyComponet>
  );
}
export default App  */
/*
import MyComponent from './MyComponent5.jsx'
function App(){
  return(
    <MyComponent></MyComponent>
  );
}
export default App */
/*
import MyComponent from './MyComponent5.jsx'
function App(){
  return(
    <MyComponent></MyComponent>
  );
}
export default App  */
/*
import ToDo from './ToDoList.jsx'
function App(){
  return(
   <ToDo></ToDo>
  );
}
export default App   */
/*
import MyComponent from './MyComponent6.jsx'
function App(){
  return(
    <MyComponent></MyComponent>
  );
}
export default App  */
/*
import MyComponent from './MyComponent7.jsx'
function App(){
  return(
    <MyComponent></MyComponent>
  );
}
export default App   */
/*
import DigitalClock from './DigitalClock.jsx'
function App(){
  return(
     <DigitalClock></DigitalClock>
  );
}
export default App  */


//useContext() = React Hook that allows you to share values
//                between multiple levels of components
//                without passing props through each level

/*
import ComponentA from './ComponentA.jsx'
import React from 'react';
function App(){
  return(
    <>
      <ComponentA></ComponentA>
    </>
  )
}
export default App  */
/*
import MyComponent8 from './MyComponent8.jsx'
function App(){

  return(
    
      <MyComponent8></MyComponent8>
  
  );
}
  export default App;  */

  /*
import Stopwatch from './Stopwatch.jsx';
function App(){

  return(
    
       <Stopwatch></Stopwatch>
  
  );
}
  export default App; */

import General from './General.jsx';
function App(){

  return(
    
       <General></General>
  
  );
}
  export default App;