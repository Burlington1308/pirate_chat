import React, {useState} from "react";

const functionUrl = "https:///xxxxxx.lambda-url.eu-west-2.on"

type Message = {
  text: string,
  sender: "ai" | "user"
}

function App() {
  const [newInputValue, setNewInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const newMessage: React.SubmitEventHandler = async (e) => {
  e.preventDefault();
  setNewInputValue("");
  const newMessages: Message[] = [...messages, {
    text: newInputValue,
    sender: "user"
  }];

  const response = await fetch(functionUrl, {
    method: "POST",
    body: JSON.stringify({messages: newMessages})
  });

  setMessages([...newMessages, {
    sender: "ai",
    text: await response.text()
  }]);
}

  return (
    <main>
      <h1>Pirate Chat Bot</h1>
      <div>
        {messages.map((message, index) => <p key={index} className={"message " + message.sender}>
          {message.text}
        </p>)}
        
      </div>
      <form className="input-form" onSubmit={newMessage}>
        <input type="text" 
          placeholder="Message" 
          value={newInputValue}
          onChange={e => setNewInputValue(e.currentTarget.value)}
        />
        <input type="submit" value="send" />
      </form>
    </main>
  )
}

export default App
