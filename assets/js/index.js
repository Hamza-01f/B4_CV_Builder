   let step8 = document.getElementById('step8');
   const downloadStep = document.querySelector('.download-step');
   let NextStep8 = document.getElementById('next-step8');
   let stepper = document.querySelector('.stepper');
  
        

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
        let selectedTemplateId = null; // Declare this at the top to persist across functions

        // Function to highlight selected template
        function selectTemplate(templateId) {
            // Remove selection from any previous template
            if (selectedTemplateId) {
                document.getElementById(selectedTemplateId).classList.remove('selected');
            }

            // Highlight the new selected template
            selectedTemplateId = templateId; // Set the selected template ID
            document.getElementById(selectedTemplateId).classList.add('selected');
        }

        // Function to proceed to the next page
        function nextPage() {
            if (selectedTemplateId) {
                // Redirect to the next page.
                alert('You have selected ' + selectedTemplateId + '. Proceeding to the next step.');
                window.location.href = "fillInInformations.html";
            } else {
                alert("Please select a template first.");
            }
        }

 
//---------------------- the part that is related to all functionalities of the pages from the first one till last one ------------------

        
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
                    alert(selectedTemplateId)
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

            // Create the classic CV content
             const classicCvContent = `
                 <!-- Main Container -->
                <div id="downloadCv" class="max-w-screen-lg mx-auto bg-white p-8 rounded-lg shadow-xl space-y-8">
                    <!-- Header Section -->
                    <div class="flex justify-center mb-6">
                        <img src="${personalInfo.photo}" alt="Profile Photo" class="rounded-full w-40 h-40 border-4 border-white shadow-lg">
                    </div>
                    <div class="text-center mb-12">
                        <h1 class="text-4xl font-bold text-indigo-600 hover:text-indigo-800 transition duration-300">${personalInfo.name}</h1>
                        <p class="text-lg text-gray-600">${professionalInfo.jobTitle}</p>
                    </div>
                    <hr class="border-t-2 border-gray-300">

                    <!-- Personal Info Section -->
                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold text-green-600 mb-4">Personal Information</h2>
                        <ul class="list-none space-y-2 text-gray-700">
                            <li><i class="fas fa-envelope text-gray-500"></i> <strong>Email:</strong> ${personalInfo.email}</li>
                            <li><i class="fas fa-phone-alt text-gray-500"></i> <strong>Phone:</strong> ${personalInfo.phone}</li>
                            <li><i class="fas fa-map-marker-alt text-gray-500"></i> <strong>Address:</strong> ${personalInfo.address}</li>
                            <li><i class="fab fa-linkedin text-blue-600"></i> <strong>LinkedIn:</strong> <a href="${personalInfo.linkedin}" target="_blank" class="hover:text-blue-800 transition duration-300">${personalInfo.linkedin}</a></li>
                            <li><i class="fab fa-github text-gray-700"></i> <strong>GitHub:</strong> <a href="${personalInfo.github}" target="_blank" class="hover:text-gray-900 transition duration-300">${personalInfo.github}</a></li>
                            <li><i class="fas fa-laptop-code text-gray-700"></i> <strong>Portfolio:</strong> <a href="${personalInfo.portfolio}" target="_blank" class="hover:text-gray-900 transition duration-300">${personalInfo.portfolio}</a></li>
                        </ul>
                    </section>

                    <hr class="border-t-2 border-gray-300">

                    <!-- Professional Details Section -->
                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold text-indigo-600 mb-4">Professional Details</h2>
                        <p><strong>Position:</strong> ${professionalInfo.jobTitle}</p>
                        <p><strong>Profile Summary:</strong><br> ${professionalInfo.profileSummary}</p>
                    </section>

                    <hr class="border-t-2 border-gray-300">

                    <!-- Skills Section -->
                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold text-indigo-600 mb-4">Skills</h2>
                        <div class="space-y-2 text-gray-700">
                            <p><strong>Technical Skills:</strong> ${skillsInfo.technicalSkills}</p>
                            <p><strong>Soft Skills:</strong> ${skillsInfo.softSkills}</p>
                        </div>
                    </section>

                    <hr class="border-t-2 border-gray-300">

                    <!-- Languages Section -->
                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold text-indigo-600 mb-4">Languages</h2>
                        <ul class="space-y-2 text-gray-700">
                            ${languagesInfo.map(lang => `<li><strong>${lang.language}</strong> - ${lang.level}</li>`).join('')}
                        </ul>
                    </section>

                    <hr class="border-t-2 border-gray-300">

                    <!-- Loisirs (Hobbies) Section -->
                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold text-indigo-600 mb-4">Hobbies</h2>
                        <ul class="space-y-2 text-gray-700">
                            ${hobbiesInfo.map(hobby => `<li>${hobby}</li>`).join('')}
                        </ul>
                    </section>

                    <hr class="border-t-2 border-gray-300">

                    <!-- Education Section -->
                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold text-indigo-600 mb-4">Education</h2>
                        <ul class="space-y-2 text-gray-700">
                            ${educationInfo.map(edu => `<li><strong>${edu.degree}</strong> - ${edu.university} (${edu.year})</li>`).join('')}
                        </ul>
                    </section>

                    <hr class="border-t-2 border-gray-300">

                    <!-- Work Experience Section -->
                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold text-indigo-600 mb-4">Work Experience</h2>
                        <div class="space-y-4">
                            ${workExperienceInfo.map(exp => `
                                <div class="border-l-4 border-indigo-500 pl-4">
                                    <h3 class="text-xl font-semibold text-gray-800">${exp.jobTitle}</h3>
                                    <p><strong>Company:</strong> ${exp.company}</p>
                                    <p><strong>Duration:</strong> ${exp.duration}</p>
                                </div>
                            `).join('')}
                        </div>
                    </section>

                    <hr class="border-t-2 border-gray-300">

                    <!-- Certifications Section -->
                    <section class="mb-8">
                        <h2 class="text-2xl font-semibold text-indigo-600 mb-4">Certifications</h2>
                        <ul class="space-y-2 text-gray-700">
                            ${certificationsInfo.map(cert => `
                                <li>
                                    <strong>${cert.certificationName}</strong> - 
                                    <a href="${cert.certificationLink}" target="_blank" class="text-blue-600 hover:text-blue-800 transition duration-300">${cert.certificationLink}</a>
                                </li>
                            `).join('')}
                        </ul>
                    </section>

                </div>

                    `;

            // create modern cv content
            const modernCvContent = `
                        <!-- Main Container -->
                <div id="downloadCv"  class="max-w-screen-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <div class="flex">
                        <div class="w-1/4 bg-stone-600 text-white p-6 rounded-l-lg">
                            <div class="flex justify-center mb-6">
                                <img src="${personalInfo.photo}" alt="Profile Photo" class="rounded-full w-32 h-32 border-4 border-white">
                            </div>
                            <h2 class="text-2xl font-semibold mb-2">${personalInfo.name}</h2>
                            <p class="text-sm mb-2">${professionalInfo.jobTitle}</p>
                            <p class="text-sm">Email: ${personalInfo.email}</p>
                            <p class="text-sm">Phone: ${personalInfo.phone}</p>
                            <p class="text-sm">Address: ${personalInfo.address}</p>
                            <p class="text-sm"><a href="${personalInfo.linkedin}" class="text-blue-400">LinkedIn</a></p>
                            <p class="text-sm"><a href="${personalInfo.github}" class="text-blue-400">GitHub</a></p>
                            <p class="text-sm"><a href="${personalInfo.portfolio}" class="text-blue-400">Portfolio</a></p>
                        </div>
                        <div class="w-3/4 bg-gray-100 p-6 rounded-r-lg">
                            <h3 class="text-2xl font-semibold mb-4">Profile Summary</h3>
                            <p>${professionalInfo.profileSummary}</p>
                            <h3 class="text-2xl font-semibold mt-8 mb-4">Skills</h3>
                            <p><strong>Technical Skills:</strong> ${skillsInfo.technicalSkills}</p>
                            <p><strong>Soft Skills:</strong> ${skillsInfo.softSkills}</p>
                            <h3 class="text-2xl font-semibold mt-8 mb-4">Languages</h3>
                            ${languagesInfo.map(lang => `<p>${lang.language} - ${lang.level}</p>`).join('')}
                            <h3 class="text-2xl font-semibold mt-8 mb-4">Work Experience</h3>
                            ${workExperienceInfo.map(exp => `<p>${exp.jobTitle} at ${exp.company} (${exp.duration})</p>`).join('')}
                            <h3 class="text-2xl font-semibold mt-8 mb-4">Education</h3>
                            ${educationInfo.map(edu => `<p>${edu.degree} - ${edu.university} (${edu.year})</p>`).join('')}
                            <h3 class="text-2xl font-semibold mt-8 mb-4">Certifications</h3>
                            ${certificationsInfo.map(cert => `<p>${cert.certificationName} - <a href="${cert.certificationLink}" target="_blank">${cert.certificationLink}</a></p>`).join('')}
                        </div>
                    </div>
                </div>        
            
            `;

            // Display the CV content in the last step
            downloadStep.innerHTML = `

            ${classicCvContent}

                <div class="flex justify-center mt-8">
                 <button id="download-pdf" class="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300" onclick="generatePDF()">Download CV as PDF</button>
                </div>

               `;
            // Show the download step
             downloadStep.classList.remove('hidden');
             stepper.classList.add('hidden');
             step8.classList.add('hidden');
             
        }


  

//------------------------------------download cv as pdf part begins using jquery------------------------------------------------------

        function generatePDF() {
            var pdf = new jsPDF('p', 'pt', 'a4');//sets the orientation and measurement and paper size 
            $("#download-pdf").attr('hidden', 'true') //hide button just for decoration purposes
            pdf.addHTML($("#downloadCv"), 0, -20, function () {
            pdf.save('cv.pdf');
            $("#download-pdf").removeAttr('hidden', 'true')//show the button after hiding it
        });
        
        }

//download as pdf notes 
/* | jsPDF adds new object with following parameters 'p'(orientation) -> portrait , 'pt' -> points(measurement) , 'a4' -> paper size 
|  | addhtml add html contant to pdf 
|  | 0 , 0 are coordiantes 
|
| */