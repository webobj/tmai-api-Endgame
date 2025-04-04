const BaseEndpoint = require('../base');

/**
 * Endpoint for accessing index holdings data
 */
class IndexHoldingsEndpoint extends BaseEndpoint {
  /**
   * Get index holdings data
   * 
   * @param {Object} options - Query parameters
   * @param {string} options.index_id - Index ID
   * @param {string} options.date - Date in YYYY-MM-DD format
   * @param {number} options.limit - Limit the number of items in response (default: 1000)
   * @param {number} options.page - Page number for pagination (default: 0)
   * @returns {Promise<Object>} - Index holdings data
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
    
    return this._request('get', 'index-holdings', params);
  }
}

module.exports = IndexHoldingsEndpoint;
