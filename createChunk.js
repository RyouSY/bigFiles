export function createChunk(file, index, chunkSize) {
  return new Promise((resolve) => {
    const start = index * chunkSize
    const end = start + chunkSize
    const spart = new SparkMD5.ArrayBuffer()
    const fileReader = new FileReader()
    const blob = file.slice(start, end)
    fileReader.onload = (e) => {
      spart.append(e.target.result)
      resolve({
        start,
        end,
        index,
        hash: spart.end(),
        blob
      })
    }
    fileReader.readAsArrayBuffer(blob)
  })
}