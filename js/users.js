var cloneArray;


// call_usersJSON_API();

function call_usersJSON_API() {

  $.get('/api/users', function (dbData) {


    cloneArray = [].concat(dbData);

    populate_user_info();

    console.log('dbArray: ', dbData);
    console.log('clone array: ', cloneArray);
  })

};

function populate_user_info() {

  var userCon = document.getElementsByClassName('user-container')[0];

  for (var x = 0; x < cloneArray.length; x++) {

    var userName = document.createElement('label');
    userName.innerHTML = cloneArray[x].name;
    userCon.appendChild(userName);

    var imgSrc = document.createElement('img');
    imgSrc.src = cloneArray[x].img_path;
    userCon.appendChild(imgSrc);

  }

}