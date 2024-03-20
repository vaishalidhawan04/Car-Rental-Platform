const mongoose = require('mongoose');
const Car = require('./models/Car');

const cars = [
    {
        name: "Maruti Suzuki Ertiga 2019",
        img: 'https://zoomcar-assets.zoomcar.com/51857/HostCarImage/host_car_image_51857f05b3a4e-58be-4dd0-a13b-fd7f02955edf.jpg20230116-39-5nvz9p',
        price: 188,
        desc: "Manual | Petrol | 7 Seats"
    },
    {
        name: "Maruti Suzuki Ertiga 2015",
        img: 'https://zoomcar-assets.zoomcar.com/8250/HostCarImage/open-uri20230130-15174-1b6rpamde60e379-b95a-4aca-96ef-e27d1eef22ca',
        price: 170,
        desc: "Manual | Petrol | 7 Seats"
    },
    {
        name: "Honda Jazz 2016",
        img: 'https://zoomcar-assets.zoomcar.com/220767/HostCarImage/host_car_image_220767201b6ba6-509b-42ce-857f-ecb9103d439e.jpg20230407-52-114ph2b',
        price: 127,
        desc: "Manual | Petrol | 5 Seats"
    },
    {
        name: "Maruti Suzuki BALENO 2023",
        img: 'https://zoomcar-assets.zoomcar.com/318547/HostCarImage/host_car_image_318547cd18c661-e8d7-4cd9-8130-0f8b162a049e.jpg20230831-44-1pr4o10',
        price: 189,
        desc: "Manual | Petrol | 5 Seats"
    },
    {
        name: "Maruti Suzuki Ertiga 2015",
        img: 'https://zoomcar-assets.zoomcar.com/8250/HostCarImage/open-uri20230130-15174-1b6rpamde60e379-b95a-4aca-96ef-e27d1eef22ca',
        price: 170,
        desc: "Manual | Petrol | 7 Seats"
    },
    {
        name: "Honda Jazz 2016",
        img: 'https://zoomcar-assets.zoomcar.com/220767/HostCarImage/host_car_image_220767201b6ba6-509b-42ce-857f-ecb9103d439e.jpg20230407-52-114ph2b',
        price: 127,
        desc: "Manual | Petrol | 5 Seats"
    }
]

async function seedDB() {
    await Car.insertMany(cars);
    console.log("data seeded successfully")
}

module.exports = seedDB;