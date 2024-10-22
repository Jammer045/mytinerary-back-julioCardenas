import { Schema, model } from "mongoose";

let collection = "cities";
let schema = new Schema({
    id: {type: Number, required: true},
    title: {type: String, required: true},
    image: {type: String, required: true},
    likes: {type: Number, required: true},
});

let City = model(collection, schema);
export default City;