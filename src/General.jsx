          import Education from './Education.jsx';
           import React,{useState} from 'react';
           function General(){
                const [title,setTitle] = useState("");
                const [title2,setTitle2] =useState("");
                const [name,setName] = useState(" ");
                const [profe,setProfe] =useState("");
                const [email,setEmail] =useState("");
                const [phone,setPhone] =useState();
            
           
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
                setTitle2("Contact me:");
           
             }
               
               return(
                  <> 
              
                  <div className="general">
                   
                    <h3 className="p1">General</h3>
                    <form className="form1" >
                    <lable for="name1">Name:</lable><br></br>
                    <input type="text" id="name1" ></input><br></br>
                    <lable for="profe1">Proffession:</lable><br></br>
                    <input type="text" id="profe1"></input><br></br>
                    <lable for="email1">Email:</lable><br></br>
                    <input type="text" id="email1"></input><br></br>
                    <lable for="phone1">Phone:</lable><br></br>
                    <input type="tel" id="phone1" min="10"></input><br></br>
                    </form>
                    <button onClick={handleClick} >Submit</button>
                     
                    
                    </div> 
                      
               
                  <Education name1={name} profe1={profe} email1={email} phone1={phone} title11={title} title22={title2}></Education>
                   
                   
                  </>
               );
           }
           export default General