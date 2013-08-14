var emailer = require("./index")({
  key: process.env.AWS_ACCESS_KEY,
  secret: process.env.AWS_SECRET_KEY
});

emailer.sendWelcomeEmail({
  to: "bonjuckley@gmail.com",
  fullName: "jonbuckley"
}, function(err, email) {
  console.log(arguments);
});
