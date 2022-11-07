console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
document.getElementById("node1").textContent = "I used the getElementById(“node1”) method to access this";

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
document.getElementsByClassName("node2")[0].textContent = "I used the getElementByClassName(node2) method to access this";

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
const h3Items = document.getElementsByTagName("h3");
for (const h3 of h3Items){
    h3.textContent = "I used the getElementByTagName(h3) method to access all of these";
}
for (let i = 0; i < h3Items.length; i++) {
    h3Items[i].textContent = 'I used the getElementByTagName("h3") method to access all of these';
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
const paragraphEle = document.createElement("p");
paragraphEle.textContent = "This node was created using the createElement() method";

// TODO: Append the created node to the parent node using the element.appendChild() method
const parentEle = document.querySelector("#parent");
parentEle.appendChild(paragraphEle);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
const anchorEle = document.createElement("a");
anchorEle.textContent = "I am an <a> tag";

// BONUS: Add a link href to the <a>
anchorEle.href = "https://portal.truecoders.io";
anchorEle.style.color = "green";

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parentEle.insertBefore(anchorEle, paragraphEle);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let exercise3Container = document.querySelector("#exercise-container3");
let oldChild = document.querySelector("#N1");

let newChildNode = document.createElement("p");
newChildNode.textContent = "Child Node that replaced old child";

exercise3Container.replaceChild(newChildNode, oldChild);

// TODO: Remove the "New Child Node"
exercise3Container.removeChild(newChildNode);

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ 
    "apples", 
    "bananas", 
    "carrots", 
    "dragon fruit", 
    "eggplant", 
    "fish", 
    "grapes", 
    "honey", 
    "ice bag", 
    "juice (any kind)",
];

// TODO: Create an unordered list element
let ul = document.createElement("ul");
// TODO: Iterate over the array values, and create a list item element for each
list.forEach((item) =>{
    let li = document.createElement("li");
    li.textContent = item;
    // TODO: Append the new list items to the unordered list element
    ul.append(li);
});

// TODO: Append the unordered list to the `div#container` under exercise 4 
document.querySelector("#container").appendChild(ul);

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

function show(){
    //Create Elements
    const modalDiv = document.createElement("div");
    const modalCard = document.createElement("div");
    const closeModalButton = document.createElement("button");
    
    //modalDiv.innerText = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
    //modalDiv.style.color = "white";
    //modalDiv.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    //modalDiv.style.fontSize = "40px";
    //modalDiv.style.position = "fixed";
    //modalDiv.style.top = "50%";

    //Modifying Elements
    modalDiv.id = "modal";
    modalCard.classList.add("modal-card");
    modalCard.innerText = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
    closeModalButton.textContent = "X"
    closeModalButton.classList.add("modal-close-button");
    closeModalButton.addEventListener("click", () =>{

        console.log("Close Modal clicked");
        modalDiv.remove();
        modalCard.remove();
    })

    //Appending items to the DOM
    modalCard.append(closeModalButton);
    modalDiv.append(modalCard);
    document.querySelector("body").append(modalDiv);
}

const showButton = document.querySelector("#btn");
showButton.addEventListener("click", () =>{
    console.log("Show Modal button clicked");
    show();
})
