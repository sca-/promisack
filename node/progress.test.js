const Progress = require('./progress');

const pr = x => new Promise((resolve) => { setTimeout(() => resolve(true), x) });

const bar = new Progress([pr(1000), pr(1500), pr(2000), pr(3000), pr(3000), pr(10000)]);

setTimeout(() => {
    bar.add([pr(2000), pr(3000), pr(3000)]);
}, 4000);