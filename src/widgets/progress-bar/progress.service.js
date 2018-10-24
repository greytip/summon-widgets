let counter = 0;
export const getStatus = async (batch, source) => {
  // TODO: Create api here.
  //   const api = 'https://api.github.com/users';
  //   // read out JSON
  //   const response = await fetch(api);
  //   const users = await response.json();
  //   return users;
  const promise = new Promise((resolve, reject) => {
    const value = ~~(Math.random() * 5);
    counter += value;
    setTimeout(() => {
      resolve(counter);
    }, value);
  });
  const value = await promise;
  return value;
};

export default { getStatus };
