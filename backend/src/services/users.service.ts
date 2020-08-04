import User, { IUser } from "../models/User";

class UserService {
  async getAllUsers() {
    let data = await User.find();
    return data;
  }
  async getByIdUser(id: string) {
    let data = await User.findById(id);
    return data;
  }
  async createUser(data: IUser) {
    let create = new User(data);
    await create.save();
    return { create, message: "User create" };
  }
  async updateUser(id: string, data: IUser) {
    let update = await User.findByIdAndUpdate(id, data) as IUser
    let dataUpdate = await User.findById(update.id);
    return { dataUpdate, message: "User update" };
  }
  async deleteUser(id: string) {
    let userDelete = await User.findByIdAndRemove(id) as IUser;
    return { userDelete, message: "User delete" };
  }
}

export default new UserService();
