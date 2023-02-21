const mongoose = require('mongoose');

//connect to MongoDB by specifying port to access MongoDB server

mongoose.set('strictQuery', false);
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/FruitsDB');
}

//my code



const fruitSchema = new mongoose.Schema({

    name: {
      type: String,
      required: [true, "please check your data entry"]
    },

    rating: {
      type: Number,
      min: 1,
      max: 10
    },

    review: String

  });

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({

    name: "Apples",

    rating: 4,

    review: "An apple a day keeps the doctor away."

})



//1

const personSchema = new mongoose.Schema({

    name: String,

    age: Number,

    description: String

  });

  const Person = mongoose.model("Person", personSchema)

  const person = new Person ({

    name: "Jonh",

    age: 47,

    description: "a good person!"

  })


//2

//person.save()

//como comentario para no crear frutas cada vez q se ejeccute

fruit.save();

console.log("server okkk")


//337

Fruit.find(function(err, fruits){
    if(err){
        console.log();
    } else{

        //no necesitare usar mongodb mas

        mongoose.connection.close()

       //muestra solo el nombre de la fruta

        fruits.forEach(function(fruit){
            console.log(fruit.name);

        });
    }
});

Fruit.updateOne({_id: "63ea281b253ff020377c9210"},{name:"Peach"},function(err){
  if(err){
    console.log(err)
  }else{
    console.log("succes updated the document")
  }
})
