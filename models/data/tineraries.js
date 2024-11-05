import "dotenv/config.js";
import "../../config/database.js";
import Mytinerary from "../Mytinerary.js";

const itineraries = [
    {
        photo: "https://example.com/paris-eiffel1.jpg",
        name: "Romantic Paris",
        price: "180€",
        duration: 4,
        likes: 0,
        hashtags: ["#Paris", "#Romance", "#EiffelTower"],
        comments: []
    },
    {
        photo: "https://example.com/paris-louvre.jpg",
        name: "Artistic Paris",
        price: "150€",
        duration: 6,
        likes: 0,
        hashtags: ["#Louvre", "#Art", "#Culture"],
        comments: []
    },
    {
        photo: "https://example.com/paris-versailles.jpg",
        name: "Royal Versailles",
        price: "200€",
        duration: 8,
        likes: 0,
        hashtags: ["#Versailles", "#History", "#Palace"],
        comments: []
    },
    {
        photo: "https://example.com/paris-gastro.jpg",
        name: "Gourmet Paris",
        price: "160€",
        duration: 5,
        likes: 0,
        hashtags: ["#Gastronomy", "#Wine", "#France"],
        comments: []
    },
    {
        photo: "https://example.com/paris-night.jpg",
        name: "Paris by Night",
        price: "120€",
        duration: 4,
        likes: 0,
        hashtags: ["#Night", "#Cabaret", "#Lights"],
        comments: []
    },

    {
        photo: "https://example.com/tokyo-sushi.jpg",
        name: "Gastronomic Tokyo",
        price: "15000¥",
        duration: 5,
        likes: 0,
        hashtags: ["#Sushi", "#Food", "#Japan"],
        comments: []
    },
    {
        photo: "https://example.com/tokyo-tech.jpg",
        name: "Tech Tokyo",
        price: "12000¥",
        duration: 4,
        likes: 0,
        hashtags: ["#Akihabara", "#Technology", "#Gaming"],
        comments: []
    },
    {
        photo: "https://example.com/tokyo-temple.jpg",
        name: "Traditional Tokyo",
        price: "13000¥",
        duration: 6,
        likes: 0,
        hashtags: ["#Temples", "#Culture", "#Traditional"],
        comments: []
    },
    {
        photo: "https://example.com/tokyo-anime.jpg",
        name: "Anime Route",
        price: "11000¥",
        duration: 5,
        likes: 0,
        hashtags: ["#Anime", "#Manga", "#Otaku"],
        comments: []
    },
    {
        photo: "https://example.com/tokyo-shopping.jpg",
        name: "Tokyo Shopping",
        price: "10000¥",
        duration: 4,
        likes: 0,
        hashtags: ["#Shopping", "#Harajuku", "#Fashion"],
        comments: []
    },

    {
        photo: "https://example.com/london-royal.jpg",
        name: "Royal London",
        price: "150£",
        duration: 6,
        likes: 0,
        hashtags: ["#Royalty", "#Buckingham", "#London"],
        comments: []
    },
    {
        photo: "https://example.com/london-museums.jpg",
        name: "Cultural London",
        price: "100£",
        duration: 5,
        likes: 0,
        hashtags: ["#Museums", "#Art", "#History"],
        comments: []
    },
    {
        photo: "https://example.com/london-harry.jpg",
        name: "Harry Potter Tour",
        price: "120£",
        duration: 4,
        likes: 0,
        hashtags: ["#HarryPotter", "#Magic", "#Warner"],
        comments: []
    },
    {
        photo: "https://example.com/london-rock.jpg",
        name: "Rock London",
        price: "90£",
        duration: 4,
        likes: 0,
        hashtags: ["#Rock", "#Music", "#AbbeyRoad"],
        comments: []
    },
    {
        photo: "https://example.com/london-ghost.jpg",
        name: "Mysterious London",
        price: "80£",
        duration: 3,
        likes: 0,
        hashtags: ["#Ghosts", "#Mystery", "#Tower"],
        comments: []
    },

    {
        photo: "https://example.com/berlin-history.jpg",
        name: "Historic Berlin",
        price: "120€",
        duration: 6,
        likes: 0,
        hashtags: ["#History", "#Wall", "#War"],
        comments: []
    },
    {
        photo: "https://example.com/berlin-art.jpg",
        name: "Artistic Berlin",
        price: "90€",
        duration: 4,
        likes: 0,
        hashtags: ["#Art", "#Gallery", "#Culture"],
        comments: []
    },
    {
        photo: "https://example.com/berlin-alter.jpg",
        name: "Alternative Berlin",
        price: "80€",
        duration: 5,
        likes: 0,
        hashtags: ["#Alternative", "#Kreuzberg", "#Street"],
        comments: []
    },
    {
        photo: "https://example.com/berlin-tech.jpg",
        name: "Tech Berlin",
        price: "100€",
        duration: 4,
        likes: 0,
        hashtags: ["#Technology", "#Startups", "#Digital"],
        comments: []
    },
    {
        photo: "https://example.com/berlin-beer.jpg",
        name: "Beer Tour Berlin",
        price: "85€",
        duration: 4,
        likes: 0,
        hashtags: ["#Beer", "#Biergarten", "#Craft"],
        comments: []
    },

    {
        photo: "https://example.com/rio-christ.jpg",
        name: "Classic Rio",
        price: "R$300",
        duration: 6,
        likes: 0,
        hashtags: ["#Christ", "#Corcovado", "#Views"],
        comments: []
    },
    {
        photo: "https://example.com/rio-beach.jpg",
        name: "Rio Beaches",
        price: "R$250",
        duration: 5,
        likes: 0,
        hashtags: ["#Copacabana", "#Beach", "#Sun"],
        comments: []
    },
    {
        photo: "https://example.com/rio-samba.jpg",
        name: "Carnival Experience",
        price: "R$400",
        duration: 8,
        likes: 0,
        hashtags: ["#Carnival", "#Samba", "#Party"],
        comments: []
    },
    {
        photo: "https://example.com/rio-food.jpg",
        name: "Gastronomic Rio",
        price: "R$280",
        duration: 4,
        likes: 0,
        hashtags: ["#Food", "#BBQ", "#Flavors"],
        comments: []
    },
    {
        photo: "https://example.com/rio-favela.jpg",
        name: "Cultural Rio",
        price: "R$200",
        duration: 4,
        likes: 0,
        hashtags: ["#Culture", "#Favela", "#Art"],
        comments: []
    },

    {
        photo: "https://example.com/prague-castle.jpg",
        name: "Medieval Prague",
        price: "110€",
        duration: 6,
        likes: 0,
        hashtags: ["#Castle", "#Medieval", "#History"],
        comments: []
    },
    {
        photo: "https://example.com/prague-beer.jpg",
        name: "Beer Tour Prague",
        price: "80€",
        duration: 4,
        likes: 0,
        hashtags: ["#Beer", "#Tradition", "#Craft"],
        comments: []
    },
    {
        photo: "https://example.com/prague-ghost.jpg",
        name: "Mysterious Prague",
        price: "70€",
        duration: 3,
        likes: 0,
        hashtags: ["#Mystery", "#Legends", "#Night"],
        comments: []
    },
    {
        photo: "https://example.com/prague-art.jpg",
        name: "Artistic Prague",
        price: "90€",
        duration: 5,
        likes: 0,
        hashtags: ["#Art", "#Mucha", "#Modern"],
        comments: []
    },
    {
        photo: "https://example.com/prague-cuisine.jpg",
        name: "Prague Food Tour",
        price: "95€",
        duration: 4,
        likes: 0,
        hashtags: ["#Food", "#Traditional", "#Taste"],
        comments: []
    },

    {
        photo: "https://example.com/moscow-red.jpg",
        name: "Imperial Moscow",
        price: "8000₽",
        duration: 6,
        likes: 0,
        hashtags: ["#RedSquare", "#Kremlin", "#History"],
        comments: []
    },
    {
        photo: "https://example.com/moscow-metro.jpg",
        name: "Moscow Metro Tour",
        price: "4000₽",
        duration: 3,
        likes: 0,
        hashtags: ["#Metro", "#Art", "#Architecture"],
        comments: []
    },
    {
        photo: "https://example.com/moscow-culture.jpg",
        name: "Cultural Moscow",
        price: "6000₽",
        duration: 5,
        likes: 0,
        hashtags: ["#Ballet", "#Theatre", "#Culture"],
        comments: []
    },
    {
        photo: "https://example.com/moscow-food.jpg",
        name: "Gastronomic Moscow",
        price: "5000₽",
        duration: 4,
        likes: 0,
        hashtags: ["#Food", "#Vodka", "#Traditional"],
        comments: []
    },
    {
        photo: "https://example.com/moscow-winter.jpg",
        name: "Winter Moscow",
        price: "7000₽",
        duration: 5,
        likes: 0,
        hashtags: ["#Winter", "#Snow", "#Christmas"],
        comments: []
    },

    {
        photo: "https://example.com/bcn-gaudi.jpg",
        name: "Gaudi's Barcelona",
        price: "120€",
        duration: 6,
        likes: 0,
        hashtags: ["#Gaudi", "#Modern", "#Architecture"],
        comments: []
    },
    {
        photo: "https://example.com/bcn-beach.jpg",
        name: "Mediterranean Barcelona",
        price: "80€",
        duration: 4,
        likes: 0,
        hashtags: ["#Beach", "#Mediterranean", "#Sun"],
        comments: []
    },
    {
        photo: "https://example.com/bcn-food.jpg",
        name: "Tapas Tour",
        price: "140€",
        duration: 5,
        likes: 0,
        hashtags: ["#Tapas", "#Food", "#Boqueria"],
        comments: []
    },
    {
        photo: "https://example.com/bcn-barrio.jpg",
        name: "Barcelona Quarters",
        price: "90€",
        duration: 5,
        likes: 0,
        hashtags: ["#Gracia", "#Gothic", "#Quarters"],
        comments: []
    },
    {
        photo: "https://example.com/bcn-night.jpg",
        name: "Barcelona by Night",
        price: "100€",
        duration: 4,
        likes: 0,
        hashtags: ["#Night", "#Party", "#Life"],
        comments: []
    },

    {
        photo: "https://example.com/ibiza-beach.jpg",
        name: "Paradise Beaches",
        price: "95€",
        duration: 6,
        likes: 0,
        hashtags: ["#Beach", "#Paradise", "#Sun"],
        comments: []
    },
    {
        photo: "https://example.com/ibiza-party.jpg",
        name: "Party Experience",
        price: "150€",
        duration: 6,
        likes: 0,
        hashtags: ["#Party", "#Club", "#Music"],
        comments: []
    },
    {
        photo: "https://example.com/ibiza-old.jpg",
        name: "Historic Ibiza",
        price: "70€",
        duration: 4,
        likes: 0,
        hashtags: ["#OldTown", "#History", "#Culture"],
        comments: []
    },
    {
        photo: "https://example.com/ibiza-boat.jpg",
        name: "Boat Adventure",
        price: "180€",
        duration: 7,
        likes: 0,
        hashtags: ["#Boat", "#Sea", "#Adventure"],
        comments: []
    },
    {
        photo: "https://example.com/ibiza-sunset.jpg",
        name: "Sunset Tour",
        price: "85€",
        duration: 3,
        likes: 0,
        hashtags: ["#Sunset", "#CafeDelMar", "#Views"],
        comments: []
    }
];

Mytinerary.insertMany(itineraries);