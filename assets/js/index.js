        // Keep track of selected template
        let selectedTemplate = null;

        // Function to highlight selected template
        function selectTemplate(templateId) {
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
                // Redirect to the next page (for now, just log the selected template)
                alert('You have selected ' + selectedTemplate + '. Proceeding to the next step.');
                // window.location.href = "next-page.html";
            } else {
                alert("Please select a template first.");
            }
        }