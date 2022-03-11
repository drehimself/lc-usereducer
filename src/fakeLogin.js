export default function fakeLogin(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'andre' && password === 'password') {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}
