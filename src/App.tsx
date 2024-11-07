import { useEffect } from "react";

import { UserClient } from "./proto/generated/user_grpc_web_pb";
import { LoginRequest } from "./proto/generated/user_pb";

const client = new UserClient("http://localhost:8080", {}, {});
const request = new LoginRequest();

const App = () => {
  const username = "Duman";
  const password = "Duman123";

  const handleUserRegister = async () => {
    request.setUsername(username);
    request.setPassword(password);
    client.login(request, {}, (err, response) => {
      if (err) {
        console.error("Error:", err.message);
      } else {
        console.log("Response:", response.toObject());
      }
    });
  };

  useEffect(() => {
    handleUserRegister();
  }, []);

  return <div>Hello</div>;
};

export default App;
