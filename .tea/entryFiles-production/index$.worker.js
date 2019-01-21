
require('./config$');
require('./importScripts$');
function success() {
require('../..//app');
require('../../pages/index/index');
require('../../pages/category/category');
require('../../pages/cart/cart');
require('../../pages/info/info');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
