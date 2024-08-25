/*
function Button2(){
    let count=0;
    const handleClick = (name) => {
        if(count<3)
        {
            count++;
            console.log(name,"you click me ",count,"times");
        }
        else{
            console.log(name,"stop click me ");
        }
    };
//const handleClick2=(name) => console.log(name,"stop clicking me");
   return(<button onClick={()=>handleClick("Bro")}> Click me </button>);
}
export default Button2
*/

function Button2(){
    const handleClick = (e) => e.target.textContent ="changed";
    return(<button onClick={(e)=> handleClick(e)}> click me once</button>);
}
export default Button2