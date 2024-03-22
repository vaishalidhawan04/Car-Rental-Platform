const mongoose = require('mongoose');
const Car = require('./models/Car');

const cars = [
    {
        name: "Tata Harrier",
        img: 'https://imgd-ct.aeplcdn.com/664x415/n/zgaerbb_1693951.jpg?q=80',
        price: 185,
        desc: "Manual | Petrol | 5 Seats"
    },
    {
        name: "Volkswagen Taigun",
        img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202310/volkswagen-taigun-trail-edition-030132723-16x9_0.jpg?VersionId=XDFDbbNSACOe4vmwDW8f06.mYUj_pKky&size=690:388',
        price: 160,
        desc: "Manual | Diesel | 5 Seats"
    },
    {
        name: "Mahindra Scorpio",
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Mahindra_Scorpio_GLX_2.6_m-Hawk_2011_%2836756517492%29.jpg/1200px-Mahindra_Scorpio_GLX_2.6_m-Hawk_2011_%2836756517492%29.jpg',
        price: 188,
        desc: "Manual | Petrol | 7 Seats"
    },
    {
        name: "Hyundai Venue",
        img: 'https://resource.digitaldealer.com.au/image/1165778095632d3ecd52e41208524192_770_0-c.jpg',
        price: 180,
        desc: "Automatic | Petrol | 5 Seats"
    },
    {
        name: "Maruti Suzuki S-Presso",
        img: 'https://www.carlelo.com/laravel/public/uploads/model/1649923133.webp',
        price: 170,
        desc: "Manual | Diesel | 5 Seats"
    },
    {
        name: "Toyota Innova Crysta",
        img: 'https://static3.toyotabharat.com/images/showroom/innova-mmc/unmatched-unrivaled-banner1600x850.jpg',
        price: 190,
        desc: "Automatic | Petrol | 7 Seats"
    }
]

async function seedDB() {
    await Car.insertMany(cars);
    console.log("Data seeded successfully")
}

module.exports = seedDB;