const ProgressBar = require('progress');
const Promisack = require('../index.js');

class PromiseProgress {
    constructor(promises = [], onComplete = () => {}) {
        this.onComplete = onComplete;
        this.progressBar = new ProgressBar('[:bar] :percent', {
            total: promises.length,
            width: 80,
            complete: '#',
            incomplete: '.',
            renderThrottle: 0
        });
        this.promisack = new Promisack(promises, this.tick.bind(this));
    }

    add(promises = []) {
        this.promisack.add(promises);
        this.progressBar.total += promises.length;
        const { fulfilled, rejected, overall } = this.promisack.status();
        this.progressBar.update((fulfilled + rejected) / overall);
    }

    tick(status) {
        if (this.progressBar.complete) {
            if(this.onComplete) this.onComplete(status);
        } else {
            this.progressBar.tick();
        }        
    }
}

module.exports = PromiseProgress;
