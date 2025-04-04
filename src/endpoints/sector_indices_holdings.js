const BaseEndpoint = require('../base');

/**
 * Endpoint for accessing sector indices holdings data
 */
class SectorIndicesHoldingsEndpoint extends BaseEndpoint {
  /**
   * Get sector indices holdings data
   * 
   * @param {Object} options - Query parameters
   * @param {string} options.index_id - Index ID
   * @param {string} options.date - Date in YYYY-MM-DD format
   * @param {number} options.limit - Limit the number of items in response (default: 1000)
   * @param {number} options.page - Page number for pagination (default: 0)
   * @returns {Promise<Object>} - Sector indices holdings data
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
    
    return this._request('get', 'sector-indices-holdings', params);
  }
}

module.exports = SectorIndicesHoldingsEndpoint;
