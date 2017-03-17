/**
 * @since 2017-03-17 13:57:46
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
