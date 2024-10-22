import "dotenv/config.js";
import "../../config/database.js";
import City from "../../models/City.js";

const destinations = [
    { id: 1, title: "Paris", image: "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/newsletter/eiffel-tower-in-paris-151-medium.jpg?1564742900", likes: 93 },
  { id: 2, title: "New York", image: "https://media.gq-magazine.co.uk/photos/5d13a9c2976fa37177f3b040/16:9/w_1600,c_limit/hp-gq-6dec18_istock_.jpg", likes: 91 },
  { id: 3, title: "Tokyo", image: "https://d0626f1e44.clvaw-cdnwnd.com/efd82a4c10d67d793c62b322158b9943/200002121-d54c2d54c4/shinjuku-8.webp?ph=d0626f1e44", likes: 70 },
  { id: 4, title: "Rome", image: "https://i.natgeofe.com/n/3012ffcc-7361-45f6-98b3-a36d4153f660/colosseum-daylight-rome-italy.jpg?w=1280&h=853", likes: 78 },
  { id: 5, title: "London", image: "https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_1300/v1644643766/lcyhtqmsygquuczebkxh.jpg", likes: 95 },
  { id: 6, title: "Berlin", image: "https://www.civitatis.com/f/alemania/berlin/berlin.jpg", likes: 92 },
  { id: 7, title: "Sydney", image: "https://www.civitatis.com/blog/wp-content/uploads/2018/01/vista-opera-house-sidney-1536x896.jpg", likes: 89 },
  { id: 8, title: "Rio de Janeiro", image: "https://www.civitatis.com/f/brasil/rio-de-janeiro/big/tour-privado-rio-janeiro.jpg", likes: 77 },
  { id: 9, title: "Dubai", image: "https://media-cms.louvrehotels.com/static/styles/webp/public/visuelgoldentulip/dubai-a-faire-hotels-golden-tulip.webp", likes: 95 },
  { id: 10, title: "Amsterdam", image: "https://media.traveler.es/photos/6231abc7d03e1c5549e648ca/16:9/w_1600,c_limit/The%20Best%20Places%20for%20Female%20Solo%20Travelers_Amsterdam_GettyImages-923546342.jpg", likes: 78 },
  { id: 11, title: "Prague", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Prague_%286365119737%29.jpg/1024px-Prague_%286365119737%29.jpg", likes: 80 },
  { id: 12, title: "Moscow", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Saint_Basil%27s_Cathedral_and_the_Red_Square.jpg/1024px-Saint_Basil%27s_Cathedral_and_the_Red_Square.jpg", likes: 88 },
  { id: 13, title: "Barcelona", image: "https://www.barcelo.com/guia-turismo/wp-content/uploads/que-visitar-en-barcelona-1.jpg", likes: 93 },
  { id: 14, title: "Madrid", image: "https://media.traveler.es/photos/613763cc70e3cff8b85f81af/master/w_1600,c_limit/180966.jpg", likes: 91 },
  { id: 15, title: "Istanbul", image: "https://media.gettyimages.com/id/160193420/es/foto/mezquita-azul-en-estambul.jpg?s=612x612&w=0&k=20&c=jWRtvws_kBdrqZOc2FRD59iHkXARR-bIiG181tbH2uI=", likes: 70 },
  { id: 16, title: "Ibiza", image: "https://www.barcelo.com/guia-turismo/wp-content/uploads/2020/02/ibiza-ciudad.jpg", likes: 78 },
];

City.insertMany(destinations);