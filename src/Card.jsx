import profilepic from './assets/ramcharan.jpg'
function Card(){
    return(
      <div className="card">
            <img className="image1" src={profilepic} alt="profile picture"></img>
            <h2>Bro vcode</h2>
            <p>i learn react</p>
      </div>
    );
}
export default Card