import { createChunk } from "./createChunk.js";

const CHUNKS_SIZE = 1024 * 1024 * 5;
export function cutFile(file) {
  const chunkCount = Math.ceil(file.size / CHUNKS_SIZE);
  const result = []
  for (let i = 0; i < chunkCount; i++) {
    const chunk = createChunk(file, i, CHUNKS_SIZE)
    result.push(chunk);
  }
  return result;
}