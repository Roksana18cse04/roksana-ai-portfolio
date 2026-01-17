// Run this in browser console on your Google Form page to get field IDs

console.log('=== Google Form Field IDs ===');

// Get all input fields
const inputs = document.querySelectorAll('input[name^=\"entry.\"], textarea[name^=\"entry.\"]');

inputs.forEach((input, index) => {
  const fieldName = input.getAttribute('name');
  const label = input.closest('.Qr7Oae')?.querySelector('.M7eMe')?.textContent || 
                input.closest('.geS5n')?.querySelector('.M7eMe')?.textContent ||
                'Unknown Field';
  
  console.log(`Field ${index + 1}: ${label}`);
  console.log(`Entry ID: ${fieldName}`);
  console.log('---');
});

console.log('Copy these entry IDs to your code!');