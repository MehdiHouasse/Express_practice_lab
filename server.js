const express = require ('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'css')));

const port = 5501;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const students = [
  { id: 1, name: 'Alina', age: 20 },
  { id: 2, name: 'Mark', age: 21 },
  { id: 3, name: 'Mehdi', age: 20 },
  { id: 4, name: 'lucy', age: 21 },
];

app.get('/students', function (req, res) {
  res.render('students/index', { students });

});
app.get('/students/:id', function (req, res) {
  const studentId = parseInt(req.params.id);
  const student = students.find(student => student.id === studentId);

  if (!student) {
    return res.status(404).send('Student not found');

  }

  res.render('students/show', { student });
});
