import {Link} from "react-router-dom"

function Nav() {

  return (
    <nav>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe5OASICuLFVRpUON1aA8Ibg34pSMspWa7Qw&usqp=CAU' className='logo'/>
        <ul className='nav-links'>
          <Link to="/meals">
            <li> Home </li>
          </Link>
            <Link to="meals/add">
            <li> Add meal </li>
            </Link>
         
        </ul>
    </nav>
  );
}

export default Nav;