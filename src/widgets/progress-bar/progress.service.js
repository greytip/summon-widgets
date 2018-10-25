/**
 * Fetches the status from the status api.
 * @param {*} statusApi
 */
export const getStatus = async (statusApi) => {
  const response = await fetch(statusApi);
  return await response.json();
};

export default { getStatus };
