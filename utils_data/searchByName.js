import returnObjects from "./returnObjects.js"

const data = returnObjects('./data/PEOPLE.json')
console.log(data)

export default function searchByName(data, personName) {
    const person = data.find((obj) => obj.name === personName)
    if (!person) {
        console.log("person not found!")
    } else {
        console.log(person)
    }
}

// searchByName(data,'Ronen')