//Applications  Array
var applicationArray = [];

//Getting a reference to all elements and verifying them one by one
const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const address = document.getElementById('address');
const resume = document.getElementById('resume');
const coverletter = document.getElementById('coverletter');

//Education
const highestEducationLevel = document.getElementById('HEL');
const uname = document.getElementById('uname');
const aos = document.getElementById('aos');
const graduationYear = document.getElementById('graduationyear');

//Previous Job Information
const cname = document.getElementById('cname');
const employmentStartDate = document.getElementById('employmentStartDate');
const employmentEndDate = document.getElementById('employmentEndDate');
const jobDescription = document.getElementById('jobdescription');

//Skills and Certifications
const skills = document.getElementById('skills');
const certifications = document.getElementById('certifications')

//Availability
const availableDate = document.getElementById("availableDate")
//radio buttons

//Reference
const rname = document.getElementById('rname');
const rphone = document.getElementById('rinfo');
const rrelation = document.getElementById('relationname')

//Additional Questions

const workreason = document.getElementById('workreason')






form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});


// A function that sets error for that field

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};




//Validates fields like name
const alphaTextValidation = (element, error) => {
    value = element.value.trim(); //Using trim removes leading and ending whitespaces
    var alphabetWithSpacesRegex = /^[a-zA-Z\s]+$/;
    if (value === "") {
        setError(element, error + " is required");
    }
    else if (!alphabetWithSpacesRegex.test(value)) {
        setError(element, "Please enter a valid " + error + " that has only alphabets");
    }
    else {
        setSuccess(element);
        return true;
    }

    return false;

};

//Validate if a given field is empty or filled


const emptyInputValidation = (element, error) => {
    value = element.value.trim(); //Using trim removes leading and ending whitespaces

    if (value === "") {
        setError(element, error + " is required");
    }
    else {
        setSuccess(element);
        return true;
    }

    return false;

};


const dateValidation = (startElement, endElement, error) => {

    if (startElement.value === "") {
        setError(startElement, error + " start date cannot be empty");
    }
    else {

        setSuccess(startElement);
        return true;

    }


    var startDate = new Date(startElement.value);
    var currentDate = new Date();
    var endDate = new Date(endElement.value);


    if (startDate > currentDate) {
        setError(startElement, error + " start date cannot be a future date.");
    }
    else if (endDate !== "") {

        if (endDate < startDate) {
            setError(startElement, error + " start date cannot be greater then end date.");

        }

    }
    else {
        setSuccess(startElement);
        setSuccess(endElement);
        endElement.value = "present"
        return true;
    }

    return false;


};


const singleDateValidation = (startElement, error) => {


    var startDate = new Date(startElement.value);
    var currentDate = new Date();
    if (startElement.value === "") {
        setError(startElement, error + " start date cannot be empty");
    }
    else if (startDate < currentDate) {
        setError(startElement, error + " start date cannot be a past date.");
    }
    else {
        setSuccess(startElement);
        return true;
    }

    return false;


};




var relocation;
//Checks if radio buttons have been selected or not
const validateRelocation = () => {
    var radioButtons = document.getElementsByName('relocate');
    var isChecked = false;

    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            isChecked = true;
            break;
        }
    }

    if (i == 0) {
        relocation = "Yes"
    }
    else {
        relocation = "No"
    }

    if (!isChecked) {
        // No option selected, show error message
        setError(document.querySelector('.option .error'), 'Please select an option for willingness to relocate.');
    } else {
        // Option selected, clear error message
        setSuccess(document.querySelector('.option .error'));
        return true;

    }

    return false;
}

//Funciton to check consent


const validateConsent = () => {
    var agreeTermsCheckbox = document.getElementById('agreeTerms');
    var acknowledgePrivacyCheckbox = document.getElementById('acknowledgePrivacy');

    if (!agreeTermsCheckbox.checked || !acknowledgePrivacyCheckbox.checked) {
        // If either checkbox is not checked, show error message
        setError(document.querySelector('.consent.option2 .error'), 'Please agree to both Terms and Conditions and acknowledge the Privacy Policy.');
    } else {
        // Both checkboxes are checked, clear error message
        setSuccess(document.querySelector('.consent.option2 .error'));
        return true;
    }

    return false;
}






const validateInputs = () => {

    alphaTextValidation(fname, "FirstName");
    alphaTextValidation(lname, "LastName");
    emptyInputValidation(phone, "Phone Number");
    emptyInputValidation(email, "Email");
    emptyInputValidation(address, "Address");
    emptyInputValidation(resume, "Resume");
    emptyInputValidation(coverletter, "CoverLetter");

    emptyInputValidation(highestEducationLevel, "Highest Education Level");
    alphaTextValidation(uname, "Universtiy Name");
    emptyInputValidation(aos, "Area of Study");

    emptyInputValidation(cname, "Company Name");
    emptyInputValidation(jobDescription, "Job Description")
    dateValidation(employmentStartDate, employmentEndDate, "Employment")

    emptyInputValidation(skills, "Skills");
    emptyInputValidation(certifications, "Certifications");

    validateRelocation();
    singleDateValidation(availableDate, "Available Date");

    alphaTextValidation(rname, "Reference Name");
    emptyInputValidation(rphone, "Reference Phone");
    emptyInputValidation(rrelation, "Reference Relation");

    emptyInputValidation(workreason, "Work Reason cannot be empty");
    validateConsent();




    if (!alphaTextValidation(fname, "FirstName") ||
        !alphaTextValidation(lname, "LastName") ||
        !emptyInputValidation(phone, "Phone Number") ||
        !emptyInputValidation(email, "Email") ||
        !emptyInputValidation(address, "Address") ||
        !emptyInputValidation(resume, "Resume") ||
        !emptyInputValidation(coverletter, "CoverLetter") ||
        !emptyInputValidation(highestEducationLevel, "Highest Education Level") ||
        !alphaTextValidation(uname, "University Name") ||
        !emptyInputValidation(aos, "Area of Study") ||
        !emptyInputValidation(cname, "Company Name") ||
        !emptyInputValidation(jobDescription, "Job Description") ||
        !dateValidation(employmentStartDate, employmentEndDate, "Employment") ||
        !emptyInputValidation(skills, "Skills") ||
        !emptyInputValidation(certifications, "Certifications") ||
        !validateRelocation() ||
        !singleDateValidation(availableDate, "Available Date") ||
        !alphaTextValidation(rname, "Reference Name") ||
        !emptyInputValidation(rphone, "Reference Phone") ||
        !emptyInputValidation(rrelation, "Reference Relation") ||
        !emptyInputValidation(workreason, "Work Reason cannot be empty") ||
        !validateConsent()) {

        // Stop execution if any validation fails
        return;
    }
    else {
        //if all validaions are correct  display and store it in array of applications

        var edate = 'Present';
        if (employmentEndDate.value !== "") {
            edate = employmentEndDate.value;

        }

        if (resume.files.length > 0) {
            var selectedFile = resume.files[0];
            // Create a URL for the selected file
            var fileUrl = URL.createObjectURL(selectedFile);


        }


        var jsonObject = {

            "Personal Info": {
                "Name": fname.value + " " + lname.value,
                "Phone": phone.value,
                "Email": email.value,
                "Address": address.value,
                "Resume": fileUrl,
                "CoverLetter": coverletter.value,
            },

            "Education": {

                "Highest Education Level": highestEducationLevel.value,
                "University Name": uname.value,
                "Area of Study": aos.value,
                "Graduation Year": graduationYear.value,
            },

            "Previous Company Info": {
                "Company Name": cname.value,
                "Employment Start Date": employmentStartDate.value,
                "Employment End Date": edate,
                "Job Description": jobDescription.value,
            },

            "Skills":
            {
                "Skills": skills.value,
                "Certifications": certifications.value,
            },

            "Availablity": {

                "Available Date": availableDate.value,
                "Willing to Relocate": relocation,
            },

            "Reference Info": {
                "Name": rname.value,
                "Phone": rphone.value,
                "Relation": rrelation.value,
            },
            "Work Reason": {
                "Motivation": workreason.value,
            }
        };

        //Logging the json object in console
        console.log("Application Object:");
        console.log(jsonObject);
        applicationArray.push(jsonObject);



    }




}


function openTable(jsonObject) {
    // Create a new tab for each application
    var newTab = window.open('', '_blank');

    // Construct the table HTML
    var tableHtml = '<table>';
    Object.keys(jsonObject).forEach(category => {
        tableHtml += '<tr>';
        tableHtml += `<th colspan="2">${category}</th>`;
        tableHtml += '</tr>';
        Object.keys(jsonObject[category]).forEach(key => {
            var value = jsonObject[category][key];
            if (typeof value === 'object') {
                // If the value is an object, create a nested table
                tableHtml += '<tr>';
                tableHtml += `<td>${key}</td>`;
                tableHtml += '<td class="nested-table">';
                tableHtml += createNestedTable(value);
                tableHtml += '</td>';
                tableHtml += '</tr>';
            } else {
                // Display key-value pair
                tableHtml += `<tr><td>${key}</td><td>${key === 'resume' ? '<a href="' + value + '" target="_blank">View Resume</a>' : value}</td></tr>`;
            }
        });
    });
    tableHtml += '</table>';

    // Set the table HTML content in the new tab
    newTab.document.body.innerHTML = tableHtml;

    // Add CSS and JavaScript for responsiveness
    newTab.document.head.innerHTML += `
        <style>
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }

        th, td {
            border: 1px solid black; /* Add black border */
            padding: 8px;
            text-align: left;
        }

        th {
            background-color: #f2f2f2;
        }

        @media screen and (max-width: 600px) {
            .nested-table {
                margin-left: 0;
                border: 1px solid black; /* Add border style for .nested-table in this media query */
            }
        }
        </style>
    `;
}

function createMultipleTables() {
    applicationArray.forEach(function (jsonObject) {
        openTable(jsonObject);
    });
}

function createNestedTable(nestedObject) {
    console.log("We are here");
    // Recursive function to create nested tables
    var nestedTableHtml = '<table>';
    Object.keys(nestedObject).forEach(key => {
        var value = nestedObject[key];
        if (typeof value === 'object') {
            // If the value is an object, create a nested table
            nestedTableHtml += '<tr>';
            nestedTableHtml += `<td>${key}</td>`;
            nestedTableHtml += '<td class="nested-table">';
            nestedTableHtml += createNestedTable(value);
            nestedTableHtml += '</td>';
            nestedTableHtml += '</tr>';
        } else {
            // Display key-value pair
            nestedTableHtml += `<tr><td>${key}</td><td>${key === 'resume' ? '<a href="' + value + '" target="_blank">View Resume</a>' : value}</td></tr>`;
        }
    });
    nestedTableHtml += '</table>';
    return nestedTableHtml;
}

