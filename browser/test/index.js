import Progress from '../progress';
import ProgressBar from 'progressbar.js';

const pr = x => new Promise((resolve) => { setTimeout(() => resolve(true), x) });
const bar = new Progress(
    '#progress',
    [pr(1000), pr(1500), pr(2000), pr(3000), pr(3000), pr(10000)],
    null,
    {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'},
        text: {
            style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#999',
            position: 'absolute',
            right: '0',
            top: '30px',
            padding: 0,
            margin: 0,
            transform: null
            },
            autoStyleContainer: false
        },
        from: {color: '#FFEA82'},
        to: {color: '#ED6A5A'},
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    },
    // {
    //     CustomBarClass: ProgressBar.Circle
    // },
);

setTimeout(() => {
    bar.add([pr(2000), pr(3000), pr(3000)]);
}, 4000);
