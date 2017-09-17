import MobileDetect from 'mobile-detect';
import md5 from 'md5';

const md = new MobileDetect(window.navigator.userAgent);
export const mobile = !!md.mobile();

const req = new XMLHttpRequest();
req.open('GET', 'https://api.ipify.org?format=json', false);
req.send();

export const fingerprint = md5(req.responseText);
