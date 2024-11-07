import { UserClient } from "../proto/generated/user_grpc_web_pb";

class UserService {
  client: UserClient;
  constructor() {
    this.client = new UserClient("http://localhost:8080", {}, {});
  }
}
