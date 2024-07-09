import { cutFile } from './cutFile.js'

const inputFile = document.querySelector('.file')

inputFile.addEventListener('change', async (e) => {
  const file = e.target.files[0]
  console.time('cutFile')
  const chunks = await cutFile(file)
  console.timeEnd('cutFile')
  console.log(chunks)
})