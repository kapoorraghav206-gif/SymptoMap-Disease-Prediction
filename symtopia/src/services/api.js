/**
 * API Service Module
 * 
 * This module handles all API calls to the backend server.
 * Currently contains placeholder functions that will be implemented
 * when the backend API is available.
 * 
 * The service is designed to be the single source of truth for
 * all API interactions, making it easy to update endpoints and
 * add authentication headers when needed.
 */

// Base URL for the API (to be configured based on environment)
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

/**
 * Generic fetch wrapper with error handling
 * @param {string} endpoint - API endpoint (without base URL)
 * @param {Object} options - Fetch options (method, headers, body, etc.)
 * @returns {Promise<Object>} - Parsed JSON response
 */
async function fetchApi(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      // Add any default headers here (e.g., auth tokens when needed)
    },
  }
  
  const mergedOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  }
  
  try {
    const response = await fetch(url, mergedOptions)
    
    if (!response.ok) {
      const error = await response.json().catch(() => ({}))
      throw new Error(error.message || `API Error: ${response.status}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error(`API call failed: ${endpoint}`, error)
    throw error
  }
}

// ============================================
// SYMPTOM REPORTING API
// ============================================

/**
 * Submit a symptom report
 * @param {Object} reportData - The symptom report data
 * @param {string[]} reportData.symptoms - Array of symptom names
 * @param {string} reportData.location - Location (city/district)
 * @param {string} reportData.timestamp - ISO format timestamp
 * @returns {Promise<Object>} - Response from the server
 * 
 * @example
 * const result = await submitSymptomReport({
 *   symptoms: ['Fever', 'Cough'],
 *   location: 'Bangalore',
 *   timestamp: '2026-02-07T10:30:00.000Z'
 * })
 */
export async function submitSymptomReport(reportData) {
  // TODO: Implement when backend is ready
  // return fetchApi('/symptoms/report', {
  //   method: 'POST',
  //   body: JSON.stringify(reportData),
  // })
  
  // Placeholder: Log and return mock success
  console.log('[API Placeholder] submitSymptomReport:', reportData)
  return { success: true, message: 'Report submitted successfully' }
}

// ============================================
// DASHBOARD DATA API
// ============================================

/**
 * Fetch outbreak risk data for all locations
 * @returns {Promise<Object[]>} - Array of location risk data
 * 
 * @example
 * const riskData = await getRiskData()
 * // Returns: [{ location: 'Bangalore', riskLevel: 'High', reportCount: 156, trend: 'up' }, ...]
 */
export async function getRiskData() {
  // TODO: Implement when backend is ready
  // return fetchApi('/dashboard/risk')
  
  // Placeholder: Return mock data
  console.log('[API Placeholder] getRiskData called')
  return [
    { id: 1, location: 'Bangalore', riskLevel: 'High', reportCount: 156, trend: 'up' },
    { id: 2, location: 'Mumbai', riskLevel: 'Medium', reportCount: 89, trend: 'stable' },
    { id: 3, location: 'Delhi', riskLevel: 'Medium', reportCount: 72, trend: 'up' },
    { id: 4, location: 'Chennai', riskLevel: 'Low', reportCount: 34, trend: 'down' },
  ]
}

/**
 * Fetch dashboard summary statistics
 * @returns {Promise<Object>} - Summary statistics
 * 
 * @example
 * const stats = await getDashboardStats()
 * // Returns: { totalReports: 609, highRiskAreas: 2, ... }
 */
export async function getDashboardStats() {
  // TODO: Implement when backend is ready
  // return fetchApi('/dashboard/stats')
  
  // Placeholder: Return mock data
  console.log('[API Placeholder] getDashboardStats called')
  return {
    totalReports: 609,
    highRiskAreas: 2,
    mediumRiskAreas: 3,
    lowRiskAreas: 3,
  }
}

/**
 * Fetch heatmap data for geographic visualization
 * @returns {Promise<Object[]>} - Array of geographic data points
 * 
 * @example
 * const heatmapData = await getHeatmapData()
 * // Returns: [{ lat: 12.9716, lng: 77.5946, intensity: 0.8, location: 'Bangalore' }, ...]
 */
export async function getHeatmapData() {
  // TODO: Implement when backend is ready
  // return fetchApi('/dashboard/heatmap')
  
  // Placeholder: Return mock data
  console.log('[API Placeholder] getHeatmapData called')
  return [
    { lat: 12.9716, lng: 77.5946, intensity: 0.8, location: 'Bangalore' },
    { lat: 19.0760, lng: 72.8777, intensity: 0.5, location: 'Mumbai' },
    { lat: 28.6139, lng: 77.2090, intensity: 0.6, location: 'Delhi' },
    { lat: 13.0827, lng: 80.2707, intensity: 0.3, location: 'Chennai' },
  ]
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Check if the API is reachable
 * @returns {Promise<boolean>} - True if API is reachable
 */
export async function healthCheck() {
  // TODO: Implement when backend is ready
  // try {
  //   await fetchApi('/health')
  //   return true
  // } catch {
  //   return false
  // }
  
  console.log('[API Placeholder] healthCheck called')
  return true
}

// Export the base fetch function for custom API calls
export { fetchApi }
