if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

  Template.hello.rendered = function() {
    Session.setDefault('books', [
      {title: "To Kill a Mockingbird", author: "Harper Lee"},
      {title: "1984", author: "George Orwell"},
      {title: "The Lord of the Rings", author: "J. R. R. Tolkien"},
      {title: "The Catcher in the Rye", author: "J. D. Salinger"},
      {title: "The Great Gatsby", author: "F. Scott Fitzgerald"}
    ]);
  }; 

  Template.hello.helpers({
    books: function () {
      return Session.get('books');
    }
  });


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
