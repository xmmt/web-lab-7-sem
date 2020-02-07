/* eslint-disable */
export const ping = store => next => action => {
  console.log(`type: ${action.type}, payload: ${action.payload}`);
  return next(action);
};
/* eslint-enable */
