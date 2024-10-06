const fs = require("fs");

function eventLogs(fileName) {
  return (req, res, next) => {
    fs.appendFile(
      fileName,
      `\n Date->${Date.now()} : IP Address -> ${req.ip} : Request Type -> ${
        req.method
      } : ${req.path}\n`,
      (err, data) => {
        if (err) console.log(err);
        next();
      }
    );
  };
}

module.exports = {
    eventLogs,
}
