const BaseEndpoint = require('../base');

/**
 * Endpoint for accessing top tokens by market cap
 */
class TopMarketCapTokensEndpoint extends BaseEndpoint {
  /**
   * Get top tokens by market cap
   * 
   * @param {Object} options - Query parameters
   * @param {number} options.top_k - Number of top tokens to return (default: 100)
   * @param {number} options.page - Page number for pagination (default: 0)
   * @returns {Promise<Object>} - Top tokens by market cap data
   */
  async get(options = {}) {
    const params = {
      top_k: 100,
      page: 0,
      ...options
    };
    
    return this._request('get', 'top-market-cap-tokens', params);
  }
}

module.exports = TopMarketCapTokensEndpoint;
