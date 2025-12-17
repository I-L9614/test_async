import fs from 'fs'


async function getAllPeople() {
try {
    const res = await fetch("https://spies-test-server.vercel.app/transcriptions");

    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.text();
} catch (error){
    console.error(error)
}
}

const transcriptions = await getAllPeople()

fs.writeFile('TRANSCRIPTIONS.json', transcriptions, 'utf8', (error) => {
  if (error) {
    console.error('Error writing file:', error);
    return;
  }
  console.log('JSON file created successfully!');
});