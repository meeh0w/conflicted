#!/usr/bin/env node

const { mergable } = require('../index')
const [ ,, baseBranch, branch ] = process.argv

if (!baseBranch || !branch) {
	console.error('Usage: conflicted <base-branch> <branch>');
	process.exit(1)
}

process.exit(mergable(baseBranch, branch) ? 0 : 1);
