const BASE_URL = 'http://localhost:5000/api/units';

/**
 * Add a new unit record for a user.
 * @param {Object} data - { meterNumber, cnic, unitsUsed }
 * @returns {Promise<Object>} - API response
 */
export const addUnitRecord = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('❌ Error while adding unit record:', error);
    return { error: 'Failed to add unit record' };
  }
};

/**
 * Get all unit records for a specific meter number.
 * @param {string} meterNumber - user's meter number
 * @returns {Promise<Array>} - List of unit records
 */
export const getUnitRecords = async (meterNumber) => {
  try {
    const response = await fetch(`${BASE_URL}/${meterNumber}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('❌ Error while fetching unit records:', error);
    return [];
  }
};
