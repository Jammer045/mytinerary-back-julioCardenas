const errorServerHandler = (err, req, res, next) => {
    console.log(err);
    return res.status(500).json({ 
        success: false, 
        response: err,
        message: "Internal server error" });
};
    

export default errorServerHandler;