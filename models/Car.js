const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    img:{
        type:String,
        trim:true,
    },
    price:{
        type:Number,
        min:0,
        default:null,
        required:true
    },
    desc:{
        type:String,
        trim:true
    },
    reviews:[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Review'
        }
    ]
});

carSchema.post('findOneAndDelete' , async function(car){
    if(car.reviews.length > 0){
        await Review.deleteMany({_id:{$in:car.reviews}})
    }
})

let Car = mongoose.model('Car' , carSchema);
module.exports = Car;