/**
 * Direct Message Responder Plugin
 *
 * This plugin listens for the 'room-message-reply' trigger.
 * When activated, it reads the message data and sends a direct message (DM)
 * to the user who wrote the original message.
 */

const { getApiResponse } = require("waivlength-sdk");

module.exports = {
  /**
   * Executes the plugin logic.
   * @param {Object} data - Data passed from the trigger.
   * @param {string} env - Current environment ('test' or 'production').
   * @returns {Object} - Response from the send-message API.
   */
  execute: async (data, env) => {
    try {
      // Fetch space data (mock or production based on environment)
      const spaceData = await getApiResponse("/api/space-data", env);

      // Construct the direct message content
      const dmContent = `Hi ${data.sender}, thank you for your message in "${spaceData.spaceName}"!`;

      // Send the DM to the user
      const response = await getApiResponse("/api/send-message", env, {
        recipient: data.sender,
        content: dmContent,
      });

      return response; // Return API response
    } catch (error) {
      console.error("Error executing plugin:", error);
      throw error; // Ensure errors propagate for debugging
    }
  },
};
