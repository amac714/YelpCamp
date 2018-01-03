var mongoose    = require("mongoose");
var Campground  = require("./models/campground");
var Comment     = require("./models/comment");

var data = [
    {   
        name: "Cloud's Rest",
        image: "https://images.pexels.com/photos/45241/tent-camp-night-star-45241.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu mattis justo, non blandit urna. Nunc pulvinar volutpat lorem, eget rhoncus neque. Nullam vehicula suscipit felis non pretium. Mauris efficitur, purus vitae gravida viverra, justo massa blandit urna, in vehicula dolor mi eu ex. Sed erat nibh, interdum sed libero at, semper vestibulum magna. Donec orci nisi, lobortis at consectetur aliquam, ullamcorper sit amet leo. Donec sed nulla vitae sapien condimentum consequat. In blandit vehicula nunc, et eleifend purus congue sed. Quisque quis ex eget sapien dapibus iaculis quis sed lorem. Duis aliquet libero sed sapien ornare condimentum. Nam commodo suscipit tempor. Aliquam elit sapien, elementum non imperdiet eleifend, vehicula eget est. Donec sollicitudin in magna at maximus. Aenean et ligula nunc. Vivamus laoreet varius tincidunt."
    },
    {   
        name: "Bear Creek",
        image: "https://images.pexels.com/photos/6714/light-forest-trees-morning.jpg?w=940&h=650&auto=compress&cs=tinysrgb",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu mattis justo, non blandit urna. Nunc pulvinar volutpat lorem, eget rhoncus neque. Nullam vehicula suscipit felis non pretium. Mauris efficitur, purus vitae gravida viverra, justo massa blandit urna, in vehicula dolor mi eu ex. Sed erat nibh, interdum sed libero at, semper vestibulum magna. Donec orci nisi, lobortis at consectetur aliquam, ullamcorper sit amet leo. Donec sed nulla vitae sapien condimentum consequat. In blandit vehicula nunc, et eleifend purus congue sed. Quisque quis ex eget sapien dapibus iaculis quis sed lorem. Duis aliquet libero sed sapien ornare condimentum. Nam commodo suscipit tempor. Aliquam elit sapien, elementum non imperdiet eleifend, vehicula eget est. Donec sollicitudin in magna at maximus. Aenean et ligula nunc. Vivamus laoreet varius tincidunt."
    },
    {   
        name: "Morning Glory Crest",
        image: "https://images.pexels.com/photos/6757/feet-morning-adventure-camping.jpg?w=940&h=650&auto=compress&cs=tinysrgb",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu mattis justo, non blandit urna. Nunc pulvinar volutpat lorem, eget rhoncus neque. Nullam vehicula suscipit felis non pretium. Mauris efficitur, purus vitae gravida viverra, justo massa blandit urna, in vehicula dolor mi eu ex. Sed erat nibh, interdum sed libero at, semper vestibulum magna. Donec orci nisi, lobortis at consectetur aliquam, ullamcorper sit amet leo. Donec sed nulla vitae sapien condimentum consequat. In blandit vehicula nunc, et eleifend purus congue sed. Quisque quis ex eget sapien dapibus iaculis quis sed lorem. Duis aliquet libero sed sapien ornare condimentum. Nam commodo suscipit tempor. Aliquam elit sapien, elementum non imperdiet eleifend, vehicula eget est. Donec sollicitudin in magna at maximus. Aenean et ligula nunc. Vivamus laoreet varius tincidunt."
    }
];

function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function(err){
        if(err) {
            console.log(err);
        }
        console.log("removed campgrounds!"); 
    });
    
     // Add a few campgrounds
    data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
            if(err){
                console.log(err);
            } else {
                console.log("added a campground");
                
                // create a comment
                Comment.create(
                    {
                        text: "This place is greate, but I wish there was internet",
                        author: "Homer"
                    }, function(err, comment){
                        if(err) {
                            console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save(); 
                            console.log("created new comment");
                        }
                    });
            }    
        });    
    });
}

module.exports = seedDB;
