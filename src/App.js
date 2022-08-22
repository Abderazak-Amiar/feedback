
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import Feedbackstats from './components/Feedbackstats';
import FeedbackForm from './components/FeedbackForm';
function App() {

       const [feedback, setFeedback] = useState(FeedbackData)
        const reverse = false
        const handleDelete = (id)=>{
          setFeedback(feedback.filter((item)=>item.id!==id))
        }
        const newFeedback = (newFeedback) =>{
              newFeedback.id = uuidv4()
            
              setFeedback([newFeedback,...feedback])
        }
  
  return (
    <>
    <div className="container">
    <Header text="Reviews" bkgColor="rgba(0,0,0,0.4)" colorText="pink" />
    <FeedbackForm addFeedback={newFeedback}/>
    <Feedbackstats feedback={feedback} />
    <FeedbackList feedback={feedback} darkmode={reverse} handleDelete={handleDelete}/>
    </div>
    
         
  
    </>
    
  );
}

export default App;
