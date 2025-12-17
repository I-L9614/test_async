import fs from 'fs'
export default function searchByName(path,personName) {
    fs.readFile(path, "utf8", (error, data) => {
        if (error) {
            console.log({
                error, data
            })
        } else {
            const people = JSON.parse(data)
            // console.log(people)
            const person = people.find((obj) => obj.name === personName)
            if (!person) {
                console.log("person not found!")
            } else {
                console.log(person)
            }
        }
    });
}
searchByName('./data/PEOPLE.json','Ronen')
