const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR } = require("../../config/config");
const { BadRequestError, UnauthorizedError } = require("../../utils/errors");
const { createUserToken } = require("../../utils/tokens");
const {
  validateFields,
  validateEmail,
  validatePassword,
} = require("../../utils/validate");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const loginUser = async (creds) => {
  const { email, password } = creds;

  const requiredCreds = ["email", "password"];
  validateFields({
    required: requiredCreds,
    obj: creds,
    location: "Backend: Login User",
  });
  validateEmail(email);

  const normalizedEmail = email.toLowerCase();
  const user = await prisma.user.findFirst({
    where: { email: normalizedEmail },
  });

  if (user) {
    const isValid = await bcrypt.compare(password, user.password);
    if (isValid === true) {
      delete user["password"];
      const userToken = await createUserToken(user);
      return { user, userToken };
    }
    console.log("Wrong password!");
  }
  throw new UnauthorizedError("Invalid Password/Email combination");
};

const registerUser = async (creds) => {
  const { firstName, lastName, username, email, password } = creds;

  const requiredCreds = [
    "firstName",
    "lastName",
    "username",
    "email",
    "password",
  ];
  validateFields({
    required: requiredCreds,
    obj: creds,
    location: "Backend: Register User",
  });
  validateEmail(email);
  // validatePassword(password);

  const normalizedEmail = email.toLowerCase();
  const existingUserWithEmail = await prisma.user.findFirst({
    where: { email: normalizedEmail },
  });
  if (existingUserWithEmail)
    throw new BadRequestError(
      `User with Email ${normalizedEmail} already exists`
    );

  const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
  const user = await prisma.user.create({
    data: {
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: normalizedEmail,
      password: hashedPassword,
      imageUrl: "sample.png", // Change to user input image later
    },
  });

  delete user["password"];
  const userToken = await createUserToken(user);
  return { user, userToken };
};

const updateUser = async (id, data) => {
  // Add validation & Also enable the user to update password that is hashed
  // How do i add authentication to this? Probably in the route??
  const updatedUser = await prisma.user.update({
    where: { id: id },
    data: data,
  });
  console.log(updatedUser);
  if (updateUser) return { isSuccess: true };
  else return { isSuccess: false };
};

module.exports = { loginUser, registerUser, updateUser };
