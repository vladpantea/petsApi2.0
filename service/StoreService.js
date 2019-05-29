

/**
 * Delete purchase order by ID
 * For valid response try integer IDs with value < 1000.
 * Anything above 1000 or nonintegers will generate API errors
 * orderId String ID of the order that needs to be deleted
 * no response value expected for this operation
 * */
exports.deleteOrder = function deleteOrder(orderId) {
  return new Promise(((resolve, reject) => {
    resolve();
  }));
};


/**
 * Returns pet inventories by status
 * Returns a map of status codes to quantities
 *
 * returns Map
 * */
exports.getInventory = function getInventory() {
  return new Promise(((resolve, reject) => {
    const examples = {};
    examples['application/json'] = {
      key: 0,
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  }));
};


/**
 * Find purchase order by ID
 * For valid response try integer IDs with value <= 5 or > 10.
 * Other values will generated exceptions
 * orderId Long ID of pet that needs to be fetched
 * returns Order
 * */
exports.getOrderById = function getOrderById(orderId) {
  return new Promise(((resolve, reject) => {
    const examples = {};
    examples['application/json'] = {
      petId: 6,
      quantity: 1,
      id: 0,
      shipDate: '2000-01-23T04:56:07.000+00:00',
      complete: false,
      status: 'placed',
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  }));
};


/**
 * Place an order for a pet
 *
 *
 * body Order order placed for purchasing the pet
 * returns Order
 * */
exports.placeOrder = function placeOrder(body) {
  return new Promise(((resolve, reject) => {
    const examples = {};
    examples['application/json'] = {
      petId: 6,
      quantity: 1,
      id: 0,
      shipDate: '2000-01-23T04:56:07.000+00:00',
      complete: false,
      status: 'placed',
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  }));
};
