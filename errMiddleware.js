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
  res.status(status).send(err.message);
});


//Alternative code
/*Error handling middleware needs to be the last app.use() in our file. 
If an error happens in any of our routes, we want to make sure it gets passed to our error handler. 
The middleware stack progresses through routes as they are presented in a file, therefore the error handler should sit at the bottom of the file. */

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
  
