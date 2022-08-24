

import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import Feedbackstats from './components/Feedbackstats';
import FeedbackForm from './components/FeedbackForm';
import About from './pages/About';
import AboutIconLink from './components/AboutIconLink';
import Card from './components/shared/Card';
import {FeedbackProvider} from './context/FeedbackContext'

function App() {

     

    

    
  return (
    <FeedbackProvider>
    <Router>

    <div className="container">
     
    <Header text="Reviews" bkgColor="rgba(0,0,0,0.4)" colorText="pink" />
    <Routes>
    <Route exact   path='/' element={
      <>
        <FeedbackForm/>
    <Feedbackstats/>
    <FeedbackList/>
      </>

    }>
  
    </Route>

    <Route path='/about' element={<About/>}  />
    </Routes>
    <AboutIconLink/>
  
    <Card>
      <NavLink to='/' activeclassname="active">Home</NavLink>
      <NavLink to='/about' activeclassname="active">About</NavLink>
    </Card>
    
    </div>

    </Router> 
    </FeedbackProvider>

  );
}

export default App;
