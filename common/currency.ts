export enum Currency {
    EUR = "EUR",
    GBP = "GBP",
    AED = "AED",
}

export class CurrencyHelper {
    static getSign(currency: Currency): string {
        switch (currency) {
            case Currency.EUR: return "€"
            case Currency.GBP: return "£"
            case Currency.AED: return "AED"
            default: {
                const c: never = currency;
                throw new Error("Unknown currency: " + c)
            }
        }

    }

    static getSuffix(currency: Currency): string {
        switch (currency) {
            case Currency.EUR: return "euro"
            case Currency.GBP: return "GBP"
            case Currency.AED: return "AED"
            default: {
                const c: never = currency;
                throw new Error("Unknown currency: " + c)
            }
        }
    }

    static getCode(currency: Currency): number {
        switch (currency) {
            case Currency.EUR: return 978
            case Currency.GBP: return 826
            case Currency.AED: return 784
            default: {
                const c: never = currency;
                throw new Error("Unknown currency: " + c)
            }
        }
    }
}