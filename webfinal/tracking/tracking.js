const trackingForm = document.getElementById('tracking-form');
const trackingResult = document.getElementById('tracking-result');

// Sample tracking data
const orderData = {
  orderId: 'ORD12345',
  email: 'customer@example.com',
  status: 'Delivered',
  trackingNumber: '1234567890',
  carrier: 'USPS',
  estimatedDelivery: '2024-09-20',
  shipmentDetails: [
    { status: 'Shipped', date: '2024-09-15', location: 'New York' },
    { status: 'In Transit', date: '2024-09-17', location: 'Chicago' },
    { status: 'Out for Delivery', date: '2024-09-19', location: 'Los Angeles' },
    { status: 'Delivered', date: '2024-09-20', location: 'Customer Address' }
  ]
};

// Function to display tracking result
const displayTrackingResult = (data) => {
  trackingResult.innerHTML = `
    <h2>Order Tracking Result</h2>
    <p>Order ID: ${data.orderId}</p>
    <p>Email: ${data.email}</p>
    <p>Status: ${data.status}</p>
    <p>Tracking Number: ${data.trackingNumber}</p>
    <p>Carrier: ${data.carrier}</p>
    <p>Estimated Delivery: ${data.estimatedDelivery}</p>
    <h3>Shipment Timeline:</h3>
 <ul class="timeline">
      ${data.shipmentDetails.map((detail) => `
        <li>
          <span class="status">${detail.status}</span>
          <span class="date">${detail.date}</span>
          <span>Location: ${detail.location}</span>
        </li>
      `).join('')}
    </ul>
  `;
};

// Form submission handler
trackingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const orderId = document.getElementById('order-id').value;
  const email = document.getElementById('email').value;
  
  // Here you should fetch the actual order data based on orderId and email
  // For demonstration, using sample data
  displayTrackingResult(orderData);
});
