import React from 'react'
import Comment from './Comment';

const CommentList = ({comments}) => {
    const commentNodes = comments.map((comment) => {
        return(
            <Comment author={comment.author} text={comment.text} key={comment.id}/>
        )
    })
    return(
        <>
        {commentNodes}
        </>
    )
}

export default CommentList