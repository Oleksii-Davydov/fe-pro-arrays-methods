import {goods} from './goods.js';

/**
 * @param {string} brand
 * @returns {*}
 */
const brandFilter = (brand) => {
    return goods.filter(function (item) {
        return item.brand === brand;
    });
};
/**
 * @param {string} color
 * @returns {*}
 */
const colorFilter = (color) => {
    return goods.filter(function (item) {
        return item.color === color;
    });
};

/**
 * @param {string} model
 * @returns {*}
 */
const modelFilter = (model) => {
    return goods.filter(function (item) {
        return item.model === model;
    });
};

/**
 * @param {number} memory
 * @returns {*}
 */
const memoryFilter = (memory) => {
    return goods.filter(function (item) {
        return item.memory === memory;
    });
};

/**
 * @param {number} price
 * @returns {*}
 */
const priceFilter = (price) => {
    return goods.filter(function (item) {
        return item.price === price;
    });
};

/**
 * @param {string} country
 * @returns {*}
 */
const countryFilter = (country) => {
    return goods.filter(function (item) {
        return item.country === country;
    });
};

/**
 * @param {string} os
 * @returns {*}
 */
const osFilter = (os) => {
    return goods.filter(function (item) {
        return item.os === os;
    });
};

/**
 * @param {number} from
 * @param {number} to
 */
const rangeFilter = (from, to) => {
    return goods.filter(item => (from <= item.price && item.price <= to))
};

const minPriceReducer = () => {
    return goods.reduce(function (prev, curr) {
        return prev.price < curr.price ? prev : curr;
    }).price;
};

const maxPriceReducer = () => {
    return goods.reduce(function (prev, curr) {
        return prev.price > curr.price ? prev : curr;
    }).price;
};


const toMaxSorter = () => {
    return goods.sort((prev, next) => next.price - prev.price);
}
//console.log(toMaxSorter)

const toMinSorter = () => {
    return goods.sort((prev, next) => prev.price - next.price);
}
//console.log(toMinSorter)

export const filters = {
    brandFilter,
    countryFilter,
    priceFilter,
    osFilter,
    colorFilter,
    memoryFilter,
    modelFilter,
    rangeFilter,
};

export const reducers = {
    minPriceReducer,
    maxPriceReducer,
};

export const sorters = {
    toMaxSorter,
    toMinSorter,
};