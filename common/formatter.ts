import { Currency, CurrencyHelper } from './currency';

export enum PriceStyle {
  Symbol = "Symbol",
  Text = "Text",
  None = "None"
}

export class Formatter {

  static currency = Currency.EUR

  static whatDecimalSeparator(): string {
    const n = 1.1;
    const str = n.toLocaleString().substring(1, 2);
    return str;
  }

  static price(value: number, locale = 'nl-BE', style = PriceStyle.Symbol): string {
    if (style == PriceStyle.None) {
      // Check if has decimals
      const decimals = value % 100;
      const abs = Math.floor(Math.abs(value) / 100);

      // Include decimals
      return (value < 0 ? "-" : "") +
        abs +
        this.whatDecimalSeparator() +
        (Math.round(Math.abs(decimals)) + "").padStart(2, "0");

    }

    if (style == PriceStyle.Text) {
      return this.price(value, locale, PriceStyle.None) + " " + this.currency;
    }

    const formatted = new Intl.NumberFormat(locale, {
      style: "currency",
      currency: this.currency,
    }).format(Math.abs(value) / 100);

    return formatted.replace(new RegExp(this.currency, "ig"), CurrencyHelper.getSign(this.currency));
  }
}