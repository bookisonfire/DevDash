// Data Storage (The "Database" for this prototype)
let profiles = [];

// DOM Elements
const modal = document.getElementById("profileModal");
const profileList = document.getElementById("profileList");
// Validates standard email: something@domain.com
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validates 10-digit phone: 123-456-7890 or 1234567890
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

// Open/Close Modal Logic
document.querySelector(".add-new-btn").onclick = () => {
    modal.style.display = "block";
};

document.getElementById("cancel-Btn").onclick = () => {
    modal.style.display = "none";
    document.getElementById("companyInput").value = '';
    document.getElementById("contactInput").value = '';
    document.getElementById("phoneInput").value = '';
    document.getElementById("emailInput").value = '';
    document.getElementById("rateInput").value = '';
};

// Save Profile Logic (Matches your Sequence Diagram flow)
document.getElementById("save-Btn").onclick = () => {
    const name = document.getElementById("companyInput").value;
    const contact = document.getElementById("contactInput").value;
    const number = document.getElementById("phoneInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const rate = document.getElementById("rateInput").value.trim();

    if (!name || !contact || !email || !rate) {
        alert("Please Enter All Required(*) Details.");
        return;
    }

    // Validate Email
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address (e.g., name@yourcompany.com).");
        return;
    }

    // Validate Phone
    if (number.length > 0 && !phoneRegex.test(number)) {
        alert("Please enter a valid phone number (e.g., 123-456-7890) with dashes.");
        return;
    }

    const numericRate = parseFloat(rate);
    if (isNaN(numericRate) || numericRate <= 0) {
        alert("Please enter a valid number greater than 0.");
        return;
    }

    const safeName = sanitize(name);
    const safeContact = sanitize(contact);
    const safeNumber = sanitize(number);
    const safeEmail = sanitize(email);
    const safeRate = sanitize(rate);

    if (name && rate && contact && email) {
        // Create Data Object
        const newProfile = {
            id: Date.now(), // Unique ProfileID
            companyName: safeName,
            contactPerson: safeContact,
            phoneNumber: safeNumber,
            email: safeEmail,
            hourlyRate: parseFloat(safeRate), // Convert string to number
        };

        // "Save to Database"
        profiles.push(newProfile);

        // Update UI (Sidebar)
        renderProfiles();

        // Success Message
        const successMsg = document.getElementById("successMessage");
        successMsg.style.display = "block";

        // Disable Save Button to prevent duplicates
        document.getElementById("save-Btn").disabled = true;

        // Wait 2 seconds, then hide message and reset form
        setTimeout(() => {
            modal.style.display = "none";
            successMsg.style.display = "none";
            document.getElementById("save-Btn").disabled = false;
            document.getElementById("companyInput").value = '';
            document.getElementById("contactInput").value = '';
            document.getElementById("phoneInput").value = '';
            document.getElementById("emailInput").value = '';
            document.getElementById("rateInput").value = '';
        }, 2000);

        // Log to console for debugging
        console.log("Database updated:", profiles);
    } else {
        alert("Please enter all details.");
    }
};

function sanitize(string) {
    return string.replace(/<\/?[^>]+(>|$)/g, "");
}

function renderProfiles() {
    const profileList = document.getElementById("profileList");
    if (!profileList) {
        console.error("Profile list element not found!");
        return;
    }
    profileList.innerHTML = ""; 
    profiles.forEach(p => {
        /* Create Wrapper */
        const li = document.createElement("li");
        li.classList.add("profile-items");
        /* Create a span to hold the text for safety */
        const textSpan = document.createElement("span");
        textSpan.textContent = `${p.companyName} ($${p.hourlyRate}/hr)`;
        li.appendChild(textSpan);
        profileList.appendChild(li);
    });
}