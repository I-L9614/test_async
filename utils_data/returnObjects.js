import fs from 'fs'
export default function returnObjects(path) {
    fs.readFile(path, "utf8", (error, data) => {
        if (error) {
            console.log({
                error, data
            })
        } else {
            return JSON.parse(data)
        }
    });
}

