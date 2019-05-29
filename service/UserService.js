

/**
 * Create user
 * This can only be done by the logged in user.
 *
 * body User Created user object
 * no response value expected for this operation
 * */
exports.createUser = function createUser(body) {
  return new Promise(((resolve, reject) => {
    resolve();
  }));
};


/**
 * Creates list of users with given input array
 *
 *
 * body List List of user object
 * no response value expected for this operation
 * */
exports.createUsersWithArrayInput = function createUsersWithArrayInput(body) {
  return new Promise(((resolve, reject) => {
    resolve();
  }));
};


/**
 * Creates list of users with given input array
 *
 *
 * body List List of user object
 * no response value expected for this operation
 * */
exports.createUsersWithListInput = function createUsersWithListInput(body) {
  return new Promise(((resolve, reject) => {
    resolve();
  }));
};


/**
 * Delete user
 * This can only be done by the logged in user.
 *
 * username String The name that needs to be deleted
 * no response value expected for this operation
 * */
exports.deleteUser = function deleteUser(username) {
  return new Promise(((resolve, reject) => {
    resolve();
  }));
};


/**
 * Get user by user name
 *
 *
 * username String The name that needs to be fetched. Use user1 for testing.
 * returns User
 * */
exports.getUserByName = function getUserByName(username) {
  return new Promise(((resolve, reject) => {
    const examples = {};
    examples['application/json'] = {
      firstName: 'firstName',
      lastName: 'lastName',
      password: 'password',
      userStatus: 6,
      phone: 'phone',
      id: 0,
      email: 'email',
      username: 'username',
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  }));
};


/**
 * Logs user into the system
 *
 *
 * username String The user name for login
 * password String The password for login in clear text
 * returns String
 * */
exports.loginUser = function loginUser(username, password) {
  return new Promise(((resolve, reject) => {
    const examples = {};
    examples['application/json'] = '';
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  }));
};


/**
 * Logs out current logged in user session
 *
 *
 * no response value expected for this operation
 * */
exports.logoutUser = function logoutUser() {
  return new Promise(((resolve, reject) => {
    resolve();
  }));
};


/**
 * Updated user
 * This can only be done by the logged in user.
 *
 * username String name that need to be deleted
 * body User Updated user object
 * no response value expected for this operation
 * */
exports.updateUser = function updateUser(username, body) {
  return new Promise(((resolve, reject) => {
    resolve();
  }));
};
