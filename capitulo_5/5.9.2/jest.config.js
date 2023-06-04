/** @type {import('jest').Config} */
const config = {
    testEnvironment: 'jest-environment-node',
    verbose: true,
    setupFiles: ['./test/setup.js']
}
module.exports = config