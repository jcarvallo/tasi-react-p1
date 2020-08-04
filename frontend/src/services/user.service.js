import users from "../data/user.json";

export default class UserService {
  async getUsers() {
    return await users;
  }
  async updateUser(data) {
    let localUser = JSON.parse(localStorage.getItem("users"));
    let update = [];
    for (let user of localUser) {
      if (user.dni === data.dni) {
        update.push(data);
      } else {
        update.push(user);
      }
    }
    localStorage.setItem('users',JSON.stringify(update))
    return await true
  }
}
