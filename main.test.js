import test from 'node:test'
import assert from 'node:assert/strict'

test('Main test suite', async (t) => {
  await t.test('This is ok', () => {
    assert.ok(true)
  })
})
