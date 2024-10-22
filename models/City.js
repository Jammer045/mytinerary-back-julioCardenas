import { Schema, model } from "mongoose";

let collection = "cities";
let schema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    likes: {
        type: Number,
        default: 0,
        min: 0
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    currency: {
        type: String,
        required: true,
        trim: true
    },
    language: {
        type: String,
        required: true,
        trim: true
    },
    altitude: {
        type: Number,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    climate: {
        type: String,
        required: true,
        trim: true
    },
    continent: {
        type: String,
        required: true,
        trim: true
    }
});

let City = model(collection, schema);

export default City;