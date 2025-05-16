const Users = require("../Model/UserModel");

const getAllUsers = async (req, res, next) => {
  let users;
  //get all users
  try {
    users = await Users.find();
    //not user display
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    //display all users
    return res.status(200).json({message:"User details fetched.",data:users });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

//data insert
const addUsers = async (req, res, next) => {
  const { name, gmail, phone, address } = req.body;

  try {
    let user = new Users({ name, gmail, phone, address });
    await user.save();
    return res.status(200).json({ user });
  } catch (err) {
    console.log(err);
  }
  //not insert user
};
const getById = async (req, res, next) => {
  const id = req.params.id;

  try {
    const user = await Users.findById(id);

    if (!user || user.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    return res.status(200).json({ data:user});
   
  } catch (err) {
    console.log(err);
  }
  
};
const UpdateUser = async (req,res,next) => {
  const id = req.params.id;
  const { name, gmail, phone, address } = req.body;

  try{
    const users = await Users.findByIdAndUpdate(id,{
      name:name,gmail:gmail,phone:phone,address:address
    });
    users = await Users.save();
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    return res.status(200).json({ data:users });


  } catch (err){
    console.log(err);
  }
};
const deleteUser = async (req,res,next) => {
  const id = req.params.id;

 
  try {
    const user = await Users.findByIdAndDelete(id);

    if (!user || user.length === 0) {
      return res.status(404).json({ message: "can not delete users " });
    }
    return res.status(200).json({ data:user });
  } catch (err) {
    console.log(err);
  }
}
exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;
exports.UpdateUser = UpdateUser;
exports.deleteUser = deleteUser;
