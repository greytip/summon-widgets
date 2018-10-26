/**
 * Fetches the status from the status api.
 * @param {*} statusApi
 */
export const getStatus = async (statusApi) => {
  const response = await fetch(statusApi);
  const json = await response.json();

  return (await json.hasOwnProperty('error'))
    ? Promise.reject(json)
    : Promise.resolve(json);
};

export default { getStatus };
