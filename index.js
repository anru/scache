var cache = {};

function now() {
    return + new Date();
}

/**
 * Cache value
 *
 * @param {String} key
 * @param {any} value
 * @param {Number} [duration]
 */
function set(key, value, duration) {
    del(key);

    cache[key] = {
        value: value
    };

    if (duration != null) {
        var timer = setTimeout(function() {
            delete cache[key];
        }, duration);

        cache[key].expires = now() + duration;
        cache[key].timer = timer;
    }
}

/**
 * Delete value
 *
 * @param key
 */
function del(key) {
    if (key in cache) {
        if (cache[key].timer) clearTimeout(cache[key].timer);
        delete cache[key];
    }
}

/**
 * Check for exists
 *
 * @param key
 * @returns {boolean}
 */
function exists(key) {
    return key in cache && (!cache[key].expires || cache[key].expires > now());
}

/**
 * Get value
 *
 * @param key
 * @returns {any}
 */
function get(key) {
    if (exists(key)) return cache[key].value;
}

/**
 * Delete all values
 */
function clear() {
    for (var key in cache) {
        if (!cache.hasOwnProperty(key)) continue;
        del(key);
    }
}

exports.set = set;
exports.del = del;
exports.exists = exists;
exports.get = get;
exports.clear = clear;