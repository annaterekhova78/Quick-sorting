import fs from 'fs';

const randomArray = Array.from(
  // 1 000 000
  {length: 1000000},
  () => Math.floor(Math.random() * 1000)
);

fs.writeFileSync('unsorted.json', JSON.stringify(randomArray))
