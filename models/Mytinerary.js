import { Schema, model } from "mongoose";

let collection = "itineraries";

let schema = new Schema({
    photo: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: String,
        required: true,
        trim: true
    },
    duration: {
        type: Number,
        required: true,
        min: 0
    },
    likes: {
        type: Number,
        default: 0,
        min: 0
    },
    hashtags: {
        type: [String],
        required: true,
        validate: {
            validator: function(hashtags) {
                return hashtags.length === 3;
            },
            message: 'Debe proporcionar exactamente 3 hashtags'
        }
    },
    city: {
        type: Schema.Types.ObjectId, 
        ref: 'cities',               
        required: true
    },
    comments: [{
        user: {
            type: String,
            required: true,
            trim: true
        },
        text: {
            type: String,
            required: true,
            trim: true
        },
        date: {
            type: Date,
            default: Date.now
        },
    }]
});

let Itinerary = model(collection, schema);

export default Itinerary;