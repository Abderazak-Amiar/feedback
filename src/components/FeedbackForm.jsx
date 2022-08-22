    import React from 'react'
    import Card from './shared/Card'
    import {useState} from 'react'
    import Button from './shared/Button'
    import RatingSelect from './RatingSelect'

    function FeedbackForm({addFeedback}) {
        const [text, setText] = useState("")
        const [rating, setRating] = useState("")
        const [btnDisabled, setbtnDisabled] = useState(true)
        const [message, setMessage] = useState("")

        const textHandler = (e) =>{
        setText(e.target.value);
        if(text===null){
            setbtnDisabled(true) 
            setMessage(null)

        }else if(text!=null && text.trim().length<10){
            setbtnDisabled(true)
            setMessage("The Review should be at least 10 chars")

        }else{
            setbtnDisabled(false)
            setMessage(null)
        }
        }
        const handleSubmite = (e)=>{
            e.preventDefault()
            if(text.trim().length > 10){
                const newFeedback = {
                    text : text,
                    rating : rating,
                }
                addFeedback(newFeedback);
            }
        }
        return (
        <Card>
            <form onSubmit={handleSubmite}>
                <h2>Rate our services</h2>
                <RatingSelect select={(rating)=>setRating(rating)}/>
                <div className="input-group">
                    <input onChange={textHandler} value={text} type="text" />
                    <Button type='submit' isDisabled={btnDisabled}>Send</Button>
                
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
        )
    }

    export default FeedbackForm