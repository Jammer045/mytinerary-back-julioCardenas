import User from '../User.js';
import 'dotenv/config';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

const users = [
    {
        name: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        password: "Pass123!",
        country: "United States",
        photo: "https://randomuser.me/api/portraits/men/1.jpg",
        google: false,
        verified: false
    },
    {
        name: "María",
        lastName: "García",
        email: "maria.garcia@example.com",
        password: "Pass234@",
        country: "Spain",
        photo: "https://randomuser.me/api/portraits/women/2.jpg",
        google: false,
        verified: false
    },
    {
        name: "Akiko",
        lastName: "Tanaka",
        email: "akiko.tanaka@example.com",
        password: "Pass345#",
        country: "Japan",
        photo: "https://randomuser.me/api/portraits/women/3.jpg",
        google: false,
        verified: false
    },
    {
        name: "Luis",
        lastName: "Rodriguez",
        email: "luis.rodriguez@example.com",
        password: "Pass456$",
        country: "Argentina",
        photo: "https://randomuser.me/api/portraits/men/4.jpg",
        google: false,
        verified: false
    },
    {
        name: "Emma",
        lastName: "Smith",
        email: "emma.smith@example.com",
        password: "Pass567%",
        country: "United Kingdom",
        photo: "https://randomuser.me/api/portraits/women/5.jpg",
        google: false,
        verified: false
    },
    {
        name: "Mohammed",
        lastName: "Ahmed",
        email: "mohammed.ahmed@example.com",
        password: "Pass678&",
        country: "Egypt",
        photo: "https://randomuser.me/api/portraits/men/6.jpg",
        google: false,
        verified: false
    },
    {
        name: "Anna",
        lastName: "Kowalski",
        email: "anna.kowalski@example.com",
        password: "Pass789*",
        country: "Poland",
        photo: "https://randomuser.me/api/portraits/women/7.jpg",
        google: false,
        verified: false
    },
    {
        name: "Carlos",
        lastName: "Silva",
        email: "carlos.silva@example.com",
        password: "Pass890+",
        country: "Brazil",
        photo: "https://randomuser.me/api/portraits/men/8.jpg",
        google: false,
        verified: false
    },
    {
        name: "Sophie",
        lastName: "Martin",
        email: "sophie.martin@example.com",
        password: "Pass901=",
        country: "France",
        photo: "https://randomuser.me/api/portraits/women/9.jpg",
        google: false,
        verified: false
    },
    {
        name: "Alessandro",
        lastName: "Rossi",
        email: "alessandro.rossi@example.com",
        password: "Pass012!",
        country: "Italy",
        photo: "https://randomuser.me/api/portraits/men/10.jpg",
        google: false,
        verified: false
    }
];

mongoose.connect(process.env.URI_MONGO)
    .then(() => {
        console.log('DB connected');
        return User.deleteMany({});
    })
    .then(() => {
        return Promise.all(
            users.map(user => ({
                ...user,
                password: bcrypt.hashSync(user.password, 10)
            }))
        );
    })
    .then(usersWithHash => {
        return User.insertMany(usersWithHash);
    })
    .then(() => {
        console.log('Data inserted');
        mongoose.connection.close();
    })
    .catch(err => console.log('Error:', err));