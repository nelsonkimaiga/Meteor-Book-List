Meteor.startup(function () {
    // code to run on server at startup
    Books = new Meteor.Collection("books");
});
 ~~~

// Check it out on MeteorPad: [Initial Code Cleanup](http://meteorpad.com/pad/MwvMcsBAzfbWwEXp3/Book-List:%20Initial%20Code%20Cleanup)

// Verify that everything's running correctly by checking the browser window and then we're good to move on to the next step.

// ## Using the Database in Meteor

// The Meteor server runs on top of a MongoDB database. In this section of our tutorial, we will move the static list of books out of the session variable and into that database.

// First, delete the Template.bookList.rendered code, so that we're no longer putting stuff into that session variable. Next, we should add that list of books to the database as fixture data when the server initializes. As you'd expect for MongoDB, Meteor stores data in "collections". So, we'll create a new collection for our books. To keep things simple we will name it "books". It turns out that both the client and the server will want to know about this collection, so we'll put this code in a new subfolder: "/lib/". Meteor knows automatically that files in "/lib/" run on the client and the server.

// We'll create a file called "lib/collections/books.js", and give it just one line of code:

// ~~~ js
Books = new Meteor.Collection("books");