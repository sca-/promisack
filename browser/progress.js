const ProgressBar = require('progressbar.js');
const Promisack = require('../index.js');

class PromiseProgress {
    constructor(container = '', promises = [], onComplete = () => {}, progressBarOptions = {}) {
        if (!container) throw new Error('Must specify container prop for PromiseProgressBar');
        if (progressBarOptions && progressBarOptions.CustomBarClass) {
            this.progress = new progressBarOptions.CustomBarClass(container, progressBarOptions);
        } else {
            this.progress = new ProgressBar.Line(container, progressBarOptions);
        }
        this.promisack = new Promisack(promises, this.tick.bind(this));
        this.onComplete = onComplete;
    }
    
    add(promises = []) {
        this.promisack.add(promises);
        const { fulfilled, rejected, overall } = this.promisack.status();
        this.progress.animate((fulfilled + rejected) / overall);
    }

    tick(status) {
        const { fulfilled, rejected, overall } = status;
        const ratio = (fulfilled + rejected) / overall;
        this.progress.animate(ratio);
        if (ratio == 1) {
            if(this.onComplete) this.onComplete(status);
        }       
    }
}

module.exports = PromiseProgress;
