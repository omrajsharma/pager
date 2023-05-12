import React from 'react'
import './MessageCard.css'

function MessageCard({
    anything
}) {
    return (
        <div className='message-card'>
            <div className='user-name'> {anything.userName} </div>
            <div className='user-message'> {anything.userMessage} </div>
        </div>
    )
}

export default MessageCard
