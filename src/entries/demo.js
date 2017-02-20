/**
 * @since 2017-02-20 10:25
 * @author vivaxy
 */

import ejs from '../lib/ejs';

import demoTpl from '../ejs/demo.ejs';

import '../styles/demo.pcss';

const demoTplFn = ejs.compile(demoTpl, {
    client: true,
});
const root = document.querySelector('.js-root');

root.innerHTML = demoTplFn({
    text: 'demo',
});

if (module.hot) {
    module.hot.accept(() => {
        location.reload();
    });
}
