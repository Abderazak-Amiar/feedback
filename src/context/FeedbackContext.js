import {createContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid'
const FeedbackContext = createContext()

export const FeedbackProvider = ({children})=>{

    const [feedback, setFeedback] = useState([
        {
            id : 1,
            text : 'this is feedback 1',
            rating : 10
        },
        {
            id : 2,
            text : 'this is feedback 2',
            rating : 12
        },
        {
            id : 3,
            text : 'this is feedback 3',
            rating : 5
        }
    ])

    const handleDelete = (id)=>{
        setFeedback(feedback.filter((item)=>item.id!==id))
      }
      const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4()
      
        setFeedback([newFeedback,...feedback])
  }

return <FeedbackContext.Provider value={
    {feedback,
    handleDelete,
    addFeedback
    }
    }>

{children}

</FeedbackContext.Provider>
} 
export default FeedbackContext