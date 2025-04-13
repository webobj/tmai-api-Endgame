const BaseEndpoint = require('../base');

/**
 * Endpoint for accessing scenario analysis data
 */
class ScenarioAnalysisEndpoint extends BaseEndpoint {
  /**
   * Get scenario analysis data
   * 
   * @param {Object} options - Query parameters
   * @param {string} options.symbol - Token symbol (e.g., "BTC")
   * @param {number} options.limit - Limit the number of items in response (default: 1000)
   * @param {number} options.page - Page number for pagination (default: 0)
   * @returns {Promise<Object>} - Scenario analysis data
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
    
    return this._request('get', 'scenario-analysis', params);
  }
}

module.exports = ScenarioAnalysisEndpoint;
