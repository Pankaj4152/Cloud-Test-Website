document.getElementById('paymentForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const paymentId = document.getElementById('paymentId').value.trim();
  const statusDiv = document.getElementById('statusMessage');

  // Simulate a basic check – in a real app, you'd call an API here
  const fakeDatabase = {
    'PAY123456789': 'Success',
    'PAY987654321': 'Failed',
    'PAY111222333': 'Pending',
  };

  if (paymentId in fakeDatabase) {
    const status = fakeDatabase[paymentId];
    statusDiv.textContent = `Payment Status: ${status}`;

    if (status === 'Success') {
      statusDiv.className = 'status success';
    } else {
      statusDiv.className = 'status failed';
    }
  } else {
    statusDiv.textContent = 'Payment ID not found.';
    statusDiv.className = 'status failed';
  }
});
