const { execSync } = require('child_process');
const CONFLICT_REGEXP = new RegExp('<<<<<<< .our', 'gi')

/**
 * @param {string} baseBranch
 * @param {string} branch
 * @returns {boolean} True if branches are conflicted, false otherwise or when we can't tell due to errors
 */
const conflicted = (baseBranch, branch) => {
	try {
		const output = execSync(`git merge-tree \`git merge-base ${baseBranch} ${branch}\` ${branch} ${baseBranch}`);
		return CONFLICT_REGEXP.test(output.toString());
	} catch (ex) {
		console.log(ex.stdout.toString());
		console.error(ex.stderr.toString());

		return true;
	}
};

/**
 * @param {string} baseBranch
 * @param {string} branch
 * @returns {boolean} True if branches are mergable without conflicts, false otherwise or when we can't tell due to errors
 */
const mergable = (...args) => !conflicted(...args);

module.exports = {
	conflicted,
	mergable
}
