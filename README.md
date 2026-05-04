# DevDash Client Management Program

## Project Overview 

**DevDash** is a productivity dashboard designed for freelance developers to manage client profiles and track billable tasks. This prototype focuses on the **Client Profile Management** module, allowing users to create, validate, and store client data in a secure, organized interface.

### Features

- **Dynamic Sidebar**: Real-time rendering of client profiles using a specialized list component.

- **Secure Input Modal**: A controlled entry form for new client data.

- **Validation & Security**: 
    - **Regex Validation**: Ensures email and phone formats are valid.
    - **Data Sanitization**: Protects against HTML injection and XSS.
    - **Type Checking**: Prevents invalid numeric data for hourly rates.
- **Responsive Grid Layout**: A 3-pane dashboard designed for stability and accessability.

### Technical Stack

- **HTML 5**: Structured with semantic tags and modal components.
- **CSS3**: Utilizes **Flexbox** and **Box-Sizing** for a consistent, non-overlapping grid layout.
- **JavaScript (Vanilla)**: Logic for data persistence (array-based currently), DOM manipulation, and input validation.

### How to Run

1. Download the 3 project files (`index.html`, `style.css`, `script.js`) into the same folder.

2. Open `index.html` in any modern web browser (Chrome, Firefox, Edge).

3. Click the "**+ Add New Profile**" button to begin adding data.

### Testing

This prototype has been verified against three primary test cases:

1. **Positive Case**: Valid data entry results in a success message and UI update.
2. **Negative Case**: Invalid email/phone formats or non-numeric hourly rates trigger specific error alerts.
3. **Security Case**: HTML tags entered into input field are sanitized and rendered as plain text, preventing script execution.


### Author

**David Bookbinder** _CompSci307: Software Engineering_