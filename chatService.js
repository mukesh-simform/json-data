// MockChatService class (re-defined for React Native context)
// This class simulates the backend chat service.
// It immediately sends a reply after receiving a message.
class MockChatService {
  constructor(onNewMessageCallback) {
    this.onNewMessageCallback = onNewMessageCallback;
    this.isConnected = false;
    console.log("MockChatService: Initialized.");
  }

  // Simulates connecting to the chat service.
  connect() {
    return new Promise(resolve => {
      setTimeout(() => {
        this.isConnected = true;
        console.log("MockChatService: Connected.");
        this.onNewMessageCallback({ sender: 'System', text: 'Welcome to the chat! Type a message to start.' });
        resolve(true);
      }, 500); // Simulate network delay
    });
  }

  // Simulates sending a message to the service.
  sendMessage(messageText) {
    if (!this.isConnected) {
      console.error("MockChatService: Not connected. Cannot send message.");
      return;
    }

    console.log(`MockChatService: Received message: "${messageText}"`);

    // Simulate an immediate reply from the service.
    // In a real scenario, this would involve an API call and a response.
    setTimeout(() => {
      const replyText = `Echo: "${messageText}" (Received at ${new Date().toLocaleTimeString()})`;
      this.onNewMessageCallback({ sender: 'Service', text: replyText });
      console.log(`MockChatService: Sent reply: "${replyText}"`);
    }, 300); // Small delay to simulate processing
  }

  // Simulates disconnecting from the chat service.
  disconnect() {
    return new Promise(resolve => {
      setTimeout(() => {
        this.isConnected = false;
        console.log("MockChatService: Disconnected.");
        resolve(true);
      }, 300); // Simulate network delay
    });
  }
}
