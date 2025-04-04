const BaseEndpoint = require('../base');

/**
 * Endpoint for accessing price data
 */
class PriceEndpoint extends BaseEndpoint {
  /**
   * Get price data
   * 
   * @param {Object} options - Query parameters
   * @param {string} options.symbol - Token symbol (e.g., "BTC")
   * @param {string} options.interval - Time interval (e.g., "1d", "1h")
   * @param {string} options.startDate - Start date in YYYY-MM-DD format
   * @param {string} options.endDate - End date in YYYY-MM-DD format
   * @param {number} options.limit - Limit the number of items in response (default: 1000)
   * @param {number} options.page - Page number for pagination (default: 0)
   * @returns {Promise<Object>} - Price data
   */
  async get(options = {}) {
    if (!options.symbol) {
      throw new Error('Symbol parameter is required');
    }
    
    const params = {
      limit: 1000,
      page: 0,
      ...options
    };
    
    return this._paginatedRequest('get', 'price', params);
  }
}

module.exports = PriceEndpoint;
