const User = require('../model/user');

async function handleAllUser(req, res) {
  const allUser = await User.find();
  res.status(200).json(allUser);
}
async function handleSingleUser(req, res) {
  const findUser = await User.findById(req.params.id);
  if (!findUser) return res.status(404).json({ error: 'user not found' });
  return res.json(findUser);
}
async function handleAddUser(req, res) {
  const { title, job } = req.body;
  const newUser = new User({ title, job });
  await newUser.save();
  res.status(201).json({ msg: 'user create successfully', user: newUser });
}
async function handleUpdateUser(req, res) {
  const { title, job } = req.body;
  await User.findByIdAndUpdate(req.params.id, { title, job });
  return res.json({ msg: 'success' });
}
async function handleDeleteUser(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ msg: 'successfully delete ' });
}

module.exports = {
  handleAllUser,
  handleSingleUser,
  handleAddUser,
  handleUpdateUser,
  handleDeleteUser,
};
