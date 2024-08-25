import React,{useState} from 'react';
function General(){
     const [title,setTitle] = useState("");
     const [title2,setTitle2] =useState("");
     const [name,setName] = useState(" ");
     const [profe,setProfe] =useState("");
     const [email,setEmail] =useState("");
     const [phone,setPhone] =useState();
  
  //   function handleClick()
  //   function handleName(event){
   //     setName(event.target.value);
  //   }

  function handleClick(){
    const newName= document.getElementById("name1").value;
    setName(newName);
    const newProfe= document.getElementById("profe1").value;
    setProfe(newProfe);
    const newEmail= document.getElementById("email1").value;
    setEmail(newEmail);
    const newPhone= document.getElementById("phone1").value;
    setPhone(newPhone);
     setTitle("Name:");
     setTitle2("Contact me:")
  }
    
    return(
       <> 
        
        <div> 

       <div className="general">
          
         <p className="p1">General</p>
         <p>Name:</p>
         <input type="text" id="name1" ></input>
         <p>Profession:</p>
         <input type="text" id="profe1"></input>
         <p>Email:</p>
         <input type="text" id="email1"></input>
         <p>Phone:</p>
         <input type="number" id="phone1"></input><br></br>
         <p></p>
         <button onClick={handleClick} >Submit</button>
         
         </div>
         <div className="d2"> 
        
            <p>{title} {name}<br></br>{profe}</p>
             <p id="t2"> {title2}</p>
             <p>{email} <br></br> {phone}</p>
           </div>
       </div>
       </>
    );
}
export default General