import {AiOutlineWechat} from 'react-icons/ai';

const ChitChat = () => {
    return(
        <div className="chat-notification">
        <div className="chat-notification-logo-wrapper">
          {/* <img className="chat-notification-logo" src="/img/logo.svg" alt="ChitChat Logo"/> */}
          <AiOutlineWechat size='1.5rem' color='#1AA7EC' className="chat-notification-logo"/>
        </div> 
        <div className="chat-notification-content">
          <h4 className="chat-notification-title">ChitChat</h4>
          <p className="chat-notification-message">You have a new message!</p>
        </div>
      </div>
    )
}

export default ChitChat