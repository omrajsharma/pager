import React from 'react'
import MessageCard from './MessageCard';
import './MessageList.css'

function MessageList() {
    const [messages, setMessages] = React.useState([])

    React.useEffect(
        () => {
            fetch('https://testing-with-amir-default-rtdb.asia-southeast1.firebasedatabase.app/message.json')
            .then(response => response.json())
            .then(data => {
                let messageList = []
                for (let key in data) {
                    messageList.push(data[key])
                }
                let messageToDisplay = messageList;
                messageToDisplay = messageToDisplay.reverse()
                messageToDisplay = messageToDisplay.slice(0, 5)
                setMessages(messageToDisplay)
            });
        }, []
    )

    console.log(messages)

  return (
    <div className='message-container'>
      { messages.length > 0 && messages.map( message => <MessageCard anything={message} /> ) }
    </div>
  )
}

export default MessageList
