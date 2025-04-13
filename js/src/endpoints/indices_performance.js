const BaseEndpoint = require('../base');

/**
 * Endpoint for accessing indices performance data
 */
class IndicesPerformanceEndpoint extends BaseEndpoint {
  /**
   * Get indices performance data
   * 
   * @param {Object} options - Query parameters
   * @param {string} options.startDate - Start date in YYYY-MM-DD format
   * @param {string} options.endDate - End date in YYYY-MM-DD format
   * @param {number} options.limit - Limit the number of items in response (default: 1000)
   * @param {number} options.page - Page number for pagination (default: 0)
   * @returns {Promise<Object>} - Indices performance data
   */
  async get(options = {}) {
    const params = {
      limit: 1000,
      page: 0,
      ...options
    };
    
    return this._paginatedRequest('get', 'indices-performance', params);
  }
}

module.exports = IndicesPerformanceEndpoint;
