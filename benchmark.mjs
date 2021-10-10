import Benchmark from 'benchmark'
import { benchmarkable as subject } from './index.mjs'

new Benchmark.Suite()
  .add('subject', subject)
  .on('cycle', (event) => console.log(String(event.target)))
  .on('complete', function () {
    console.log('---\n' + this.filter('fastest').map('name'))
  })
  .run({ async: true })
