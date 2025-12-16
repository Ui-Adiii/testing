import jwt from 'jsonwebtoken'
const generateAuthToken = (id,jwtSecret) => {
  return  jwt.sign({ id}, jwtSecret, { expiresIn: '7d' });
}
const verifyAuthToken = (token, jwtSecret) => {
    return jwt.verify(token, jwtSecret);
}
export { generateAuthToken, verifyAuthToken}