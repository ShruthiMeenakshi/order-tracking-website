
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('time-slot-form');
    const locationSelect = document.getElementById('location');
    const slotsList = document.getElementById('slots-list');
    const userNameInput = document.getElementById('user-name');
    const userEmailInput = document.getElementById('user-email');
  
    // Fetch available post office locations (replace with actual API call)
    async function fetchLocations() {
      try {
        const response = await fetch('/api/locations'); // Mock API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const locations = await response.json();
        return locations;
      } catch (error) {
        console.error('Error fetching locations:', error);
        return [];
      }
    }
  
    // Handle form submission
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const userName = userNameInput.value.trim();
      const userEmail = userEmailInput.value.trim();
      const location = locationSelect.value;
  
      // Input validation
      if (!userName || !userEmail || !location) {
        console.error('Please fill in all fields');
        return;
      }
  
      // Secure data with AI security lock (e.g., encryption)
      const securedData = encryptData({ userName, userEmail, location });
  
      // Fetch suggested time slots (replace with actual API call)
      try {
        const response = await fetch('/api/suggest-time-slots', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(securedData),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const timeSlots = await response.json();
        displayTimeSlots(timeSlots);
      } catch (error) {
        console.error('Error fetching time slots:', error);
      }
    });
  
    // Dummy encryption function for AI security lock
    function encryptData(data) {
      // Use a proper AI-based encryption method here
      // For demonstration purposes only, using AES encryption
      const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret_key');
      return encrypted.toString();
    }
  
    // Display the suggested time slots
    function displayTimeSlots(timeSlots) {
      if (!timeSlots || !timeSlots.length) {
        slotsList.innerHTML = '<li>No time slots available</li>';
        return;
      }
  
      slotsList.innerHTML = '';
      timeSlots.forEach(slot => {
        const li = document.createElement('li');
        li.textContent = `Slot: ${slot.time} - Availability: ${slot.availability}`;
        slotsList.appendChild(li);
      });
    }
  
    // Initialize the page
    fetchLocations().then(locations => {
      locations.forEach(location => {
        const option = document.createElement('option');
        option.value = ("");
        option.textContent = location.name;
        locationSelect.appendChild(option);
      });
    });
  });
  