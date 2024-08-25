
import PropTypes from 'prop-types';
function UserGreeting(obj){
 
 /*   if(obj.isLoggedIn){
        return <h2>welcome {obj.username}</h2>
    }
    else{
        return <h2>Please log in to continue</h2>
    } */
   return(obj.isLoggedIn ? <h2 className="correct">Welcome {obj.username}</h2> :
                           <h2 className="wrong">Please lod in to continue</h2>
   )
}
UserGreeting.proptypes = {
    isLoggedIn : PropTypes.bool,
    username : PropTypes.string,
}
UserGreeting.defaultProps={
    isLoggedIn :  false,
    username :  "Guest",
}
export default UserGreeting 