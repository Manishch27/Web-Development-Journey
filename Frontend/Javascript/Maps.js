// Maps in javscript

const map = new Map();

// map.set method :- Add the key-value pair inthe map

map.set("Title", "You don't know js");
map.set("Language", "English");
map.set("Author", "Kyle Simpson");

// map.get method :- Get a particular value of a key

console.log(map.get("Title"));

// map.has method :- Check whether the map contains a particular key or not

console.log(map.has("Title"));

// map.delete method :- remove the key-value pair from the map

map.delete("Author");

console.log(map);

// map.clear method :- clear the map

map.clear()

// map.size method :- return the size of the map

console.log(map.size);

// map.keys method :- return all the keys of the map

console.log(map.keys());

// map.values method :- return all the values of the map

console.log(map.values());

// map.entries method :- return all the entries of the map

console.log(map.entries());

// map.forEach method :- iterate over the map

map.forEach((key, value) => console.log(`${value} = ${key}`))

// for...of loop :- iterate over the map

for (const value of map) {
    console.log(value);
}