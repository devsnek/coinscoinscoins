import MobileDetect from 'mobile-detect';

const md = new MobileDetect(navigator.userAgent);

export default !!md.mobile();
