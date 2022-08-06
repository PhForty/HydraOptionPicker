//Functionality for only showing the selected module-specific options
document.getElementById('modulepicker')
        .addEventListener('change', function () {
            //iterate through divs. set all classnames to is-hidden
            //set the one chosen  allModules
            var childDivs = document.getElementById('allModules').getElementsByTagName('div');
            for( i=0; i< childDivs.length; i++ )
                {
                childDivs[i].classList.add('is-hidden');
                }
            var chosenmodule = document.getElementById(this.value);
            chosenmodule.classList.remove('is-hidden');
        });

//Functionality for copying code per button
document.querySelector('.copy-code-button')
        .addEventListener('click', () => {
            // Copy the code to the user's clipboard
            const code = document.getElementById('FullCommand').innerText;
            window.navigator.clipboard.writeText(code);
            
            var copyCodeButton = document.querySelector('.copy-code-button');
            // Update the button text visually
            const { innerText: originalText } = copyCodeButton;
            copyCodeButton.innerText = 'Copied!';
        
            // (Optional) Toggle a class for styling the button
            copyCodeButton.classList.add('is-success');
  
            // After 2 seconds, reset the button to its initial UI
            setTimeout(() => {
                copyCodeButton.innerText = originalText;
                copyCodeButton.classList.remove('is-success');
            }, 2000);
        });