
   let step8 = document.getElementById('step8');
   const downloadStep = document.querySelector('.download-step');
   let NextStep8 = document.getElementById('next-step8');
   let stepper = document.querySelector('.stepper');
   //----------------------- [variables for personal information form validation] ------------------------
   let fullName = document.getElementById('full-name');
   let fullNameError = document.getElementById('full-name-error');
   let email = document.getElementById('email');
   let emailError = document.getElementById('email-error');
   let phone = document.getElementById('phone');
   let phoneError = document.getElementById('phone-error');
   let address = document.getElementById('address');
   let addressError = document.getElementById('address-error');
   let github = document.getElementById('github');
   let linkedin = document.getElementById('linkedin');
   let portfolio = document.getElementById('portfolio');
   let githubError = document.getElementById('github-error');
   let linkedinError = document.getElementById('linkedin-error');
   let portfolioError = document.getElementById('portfolio-error');
   let imageUpload = document.getElementById('file-upload');
   let imageUploadError = document.getElementById('file-error');
   //-------------------------- [variables for professional detailes form validation]----------------------
   let jobTitle = document.getElementById('job-title');
   let jobTitleError = document.getElementById('job-title-error');
   let profileSummary = document.getElementById('profile-summary');
   let profileSummaryError = document.getElementById('profile-summary-error');
   //-------------------------- [variables for hard & soft skills form validation]--------------------------
   let technicalSkills = document.getElementById('hard-skills');
   let technicalSkillsError = document.getElementById('hard-skill-error');
   let softSkills = document.getElementById('soft-skills');
   let softSkillsError = document.getElementById('soft-skill-error')
   //-------------------------- [variables for language form validation] -----------------------------------
   let language = document.getElementById('language');
   let languageLevel = document.getElementById('language-level');
   let languageError = document.getElementById('language-error');
   let languageLevelError = document.getElementById('language-error-level');
   //-------------------------- [variables for hobbies form validation] -----------------------------------
   let hobbies = document.getElementById('hobbies');
   let hobbiesError = document.getElementById('hobbies-error');
   //-------------------------- [variables for university background form validation]----------------------
   let degree = document.getElementById('degree');
   let university = document.getElementById('university');
   let year = document.getElementById('year');
   let DegreeError = document.getElementById('diplom-degree-error');
   let UniversityError = document.getElementById('diplom-university-error');
   let yearError = document.getElementById('diplom-year-error');
   //---------------------------- [variables that are related to professional experience validation] ------
   let job = document.getElementById('job-title');
   let company = document.getElementById('company');
   let duration = document.getElementById('duration');
   let jobError = document.getElementById('job-error');
   let companyError = document.getElementById('company-error');
   let durationrrorE = document.getElementById('duration-error');
   //--------------------------- [variables that are related to certifications validation] ---------------
   let certificationName = document.getElementById('certification-name');
   let certificationLink = document.getElementById('certification-link');
   let NomDuLaCertificationError = document.getElementById('Nom-de-la-certification');
   let lienduLaCertificationError = document.getElementById('lien-de-la-certification');
   //--------------------------- [variables related to dynamic form]-------------------------------------- 
   let addHardSkills = document.getElementById('add-hard-skill');
   let addSoftSkills = document.getElementById('add-soft-skill');
   let addLanguage = document.getElementById('add-language');
   let hobbyContainer = document.getElementById('hobbycontainer');
   let cursusUniversitaire = document.getElementById('cursusUniversitaire');
   let professionalExperience = document.getElementById('professional-experience');
   let certificationId = document.getElementById('certification-id');
   //------------------------- [regular expression for form validation]-------------------
  
   
   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
   const phoneRegix = /^\d{10}$/; 
   const addressRegix = /^[A-Za-z0-9\s,.'-]{3,}$/;
   const linksRegix = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-]*)*$/;  
   const SummaryRegix = /^.{20,120}$/;  
//    const YearRegix = /^\d{3}$/;
   const DurationRegix = /^\d+\s+(years?|months?|weeks?|days?)$/;
   const WordsRegix  = /^[a-zA-Z\s\-.,]+$/;




//----------------------------------------------[functions of dynamic form ]-----------------------------------------------------------
      // dynamic form function
        function addDynamicForm(valeur){
        //hard skills dynamic form
           if(valeur == 1){
            let hardSkill = document.createElement('input');
            hardSkill.type = "text";
            hardSkill.id = "hard-skills";
            hardSkill.placeholder = "New hard Skill";
            hardSkill.name = "technical-skills";
            hardSkill.classList.add("hardskillclass" ,"mt-1" , "block" , "w-full" , "px-3" , "py-2" , "border" , "border-gray-300" , "rounded-md" , "shadow-sm" , "focus:outline-none" , "focus:ring-indigo-500" , "focus:border-indigo-500" , "sm:text-sm");
            let deletebtn = document.createElement('button');
            deletebtn.id = "deleteBtn";
            deletebtn.classList.add("px-4" ,"h-10px", "w-10px" , "py-2" , "bg-red-500" ,  "text-sky-600" , "rounded-md" , "hover:bg-green-200" , "focus:outline-none");

            deletebtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            `;

            deletebtn.addEventListener('click',() => {
                container.remove();
            });
            let container = document.createElement('div');
            container.classList.add("flex","center-items");
            container.appendChild(hardSkill);
            container.appendChild(deletebtn);
            addHardSkills.appendChild(container);
            updateInfo(valeur);
        //soft skill dynamic form
           }else if(valeur == 2){
            let softSkillInput = document.createElement('input');
            softSkillInput.type = "text";
            softSkillInput.name = "soft-skills";
            softSkillInput.placeholder = "Add New Soft Skill "
            softSkillInput.classList.add("softskillclass" , "mt-1" , "block" , "w-full" , "px-3" , "py-2" , "border" , "border-gray-300" , "rounded-md" , "shadow-sm" , "focus:outline-none" , "focus:ring-indigo-500" , "focus:border-indigo-500" , "sm:text-sm");

            let softskillsbtn = document.createElement('button');
            softskillsbtn.type = "button";
            softskillsbtn.classList.add("px-4" ,"h-10px", "w-10px" , "py-2" , "bg-red-500" ,  "text-sky-600" , "rounded-md" , "hover:bg-green-200" , "focus:outline-none");

            softskillsbtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            `;

            softskillsbtn.addEventListener('click',() => {
                softSkillInput.remove();
                softskillsbtn.remove();
            });

            let container = document.createElement('div');
            container.classList.add("flex","center-items");

            container.appendChild(softSkillInput);
            container.appendChild(softskillsbtn);
            addSoftSkills.appendChild(container);
            updateInfo(valeur);
        //language dynamic form
           }else if(valeur == 3){
             let languageInput = document.createElement('input');
                 languageInput.type= "text";
                 languageInput.id = "language";
                 languageInput.placeholder = "New Language";
                 languageInput.classList.add("languageValue" , "w-full" ,  "px-3" , "py-2" , "border" , "border-gray-300" , "rounded-md" , "focus:outline-none" , "focus:ring-indigo-500" , "focus:border-indigo-500" , "sm:text-sm");
            let languageLevel = document.createElement('input');
                 languageLevel.type= "text";
                 languageLevel.id = "level";
                 languageLevel.placeholder = "Niveau (ex: Intermédiaire)";
                 languageLevel.classList.add("languageLevel" , "w-full" , "px-3" , "py-2" , "border" , "border-gray-300" , "rounded-md" , "focus:outline-none" , "focus:ring-indigo-500" , "focus:border-indigo-500" , "sm:text-sm");
            let languageDeleteBtn = document.createElement('button');
                languageDeleteBtn.type = "button";
                languageDeleteBtn.classList.add("px-4" ,"h-10px", "w-10px" , "py-2" , "bg-red-500" ,  "text-sky-600" , "rounded-md" , "hover:bg-green-200" , "focus:outline-none");
                languageDeleteBtn.innerHTML =`
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                `;

            let languagecontainer = document.createElement('div');
                languagecontainer.classList.add("flex","center-items");

            languageDeleteBtn.addEventListener('click',() =>{
                languageInput.remove();
                languageLevel.remove();
                languageDeleteBtn.remove();
            });

            languagecontainer.appendChild(languageInput);
            languagecontainer.appendChild(languageLevel);
            languagecontainer.appendChild(languageDeleteBtn);

            addLanguage.appendChild(languagecontainer);


            updateInfo(valeur);
        //hobbies dynamic form
           }else if(valeur == 4){
            let hobbyinput = document.createElement('input');
            hobbyinput.type = "text";
            hobbyinput.id = "hobby";
            hobbyinput.placeholder = "New Hobby";
            hobbyinput.name = "hobbies";
            hobbyinput.classList.add("hobbyclass" , "w-full" , "px-3" , "py-2" , "border" , "border-gray-300" , "rounded-md" , "focus:outline-none" , "focus:ring-indigo-500" , "focus:border-indigo-500" , "sm:text-sm");
            let deletebtn = document.createElement('button');
            deletebtn.id = "deleteBtn";
            deletebtn.classList.add("px-4" ,"h-10px", "w-10px" , "py-2" , "bg-red-500" ,  "text-sky-600" , "rounded-md" , "hover:bg-green-200" , "focus:outline-none");

            deletebtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            `;

            deletebtn.addEventListener('click',() => {
                container.remove();
            });
            let container = document.createElement('div');
            container.classList.add("flex","center-items");
            container.appendChild(hobbyinput);
            container.appendChild(deletebtn);
            hobbyContainer.appendChild(container);
            updateInfo(valeur);
        // degree and university dynamic form
           }else if(valeur == 5){
            let degreeInput = document.createElement('input');
            degreeInput.type = "text";
            degreeInput.id = "degree";
            degreeInput.placeholder = "New degree";
            degreeInput.name = "degree";
            degreeInput.classList.add("degree" , "w-full" , "px-3" , "py-2" , "border" , "border-gray-300" , "rounded-md" , "focus:outline-none" , "focus:ring-indigo-500" , "focus:border-indigo-500" , "sm:text-sm");
            let universityInput = document.createElement('input');
            universityInput.type = "text";
            universityInput.id = "university";
            universityInput.placeholder = "New University";
            universityInput.name = "university";
            universityInput.classList.add("university" , "w-full" , "px-3" , "py-2" , "border" , "border-gray-300" , "rounded-md" , "focus:outline-none" , "focus:ring-indigo-500" , "focus:border-indigo-500" , "sm:text-sm");
            let yearinput = document.createElement('input');
            yearinput.type = "text";
            yearinput.id = "year";
            yearinput.placeholder = "New year";
            yearinput.name = "year";
            yearinput.classList.add("year" , "w-full" , "px-3" , "py-2" , "border" , "border-gray-300" , "rounded-md" , "focus:outline-none" , "focus:ring-indigo-500" , "focus:border-indigo-500" , "sm:text-sm");
            let deletebtn = document.createElement('button');
            deletebtn.id = "deleteBtn";
            deletebtn.classList.add("px-4" ,"h-10px", "w-10px" , "py-2" , "bg-red-500" ,  "text-sky-600" , "rounded-md" , "hover:bg-green-200" , "focus:outline-none");

            deletebtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            `;

            deletebtn.addEventListener('click',() => {
                container.remove();
            });
            let container = document.createElement('div');
           
            container.appendChild(degreeInput);
            container.appendChild(universityInput);
            container.appendChild(yearinput);
            container.appendChild(deletebtn);
            cursusUniversitaire.appendChild(container);



            updateInfo(valeur);
        //job info dynamic form
           }else if(valeur == 6){
            let jobTitle = document.createElement('input');
            jobTitle.type = "text";
            jobTitle.id = "job-title";
            jobTitle.placeholder = "New job title";
            jobTitle.name = "job title";
            jobTitle.classList.add("job-title" , "w-full" , "px-3" , "py-2" , "border" , "border-gray-300" , "rounded-md" , "focus:outline-none" , "focus:ring-indigo-500" , "focus:border-indigo-500" , "sm:text-sm");
            let company = document.createElement('input');
            company.type = "text";
            company.id = "company";
            company.placeholder = "New company";
            company.name = "company";
            company.classList.add("company" , "w-full" , "px-3" , "py-2" , "border" , "border-gray-300" , "rounded-md" , "focus:outline-none" , "focus:ring-indigo-500" , "focus:border-indigo-500" , "sm:text-sm");
            let durationt = document.createElement('input');
            durationt.type = "text";
            durationt.id = "duration";
            durationt.placeholder = "New duration";
            durationt.name = "duration";
            durationt.classList.add("duration" , "w-full" , "px-3" , "py-2" , "border" , "border-gray-300" , "rounded-md" , "focus:outline-none" , "focus:ring-indigo-500" , "focus:border-indigo-500" , "sm:text-sm");
            let deletebtn = document.createElement('button');
            deletebtn.id = "deleteBtn";
            deletebtn.classList.add("px-4" ,"h-10px", "w-10px" , "py-2" , "bg-red-500" ,  "text-sky-600" , "rounded-md" , "hover:bg-green-200" , "focus:outline-none");

            deletebtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            `;

            deletebtn.addEventListener('click',() => {
                container.remove();
            });
            let container = document.createElement('div');
           
            container.appendChild(jobTitle);
            container.appendChild(company);
            container.appendChild(durationt);
            container.appendChild(deletebtn);
            professionalExperience.appendChild(container);

            updateInfo(valeur);
        // certifications dynamic form
           }else{

            let certifcationName = document.createElement('input');
            certifcationName.type = "text";
            certifcationName.id = "name";
            certifcationName.placeholder = "New Certification Name";
            certifcationName.name = "certification";
            certifcationName.classList.add("certification-name" , "w-full" , "px-3" , "py-2" , "border" , "border-gray-300" , "rounded-md" , "focus:outline-none" , "focus:ring-indigo-500" , "focus:border-indigo-500" , "sm:text-sm");
            let certificationLink = document.createElement('input');
            certificationLink.type = "link";
            certificationLink.id = "certificationLink";
            certificationLink.placeholder = "New certificationLink";
            certificationLink.name = "link";
            certificationLink.classList.add("certification-link" , "w-full" , "px-3" , "py-2" , "border" , "border-gray-300" , "rounded-md" , "focus:outline-none" , "focus:ring-indigo-500" , "focus:border-indigo-500" , "sm:text-sm");
            let deletebtn = document.createElement('button');
            deletebtn.id = "deleteBtn";
            deletebtn.classList.add("px-4" ,"h-10px", "w-10px" , "py-2" , "bg-red-500" ,  "text-sky-600" , "rounded-md" , "hover:bg-green-200" , "focus:outline-none");

            deletebtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            `;

            deletebtn.addEventListener('click',() => {
                container.remove();
            });
            let container = document.createElement('div');
           
            container.appendChild(certifcationName);
            container.appendChild(certificationLink);
            container.appendChild(deletebtn);
            certificationId.appendChild(container);

            updateInfo(valeur);
           }
           
        
        }

//----------------------[the part that is related to all functionalities of the pages from the first one till last one] ------------------

        let formData = {
            addedHardSkill: [],
            addedSoftSkill: [],
            addedLanguages: [],
            addedHobbies: [],
            addedEducation: [],
            addedJobExperience: [],
            addedCertifications: []
        };

        function updateInfo(valeur){
            if(valeur == 1){
                const  addedHardSkillInputs = document.querySelectorAll('.hardskillclass');
                formData.addedHardSkill = []; 
        
                addedHardSkillInputs.forEach((input) => {
                    if (input.value) {
                        formData.addedHardSkill.push(input.value);  
                    }
                });

            }else if(valeur == 2){
                const addedSoftSkillinputs = document.querySelectorAll('.softskillclass'); 
                formData.addedSoftSkill = []; 
                addedSoftSkillinputs.forEach((input) => {
                       if(input.value){
                        formData.addedSoftSkill.push(input.value);
                       }
                });
            }else if(valeur == 3){
              
                const languageInputs = document.querySelectorAll('.languageValue');
                const levelInputs = document.querySelectorAll('.languageLevel');
                formData.addedLanguages = []; 
            
                if (languageInputs.length === levelInputs.length) {
                    languageInputs.forEach((input, index) => {
                        const language = input.value;
                        const level = levelInputs[index].value;
            
                        if (language && level) {
                            formData.addedLanguages.push({ language, level });
                        }
                 });
                }

            }else if(valeur == 4){
                const hobbiesinputs = document.querySelectorAll('.hobbyclass');
                addhobby.addhobbies = [];
                hobbiesinputs.forEach((input) => {
                      if(input.value){
                        formData.addedHobbies.push(input.value);
                      }
                });
            }else if(valeur == 5){
                const degreeInputs = document.querySelectorAll('.degree');
                const universityInputs = document.querySelectorAll('.university');
                const yearInputs = document.querySelectorAll('.year');
                formData.addedEducation = [];
            
                if (degreeInputs.length === universityInputs.length && degreeInputs.length === yearInputs.length) {
                    degreeInputs.forEach((degreeInput, index) => {
                        const degree = degreeInput.value;
                        const university = universityInputs[index].value;
                        const year = yearInputs[index].value;
            
                        
                        if (degree && university && year) {
                            formData.addedEducation.push({ degree, university, year });
                        }
                    });
                }
                console.log(formData.addedEducation)
            }else if(valeur == 6){
                const jobTitleInputs = document.querySelectorAll('.job-title');
                const companyInputs = document.querySelectorAll('.company');
                const durationInputs = document.querySelectorAll('.duration');
                formData.addedJobExperience = []; // Clear previous data
            
            
                if (jobTitleInputs.length === companyInputs.length && jobTitleInputs.length === durationInputs.length) {
                    jobTitleInputs.forEach((jobTitleInput, index) => {
                        const jobTitle = jobTitleInput.value;
                        const company = companyInputs[index].value;
                        const duration = durationInputs[index].value;
            
                        // Only add valid data
                        if (jobTitle && company && duration) {
                            formData.addedJobExperience.push({ jobTitle, company, duration });
                        }
                    });
                }
            }else{
                const certificationNameInputs = document.querySelectorAll('.certification-name');
                const certificationLinkInputs = document.querySelectorAll('.certification-link');
                formData.addedCertifications = []; // Clear previous data
            
                if (certificationNameInputs.length === certificationLinkInputs.length) {
                    certificationNameInputs.forEach((certificationNameInput, index) => {
                        const certificationName = certificationNameInput.value;
                        const certificationLink = certificationLinkInputs[index].value;
            
                
                        if (certificationName && certificationLink) {
                            formData.addedCertifications.push({ certificationName, certificationLink });
                        }
                    });
                }
         

        }
        
    }
        let currentStep = 1;
        const totalSteps = 8;

        const steps = document.querySelectorAll('.form-step');
        
        // Function to show the next step
        function showStep(step) {
            // Hide all steps using classlist functionality
            steps.forEach((el, index) => {
                if (index + 1 == step) {
                    el.classList.remove('hidden');
                } else {
                    el.classList.add('hidden');
                }
            });
        }
        
        function jobInfoValidation(valid){

        }
        // Show the first step initially
        showStep(currentStep);

        document.querySelectorAll('button[id^="next-step"]').forEach(button => {
            button.addEventListener('click', function(e) {

                // Initialize valid variable
                let valid = true;
        
                // If it's the last step, generate the CV
                if (currentStep === totalSteps) {
                    generateCV(valid);  
                } else {
                
                 //-------------------------------------[ personal information form validation]-----------------------------------------
                  if(currentStep == 1){
                                        // Full Name
                                        if (fullName.value === '' || !WordsRegix.test(fullName.value)) {
                                            fullName.value === '' ? fullNameError.textContent = "Please fill in your Full Name!" : fullNameError.textContent = "Please Enter a name that contains more than 4 letters!";
                                            fullNameError.style.color = "red";
                                            valid = false;
                                        } else {
                                            fullNameError.textContent = '';
                                        }
                            
                                        // // Email
                                        if (email.value === '' || !emailRegex.test(email.value)) {
                                            email.value === '' ? emailError.textContent = "Please Enter your Email!" : emailError.textContent = "Invalid Email, it should contain @ and finish with a domain like '.com'!";
                                            emailError.style.color = "red";
                                            valid = false;
                                        } else {
                                            emailError.textContent = '';
                                        }
                            
                                        // // // Phone
                                        if (phone.value === '' || !phoneRegix.test(phone.value)) {
                                            phone.value === '' ? phoneError.textContent='Please enter Your number!' : phoneError.textContent = 'Invalid Phone number!';
                                            phoneError.style.color = "red";
                                            valid = false;
                                        } else {
                                            phoneError.textContent = '';
                                        }
                            
                                        // // Address
                                        if (address.value === '' || !addressRegix.test(address.value)) {
                                            address.value === '' ? addressError.textContent = 'Please enter Your address!' : addressError.textContent = 'Please enter a Valid address!';
                                            addressError.style.color = "red";
                                            valid = false;
                                        } else {
                                            addressError.textContent = '';
                                        }
                            
                                        // // // LinkedIn
                                        if (linkedin.value === '' || !linksRegix.test(linkedin.value)) {
                                            linkedin.value === '' ? linkedinError.textContent = 'Please Enter Your LinkedIn' : linkedinError.textContent = 'Please Enter a valid LinkedIn link';
                                            linkedinError.style.color = "red";
                                            valid = false;
                                        } else {
                                            linkedinError.textContent = '';
                                        }
                            
                                        // // // GitHub
                                        if (github.value === '' || !linksRegix.test(github.value)) {
                                            github.value === '' ? githubError.textContent  = 'Please Enter Your GitHub'  : githubError.textContent = 'Please Enter a valid GitHub link';
                                            githubError.style.color = "red";
                                            valid = false;
                                        } else {
                                            githubError.textContent = '';
                                        }
                            
                                        // // // Portfolio
                                        if (portfolio.value === '' || !linksRegix.test(portfolio.value)) {
                                            portfolio.value === '' ? portfolioError.textContent = 'Please Enter Your Portfolio' : portfolioError.textContent = 'Please Enter a valid Portfolio link';
                                            portfolioError.style.color = "red";
                                            valid = false;
                                        } else {
                                            portfolioError.textContent = '';
                                        }
                            
                    }else if(currentStep == 2){
                                        // //-----------------------------------[Validate Professional Details Form]-----------------------------
                    
                                        // Job Title
                                        if (jobTitle.value === '' || !WordsRegix.test(jobTitle.value)) {
                                            jobTitle.value === '' ? jobTitleError.textContent = 'Please enter your Job Title' : jobTitleError.textContent = 'Please Enter a Valid Title Job!';
                                            jobTitleError.style.color = "red";
                                            valid = false;
                                        } else {
                                            jobTitleError.textContent = '';
                                        }
                            
                                        // Profile Summary
                                        if (profileSummary.value === '' || !SummaryRegix.test(profileSummary.value)) {
                                            profileSummary.value === '' ? profileSummaryError.textContent = 'Please enter a Profile Summary' : profileSummaryError.textContent = 'Number of caracters shoud be at least 20 and less than 120';
                                            profileSummaryError.style.color = "red";
                                            valid = false;
                                        } else {
                                            profileSummaryError.textContent = '';
                                        }
                    }else if(currentStep == 3 ){
                                        // //-----------------------------------[Validate Skills Form]-----------------------------------------
                            
                                        // Technical Skills
                                        if (technicalSkills.value === '' || !WordsRegix .test(technicalSkills.value)) {
                                            technicalSkills.value === '' ? technicalSkillsError.textContent = 'Please enter your Hard Skill' : technicalSkillsError.textContent = 'Please Enter a Valid hard Skill';
                                            technicalSkillsError.style.color = "red";
                                            valid = false;
                                        } else {
                                            technicalSkillsError.textContent = '';
                                        }
                            
                                        // Soft Skills
                                        if (softSkills.value === '' || !WordsRegix.test(softSkills.value)) {
                                            softSkills.value === '' ?  softSkillsError.textContent = 'Please enter your Soft Skill' : softSkillsError.textContent = 'Please Enter a valid soft skill';
                                            softSkillsError.style.color = "red";
                                            valid = false;
                                        } else {
                                            softSkillsError.textContent = '';
                                        }
        
                    }else if(currentStep == 4 ){
                                        // //-----------------------------------[Validate Language Form]----------------------------------------
                            
                                        // Language
                                        if (language.value === '' || !WordsRegix.test(language.value)) {
                                            language.value === '' ? languageError.textContent = 'Please enter a Language' : languageError.textContent = 'Please enter a Valid language';
                                            languageError.style.color = "red";
                                            valid = false;
                                        } else {
                                            languageError.textContent = '';
                                        }
                                        // Language Level
                                        if (languageLevel.value === '' || !WordsRegix.test(language.value)) {
                                            languageLevel.value === '' ? languageLevelError.textContent = 'Please enter Language Level' :  languageLevelError.textContent = 'Please Enter a Valid language level';
                                            languageLevelError.style.color = "red";
                                            valid = false;
                                        } else {
                                            languageLevelError.textContent = '';
                                        }
                    }else if(currentStep == 5 ){
                                        // //------------------------------------[Validate Hobbies Form]----------------------------------------
                            
                                        // Hobbies
                                        if (hobbies.value === '' || !WordsRegix.test(hobbies.value)) {
                                            hobbies.value === '' ? hobbiesError.textContent = 'Please enter your Hobbies' : hobbiesError.textContent = 'Please Enter a Valid Hobby Name';
                                            hobbiesError.style.color = "red";
                                            valid = false;
                                        } else {
                                            hobbiesError.textContent = '';
                                        }
                    }else if(currentStep == 6){
                                        // //-------------------------------------[Validate University Background Form]---------------------------
                            
                                        // Degree
                                        if (degree.value === '' || !WordsRegix.test(degree.value)) {
                                            degree.value === '' ? DegreeError.textContent = 'Please enter your Degree' : DegreeError.textContent = 'Please Enter a valid degree Name';
                                            DegreeError.style.color = "red";
                                            valid = false;
                                        } else {
                                            DegreeError.textContent = '';
                                        }
                            
                                        // University
                                        if (university.value === '' || !WordsRegix.test(university.value)) {
                                            university.value === '' ? UniversityError.textContent = 'Please enter your University Name' : UniversityError .textContent = 'Please Enter a Valid University Name';
                                            UniversityError .style.color = "red";
                                            valid = false;
                                        } else {
                                            UniversityError .textContent = '';
                                        }
                            
                                        // // Year
                                        if (year.value === '' ) {
                                            year.value === '' ? yearError.textContent = 'Please enter your Graduation Year' : yearError.textContent = 'Please enter valid Graduation Year';
                                            yearError.style.color = "red";
                                            valid = false;
                                        } else {
                                            yearError.textContent = '';
                                        }
        
                    }else if(currentStep == 7){
                                        // //----------------------------------[Validate Professional Experience Form]-----------------------------
                            
                                        // Job Title (Experience)
                                        if (job.value === '' || !WordsRegix.test(job.value)) {
                                            job.value === '' ?  jobError.textContent = 'Please enter Job Title' :  jobError.textContent = 'Please Enter a valid job Title';
                                            jobError.style.color = "red";
                                            valid = false;
                                        } else {
                                            jobError.textContent = '';
                                        }
                            
                                        // Company
                                        if (company.value === '' || !WordsRegix.test(company.value)) {
                                            company.value === '' ? companyError.textContent = 'Please enter Company Name' : companyError.textContent = 'Please Enter a Valid Company Name';
                                            companyError.style.color = "red";
                                            valid = false;
                                        } else {
                                            companyError.textContent = '';
                                        }
                            
                                        // Duration
                                        if (duration.value === '' || !DurationRegix .test(duration.value)) {
                                            duration.value === '' ? durationrrorE.textContent = 'Please enter Duration' :  durationrrorE.textContent = 'Please Enter a valid duration';
                                            durationrrorE.style.color = "red";
                                            valid = false;
                                        } else {
                                            durationrrorE.textContent = '';
                                        }
                    }else {
                                        // //------------------------------------------------[Validate Certifications Form]------------------------------
                            
                                        // // Certification Name
                                        if (certificationName.value === '' || !WordsRegix.test(certificationName.value)) {
                                            certificationName.value === '' ? NomDuLaCertificationError.textContent = 'Please enter Certification Name' : NomDuLaCertificationError.textContent = 'Please Enter valid Certification Name';
                                            NomDuLaCertificationError.style.color = "red";
                                            valid = false;
                                        } else {
                                            NomDuLaCertificationError.textContent = '';
                                        }
                            
                                        // Certification Link
                                        if (certificationLink.value === '' || !linksRegix.test(certificationLink.value)) {
                                            certificationLink.value === '' ? lienduLaCertificationError.textContent = 'Please enter Certification Link' : lienduLaCertificationError.textContent = 'Please enter a valid Certification Link';
                                            lienduLaCertificationError.style.color = "red";
                                            valid = false;
                                        } else {
                                            lienduLaCertificationError.textContent = '';
                                        }
                    }
        
                    // If form is valid, increment step and show the next step
                    if (valid) {
                        currentStep++;
                        showStep(currentStep);
                        updateProgressBar();
                    } else {
                        e.preventDefault();  // Prevent form submission if validation fails
                    }
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
                photo: "",
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
                technicalSkills: document.getElementById('hard-skills').value,
                softSkills: document.getElementById('soft-skills').value
            };


            const languagesInfo = [];
            document.querySelectorAll('.language-entry').forEach(entry => {
                const language = entry.querySelector('input[name="language"]').value;
                const level = entry.querySelector('input[name="level"]').value;
                if (language && level) languagesInfo.push({ language, level });
            });
            const hobbiesInfo = {
                hobby: document.getElementById('hobbies').value,
                
            };
            console.log(hobbiesInfo.hobby)

            const educationInfo = [];
            document.querySelectorAll('.education-entry').forEach(entry => {
                const degree = entry.querySelector('input[name="degree"]').value;
                const university = entry.querySelector('input[name="university"]').value;
                const year = entry.querySelector('input[name="year"]').value;
                if (degree && university && year) educationInfo.push({ degree, university, year });
            });
            console.log(educationInfo)

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


            const fileInput = document.querySelector('.image-upload').files[0];
            inputPhoto = URL.createObjectURL(fileInput);

            const CvContent = `
             
                <main id="downloadCv" class="font-jost hyphens-manual">
                    <section class="p-6 mx-auto w-full max-w-4xl  ">
                        <div class="flex">
                            <!-- Left Column (Personal Information) -->
                            <div class="w-1/3 bg-gradient-to-l from-neutral-500 to-gray-300 p-6 border-r border-gray-300">
                                <!-- Profile Picture -->
                                <div class="flex justify-center mb-6">
                                    <img src="${inputPhoto}" alt="Profile" class="rounded-full w-32 h-32 object-cover border-4 border-gray-300 shadow-lg">
                                </div>

                                <!-- Personal Information -->
                                <section>
                                    <h1 class="text-3xl font-bold text-gray-800 mb-2">${personalInfo.name}</h1>
                                    <h2 class="text-xl text-gray-600 mb-4">${professionalInfo.jobTitle}</h2>
                                    <address class="text-lg text-gray-500 mb-4">${personalInfo.address}</address>
                                </section>

                                <!-- Contact Information -->
                                <section class="text-gray-600">
                                    <ul class="space-y-2">
                                        <li class="flex items-center mb-2"><img src="https://img.icons8.com/ios-filled/24/000000/portfolio.png" class="mr-2"> <a href="${personalInfo.portfolio}" class="text-blue-500 hover:underline">Portfolio: ${personalInfo.portfolio}</a></li>
                                        <li class="flex items-center mb-2"><img src="https://img.icons8.com/ios-filled/24/000000/github.png" class="mr-2"> <a href="${personalInfo.github}" class="text-blue-500 hover:underline">GitHub: ${personalInfo.github}</a></li>
                                        <li class="flex items-center mb-2"><img src="https://img.icons8.com/ios-filled/24/000000/linkedin.png" class="mr-2"> <a href="${personalInfo.linkedin}" class="text-blue-500 hover:underline">LinkedIn: ${personalInfo.linkedin}</a></li>
                                        <li class="flex items-center mb-2"><img src="https://img.icons8.com/ios-filled/24/000000/email.png" class="mr-2"> <a href="mailto:${personalInfo.email}" class="text-blue-500 hover:underline">Email: ${personalInfo.email}</a></li>
                                        <li class="flex items-center"><img src="https://img.icons8.com/ios-filled/24/000000/phone.png" class="mr-2"> <a href="tel:+${personalInfo.phone}" class="text-blue-500 hover:underline">Phone: ${personalInfo.phone}</a></li>
                                    </ul>
                                </section>
                            </div>

                            <!-- Right Column (Other Information) -->
                            <div class="w-2/3 p-6 bg-gradient-to-b from-gray-50 to-gray-100">
                                <!-- Profile Summary -->
                                <section class="mb-6">
                                    <h2 class="text-3xl font-semibold text-gray-800 mb-2">Summary</h2>
                                    <p class="text-gray-600">${professionalInfo.profileSummary}</p>
                                </section>
                                <hr class="border-gray-300">
                                
                                <!-- Skills -->
                                <section class="mb-6">
                                    <h2 class="text-3xl font-semibold text-gray-800 mb-2">Skills</h2>
                                    <h3 class="text-2xl font-semibold text-gray-700 mt-2">Technical Skills:</h3>
                                    <p class="text-gray-600">🔹${skillsInfo.technicalSkills}</p>
                                    <ul class="list-inside text-gray-600 ml-0 list-none p-0">${formData.addedHardSkill.map(skill => `<li>🔹${skill}</li>`).join('')}</ul>
                                    <h3 class="text-2xl font-semibold text-gray-700 mt-4">Soft Skills:</h3>
                                    <p class="text-gray-600">🔹${skillsInfo.softSkills}</p>
                                    <ul class="list-none p-0 list-inside text-gray-600 ml-0">${formData.addedSoftSkill.map(skill => `<li>🔹${skill}</li>`).join('')}</ul>
                                </section>
                                <hr class="border-gray-300">
                                
                                <!-- Languages -->
                                <section class="mb-6">
                                    <h2 class="text-3xl font-semibold text-gray-800 mb-2">Languages</h2>
                                    <ul class="list-none p-0 list-inside text-gray-600 ml-0">${languagesInfo.map(lang => `<li>🔹${lang.language} - ${lang.level}</li>`).join('')}</ul>
                                    <ul class="list-none p-0 list-inside text-gray-600 ml-0">${formData.addedLanguages.map(lang => `<li>🔹${lang.language} - ${lang.level}</li>`).join('')}</ul>
                                </section>
                                <hr class="border-gray-300">
                                
                                <!-- Education -->
                                <section class="mb-6">
                                    <h2 class="text-3xl font-semibold text-gray-800 mb-2">Education</h2>
                                    <ul class="list-none p-0 list-inside text-gray-600 ml-0">${educationInfo.map(ed => `<li>🔹${ed.degree} from ${ed.university} (${ed.year})</li>`).join('')}</ul>
                                    <ul class="list-none p-0 list-inside text-gray-600 ml-0">${formData.addedEducation.map(ed => `<li>🔹${ed.degree} from ${ed.university} (${ed.year})</li>`).join('')}</ul>
                                </section>
                                <hr class="border-gray-300">
                                
                                <!-- Work Experience -->
                                <section class="mb-6">
                                    <h2 class="text-3xl font-semibold text-gray-800 mb-2">Work Experience</h2>
                                    <ul class="list-none p-0 list-inside text-gray-600 ml-0">${workExperienceInfo.map(work => `<li>🔹${work.jobTitle} at ${work.company} (${work.duration})</li>`).join('')}</ul>
                                    <ul class="list-none p-0 list-inside text-gray-600 ml-0">${formData.addedJobExperience.map(work => `<li>🔹${work.jobTitle} at ${work.company} (${work.duration})</li>`).join('')}</ul>
                                </section>
                                <hr class="border-gray-300">
                                
                                <!-- Certifications -->
                                <section>
                                    <h2 class="text-3xl font-semibold text-gray-800 mb-2">Certifications</h2>
                                    <ul class="list-none p-0 list-inside text-gray-600 ml-0">${certificationsInfo.map(cert => `<li>🔹${cert.certificationName} - <a href="${cert.certificationLink}" class="text-blue-500 hover:underline" target="_blank">${cert.certificationLink}</a></li>`).join('')}</ul>
                                    <ul class="list-none p-0 list-inside text-gray-600 ml-0">${formData.addedCertifications.map(cert => `<li>🔹${cert.certificationName} - <a href="${cert.certificationLink}" class="text-blue-500 hover:underline" target="_blank">${cert.certificationLink}</a></li>`).join('')}</ul>
                                </section>
                            </div>
                        </div>
                    </section>
                </main>

            `;

            // Display the CV content in the last step
            downloadStep.innerHTML = `

            ${CvContent}
            <div class="flex justify-center mt-8">
                <button id="download-pdf" class="inline-block bg-gradient-to-r from-lime-500 to-green-500 text-slate-950 py-3 px-8 rounded-lg text-lg font-semibold border-animation hover:bg-gradient-to-l hover:from-cyan-500 hover:to-purple-500 transition duration-300 transform hover:scale-105" onclick="generatePDF()">Download as PDF</button>
            </div>

               `;
            // Show the download step
             downloadStep.classList.remove('hidden');
             stepper.classList.add('hidden');
             step8.classList.add('hidden');
             document.getElementById('main-wrapper').classList.add('hidden'); 
             

        }
        


  

//------------------------------------[download cv as pdf part begins using jquery]------------------------------------------------------

        // function generatePDF() {
        //     var pdf = new jsPDF('l', 'pt', 'a4');//sets the orientation and measurement and paper size 
        //     pdf.addHTML($("#downloadCv"), -1, -1, function () {
        //     pdf.save('cv.pdf');
        // });
        
        // }

        function generatePDF() {
            const { jsPDF } = window.jspdf;  
            const pdf = new jsPDF('l', 'pt', 'a4');
        
            const content = document.getElementById('downloadCv'); 
        
       
            pdf.html(content, {
              callback: function (doc) {
                doc.save('cv.pdf');  
              },
              x: 10,  
              y: 10,  
              width: 500,  
            });
          }

          
        

//download as pdf notes 
/* | jsPDF adds new object with following parameters 'p'(orientation) -> portrait , 'pt' -> points(measurement) , 'a4' -> paper size 
|  | addhtml add html contant to pdf 
|  | 0 , 0 are coordiantes 
|  la protectuon contre crsf => attach that allows the attackers that are authorised to do unallow actions on browsers or set web (session /cookies -> i can access it /local storage-> i can not access it)
|  la functional
   ----------------------------
   const {jspdf} = window.jspdf
   const doc = new jspdf();
   const input = $('input1').value
   doc.setFont('arial');
   doc.setFontize(18);
   doc.stTextcolor(20,50,80);
   doc.text("kkfdllfd"100 , 20)

   doc.save('cv.pdf')
  -----------------------------
|let input = document.queryselector(".photo").files[0];
 
|attribute selector
|







}

toggleError(list,field,message =""){
  
}

start-up that we do not need to 
ux formation 
it rood
cjdm


| */