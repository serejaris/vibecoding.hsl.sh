/**
 * @typedef {Object} FontResource
 * @property {string} family - Font family name
 * @property {string} [weight] - Font weight (optional)
 * @property {string} [style] - Font style (optional)
 * @property {boolean} loaded - Whether font is loaded
 * @property {string} [error] - Error message if loading failed
 */

/**
 * @typedef {Object} ImageResource
 * @property {string} src - Image source URL
 * @property {boolean} loaded - Whether image is loaded
 * @property {string} [error] - Error message if loading failed
 */

/**
 * @typedef {Object} ResourceGroup
 * @property {boolean} loaded - Whether all resources in group are loaded
 * @property {number} progress - Progress percentage (0-100)
 * @property {Array} resources - Array of resources in this group
 */

/**
 * @typedef {Object} LoadingState
 * @property {ResourceGroup & {resources: FontResource[]}} fonts - Font loading state
 * @property {ResourceGroup & {resources: ImageResource[]}} images - Image loading state
 * @property {Object} overall - Overall loading state
 * @property {boolean} overall.loaded - Whether all resources are loaded
 * @property {number} overall.progress - Overall progress percentage
 */

// Export empty object to make this a module
export {};