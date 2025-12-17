import fs from 'fs'


export default async function getAllTrancriptions(path) {
  try {
    const res = await fetch("https://spies-test-server.vercel.app/transcriptions");

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const transcriptions = await res.text();
    fs.writeFile(path, transcriptions, 'utf8', (error) => {
      if (error) {
        console.error('Error writing file:', error);
        return;
      }
      console.log('JSON file created successfully!');
    });
    return transcions
  } catch (error) {
    console.error(error)
  }
}


