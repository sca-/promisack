const makeQuerablePromise = require('./querable-promise');

class Promisack {
    constructor(promises = []) {
        this.promises = [];
        this.add(promises);
    }

    prepare(promise) {
        return this.onChange
            ? makeQuerablePromise(promise.then((result) => {
                this.onChange(this.status());
                return result;
            }))
            : makeQuerablePromise(promise);
    }

    add(promise) {
        if (promise instanceof Array) {
            this.promises = this.promises.concat(promise.map(p => this.prepare(p)));
        } else {
            this.promises.push(this.prepare(promise));
        }
    }

    status() {
        return this.promises.reduce((acc, current) => {
            acc.overall++;
            if (current.isFulfilled()) acc.fulfilled++;
            if (current.isRejected()) acc.rejected++;
            return acc;
        }, { overall: 0, fulfilled: 0, rejected: 0 });
    }
}

module.exports = Promisack;
