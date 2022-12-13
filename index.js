import fs from 'fs';
import { sort } from './sort.js'

const unsortedData = JSON.parse(fs.readFileSync('unsorted.json', 'utf-8'))

const sortedData = sort(unsortedData)

fs.writeFileSync('sorted.json', JSON.stringify(sortedData))

console.log(`${sortedData.length} elements have been sorted`)
