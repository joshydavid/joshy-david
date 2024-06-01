const randomId = (): string => {
  const timeStamp = Date.now().toString(36);
  const randomString = Math.random().toString(36);
  return timeStamp + randomString + Math.floor(Math.random() * 999);
};

export { randomId };
