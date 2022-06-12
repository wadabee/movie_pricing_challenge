export type InputType = {
  screenType: string;
  watchDatetime: string;
  tickets: {
    type: string;
    amount: number;
    membership: boolean;
  }[];
};

const main = (input: InputType): number => {
  return 1;
};

(() => {
  // main();
})();

export default main;
