import jwt from 'jsonwebtoken'
const checkAuth = (req, res, next) => {
  try {
    const token = req.cookies?.token;
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "unauthorized user",
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if(!decoded || !decoded.id){
      return res.status(401).json({
        success: false,
        message: "unauthorized user",
      });
    }
    req.userId = decoded.id;
    next();
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
}
export default checkAuth