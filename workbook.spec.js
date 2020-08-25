const workbook = require('./workbook');

describe('Задание 1: getProfile - работа с callback', () => {
  it.skip(
    'Если переданы неправильные логин или пароль, то в callback первым аргументом должна быть передана ошибка',
    (done) => {
      workbook.getProfile('hello', 'world', (err, profile) => {
        try {
          expect(err.message).toBe('Invalid username or password');
          done();
        } catch (err) {
          done(err);
        }
      });
    }
  );

  it.skip(
    'Если переданы логин и пароль пользователя без профила, то callback вызывается с ошибкой',
    (done) => {
      workbook.getProfile('admin-no-profile', 'admin', (err, profile) => {
        try {
          expect(err.message).toBe('User has no profile');
          done();
        } catch (err) {
          done(err);
        }
      });
    }
  );

  it.skip(
    'Если переданы правильные логин и пароль, то в callback передается ошибка - null, второй аргумент профиль',
    (done) => {
      workbook.getProfile('admin', 'admin', (err, profile) => {
        try {
          expect(err).toBeNull();
          expect(profile).toEqual({
            username: 'admin',
            email: 'admin@admin',
            organization: 'SuperAwesomeCORP'
          });
          done();
        } catch (err) {
          done(err);
        }
      })
    }
  );
});

describe('Задание 2: getProfilePosts - комбинации из callback', () => {
  it.skip(
    'Если переданы неправильные логин или пароль, то в callback первым аргументом должна быть передана ошибка',
    (done) => {
      workbook.getProfilePosts('hello', 'world', (err, profile) => {
        try {
          expect(err.message).toBe('Invalid username or password');
          done();
        } catch (err) {
          done(err);
        }
      });
    }
  );

  it.skip(
    'Если переданы логин и пароль пользователя без профила, то callback вызывается с ошибкой',
    (done) => {
      workbook.getProfilePosts('admin-no-profile', 'admin', (err, profile) => {
        try {
          expect(err.message).toBe('User has no profile');
          done();
        } catch (err) {
          done(err);
        }
      });
    }
  );

  it.skip(
    'Если переданы правильные логин и пароль, то в callback передается ошибка - null, второй аргумент объект, содержащий профиль и посты',
    (done) => {
      workbook.getProfilePosts('admin', 'admin', (err, data) => {
        try {
          expect(err).toBeNull();

          expect(data.posts.length).toBe(3);

          expect(data.profile).toEqual({
            username: 'admin',
            email: 'admin@admin',
            organization: 'SuperAwesomeCORP'
          });
          done();
        } catch (err) {
          done(err);
        }
      })
    }
  );

  it.skip(
    'Если переданы правильные логин и пароль, но у пользователя нет постов, эта ошибка обрабатывается и возвращается пустой массив постов',
    (done) => {
      workbook.getProfilePosts('admin-no-posts', 'admin', (err, data) => {
        try {
          expect(err).toBeNull();

          expect(data.posts.length).toBe(0);

          expect(data.profile).toEqual({
            username: 'admin',
            email: 'admin@admin',
            organization: 'SuperAwesomeCORP'
          });
          done();
        } catch (err) {
          done(err);
        }
      })
    }
  );
});

describe('Задание 3: authorizeAsync - promises', () => {
  // Для этого задания посмотри https://javascript.info/promise-basics
  // Здесь есть примеры как создать Promise, и что это такое

  it.skip('authorizeAsync возвращает promise, который reject-ится если логин и пароль неправильные', async () => {
    await expect(workbook.authorizeAsync('hello', 'world')).rejects;
  })


  it.skip('authorizeAsync возвращает promise, который reject-ится если логин и пароль неправильные', async () => {
    await workbook.authorizeAsync('admin', 'admin');
  })
});

describe('Задание 4: getProfilePostsAsync - combine promises', () => {
  it.skip(
    'Если переданы неправильные логин или пароль, то в callback первым аргументом должна быть передана ошибка',
    async () => {
      await expect(workbook.getProfilePostsAsync('hello', 'world')).rejects;
    }
  );

  it.skip(
    'Если переданы логин и пароль пользователя без профила, то callback вызывается с ошибкой',
    async () => {
      await expect(workbook.getProfilePostsAsync('admin-no-profile', 'admin')).rejects;
    }
  );

  it.skip(
    'Если переданы правильные логин и пароль, то в callback передается ошибка - null, второй аргумент объект, содержащий профиль и посты',
    async () => {
      const data = await workbook.getProfilePostsAsync('admin', 'admin')

      expect(data.posts.length).toBe(3);

      expect(data.profile).toEqual({
        username: 'admin',
        email: 'admin@admin',
        organization: 'SuperAwesomeCORP'
      });
    }
  );

  it.skip(
    'Если переданы правильные логин и пароль, но у пользователя нет постов, эта ошибка обрабатывается и возвращается пустой массив постов',
    async () => {
      const data = await workbook.getProfilePostsAsync('admin-no-posts', 'admin');
      expect(data.posts.length).toBe(0);

      expect(data.profile).toEqual({
        username: 'admin',
        email: 'admin@admin',
        organization: 'SuperAwesomeCORP'
      });
    }
  );
});
