import React, {useState} from 'react'
import CommentList from '../components/CommentList'
import CommentForm from '../components/CommentsForm'

const CommentBox = () => {
    const[comments, setComments] = useState([
        {
            id: 1,
            author: 'Abraham Lincoln',
            text: '73% of facts on the internet are made up on the spot'
        },
        {
            id: 2,
            author: 'Rick',
            text: 'Crop roation in the 14th centry was considerably more widespread'
        }
    ])

    const addComment = (submittedComment) => {
        console.log(submittedComment)
        submittedComment.id = Date.now()
        const updatedComments = [...comments, submittedComment]
        setComments(updatedComments)
    }
    
    return(
        <>
        <h1>Comments</h1>
        <CommentList comments={comments}/>
        <h1>Add a comment:</h1>
        <CommentForm onCommentSubmit={(comment) => addComment(comment)}/>
        </>
    )
}

export default CommentBox