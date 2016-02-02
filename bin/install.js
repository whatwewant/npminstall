#!/usr/bin/env node

/**
 * Copyright(c) cnpm and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <m@fengmk2.com> (http://fengmk2.com)
 */

'use strict';

/**
 * Module dependencies.
 */

const co = require('co');
const npminstall = require('../');

const names = process.argv.slice(2);
const pkgs = [];
for (const name of names) {
  pkgs.push({ name });
}

co(function*() {
  yield npminstall({
    root: process.cwd(),
    // registry, default is https://registry.npmjs.org
    registry: process.env.npm_registry || 'https://registry.npm.taobao.org',
    pkgs,
  });
}).catch(function(err) {
  console.error(err);
  console.error(err.stack);
  process.exit(1);
});