window.benis = []

var a = setInterval(
  a => {
    benis.push(JSON.stringify(benis.slice()))
    benis.push(new Uint8Array(Math.random()*1024))
  },
  100
)

