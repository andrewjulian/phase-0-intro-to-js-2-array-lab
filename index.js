// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}

function appendCat(name){
    const allCats = [...cats, name];
    return allCats;
}

function prependCat(name){
    const allCats2 = [name, ...cats];
    return allCats2;
}

function removeLastCat() {
    const mostCats = cats.slice(0,cats.length - 1);
    return mostCats;
}

function removeFirstCat() {
    const manyCats = cats.slice(1);
    return manyCats;
}