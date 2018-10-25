export const noop = () => {};

/**
 * Parses a template string.
 * eg.
 * str -> /some/api/{id}/path
 * replacements -> {id: 3}
 * output -> /some/api/{id}/path
 * @param {*} str
 * @param {*} replacements
 */
export const parseTemplateString = (str, replacements = {}) => {
  const PLACEHOLDER_REGEX = /\{(.+?)\}/g;
  return str.replace(PLACEHOLDER_REGEX, (match, $1) => replacements[$1] || $1);
};

export default { noop, parseTemplateString };
