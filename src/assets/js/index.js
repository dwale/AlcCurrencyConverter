const dbPromise = idb.open('conversion-db', 1, function (upgradeDb) {
 const keystore = upgradeDb.createObjectStore('keyVal');
 keyValStore.put('world', 'hello');
});
