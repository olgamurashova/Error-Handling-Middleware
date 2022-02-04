app.use((req, res, next) => {
  const newvalue = PossiblyProblematicOperation();
  if(newValue === undefined){
    let undefinedError = new Error('newValue was not defined');
    return next(undefinedError);
  }
    next();
  });

app.use((err, req, res, next) => {
  const status = err.status || 500;
  req.status(status).send(err.message);
});
