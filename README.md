## Error Handling Middleware

## General information

Express has its own error-handler, which catches errors that haven’t handled. But if we anticipate an operation might fail, we can invoke our error-handling middleware. We do this by passing an error object as an argument to next(). Usually, next() is called without arguments and will proceed through the middleware stack as expected. When called with an error as the first argument, however, it will call any applicable error-handling middleware.

## Tools used

+ JavaScript
+ VS
+ Node
+ Express
+ Command line
