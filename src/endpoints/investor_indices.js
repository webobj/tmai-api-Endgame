const BaseEndpoint = require('../base');

/**
 * Endpoint for accessing investor indices data
 */
class InvestorIndicesEndpoint extends BaseEndpoint {
  /**
   * Get investor indices data
   * 
   * @param {Object} options - Query parameters
   * @param {string} options.startDate - Start date in YYYY-MM-DD format
   * @param {string} options.endDate - End date in YYYY-MM-DD format
   * @param {number} options.limit - Limit the number of items in response (default: 1000)
   * @param {number} options.page - Page number for pagination (default: 0)
   * @returns {Promise<Object>} - Investor indices data
   */
  async get(options = {}) {
    const params = {
      limit: 1000,
      page: 0,
      ...options
    };
    
    return this._paginatedRequest('get', 'investor-indices', params);
  }
}

module.exports = InvestorIndicesEndpoint;
