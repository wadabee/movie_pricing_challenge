import { ID } from "@nestjs/graphql";

export type InputType = {
  screenType: string;
  watchDatetime: string;
  tickets: {
    type: string;
    amount: number;
    membership: boolean;
  }[];
};

class PriceCalculator {
  private extendPrice: number;
  private specialPrice: number;

  constructor(screenType: string, watchDatetime: string) {
    if (screenType === "2") {
      this.extendPrice = 500;
    } else if (screenType === "3") {
      this.extendPrice = 1200;
    } else {
      this.extendPrice = 0;
    }

    const watchDate = new Date(watchDatetime);
    if (watchDate.getDate() === 1) {
      this.specialPrice = 1000;
    } else if (watchDate.getDay() === 3) {
      this.specialPrice = 1200;
    } else if (watchDate.getHours() >= 20) {
      this.specialPrice = 1400;
    } else {
      this.specialPrice = -1;
    }
  }

  private getBasePrice(type: string): number {
    const getPrice = (basicPrice: number): number => {
      if (this.specialPrice < 0) {
        return basicPrice;
      }
      return this.specialPrice < basicPrice ? this.specialPrice : basicPrice;
    };

    // 基本料金
    const priceObject: {
      [key: string]: number;
    } = {
      "1": 1800,
      "2": 1500,
      "3": 1300,
      "4": 1100,
      "5": 1000,
    };

    return getPrice(priceObject[type]) + this.extendPrice;
  }

  public calculate(
    type: string,
    amount: number,
    isMembership: boolean
  ): number {
    const basePrice = this.getBasePrice(type);
    const discount = isMembership ? 300 : 0;

    return (basePrice - discount) * amount;
  }
}

const main = (input: InputType): number => {
  let totalPrice = 0;

  const calculator = new PriceCalculator(input.screenType, input.watchDatetime);

  input.tickets.forEach(({ type, amount, membership }) => {
    totalPrice += calculator.calculate(type, amount, membership);
  });

  return totalPrice;
};

(() => {
  // main();
})();

export default main;
