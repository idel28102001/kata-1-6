import Slider from './Slider';

const sections = [{ el: '.brands' },
{ el: '.devices' },
{ el: '.prices', changedSize: 0.9254, buttonUnavailable: true }
];
sections.forEach(e => {
    const section = document.querySelector(e.el);
    new Slider({
        section, window, options: {
            changeSize: e?.changedSize,
            buttonUnavailable: e?.buttonUnavailable,
        }
    });
});
