import React, {useState} from "react";

const CommentForm = ({onCommentSubmit}) => {

    const [author, setAuthor] = useState("")
    const [text, setText] = useState("")

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value)
    }
    
    const handleTextChange = (event) => {
        setText(event.target.value)
    }
    
    const handleFormSubmit = (event) => {
        console.log("handle")
        event.preventDefault()
        const authorToSubmit = author.trim()
        const textToSubmit = text.trim()
        if(!authorToSubmit || !textToSubmit){
            return
        }
        onCommentSubmit({
            author: authorToSubmit,
            text: textToSubmit
        })

        setAuthor("")
        setText("")
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <input 
                type="text"
                placeholder="Your name"
                value={author}
                onChange={handleAuthorChange}
            />
            <input 
                type="text"
                placeholder="Say something..."
                value={text}
                onChange={handleTextChange}
            />
            <input 
                type="submit"
                value='POST'
            />
        </form>
    )
}

export default CommentForm