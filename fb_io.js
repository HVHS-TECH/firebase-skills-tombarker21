/**************************************************************
 **************************************************************
 **                                                          **
 ** fb_io.js is where you will put common firebase functions **
 ** used throughout your code.                               **
 **                                                          **
 **************************************************************
 **************************************************************/
 function fb_readError(error) {
    console.log("There was an error reading the message");
    console.error(error);
  }


  function fb_readlistener() {
console.log(" is this Read Listener");
firebase.database().ref('/message').on('value',  fb_logDatabaseRead)
}