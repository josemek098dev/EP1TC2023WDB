//0-NPM MODULES-EXPRESS-EJS-BODYPARSER-MONGOOSE//

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.listen(3000, function(){
  console.log("Server starter on port 3000 :D!")
});

//1-MONGOOSE-CONNECTWIKIDB-ARTICLESSCHEMA3-MODEL//

mongoose.set('strictQuery', false);
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wikiDB');
}
  
const aticlesSchema = new mongoose.Schema ({
  tittle: String,
  content: String
});
  
const Article = mongoose.model("Article", aticlesSchema);

/////////2-REQUEST ALL ARTICLES

// app.route("/articles")

// .get(
//   function(req, res) {
//   Article.find(function(err, foundArticles) {
//     if (!err){
//       res.send(foundArticles);
//     }else{
//       res.send(err);
//     }
// });
// })

// .post(
//   function(req,res){
//   const newArticle = new Article({
//    tittle: req.body.tittle,
//    content: req.body.content
//   });
//   newArticle.save(function(err){
//    if(!err){
//      res.send("Successfully added a new article.!");
//    }else{
//      res.send(err);
//    }
//   });
//  })

// .delete(
//   function(){
//     Article.deleteMany(function(err){
//      if(!err){
//         res.send("Successfully deleted all artiles.");
//      }else{
//         res.send(err)
//      }
//     });
//   }
// );

/////////3-REQUEST SPECIFIC ARTICLES


app.route("/articles/:articleTittle")

.get(function(req,res){
    Article.findOne({tittle: req.params.articleTittle}, function(err, foundArticle){
    if (foundArticle){
      res.send(foundArticle)
    }else{
      res.send("No articles matching that tittle was found")
    }
  })
})

.put(function(req, res){
  Article.replaceOne(
    {tittle: req.params.articleTittle},
    {tittle: req.body.tittle, content: req.body.content},
    {overwrite: true},
    function(err){
      if(!err){
      res.send("successsss")
    }
    }
  )
})

.patch(function(req,res){
  Article.updateOne(
    {tittle: req.params.articleTittle},
    req.body,
    function(err){
      if(!err){
        res.send("Succes")
      }else{
        res.send(err)
      }
    }
  )
})

.delete(function(req,res){
  Article.deleteOne(
  {tittle: req.params.articleTittle},
  function(err){
    if(!err){
      res.send("succes")
    }else{
      res.send(err)
    }
  }
  );
});

