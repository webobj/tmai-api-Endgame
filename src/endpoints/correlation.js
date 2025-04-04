const BaseEndpoint = require('../base');

/**
 * Endpoint for accessing correlation data
 */
class CorrelationEndpoint extends BaseEndpoint {
  /**
   * Get correlation data
   * 
   * @param {Object} options - Query parameters
   * @param {string} options.base_symbol - Base token symbol (e.g., "BTC")
   * @param {string} options.quote_symbol - Quote token symbol (e.g., "ETH")
   * @param {string} options.startDate - Start date in YYYY-MM-DD format
   * @param {string} options.endDate - End date in YYYY-MM-DD format
   * @param {number} options.limit - Limit the number of items in response (default: 1000)
   * @param {number} options.page - Page number for pagination (default: 0)
   * @returns {Promise<Object>} - Correlation data
   */
  async get(options = {}) {
    if (!options.base_symbol || !options.quote_symbol) {
      throw new Error('base_symbol and quote_symbol parameters are required');
    }
    
    const params = {
      limit: 1000,
      page: 0,
      ...options
    };
    
    return this._paginatedRequest('get', 'correlation', params);
  }
}

module.exports = CorrelationEndpoint;
