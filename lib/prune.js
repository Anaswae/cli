// prune extraneous packages
const Arborist = require('@npmcli/arborist')
const usageUtil = require('./utils/usage.js')

const usage = usageUtil('prune',
  'npm prune [[<@scope>/]<pkg>...] [--production]'
)
const completion = (cb) => cb(null, [])

const cmd = (args, cb) => prune().then(() => cb()).catch(cb)

const prune = async () => {
  const arb = new Arborist({
    ...npm.flatOptions,
    path: where
  })
  await arb.prune()
}

module.exports = Object.assign(cmd, { usage, completion })
