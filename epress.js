import express from "express";
import mongoose, { mongo } from "mongoose";
import path from "path";
const app = express();
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is Running ON Port ${PORT}`);
});

app.use(express.urlencoded({ extended: true }));

/*

CRUD -----> Create, Read, Update, Delete

Create ---> POST (Method)
Read ---> GET (Method)
Update ---> PUT (Method)
Delete ---> DELETE (Method)

*/

// GET (Method)

const users = [
  {
    id: 1,
    name: "John Doe",
    age: 28,
    email: "johndoe@example.com",
    isActive: true,
    role: "Developer",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 32,
    email: "janesmith@example.com",
    isActive: false,
    role: "Designer",
  },
  {
    id: 3,
    name: "Michael Johnson",
    age: 40,
    email: "michaelj@example.com",
    isActive: true,
    role: "Manager",
  },
  {
    id: 4,
    name: "Emily Davis",
    age: 25,
    email: "emilyd@example.com",
    isActive: false,
    role: "Intern",
  },
  {
    id: 5,
    name: "David Brown",
    age: 30,
    email: "davidb@example.com",
    isActive: true,
    role: "Engineer",
  },
];

app.get("/", (req, res) => {
  // res.json({ status: 201, message: "Data Fetched Succesfully", users });

  // console.log(path.resolve()+"/index.html")
  // res.sendFile(path.resolve()+"/index.html");

  // let halfPath = path.resolve();
  // let joinedPath = path.join(halfPath, "./index.html");

  // res.sendFile(joinedPath);

  // CSS File (Static)

  app.use(express.static(path.join(path.resolve(), "public")));

  res.render("index.ejs");
});

mongoose
  .connect("mongodb+srv://blog:blog@blog.2jqcc.mongodb.net/learnBackend")
  .then(() => console.log("Database Connected"));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const userModal = mongoose.model("Users", userSchema);

app.post("/user_data", async (req, res) => {
  console.log(req.body);

  let user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  await userModal.create(user)

  console.log("Data Saved Succesfully! ")

  res.json({ body: req.body });
});

app.get("/about", (req, res) => {
  res.send({
    title: "Hello World, This is About",
  });
});
