$(document).ready(function(){
  flipp.init();
});

// jquery module pattern, call flipp.methodName() above via event listeners
var flipp = {

  init: function(){
    firebase.initializeApp(this.firebaseConfig);

    firebase.auth().signInAnonymously().catch(function(error) {
      // No op
    });

    firebase.database().ref("Lights").on('value', function (snapshot) {
      var result = $("<div>");
      result.text(JSON.stringify(snapshot.val()));
      $("#results").prepend(result);

      // TODO: Call PHP here and make lights blink
    });
  },

  firebaseConfig: {
    apiKey: "AIzaSyAEZ6cdb0fIZ8mTpaZAcj0xthkdUOVfztA",
    authDomain: "flipp-a77fe.firebaseapp.com",
    databaseURL: "https://flipp-a77fe.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "636127035750"
  }
}
