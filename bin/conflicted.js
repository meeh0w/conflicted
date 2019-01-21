#!/usr/bin/env node

const { conflicted } = require('../index');
const [ ,, baseBranch, branch ] = process.argv;

if (!baseBranch || !branch) {
	console.error('Usage: conflicted <base-branch> <branch>');
	process.exit(1)
}

process.exit(conflicted(baseBranch, branch) ? 0 : 1);
