const User = require("../models/user.model");

const handleGetUsersHtml = async (req, res) => {
  const users = await User.find({});
  const html = `
        <ul style="list-style-type: none;">
            ${users
              .map(
                (user) => `
                <li>
                    ID : ${user.id}
                    <ul style="list-style-type: none;">
                        <li>First Name: ${user.firstName}</li>
                        <li>Last Name: ${user.lastName}</li>
                        <li>Email: ${user.email}</li>
                        <li>Gender: ${user.gender}</li>
                        <liProfession:${user.profession}</li>
                    </ul>
                </li>
            `
              )
              .join("")}
        </ul>
        `;
  return res.send(html);
};

const handleGetAllUsers = async (req, res) => {
  const users = await User.find({});
  return res.json(users);
};

const handlePostUser = async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.profession
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    profession: body.profession,
  });
  return res.status(201).json({ message: "every okay", id: result.id });
};

const handleGetUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  // .catch((err) => {
  //   if (err) return res.status(404).json({ message: "user not found" });
  // });
  // if (!user) return res.status(404).json({ message: "user not found" });
  return res.json(user);
};

const handleUpdateUserById = async (req, res) => {
  await User.findByIdAndUpdate();
  return res.json({ status: "patch pending" });
};

const handleDeleteUserById = async (req, res) => {
  await User.findByIdAndDelete();
  return res.json({ status: "delete pending" });
};

module.exports = {
  handleGetUsersHtml,
  handleGetAllUsers,
  handlePostUser,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
};
