import logo from './logo.png';
import './tugas9.css'

function ListThings(props){
  return(
    <><input type="checkbox"/><label>{props.name}</label></>
  )
}

function ToDoList(){
  return(
    <div className="container1">
      <div className="title">
        <img src={logo} alt="logo" />
        <h1>THINGS TO DO</h1>
        <p>During bootcamp in sanbercode</p>
      </div>
      <div className = "list">
        <ul>
          <li><ListThings name = "Belajar GIT & CLI" /></li>
          <li><ListThings name = "Belajar HTML & CSS" /></li>
          <li><ListThings name = "Belajar Javascript" /></li>
          <li><ListThings name = "Belajar ReactJs Dasar" /></li>
          <li><ListThings name = "Belajar ReactJs Advance" /></li>
        </ul>
        <button type="submit">SEND</button>
      </div>
    </div>
  )
}

export default ToDoList;
