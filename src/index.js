const path = require('path'); // thư viện lấy ra đường dẫn
const express = require('express'); // thư viện express
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const { log } = require('console');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// http logger
app.use(morgan('combined'));

// template engine
app.engine('hbs', handlebars.engine({extname: '.hbs'})); // khai báo sử dụng engine tên là handlebars đặt là hbs
app.set('view engine', 'hbs'); // set view sử dụng hbs
app.set('views',path.join(__dirname, 'resources\\views'));  // __dirname trả về đường dẫn file đang chạy
// console.log(path.join(__dirname, 'resources\\views'));


app.get('/trang-chu', (req, res) => {
  res.render('home');
})
app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})