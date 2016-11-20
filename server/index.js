var express = require("express"),
    cors = require("cors");
var app = express();
app.use(cors());

app.get("/folder/page", function(request, response){
  var x = request.query.foo;
  response.send({foo:x});
});

app.listen(591);
