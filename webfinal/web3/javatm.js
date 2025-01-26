
// Get elements
const timeSlotsSelect = document.getElementById('domesticForm');
const submitBtn = document.getElementById('shipDomesticButton');
const selectedSlotsList = document.getElementById('chatLog');
const errorMsg = document.getElementById('error-msg');
const dateInput = document.getElementById('pickupPincodeDomestic');

// Set max selections
const MAX_SELECTIONS = 3;

// Initialize selected slots array
let selectedSlots = [];

// Add event listener to submit button
submitBtn.addEventListener('click', () => {
  // Validate user input
  if (timeSlotsSelect.selectedIndex === -1 || selectedSlots.length >= MAX_SELECTIONS) {
    errorMsg.textContent = `Please select up to ${MAX_SELECTIONS} time slots.`;
    return;
  }

  // Get selected time slots
  const selectedOptions = timeSlotsSelect.selectedOptions;

  // Clear selected slots list
  selectedSlotsList.innerHTML = '';

  // Display selected time slots
  Array.from(selectedOptions).forEach((option) => {
    const li = document.createElement('li');
    li.textContent = option.value;
    selectedSlotsList.appendChild(li);
    selectedSlots.push(option.value);
  });

  // Clear error message
  errorMsg.textContent = '';
});

// Add event listener to time slots select
timeSlotsSelect.addEventListener('change', () => {
  // Validate user input
  if (selectedSlots.length >= MAX_SELECTIONS) {
    errorMsg.textContent = `Please select up to ${MAX_SELECTIONS} time slots.`;
  } else {
    errorMsg.textContent = '';
  }
});

// Add event listener to date input
dateInput.addEventListener('change', () => {
  // Get selected date
  const selectedDate = dateInput.value;

  // Validate date format
  if (!selectedDate.match(/^\d{6}$/)) {
    errorMsg.textContent = 'Invalid pincode format. Please use 6 digits.';
  } else {
    errorMsg.textContent = '';
  }
});
