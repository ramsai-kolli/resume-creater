import Result from './Result.jsx';
import React, {useState} from 'react';
function Education(props){
    const [school,setSchool] = useState("");
    const [title,setTitle] = useState("");
    const [sdate,setSdate] = useState();
    const [edate,setEdate] = useState();

     function handleClick(){
        const newSchool=document.getElementById("ei1").value;
        setSchool(newSchool);
        const newTitle=document.getElementById("ei2").value;
        setTitle(newTitle);
        const newSdate=document.getElementById("ei3").value;
        setSdate(newSdate);
        const newEdate=document.getElementById("ei4").value;
        setEdate(newEdate);
     }
    return(
        <>
         
             
            <div className="education">
                <p className="ep2">Education info</p>
                <form className="form2"> 
                 <lable for="ei1">School:</lable><br></br>
                <input type="text" id="ei1"></input><br></br>
                <lable for="ei2">Title of study:</lable><br></br>
                <input type="text" id="ei2"></input><br></br>
                <lable for="ei3">Start of the education:</lable><br></br>
                <input type="date" id="ei3"></input><br></br>
                <lable for="ei4">End of the education:</lable><br></br>
                <input type="date" id="ei4"></input><br></br>
                </form>
                <button onClick={handleClick}>Submit</button>
                 
            </div>
            <Result school1={school} title33={title} Sdate1={sdate} Edate1={edate} name1={props.name1} profe1={props.profe1} email1={props.email1} phone1={props.phone1} title11={props.title11} title22={props.title22}></Result>
        
         
        </>
    );
}
export default Education