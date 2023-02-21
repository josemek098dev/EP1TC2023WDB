const express = require("express");
const bodyParser = require("body-parser");
const date = require ( __dirname + "/date.js");
const app = express();
const mongoose = require('mongoose');
const _ = require ("lodash");

//connect to MongoDB by specifying port to access MongoDB server

mongoose.set('strictQuery', false);
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://josemek098dev:U7IwETaV6WVWHYgz@cluster0.oj8r3ch.mongodb.net/todolistDB');
}

//my code

//mongose data


//101

const itemSchema = new mongoose.Schema ({
    name:String
});

//102

const Item = mongoose.model("Item", itemSchema); 


//103

const item1 = new Item({
    name: "Welcome to your todolist!"
})

const item2 = new Item({
    name: "Hit the + button to aff a new item."
})

const item3 = new Item({
    name: "<-- Hit this to complete any item."
})

const defaultItems = [item1, item2, item3];

//201


const listSchema = new mongoose.Schema ({
    name: String,
    items: [itemSchema]
});

//202

const List = mongoose.model("List", listSchema)

//203




//todolist

const items = [];
const workItems = [];

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", function(req,res){

    Item.find({}, function(err, foundItems){

        if(foundItems.length === 0){
            //104

            Item.insertMany(defaultItems, function(err){
                 if(err){
                    console.log(err)
                }else{
                    console.log("successfully saved default items to DB:")
                  }
            });
            res.redirect("/");
        }else{

            console.log(foundItems);
            res.render("list" , {listTitle: "Today", newListItems: foundItems });
            
        }
    });

});

app.post("/",function(req,res){

    const itemName = req.body.newItem;
    const listName = req.body.list;

    const item = new Item({
        name: itemName
    });

    if(listName === "Today"){
        item.save();
        res.redirect("/");
    }else{
        List.findOne({name: listName},function(err,foundList){
            foundList.items.push(item);
            foundList.save()
            res.redirect("/" + listName)
        })
    }

});

app.post("/delete",function(req,res){
   const checkedItemId = req.body.checkbox;
   const listName = req.body.listName;

   if(listName === "Today"){

    Item.findByIdAndRemove(checkedItemId, function(err){
        if(!err){
            console.log("succesfully deleted check")
            res.redirect("/");
        }
       })
   }else{
      List.findOneAndUpdate({name: listName},{$pull:{items:{_id: checkedItemId}}}, function(err,foundList){
        if(!err){
            res.redirect("/" + listName);
        }
      }) ; 

   }

 
});

//"reciclamos list" y la usamos para crear work

app.get("/:customListName", function(req,res) {
    const customListName = _.capitalize(req.params.customListName);

    List.findOne({name: customListName}, function (err,foundList){
        if(!err){
            if(!foundList){
                //console.log("doesn't exist")
                const list = new List({
                    name: customListName,
                    items: defaultItems
                });
            
                list.save();


                res.redirect("/" + customListName);

            }else{
                //console.log("exist")
                res.render("list", {listTitle: foundList.name, newListItems: foundList.items })
            }
        }
    })

    

});


app.get("/work", function(req,res){ 
    res.render("list", {listTitle : "Work List", newListItems: workItems});
})

app.post("/work", function(req,res){
    let item =req.body.newItem;
    workItems.push(item);
    res.redirect("/work")
})

app.get("/about", function(req,res){
    res.render ("about");
});


app.listen(3000, function(){
   console.log("Server is running on port 3000")
})
