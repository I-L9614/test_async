import fs from 'fs'


export default async function getAllPeople(path) {
  try {
    const res = await fetch("https://spies-test-server.vercel.app/people");

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const people = await res.text();
    fs.writeFile(path, people, 'utf8', (error) => {
      if (error) {
        console.error('Error writing file:', error);
        return;
      }
      console.log('JSON file created successfully!');
    });
    return people
  } catch (error) {
    console.error(error)
  }
}





