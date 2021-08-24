
 let firebaseConfig = {
    apiKey: "AIzaSyBDtOeKNBPBAWPWQ-QLhTbd8EdNyU4G6fQ",
    authDomain: "kenneth-f2355.firebaseapp.com",
    databaseURL: "https://kenneth-f2355-default-rtdb.firebaseio.com",
    projectId: "kenneth-f2355",
    storageBucket: "kenneth-f2355.appspot.com",
    messagingSenderId: "530255915674",
    appId: "1:530255915674:web:7e52637beaf725ee974d23",
    measurementId: "G-GD0GN05MYB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 //reference to database
let db = firebase.database();
let calenderRef = db.ref('calender');
calenderRef.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      // childData will be the actual contents of the child
      var childData = childSnapshot.val();

          let card = `
                        <div class="card" style="width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title">${childData.Date}</h5>
                          <p class="card-text">${childData.Top}</p>
                          <p class="card-text">${childData.Pants}</p>
                          <p class="card-text">${childData.Shoes}</p>
                        </div>
                      </div>`
                      document.getElementById("cards").insertAdjacentHTML('beforeend', card);

  });
});




//sumbitting new entry
document.getElementById("submit").onclick = function(){
//assigns value of the form to variables and then pushes it to the database
    let date = document.getElementById("date").value;
    let tops = document.getElementById("tops").value;
    let bottoms = document.getElementById("bottoms").value;
    let shoes = document.getElementById("shoes").value;
  //   calenderRef.child(date).set({
  //     Date : date,
  //     Pants : bottoms,
  //     Shoes : shoes,
  //     Top : tops
  // });

  //Alert to that has acknowledge it has been sumbited
  window.alert("form has been sumbited");
  window.location.reload()
}
