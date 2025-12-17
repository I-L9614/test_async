import fs from 'fs'


async function getAllPeople() {
try {
    const res = await fetch("https://spies-test-server.vercel.app/people");

    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.text();
} catch (error){
    console.error(error)
}
}

const people = await getAllPeople()

fs.writeFile('PEOPLE.json', people, 'utf8', (error) => {
  if (error) {
    console.error('Error writing file:', error);
    return;
  }
  console.log('JSON file created successfully!');
});


