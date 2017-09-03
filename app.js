const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const session = require('express-session')
const bodyParser = require('body-parser');

app.engine('mustache', mustacheExpress());
app.set('views','./views');
app.set('view engine', 'mustache')
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function(request, response){
  response.render('index')
});
//setting up Session middleware attributes
app.use(session({
  secret: 'chocolate',
  resave: false,
  saveUninitialized: true
}));

app.post('/login', function(request, response){
//grabbing values from HTML using body parser
  let user = request.body.user
  let pass = request.body.pass

console.log(session + 'Session Created')
//rendering results page after login
  response.render('results', {user: user})
})

app.post('/logout', function(request, response){
//giving user the option to log out of session
console.log(session + 'Session Destroy')
  response.render('index')
})












app.listen(3000, function(){ //node is looking for port 3000 and function proves it's
  console.log('Live From the Gutter');
});
