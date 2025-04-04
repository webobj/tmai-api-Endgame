const BaseEndpoint = require('../base');

/**
 * Endpoint for accessing crypto investors data
 */
class CryptoInvestorsEndpoint extends BaseEndpoint {
  /**
   * Get crypto investors data
   * 
   * @param {Object} options - Query parameters
   * @param {string} options.investor_id - Investor ID
   * @param {number} options.limit - Limit the number of items in response (default: 1000)
   * @param {number} options.page - Page number for pagination (default: 0)
   * @returns {Promise<Object>} - Crypto investors data
   */
  async get(options = {}) {
    const params = {
      limit: 1000,
      page: 0,
      ...options
    };
    
    return this._request('get', 'crypto-investors', params);
  }
}

module.exports = CryptoInvestorsEndpoint;
