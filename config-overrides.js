// const { override, useBabelRc } = require("customize-cra");
const { override, useBabelRc } = require('customize-cra');

module.exports = override(
    //import để sử dụng babelRc vừa cấu hình
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc(),
);
