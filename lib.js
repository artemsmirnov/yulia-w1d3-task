const AUTHORIZED_TOKEN = 'ad1r2fqd12ras3r3fwfq';
const AUTHORIZED_TOKEN_NO_PROFILE = 'sfo2n5n225g245g';
const AUTHORIZED_TOKEN_NO_POSTS = 'a323ff4g4-4-gj45igj2'

exports.authorize = function(username, password, cb) {
  setTimeout(() => {
    if (username === 'admin' && password === 'admin') {
      cb(null, AUTHORIZED_TOKEN);
    } else if (username === 'admin-no-profile' && password === 'admin') {
      cb(null, AUTHORIZED_TOKEN_NO_PROFILE)
    } else if (username === 'admin-no-posts' && password === 'admin') {
      cb(null, AUTHORIZED_TOKEN_NO_POSTS);
    } else {
      cb(new Error('Invalid username or password'));
    }
  }, 50);
}

exports.getProfile = function(token, cb) {
  setTimeout(() => {
    if (token === AUTHORIZED_TOKEN || token === AUTHORIZED_TOKEN_NO_POSTS) {
      cb(null, {
        username: 'admin',
        email: 'admin@admin',
        organization: 'SuperAwesomeCORP'
      });
    } else if (token === AUTHORIZED_TOKEN_NO_PROFILE) {
      cb(new Error('User has no profile'));
    } else {
      cb(new Error('Invalid token'))
    }
  }, 50)
}

exports.getPosts = function(token, cb) {
  setTimeout(() => {
    if (token === AUTHORIZED_TOKEN || token === AUTHORIZED_TOKEN_NO_PROFILE) {
      cb(null, [
        {
          title: 'Hello, World!'
        },
        {
          title: 'Lorem ipsum'
        },
        {
          title: 'Dolor sit amet',
        }
      ]);
    } else if (token === AUTHORIZED_TOKEN_NO_POSTS) {
      cb(new Error('User has no posts'));
    } else {
      cb(new Error('Invalid token'))
    }
  }, 50)
}