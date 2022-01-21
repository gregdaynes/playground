import chunk from 'lodash/chunk.js'

// Console display output with a similar api to rot-js
//
// usage:
//   const display = new Display({
//     width: 40,
//     height: 20
//   })
//
//   display.draw(5, 2, '1')

export class Display {
  #width = 0
  #height = 0
  #map = []

  constructor ({ width, height } = {}) {
    this.#width = width
    this.#height = height

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (!this.#map[y]) this.#map[y] = []
        this.#map[y][x] = ' '
      }
    }
  }

  draw (x, y, character) {
    this.#map[y][x] = character

    const frame = []

    for (const y of this.#map) {
      for (const x of y) {
        frame.push(x)
      }
    }

    console.log(
      chunk(frame, this.#width)
        .map(row => row.join(''))
        .join('\n')
    )
  }
}
