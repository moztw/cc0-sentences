const exec = require('child_process').exec
const fs = require('fs')
const render = require('mustache').render

const template = fs.readFileSync('README.md.mustache', 'utf-8')

function getStdout (cmd) {
    return new Promise((res, rej) => {
        exec(cmd, (err, stdout) => {
            if (err) rej(err)
            else res(stdout)
        })
    })
}

Promise.all([
    getStdout('date +%F').then(e => e.trim()),
    getStdout('git rev-parse HEAD').then(e => e.trim()),
    getStdout('wc -l all.txt').then(e => parseInt(e.split(' ')[0]) + 1),
    getStdout('node voice-text-tools/text-tools.js -c all.txt voice-text-tools/CnsPhonetic2016-08v2.cin'),
    getStdout('node voice-text-tools/text-tools.js -o all.txt voice-text-tools/教育部2015常用字99.75%\\(3593字\\).txt')
])
.then(([
    date,
    lastCommit,
    sentencesAmount,
    phonCov,
    charCov
]) => {
    fs.writeFileSync('README.md', render(template, {       
        date,
        lastCommit,
        sentencesAmount,
        phonCov,
        charCov
    }))
})