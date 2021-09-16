// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// Copying an array
// ------------------------------------- Array.prototype.slice() ---------------------------------
let copyOfPlayers1 = players.slice();

// -------------------------------------- Spread syntax (...) --------------------------------------
let copyOfPlayers2 = [...players];

// ------------------------------------- Array.prototype.concat() ----------------------------------
let copyOfPlayers3 = [].concat(players);


// ------------------------------------- Array.from() ----------------------------------------------
let copyOfPlayers4 = Array.from(players);


// ------------------------------------- Objects ---------------------------------------------------
const person = {
    name: 'Shakhrukh',
    age: 80,
    social: {
        twitter: "@yshakhrukh",
        facebook: "shakhrukh"
    }
};

// ------------------------------------ Copy of object ------------------------------------------
// ------------------------------------ Shallow copy --------------------------------------------
// ------------------------------------ Spread operator() --------------------------------------- 
let copyOfPerson1 = { ...person };

// ----------------------------------- Object.assign() ------------------------------------------
let copyOfPerson2 = Object.assign({}, person);

// ------------------------------------ Deep copy -----------------------------------------------
// ------------------------------------ JSON.parse() JSON.stringify() -----------------------------
let copyOfPerson3 = JSON.parse(JSON.stringify(person));


// ------------------------------------ Custom Function ------------------------------------------
function copy(object) {
    let objectCopy = {};
    for (let [key, value] of Object.entries(object)) {
        if (typeof value === "object") {
            objectCopy[key] = copy(value);
        } else {
            objectCopy[key] = value;
        }
    }
    return objectCopy;
}

let copyOfPerson4 = copy(person);
