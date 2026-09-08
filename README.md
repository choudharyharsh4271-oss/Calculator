# 🧮 Calculator

A clean, modern web-based calculator application built with vanilla HTML, CSS, and JavaScript. This calculator features an intuitive user 
interface with a responsive design that works seamlessly on desktop, tablet, and mobile devices.

## ✨ Features

- **Basic Arithmetic Operations**: Addition, subtraction, multiplication, and division
- **Advanced Functions**:
  - Percentage (%) calculation
  - Decimal point support for floating-point calculations
  - Clear All (AC) button to reset the calculator
  - Delete (DEL) button to remove the last digit
- **Error Handling**: Displays "NaN" for invalid operations
- **Responsive Design**: Fully responsive layout that adapts to different screen sizes
- **Beautiful UI**: Modern dark theme with color-coded buttons
  - Red AC button for clearing
  - Gray operation buttons
  - Orange equals button for results
  - Circular button design with hover effects
- **Interactive Feedback**: Buttons scale on click for tactile feedback
- **Background Image**: Custom background with overlay for enhanced aesthetics

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge, etc.)
- No additional dependencies or installation required

### Installation

1. Clone the repository:
```
git clone https://github.com/choudharyharsh4271-oss/Calculator.git
cd Calculator
```
2. Open the calculator in your browser:
  Simply open the index.html file directly in your browser, or
  Use a local server (recommended):

    bash
    ``` # Using Python 3 ```
    python -m http.server 8000
    
    ``` # Using Python 2 ```
    python -m SimpleHTTPServer 8000
    
    ``` # Using Node.js (with http-server) ```
    npx http-server
   
  Then navigate to http://localhost:8000 in your browser

📁 Project Structure

  Calculator/
  ├── index.html      # Main HTML structure
  ├── Cstyle.css      # Styling and responsive design
  ├── Javascript.js   # Calculator logic and event handling
  ├── background.jpg  # Background image asset
  └── README.md       # This file

📝 Usage
 * Number Input: Click number buttons (0-9) to enter numbers
 * Operations: Click operation buttons (+, -, *, /) to perform calculations
 * Calculate: Press the = button to get the result
 * Delete: Use the DEL button to remove the last digit
 * Clear: Use the AC button to reset and start fresh
 * Decimal: Click the . button to enter decimal numbers
 * Percentage: Use the % button for percentage calculations

🎨 Technical Details
  HTML (index.html)
    * Semantic HTML5 structure
    * Organized button grid layout
    * Display area for input/output
  CSS (Cstyle.css)
    * Modern dark theme with responsive design
    * CSS Grid for button layout (4 columns)
    * Flexbox for container alignment
    * Mobile-first approach with media queries for tablets and phones
    * Smooth transitions and scaling effects on button interactions
    * Clamp functions for responsive typography
  JavaScript (Javascript.js)
    * Event listeners attached to all buttons
    * Real-time display updates
    * Calculation using JavaScript's eval() function with error handling
    * Input validation and edge case handling
    * History tracking capability (ready for future enhancements)
  
📱 Responsive Design
    The calculator is fully responsive with breakpoints for:
  
  Desktop: Optimal display on larger screens
  Tablet (≤768px): Adjusted padding and spacing
  Mobile (≤480px): Compact layout for small screens

🌐 Live Demo
To view the calculator in action, simply download/clone the repository and open 'index.html' in your browser.

💡 Future Enhancements
  Potential improvements for future versions:

  * Calculation history display
  * Keyboard input support
  * Scientific calculator mode
  * Dark/Light theme toggle
  * Memory functions (M+, M-, MR, MC)
  * Keyboard shortcuts
  * Copy result to clipboard
    
👤 Author
Created by choudharyharsh4271-oss

📄 License
This project is open source and available under the MIT License. Feel free to use, modify, and distribute as per the license terms.

📞 Support
If you encounter any issues or have questions, please open an issue on the GitHub repository.

Enjoy calculating! 🎉
