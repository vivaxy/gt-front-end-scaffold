/**
 * @since 2017-02-20 10:25
 * @author vivaxy
 */

import '../Demo';

if (module.hot) {
    module.hot.accept('../Demo', () => {
        location.reload();
    });
}
