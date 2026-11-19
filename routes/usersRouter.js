var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var itensRouter = require('./routes/itens');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/itens', itensRouter);