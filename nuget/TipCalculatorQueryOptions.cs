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
        public string Amount { get; set; }

        /// <summary>
        /// Tip percentage
        /// </summary>
        [JsonProperty("percentage")]
        public string Percentage { get; set; }

        /// <summary>
        /// Number of people to split the bill
        /// </summary>
        [JsonProperty("people")]
        public string People { get; set; }

        /// <summary>
        /// Currency code for display
        /// </summary>
        [JsonProperty("currency")]
        public string Currency { get; set; }
    }
}
