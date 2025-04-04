const BaseEndpoint = require('../base');

/**
 * Endpoint for accessing sentiment data
 */
class SentimentEndpoint extends BaseEndpoint {
  /**
   * Get sentiment data
   * 
   * @param {Object} options - Query parameters
   * @param {string} options.symbol - Token symbol (e.g., "BTC")
   * @param {string} options.startDate - Start date in YYYY-MM-DD format
   * @param {string} options.endDate - End date in YYYY-MM-DD format
   * @param {number} options.limit - Limit the number of items in response (default: 1000)
   * @param {number} options.page - Page number for pagination (default: 0)
   * @returns {Promise<Object>} - Sentiment data
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
    
    return this._paginatedRequest('get', 'sentiments', params);
  }
}

module.exports = SentimentEndpoint;
