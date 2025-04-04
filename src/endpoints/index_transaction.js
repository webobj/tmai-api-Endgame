const BaseEndpoint = require('../base');

/**
 * Endpoint for accessing index transaction data
 */
class IndexTransactionEndpoint extends BaseEndpoint {
  /**
   * Get index transaction data
   * 
   * @param {Object} options - Query parameters
   * @param {string} options.index_id - Index ID
   * @param {string} options.startDate - Start date in YYYY-MM-DD format
   * @param {string} options.endDate - End date in YYYY-MM-DD format
   * @param {number} options.limit - Limit the number of items in response (default: 1000)
   * @param {number} options.page - Page number for pagination (default: 0)
   * @returns {Promise<Object>} - Index transaction data
   */
  async get(options = {}) {
    if (!options.index_id) {
      throw new Error('index_id parameter is required');
    }
    
    const params = {
      limit: 1000,
      page: 0,
      ...options
    };
    
    return this._paginatedRequest('get', 'indices-transaction', params);
  }
}

module.exports = IndexTransactionEndpoint;
