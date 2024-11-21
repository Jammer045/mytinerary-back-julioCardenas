import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import User from "../models/User.js";

const passportGoogle = passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
}, async (accessToken, refreshToken, profile, done) => {
   console.log(profile);
   try {

    let user = await User.findOne({ email: profile.emails[0].value });
   if (!user) {
       user = new User({
           email: profile.emails[0].value,
           name: profile.name.givenName,
           lastName: profile.name.familyName,
           photo: profile.photos[0].value,
           verified: false,
           password: profile.id
       });
       await user.save();
   }
   return done(null, user);
    
   } catch (error) {
    return done(error, null);
   }
   
   
}));

export default passportGoogle;
