app.get("/folder/page", function(request, response)){
  var x = request.query.foo;

  response.send({foo:x});
}
