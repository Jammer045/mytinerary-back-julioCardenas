import mongoose from "mongoose";

let url= process.env.URI_MONGO;

console.log(url);

mongoose.connect(url)
.then(() => {
    console.log("Te conectaste exitosamente a la base de datos");
})
.catch((err) => {
    console.log(err);
});
