/* eslint-disable */
export default async function forAsync<T>(
  array: Array<T>,
  callbackfn: (value: T, index: number, array: Array<T>) => Promise<void>,
): Promise<void> {
  for (let index = 0; index < array.length; index++) {
    await callbackfn(array[index], index, array);
  }
}
