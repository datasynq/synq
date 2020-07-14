import sade from 'sade'
import pkg from '../package.json'
const prog = sade('synq')

prog
	.version(pkg.version)
	.describe('CLI for standardizing and sharing distributed data')
	.option('-c, --config', 'Provide path to custom config', './__synq__/config.json')
	.option('-s, --silent', 'No console output (still output errors)')

import init from '@qq/commands/init'
init(prog)

import db from '@qq/commands/db'
db(prog)

import select from '@qq/commands/select'
select(prog)

import remote from '@qq/commands/remote'
remote(prog)

import transform from '@qq/commands/transform'
transform(prog)

// import pull from '@qq/commands/pull'
// pull(prog)

// import push from '@qq/commands/push'
// push(prog)

prog.parse(process.argv)
