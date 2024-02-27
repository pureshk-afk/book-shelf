export const getQueryParamStringFromObject = (queries) => {
  let query_string = '?';
  for (const [key, value] of Object.entries(queries)) {
    query_string += `${key}=${value}&`;
  }
  return query_string;
};
