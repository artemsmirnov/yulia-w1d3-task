const lib = require('./lib');
// lib.authorize(username, password, cb(error, authToken))
// lib.getProfile(authToken, cb(error, profile))

exports.getProfile = (username, password, cb) => {
  // При работе с callback есть правило, первый аргумент всегда ошибка, если ошибка не произошла, то передаем null
  // В нашем случае ошибка, это то что функция не реализована
  // Реализуй функцию getProfile так чтобы проходили тесты задания 1

  cb(new Error('Not implemented'));
}

exports.authorizeAsync = (username, password) => {
  return new Promise((resolve, reject) => {
    lib.authorize(username, password, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    })
  })
}