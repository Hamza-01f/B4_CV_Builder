   let step8 = document.getElementById('step8');
   const downloadStep = document.querySelector('.download-step');
   let NextStep8 = document.getElementById('next-step8');
   let stepper = document.querySelector('.stepper');
   var selectedTemplateId = null;
        

// let CertificationButton = document.getElementById('add-certification');
// let certificationContainer = document.getElementById('certification-container');
// let NextStep8 = document.getElementById('next-step8');
// let IdCvCreation = document.getElementsByTagName('section');

//     // CertificationButton.addEventListener('click',function(event){
//     //             event.preventDefault;
//     //             let input1 = document.createElement('input');
//     //             input1.type = "text";
//     //             input1.name="certification-name" ;
//     //             input1.placeholder="Nom de la certification";
//     //             input1.classList.add("w-full", "px-3", "py-2", "border border-gray-300", "rounded-md" , " focus:outline-none", "focus:ring-indigo-500" , "focus:border-indigo-500" , "sm:text-sm");
//     //             let input2 = document.createElement('input');
//     //             input2.type="link";
//     //             input2.name="certification-link";
//     //             input2.classList.add("w-ful" , "l px-3 py-2" , " border border-gray-300" , " rounded-md" , " focus:outline-none" , " focus:ring-indigo-500" , " focus:border-indigo-500" ,  "sm:text-sm");
//     //             certificationContainer.appendChild(input1,input2);

//     // });



//-----------------------------------the part that is related to first page which allows the user to choose which template he prefers ;    
        // Keep track of selected template
        let selectedTemplate = null;

        // Function to highlight selected template
        function selectTemplate(templateId) {
            if(templateId === 'template-1'){
                selectedTemplateId = 1 ;
            }
             else{
                selectedTemplateId = 2 ;
             }
            // Remove selection from any previous template
            if (selectedTemplate) {
                document.getElementById(selectedTemplate).classList.remove('selected');
            }
            
            // Highlight the new selected template
            selectedTemplate = templateId;
            document.getElementById(selectedTemplate).classList.add('selected');
        }

        // Function to proceed to the next page
        function nextPage() {
            if (selectedTemplate) {
                // Redirect to the next page.
                
                alert('You have selected ' + selectedTemplate + '. Proceeding to the next step.');
                window.location.href = "fillInInformations.html";
            } else {
                alert("Please select a template first.");
            }
        }


//---------------------- the part that is related to all functionalities of the pages from the first one till last one ------------------
//Wait for the DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {

        // Initialize variables to keep track of the current step and the steps
        let currentStep = 1;
        const totalSteps = 8;

        // Get the step divs and hide all except the first one
        const steps = document.querySelectorAll('.form-step');
        
        // Function to show the next step
        function showStep(step) {
            // Hide all steps using classlist functionality
            steps.forEach((el, index) => {
                if (index + 1 === step) {
                    el.classList.remove('hidden');
                } else {
                    el.classList.add('hidden');
                }
            });
        }

        // Show the first step initially
        showStep(currentStep);

        // Add event listeners for the "Next" buttons
        document.querySelectorAll('button[id^="next-step"]').forEach(button => {
            button.addEventListener('click', function(e) {
                // If it's the last step, generate the CV
                if (currentStep === totalSteps) {
                    generateCV();
                } else {
                    // Increment step and show the next step
                    currentStep++;
                    showStep(currentStep);
                    updateProgressBar();
                }
            });
        });

        // Update the progress bar based on the current step
        function updateProgressBar() {
            const progressBar = document.querySelector('.bg-blue-600');
            const progressText = document.querySelector('.text-blue-600');
            const progress = (currentStep / totalSteps) * 100;
            progressBar.style.width = progress + '%';
            progressText.textContent = Math.round(progress) + '%';
        }

        // Generate CV and display it in the last step
        function generateCV() {
            // Collect data from all the form steps
            const personalInfo = {
                name: document.getElementById('full-name').value,
                photo: document.getElementById('file-upload').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                address: document.getElementById('address').value,
                linkedin: document.getElementById('linkedin').value,
                github: document.getElementById('github').value,
                portfolio: document.getElementById('portfolio').value
            };

            const professionalInfo = {
                jobTitle: document.getElementById('job-title').value,
                profileSummary: document.getElementById('profile-summary').value
            };

            const skillsInfo = {
                technicalSkills: document.getElementById('technical-skills').value,
                softSkills: document.getElementById('soft-skills').value
            };

            const languagesInfo = [];
            document.querySelectorAll('.language-entry').forEach(entry => {
                const language = entry.querySelector('input[name="language"]').value;
                const level = entry.querySelector('input[name="level"]').value;
                if (language && level) languagesInfo.push({ language, level });
            });

            const hobbiesInfo = [];
            document.querySelectorAll('.hobby-entry').forEach(entry => {
                const hobby = entry.querySelector('input[name="hobby"]').value;
                if (hobby) hobbiesInfo.push(hobby);
            });

            const educationInfo = [];
            document.querySelectorAll('.education-entry').forEach(entry => {
                const degree = entry.querySelector('input[name="degree"]').value;
                const university = entry.querySelector('input[name="university"]').value;
                const year = entry.querySelector('input[name="year"]').value;
                if (degree && university && year) educationInfo.push({ degree, university, year });
            });

            const workExperienceInfo = [];
            document.querySelectorAll('.work-entry').forEach(entry => {
                const jobTitle = entry.querySelector('input[name="job-title"]').value;
                const company = entry.querySelector('input[name="company"]').value;
                const duration = entry.querySelector('input[name="duration"]').value;
                if (jobTitle && company && duration) workExperienceInfo.push({ jobTitle, company, duration });
            });

            const certificationsInfo = [];
            document.querySelectorAll('.certification-entry').forEach(entry => {
                const certificationName = entry.querySelector('input[name="certification-name"]').value;
                const certificationLink = entry.querySelector('input[name="certification-link"]').value;
                if (certificationName && certificationLink) certificationsInfo.push({ certificationName, certificationLink });
            });

            // Create the CV content
             const classicCvContent = `

                    `;


            const modernCvContent = `

                <h3>Personal Information</h3>
                <p>Name: ${personalInfo.name}</p>
                <p>Email: ${personalInfo.email}</p>
                <p>Phone: ${personalInfo.phone}</p>
                <p>Address: ${personalInfo.address}</p>
                <p>LinkedIn: <a href="${personalInfo.linkedin}" target="_blank">${personalInfo.linkedin}</a></p>
                <p>GitHub: <a href="${personalInfo.github}" target="_blank">${personalInfo.github}</a></p>
                <p>Portfolio: <a href="${personalInfo.portfolio}" target="_blank">${personalInfo.portfolio}</a></p>

                <h3>Professional Information</h3>
                <p>Job Title: ${professionalInfo.jobTitle}</p>
                <p>Profile Summary: ${professionalInfo.profileSummary}</p>

                <h3>Skills</h3>
                <p>Technical Skills: ${skillsInfo.technicalSkills}</p>
                <p>Soft Skills: ${skillsInfo.softSkills}</p>

                <h3>Languages</h3>
                ${languagesInfo.map(lang => `<p>${lang.language} - ${lang.level}</p>`).join('')}

                <h3>Hobbies & Interests</h3>
                ${hobbiesInfo.map(hobby => `<p>${hobby}</p>`).join('')}

                <h3>Education</h3>
                ${educationInfo.map(edu => `<p>${edu.degree} - ${edu.university} (${edu.year})</p>`).join('')}

                <h3>Work Experience</h3>
                ${workExperienceInfo.map(exp => `<p>${exp.jobTitle} at ${exp.company} (${exp.duration})</p>`).join('')}

                <h3>certifications</h3>
                ${certificationsInfo.map(cert => `<p>${cert.certificationName} - <a href="${cert.certificationLink}" target="_blank">${cert.certificationLink}</a></p>`).join('')}
            
            
            `;

            // Display the CV content in the last step
            downloadStep.innerHTML = `

            ${classicCvContent}

             <button id="download-pdf" class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700" onclick="generatePDF()">Download CV as PDF</button>

               `;
            // Show the download step
             downloadStep.classList.remove('hidden');
             stepper.classList.add('hidden');
             step8.classList.add('hidden');
             
             alert(selectedTemplateId)
        }

    });

  

//------------------------------------download cv as pdf part begins------------------------------------------------------

    function generatePDF(){

    }

//download as pdf notes 
/* |
|
|
|
| */