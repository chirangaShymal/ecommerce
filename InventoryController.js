const Invent = require('../Model/inventoryModel');

const getAllInvent = async (req, res, next) => {
  let invent;
  //get all users
  try {
    invent = await Invent.find();
    //not user display
    if (!invent || invent.length === 0) {
      return res.status(404).json({ message: "No Inventory found" });
    }
    //display all users
    return res.status(200).json({message:"User details fetched.",data:invent });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

//data insert
const addInvent = async (req, res, next) => {
  const { name, price, details} = req.body;

  try {
    let invent = new Invent({ name, price , details });
    await invent.save();
    return res.status(200).json({ invent });
  } catch (err) {
    console.log(err);
  }
  //not insert user
};
const getById = async (req, res, next) => {
  const id = req.params.id;

  try {
    const invent = await Invent.findById(id);

    if (!invent || invent.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    return res.status(200).json({ data:invent});
   
  } catch (err) {
    console.log(err);
  }
  
};
const UpdateInvent = async (req,res,next) => {
  const id = req.params.id;
  const { name, price,details} = req.body;

  try{
    const users = await Users.findByIdAndUpdate(id,{
      name:name,price:price,details:details
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
const deleteInvent = async (req,res,next) => {
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
exports.getAllInvent = getAllInvent;
exports.addInvent = addInvent;
exports.getById = getById;
exports.UpdateInvent = UpdateInvent;
exports.deleteInvent = deleteInvent;
