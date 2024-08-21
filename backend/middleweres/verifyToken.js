const jwt = require("jsonwebtoken");
const verifyToken = async (req, res, next) => {
  const authHeader = req.header("authorization");
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(400).json({
      success: false,
      message: "unauthorize",
    });
  }
  try {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({
          success: false,
          message: "Forbieden Request",
        });
      }
      req.user = {
        id: user.id,
        author: user.author,
        accountType: user.accountType,
      };
      next()
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
