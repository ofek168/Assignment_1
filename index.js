let express = require("express"); // import express
let app = express(); // create app variable that is an instance of express
let path = require("path"); // allows to construct filepath for passing into other functions
app.use(express.urlencoded({extended:true})); // allow formfields sent by post to show up in request object
app.use(express.static(__dirname + "/public")); // whenever static sheet is requested, look in public folder


app.get("/", (req,res) => 
{
    console.log(__dirname); // shows what folder path is associated with project
    // path.join takes 2 different paths and puts them together
    // __dirname is a magic variable always avaliable in express pages that indicates where project is located
    res.sendFile(path.join(__dirname,"index.html")); // send something to page to view to end user, return specific page

});

// create new route
//app.post requests: meant to submit data to a specificed source
app.post("/formapplication",(req,res) => 
{
    let sFirstName = req.body.empFirst; //make object attribute into a var
    let sLastName = req.body.empLast; // req.body makes variable retrievable
    let sPronouns = req.body.empPronouns;
    let sEmail = req.body.empEmail;
    let sBirth =req.body.empBirth;
    let sPassword = req.body.empPassword;

    console.log("First name:",sFirstName); //view FirstName attribute within object
    console.log("Last name:", sLastName); //view LastName attribute within object
    console.log("Pronouns: ", sPronouns);
    console.log("Email: ", sEmail);
    console.log("Birth-date: ", sBirth);
    console.log("Create Password: ", sPassword);

    //sends form variables as pairs in the url in the route /jobapplication
    res.send("registration form submitted"); 
})

app.listen(3000); // tells which port to listen to: http://localhost:3000/