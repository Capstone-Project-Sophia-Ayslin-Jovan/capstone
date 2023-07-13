const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR } = require("../../config/config");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const loginUser = async (creds) => {
  const { email, password } = creds;
  const user = await prisma.user.findFirst({ where: { email: email } });

  if (user) {
    const isValid = await bcrypt.compare(password, user.password);
    if (isValid === true) {
      return user;
    }
  }

  throw "Invalid Password/Email combination";
};

const registerUser = async (creds) => {
  const { username, password, firstName, lastName, email } = creds;
  const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

  const user = await prisma.user.create({
    data: {
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: hashedPassword,
      imageUrl: "sample.png",
    },
  });

  return user;
};

module.exports = { loginUser, registerUser };
