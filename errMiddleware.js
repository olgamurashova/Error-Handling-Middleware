/*In this segment we assign the return value of the function possiblyProblematicOperation() to newValue.
Then we check to see if this function returned anything at all. If it didn’t, we create a new Error and pass it to next(). 
This prompts the error-handling middleware to send a response back to the user,
but many other error-handling techniques could be employed (like logging, re-attempting the failed operation, and/or emailing the developer).*/

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


//Alternative code

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
  
