# scache

Simple in-memory cache for node.js

## Installation

    npm install scache

## Usage

    var cache = require('scache');

    cache.set('key', 5, 1000*60);
    console.log(cache.get('key'));

    cache.del('key');
    console.log(cache.exists('key'));

## API

## cache.set(key, value, [duration]);

Cache value, optional with specified lifetime.

## cache.get(key)

Retrieve value by key

## cache.del(key)

Remove value

## cache.clear()

Remove all values

