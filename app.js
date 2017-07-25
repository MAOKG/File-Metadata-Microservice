var express = require('express'),
    app = express(),
    multer = require('multer'),
    upload = multer({dest: 'uploads/'});

app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  res.render('landing');
});

app.post('/upload', upload.single('file'),function(req,res) {
  if (req.file) {
    res.send('The size of your file is ' + req.file.size + ' bytes');
  } else {
    res.send('Please upload a valid file!');
  }

});

// app.listen(3000, function() {
//   console.log('The server has started!');
// });
app.listen(process.env.PORT, process.env.IP, function() {
   console.log('The Server Has Started!');
});
