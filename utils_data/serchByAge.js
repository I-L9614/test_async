import fs from 'fs'
export default function searchByAge(path,age) {
    fs.readFile(path, "utf8", (error, data) => {
        if (error) {
            console.log({
                error, data
            })
        } else {
            const people = JSON.parse(data)
            // console.log(people)
            const persons = people.filter((obj) => obj.age === age)
            if (!persons) {
                console.log("person not found!")
            } else {
                console.log(persons)
            }
        }
    });
}
