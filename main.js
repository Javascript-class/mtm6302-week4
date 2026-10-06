const $myColors = ["red", "green", "blue", "white", "black", "tomato"]

const $messageList = document.getElementById("color-messages")

$messageList.innerHTML += `<li>Value on 3rd index is: ${$myColors[3]}</li>`

$myColors[4] = "cyan"

$messageList.innerHTML += `<li>Value the 4th index is: ${$myColors[4]}</li>`

