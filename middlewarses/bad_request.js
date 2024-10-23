const badRequestHandler = (req, res, next) => {
    if (!req.body || !req.body.name) {
      const error = new Error("Expected ',' or '}' after property value in JSON at position.");
      error.status = 400;
      
      const stackTrace = error.stack.split('\n').slice(1).map(line => line.trim());
  
      return res.status(400).json({
        success: false,
        message: error.message,
        stack: process.env.NODE_ENV === 'development' ? stackTrace : error.stack,
      });
    }
    next();
  };
  
  export default badRequestHandler;