const img = document.createElement('img') as HTMLImageElement
document.body.append(img);
// img.src = "./img/bild.jpg" // not Working

const imgUrl = new URL("./img/bild.jpg", import.meta.url)
console.log(imgUrl)
img.src = imgUrl.href