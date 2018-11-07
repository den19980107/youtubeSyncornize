var createRoomBtn = document.getElementById("createRoom");
var checkBtn = document.getElementById('check');
var isRoomNameOK = false;
checkBtn.onclick = function () {
    var roomName = document.getElementById('roomNum').value;
    //if roomName not exist in databases
    //then isRoomNameOK = true
    //else isRoomNameOK = flase
    isRoomNameOK = true;
    if (isRoomNameOK) {
        checkBtn.innerText = "OK!"
        checkBtn.disabled = true;
        checkBtn.style.background = "lightgreen";
    }
}


createRoomBtn.onclick = function () {
    var accommodateNum = document.getElementById("select").value;
    var isPublic = document.getElementById('isPublic').checked;
    var roomName = document.getElementById('roomNum').value;
    if (isRoomNameOK) {
        var roomInfo = {
            accommodateNum: accommodateNum,
            isPublic: isPublic,
            roomName: roomName
        }

        console.log(roomInfo);
        window.location = "/videoRoom.html";
    } else {
        alert("please insert new room name");
    }


}