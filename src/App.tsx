import {useState} from "react";

type Message = {
  text: string,
  sender: "ai" | "user"
}

function App() {

  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Sample message",
      sender: "ai"
    },
    {
      text: "Sample message",
      sender: "user"
    }
  ]);

  return (
    <main>
      <h1>Pirate Chat Bot</h1>
      <div>
        {messages.map((message, index) => <p key={index} className={"message " + message.sender}>
          {message.text}
        </p>)}
        
      </div>
      <form className="input-form">
        <input type="text" placeholder="Message" />
        <input type="submit" value="send" />
      </form>
    </main>
  )
}

export default App
