
/**
 * returns random integer between 0 and max - 1;
 * example: 
 * getRandomInt(3) will return 0,1 or 2
 */
export const getRandomInt = (max: number): number =>
  Math.floor(Math.random() * max);
