// dedupe duplicated packages, or find them in the tree
const Arborist = require('@npmcli/arborist')
const usageUtil = require('./utils/usage.js')

const usage = usageUtil('dedupe', 'npm dedupe')
const completion = (cb) => cb(null, [])

const cmd = (args, cb) => dedupe().then(() => cb()).catch(cb)

const dedupe = async () => {
  const arb = new Arborist({
    ...npm.flatOptions,
    path: where
  })
  await arb.dedupe()
}

module.exports = Object.assign(cmd, { usage, completion })
