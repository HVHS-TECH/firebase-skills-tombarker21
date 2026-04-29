/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");

/**************************************************************/
// helloWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Hello World"
// 
// This uses the set() operation to write the key:value pair "message":"Hello World"
// The ref('/') part tells the operation to write to the base level of the database "/"
// This means it replaces the whole database with message:Hello World
/**************************************************************/
function helloWorld(){
  console.log("Running helloWorld()")
  firebase.database().ref('/').set(
    {
      message: 'Hello World!'
    }
  )
}



function goodBye(){
  console.log("Running goodBye()")
  firebase.database().ref('/').set(
    {
      message: 'goodbye!'
    }
  )
}


function simpleRead() {
    console.log("Reading message");
    firebase.database().ref('/').child('message').once('value', displayRead,fb_readError);
    console.log("Leaving simpleRead")
}


function displayRead(snapshot) {
    console.log("Running displayRead(), the message is: " + snapshot.val())
    HTML_OUTPUT.innerHTML = snapshot.val();
    console.log(snapshot.val() )
}


  function display(snapshot) {
    var dbData = snapshot.val();
    if (dbData == null) { // if there is no data, dbData will be null.
        console.log('There was no record when trying to read the message');
    }
    else {
        console.log("The message is: " + dbData)
    }
}


  function fb_readlistener() {
console.log(" is this Read Listener");
firebase.database().ref('/').on('value', displayRead)
}


function add_highScores() {
firebase.database().ref('/').set(
  {
    game1:{
      users:{
        cedric: 98,
        tom: 96,
        jacob:7,
        cameron:5,

      }
    }
  }



);
}

