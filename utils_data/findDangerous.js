export default function findDangerous(path) {
    fs.readFile(path, "utf8", (error, data) => {
        if (error) {
            console.log({
                error, data
            })
        } else {
            const denggerousAgeWords = []
            const messages = JSON.parse(data)
            for (let i = 0; i < messages.length; i++) {
                let count = 0
                const message = messages[i].content.split(" ")
                for (let j = 0;j<message.length;j++) {
                    if (message[j]==="death"||message[j]==="DEATH"||
                        message[j]==="knife"||message[j]==="KNIFE"||
                        message[j]==="bomb"||message[j]==="BOMB"||
                        message[j]==="attack"||message[j]==="ATTACK") {
                            count += 1
                        }
                }
                if (denggerousAgeWords.some(obj =>messages[i].age  in obj)) {
                    for (let j = 0; j<denggerousAgeWords.length;j++) {
                        if (denggerousAgeWords[j].obj.keys()===messages[i].age) {
                            denggerousAgeWords[j].push(count)
                        } else {
                            continue
                        }
                    }
                } else {
                    denggerousAgeWords.push({age:[count]})
                }
            }
        }
    });
}