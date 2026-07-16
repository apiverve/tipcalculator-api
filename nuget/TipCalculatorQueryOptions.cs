using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.TipCalculator
{
    /// <summary>
    /// Query options for the Tip Calculator API
    /// </summary>
    public class TipCalculatorQueryOptions
    {
        /// <summary>
        /// The bill amount before tip
        /// </summary>
        [JsonProperty("amount")]
        public double Amount { get; set; }

        /// <summary>
        /// Tip percentage
        /// </summary>
        [JsonProperty("percentage")]
        public double? Percentage { get; set; }

        /// <summary>
        /// Number of people to split the bill
        /// </summary>
        [JsonProperty("people")]
        public int? People { get; set; }

        /// <summary>
        /// Currency code for display
        /// </summary>
        [JsonProperty("currency")]
        public string Currency { get; set; }
    }
}
