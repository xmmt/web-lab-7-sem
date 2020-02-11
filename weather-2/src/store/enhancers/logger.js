export const logger = () => next => action => {
  // eslint-disable-next-line no-console
  console.log(`type: ${action.type}, payload: ${action.payload}`);
  return next(action);
};

export default logger;
