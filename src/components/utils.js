const regex = /^on([A-Z][a-z]+)+$/;

export const filterEvents = props => (
  Object.keys(props).reduce((events, key) => {
    if (regex.test(key)) {
      Object.defineProperty(events, key, {
        enumerable: true,
        value: props[key],
        writable: true,
      });
    }

    return events;
  }, {})
);