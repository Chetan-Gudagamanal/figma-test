import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

const MQTTClient = () => {
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(null);

  const publishDetectDrones = () => {
    ws.send('{"topic": "detect/drones", "msg": "Detecting drones..."}');
  }

  useEffect(() => {
    // Establish WebSocket connection
    const socket = new WebSocket('ws://localhost:8000');
    setWs(socket);

    socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages((prevMessages) => [
        ...prevMessages,
        { topic: data.topic, msg: data.msg },
      ]);
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    // Cleanup function to close the WebSocket connection
    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <h1>MQTT Messages</h1>
      <Button variant='outlined' onClick={()=>{publishDetectDrones()}}>Publish Detect Drones Message</Button>
      <div>
        {messages.map((message, index) => (
          <p key={index}>
            <strong>{message.topic}:</strong> {message.msg}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MQTTClient;