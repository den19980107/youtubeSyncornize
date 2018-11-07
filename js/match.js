var userName = document.getElementById('UserName');
var createRoomBtn = document.getElementById('findRoom');
var playBtn = document.getElementById("play");

createRoomBtn.onclick = function () {
    if (userName.value != "") {
        var userInfo = {
            userName: userName.value
        }

        //TO DO:
        //send userInfo to the server and create this user's database
        window.location = "/findRoom.html";
    } else {
        alert("please insert user name");
    }

}

playBtn.onclick = function () {
    if (userName.value != "") {
        //TO DO:
        //send userInfo to the server and create this user's database

    } else {
        alert("please insert user name");
    }
}