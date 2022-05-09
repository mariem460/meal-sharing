import Nav from './Nav';
import Meals from './Meals';
import MealById from './MealById';
import ReservationForm from './ReservationForm';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import './App.css';
import AddMeal from './AddMeal';


function App() {
  return (  
    <div>
      <Router>
      <div className="App">
        <Nav/>
        <div className='welcome-img'>
          <h1 className='welcome-text'>Welcome to Share Meals Application!</h1>
        </div>
        <div className='intro'>
          <h4>
          Sharing a meal with someone, eating and drinking together behind the same table is one of the most important manifestations of sociality in all cultures.
           Eating together confirms the sense of belonging, being part of a community.
          </h4>
        </div>
        <Routes>
          <Route path='/meals' element={<Meals/>}/>
          <Route path='meals/:id' element={<MealById/>} />
          <Route path='meals/add' element={<AddMeal/>}/>
          <Route path='meals/reservations' element={<ReservationForm/>}/>
        </Routes>
        <footer className='footer'>
        <div className="footer-items">
          <ul>
            <li><a href="#">Conad city, Via San Vigilio, 6, 38010 Spormaggiore TN, Italy</a></li>
            <li><a href="#">Follow us</a></li>
            <li><a href="#">Stores</a></li>
            <li><a href="#">Our Blog</a></li>
            <li>© 1998-2022 RANDOM.ORG</li>
          </ul>
        </div>
        
        </footer>

     
      </div>
    </Router>
  </div>


    
  );
}




export default App;
