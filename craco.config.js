const path = require("path");

// const resolvePath = p =>

module.exports = {
  webpack: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
};
