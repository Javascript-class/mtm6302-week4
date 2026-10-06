//Array Example
const $myColors = ["red", "green", "blue", "white", "black", "tomato"]

//Selecting the message list element from the DOM
const $messageList = document.getElementById("color-messages")

/*
    accessing the 3rd index of the array
    adding the value at the 3rd index to the message list
    creating a new list item and appending it to the message list
    using innerHTML
*/

$messageList.innerHTML += `<li>Value on 3rd index is: ${$myColors[3]}</li>`

//updating the value at the 4th index of the array
$myColors[4] = "cyan"

//Adding the updated value at the 4th index to the message list
$messageList.innerHTML += `<li>Value the 4th index is: ${$myColors[4]}</li>`

$myColors.push("darksalmon")
$messageList.innerHTML += `<li>Array values after push method: ${$myColors}</li>`

$myColors.pop()
$messageList.innerHTML += `<li>Array values after pop method: ${$myColors}</li>`

// use unshift to add a hotpink to the array
$myColors.unshift("hotpink")
$messageList.innerHTML += `<li>Array values after unshift method: ${$myColors}</li>`

//use shift to remove the first item
$myColors.shift()
$messageList.innerHTML += `<li>Array values after shift method: ${$myColors}</li>`

const $darkColors = ["darkgreen", "darkred", "darkblue"]

const $allColors = $myColors.concat($darkColors)
$messageList.innerHTML += `<li>allColors array contains: ${$allColors}</li>`

const $colorResponse = document.getElementById("color-response")

function findColor(name) {
    // look for name in $allColors
    //if you found it then display Yes
    //else dislay No
    if($allColors.includes(name)) {
        $colorResponse.innerHTML = `Yes we have ${name} in our array`
    } else {
        $colorResponse.innerHTML = `No we do not have ${name} in our array`
    }

}
findColor("darkred")

//looping thrugh the array
for(let i = 0; i < 5; i++) {
    console.log($allColors[i])
}
//display the length of the array
 console.log($allColors.length)

//looping through the array using the length element instead of the indexed number
 for(let i = 0; i < $allColors.length; i++) {
    console.log($allColors[i])
}

const $coloredBoxes = document.getElementById("colored-boxes")
//loop over the $allColors array and a div for each item with background-color

for (const $color of $allColors) {
    $coloredBoxes.innerHTML += `<div class="box" style="background-color: ${$color}"></div>`
}






// $messageList.textContent = "Message is X"
// $messageList.textContent = "Message has changed to Y"
// $messageList.textContent += " " + "Message has changed to Y"