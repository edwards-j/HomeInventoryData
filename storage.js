/*
    Initialize the database in memory as an object
*/
const HomeInventoryDatabase = {};

/*
    Initilize all of the tables (i.e. arrays) that you want to
    use in your database.
*/
HomeInventoryDatabase.furniture = [];
HomeInventoryDatabase.music = [];
HomeInventoryDatabase.electronics = [];

/*
    Time to create some data that will inserted into the database
*/
const guitar = {
    name: "Guitar",
    location: "Living Room",
    description: "I've had this guitar since I was 17 and have played it almost everday since then"
}

const keyboard = {
    name: "MIDI keyboard",
    location: "Living Room",
    description: "Very helpful tool for writing and recording music"
}

const pedalBoard = {
    name: "Pedal board",
    location: "Bedroom",
    description: "I plug my guitar into it and it gives me all kinds of different sounds"
}

const ps4 = {
    name: "Playstation 4",
    location: "Living room",
    description: "It helps me stay connected with old friends who live all over the country"
}

const computer = {
    name: "Macbook Pro",
    location: "Desk",
    description: "The machine I use for NSS"
}

const tv = {
    name: "TV",
    location: "Bedroom",
    description: "Necessary for binge watching The Office"
}

const couch = {
    name: "Couch",
    location: "Living Room",
    description: "The perfect place for an afternoon nap"
}

const chair = {
    name: "Desk chair",
    location: "Desk",
    description: "Extra comfy for those long coding sessions"
}

const dogBed = {
    name: "Dog Bed",
    location: "Bedroom",
    description: "Where my dog sleeps"
}

const table = {
    name: "Coffee Table",
    location: "Living Room",
    description: "Where else would I put my coffee?"
}

// Add the data to the appropriate tables
HomeInventoryDatabase.music.push(guitar);
HomeInventoryDatabase.music.push(keyboard);
HomeInventoryDatabase.music.push(pedalBoard);
HomeInventoryDatabase.electronics.push(ps4);
HomeInventoryDatabase.electronics.push(computer);
HomeInventoryDatabase.electronics.push(tv);
HomeInventoryDatabase.furniture.push(couch);
HomeInventoryDatabase.furniture.push(chair);
HomeInventoryDatabase.furniture.push(dogBed);
HomeInventoryDatabase.furniture.push(table);

const saveDatabase = function (databaseObject, localStorageKey) {
    //Convert the Object into a string.
    const stringifiedDatabase = JSON.stringify(databaseObject)
    //Create a key in local storage, and store the string
    //version of your inventory database as the value
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)
    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}

// Persist the database to localStorage
saveDatabase(HomeInventoryDatabase, "HomeInventory");

const homeInventory = loadDatabase("HomeInventory");

console.log(homeInventory);

//Loops through the category i.e. furniture, music, or electronics
for (category in homeInventory) {
    //Loops through each key for that category
    for (key in homeInventory[category]) {
        //Creates the section element on the page
        let section = document.createElement("section");

        //Creates all of the paragraphs on the page
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");

        //Gets the element with id myStuff and stores it in article
        let article = document.getElementById("myStuff");

        //Gets the name, location, and description of each item and stores it in the respective variable of the same name
        let name = homeInventory[category][key].name;
        let location = homeInventory[category][key].location;
        let description = homeInventory[category][key].description;

        //Sets the inner HTML of the paragraphs to the value of the name, location, and description variables
        p1.innerHTML += "Name: " + name
        p2.innerHTML += "Location: " + location;
        p3.innerHTML += "Description: " + description;

        //Appends the paragraphs to the section element we created earlier
        section.appendChild(p1);
        section.appendChild(p2);
        section.appendChild(p3);

        //Appends the section element to article with id myStuff
        article.appendChild(section);

        let hr = document.createElement("hr");
        article.appendChild(hr);
    }

}

// for (i = 0; i < homeInventory.electronics; i++) {
//     let section = document.createElement("section");
//     let p1 = document.createElement("p");
//     //let p2 = document.createElement("p");
//     //let p3 = document.createElement("p");
//     let article = document.getElementById("myStuff");

//     //article.innerHTML = homeInventory.electronics[i][name]
//     p1.innerHTML = homeInventory.electronics[i]
//     console.log(p1.innerHTML);
//     //p2 = homeInventory.electronics[i]
//     //p2 = homeInventory.electronics[i]

//     section.appendChild(p1);
//     article.appendChild(section);

//     document.body.appendChild(article);
// }

// //Appends each of the music items to the page
// for (i = 0; i < homeInventory.music.length; i++) {
//     let section = document.createElement("section");
//     let p1 = document.createElement('p');
//     let p2 = document.createElement('p');
//     let p3 = document.createElement('p');
//     let article = document.getElementById("myStuff");

//     p1.innerHTML = "Name: " + homeInventory.music[i].name;
//     p2.innerHTML = "Location: " + homeInventory.music[i].location;
//     p3.innerHTML = "Description: " +  homeInventory.music[i].description;

//     section.appendChild(p1);
//     section.appendChild(p2);
//     section.appendChild(p3);
//     article.appendChild(section);
// }

// //Appends each of the furniture items to the page
// for (i = 0; i < homeInventory.furniture.length; i++) {
//     let section = document.createElement("section");
//     let p1 = document.createElement('p');
//     let p2 = document.createElement('p');
//     let p3 = document.createElement('p');
//     let article = document.getElementById("myStuff");

//     p1.innerHTML = "Name: " + homeInventory.furniture[i].name;
//     p2.innerHTML = "Location: " + homeInventory.furniture[i].location;
//     p3.innerHTML = "Description: " + homeInventory.furniture[i].description;

//     section.appendChild(p1);
//     section.appendChild(p2);
//     section.appendChild(p3);
//     article.appendChild(section);
// }

// //Appends each of the electronic items to the page
// for (i = 0; i < homeInventory.electronics.length; i++) {
//     let section = document.createElement("section");
//     let p1 = document.createElement('p');
//     let p2 = document.createElement('p');
//     let p3 = document.createElement('p');
//     let article = document.getElementById("myStuff");

//     p1.innerHTML = "Name: " + homeInventory.electronics[i].name;
//     p2.innerHTML = "Location: " + homeInventory.electronics[i].location;
//     p3.innerHTML = "Description: " + homeInventory.electronics[i].description;

//     section.appendChild(p1);
//     section.appendChild(p2);
//     section.appendChild(p3);
//     article.appendChild(section);
// }

