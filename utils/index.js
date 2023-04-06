const crypto = require("crypto");

exports.hashHmacSha256 = (string, secret) => {
    return crypto.createHmac('sha256', secret).update(string).digest('hex');
  };