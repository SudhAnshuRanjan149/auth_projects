import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Models
import UserModel from "../Models/UserModel.js";

export const registerUser = async (req, res) => {
  try {
    const { email, password, confirmPassword } = req.body;

    // validation
    if (!email || !password || !confirmPassword) {
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });
    }

    if (password.length < 6) {
      return res.status(400).json({
        errorMessage: "Please enter password of atleast 6 characters.",
      });
    }

    // check if password is correctly entered or not
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ errorMessage: "Please enter the same password twice." });
    }

    // check if email already registered
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ errorMessage: "An account with this email already exists." });
    }

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // save a new user account to the database
    const newUser = new UserModel({ email, passwordHash });

    const saveduser = await newUser.save();

    // for valid user
    // sign the token
    const token = jwt.sign({ user: saveduser._id }, process.env.JWT_SECRET_KEY);

    // send the toekn in the HTTP-Only cookie
    res
      .cookie("token", token, { httpOnly: true })
      .json({ message: "User registered successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
};

// log in
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validation
    if (!email || !password) {
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });
    }

    // check if email already registered
    const existingUser = await UserModel.findOne({ email });
    if (!existingUser) {
      return res.status(401).json({ errorMessage: "Wrong credentials." });
    }

    // check if entered password correct or not
    const correctPassword = await bcrypt.compare(
      password,
      existingUser.passwordHash
    );

    if (!correctPassword) {
      return res.status(401).json({ errorMessage: "Wrong credentials." });
    }

    // for valid user
    // sign the token
    const token = jwt.sign(
      { user: existingUser._id },
      process.env.JWT_SECRET_KEY
    );

    // send the toekn in the HTTP-Only cookie
    res
      .cookie("token", token, { httpOnly: true })
      .json({ message: "user login successful" });
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
};

export const logoutUser = async (req, res) => {
  res
    .cookie("token", "", { httpOnly: true, expires: new Date(0) })
    .json({ message: "user log out successfully" });
};

export const isLoggedIn = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.json(false);
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY);

    res.send(true);
  } catch (err) {
    console.error(err);
    res.json(false);
  }
};
