export default {
  jwtSecret: process.env.JWT_SECRET || "tasitokenassessment",
  DB: {
    URI: process.env.MONGODB_URI || "mongodb://localhost/tasi-user-db",
    USER: process.env.MONGODB_USER,
    PASSWORD: process.env.MONGODB_PASSWORD,
  },
};  