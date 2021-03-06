export declare class TSMap<K, V> {
    length: number;
    constructor(inputMap?: (K | V)[][]);
    /**
     * Convert a JSON object to a map.
     *
     * @param {*} jsonObject JSON object to convert
     * @param {boolean} [convertObjs] convert nested objects to maps
     * @returns {TSMap<K, V>}
     * @memberof TSMap
     */
    fromJSON(jsonObject: any, convertObjs?: boolean): this;
    /**
     * Outputs the contents of the map to a JSON object
     *
     * @returns {{[key: string]: V}}
     * @memberof TSMap
     */
    toJSON(): {
        [key: string]: V;
    };
    /**
     * Get an array of arrays respresenting the map, kind of like an export function.
     *
     * @returns {(Array<Array<K|V>>)}
     *
     * @memberOf TSMap
     */
    entries(): (K | V)[][];
    /**
     * Get an array of keys in the map.
     *
     * @returns {Array<K>}
     *
     * @memberOf TSMap
     */
    keys(): K[];
    /**
     * Get an array of the values in the map.
     *
     * @returns {Array<V>}
     *
     * @memberOf TSMap
     */
    values(): V[];
    /**
     * Check to see if an item in the map exists given it's key.
     *
     * @param {K} key
     * @returns {Boolean}
     *
     * @memberOf TSMap
     */
    has(key: K): boolean;
    /**
     * Get a specific item from the map given it's key.
     *
     * @param {K} key
     * @returns {V}
     *
     * @memberOf TSMap
     */
    get(key: K): V;
    /**
     * Safely retrieve a deeply nested property.
     *
     * @param {K[]} path
     * @returns {V}
     *
     * @memberOf TSMap
     */
    deepGet(path: K[]): V;
    /**
     * Set a specific item in the map given it's key, automatically adds new items as needed.
     * Ovewrrites existing items
     *
     * @param {K} key
     * @param {V} value
     *
     * @memberOf TSMap
     */
    set(key: K, value: V): this;
    /**
     * Enters a value into the map forcing the keys to always be sorted.
     * Stolen from https://machinesaredigging.com/2014/04/27/binary-insert-how-to-keep-an-array-sorted-as-you-insert-data-in-it/
     * Best case speed is O(1), worse case is O(N).
     *
     * @param {K} key
     * @param {V} value
     * @param {number} [startVal]
     * @param {number} [endVal]
     * @returns {this}
     * @memberof TSMap
     */
    sortedSet(key: K, value: V, startVal?: number, endVal?: number): this;
    /**
     * Provide a number representing the number of items in the map
     *
     * @returns {number}
     *
     * @memberOf TSMap
     */
    size(): number;
    /**
     * Clear all the contents of the map
     *
     * @returns {TSMap<K,V>}
     *
     * @memberOf TSMap
     */
    clear(): this;
    /**
     * Delete an item from the map given it's key
     *
     * @param {K} key
     * @returns {Boolean}
     *
     * @memberOf TSMap
     */
    delete(key: K): boolean;
    /**
     * Used to loop through the map.
     *
     * @param {(value:V,key?:K,index?:number) => void} callbackfn
     *
     * @memberOf TSMap
     */
    forEach(callbackfn: (value: V, key?: K, index?: number) => void): void;
    /**
     * Returns an array containing the returned value of each item in the map.
     *
     * @param {(value:V,key?:K,index?:number) => any} callbackfn
     * @returns {Array<any>}
     *
     * @memberOf TSMap
     */
    map(callbackfn: (value: V, key?: K, index?: number) => any): any[];
    /**
     * Removes items based on a conditional function passed to filter.
     * Mutates the map in place.
     *
     * @param {(value:V,key?:K,index?:number) => Boolean} callbackfn
     * @returns {TSMap<K,V>}
     *
     * @memberOf TSMap
     */
    filter(callbackfn: (value: V, key?: K, index?: number) => Boolean): this;
    /**
     * Creates a deep copy of the map, breaking all references to the old map and it's children.
     * Uses JSON.parse so any functions will be stringified and lose their original purpose.
     *
     * @returns {TSMap<K,V>}
     *
     * @memberOf TSMap
     */
    clone(): TSMap<K, V>;
}
