import Benchmark from 'benchmark'

new Benchmark.Suite()
  .add('subject', () => {})
  .on('cycle', (event) => console.log(String(event.target)))
  .on('complete', function () {
    console.log('---\n' + this.filter('fastest').map('name'))
  })
  .run({ async: true })
