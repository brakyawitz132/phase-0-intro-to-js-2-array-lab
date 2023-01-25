// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift(name);
}

function destructivelyRemoveLastCat(name) {
    return cats.pop(name);
}

function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
}

function prependCat(name) {
    const newCats = [name,...cats];
    return newCats;
}

function removeFirstCat() {
    return cats.slice(1);
}

function removeLastCat() {
    return cats.slice(0,-1);
}

