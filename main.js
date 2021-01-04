const width = 500
const height = 500

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
canvas.width = width
canvas.height = height

loop()

function loop() {
  const newImage = createRandomImage()
  ctx.putImageData(newImage, 0, 0)
  setTimeout(() => requestAnimationFrame(loop), 10)
}

function createRandomImage() {
  const newImageData = new ImageData(width, height)
  for (let i = 0; i < newImageData.data.length; i += 4) {
    newImageData.data[i] = Math.random() * 255
    newImageData.data[i + 1] = Math.random() * 255
    newImageData.data[i + 2] = Math.random() * 255
    newImageData.data[i + 3] = 255
  }
  return newImageData
}
