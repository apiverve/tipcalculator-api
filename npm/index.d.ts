declare module '@apiverve/tipcalculator' {
  export interface tipcalculatorOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface tipcalculatorResponse {
    status: string;
    error: string | null;
    data: TipCalculatorData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface TipCalculatorData {
      billAmount:       number | null;
      tipPercentage:    number | null;
      tipAmount:        number | null;
      totalAmount:      number | null;
      currency:         null | string;
      splitBetween:     number | null;
      perPerson:        PerPerson;
      commonTipAmounts: CommonTipAmount[];
      formatted:        Formatted;
  }
  
  interface CommonTipAmount {
      percentage: number | null;
      tipAmount:  number | null;
      total:      number | null;
      perPerson:  number | null;
  }
  
  interface Formatted {
      billAmount:     null | string;
      tipAmount:      null | string;
      totalAmount:    null | string;
      perPersonTotal: null | string;
  }
  
  interface PerPerson {
      billAmount:  number | null;
      tipAmount:   number | null;
      totalAmount: number | null;
  }

  export default class tipcalculatorWrapper {
    constructor(options: tipcalculatorOptions);

    execute(callback: (error: any, data: tipcalculatorResponse | null) => void): Promise<tipcalculatorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: tipcalculatorResponse | null) => void): Promise<tipcalculatorResponse>;
    execute(query?: Record<string, any>): Promise<tipcalculatorResponse>;
  }
}
