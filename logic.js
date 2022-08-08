var target = onelogin = filelogin = onepass = filepass = filecombined = additionalchecks = looppw = exitperhost = exitanyhost = verbose = veryverbose = resume = ignoreresume = fileout = outformat = port = customcharset = disablexsymbols = disablexshuffling = ssl = oldssl = debug = quiet = dontredo = ipversion = fileserver = paralleltarget = 
paralleloverall = timeoutresponse = timeoutconnection = waittime = pickedmodule = '';

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


            this.value!=='' ? pickedmodule = ''+this.value+'://': pickedmodule=''; displayFullCommand();
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


document.getElementById('general-target').addEventListener('change', function () {this.value!=='' ? target = this.value+'': target=''; displayFullCommand();})
document.getElementById('general-onelogin').addEventListener('change', function () {this.value!=='' ? onelogin = '-l '+this.value+' ': onelogin=''; displayFullCommand();})
document.getElementById('general-filelogin').addEventListener('change', function () {this.value!=='' ? filelogin = '-L '+this.value+' ': filelogin=''; displayFullCommand();})
document.getElementById('general-onepass').addEventListener('change', function () {this.value!=='' ? onepass = '-p '+this.value+' ': onepass=''; displayFullCommand();})
document.getElementById('general-filepass').addEventListener('change', function () {this.value!=='' ? filepass = '-P '+this.value+' ': filepass=''; displayFullCommand();})
document.getElementById('general-filecombined').addEventListener('change', function () {this.value!=='' ? filecombined = '-C '+this.value+' ': filecombined=''; displayFullCommand();})
document.getElementById('general-looppw').addEventListener('change', function () {this.checked? looppw = '-u ': looppw=''; displayFullCommand();})
document.getElementById('general-exitperhost').addEventListener('change', function () {this.checked? exitperhost = '-f ': exitperhost=''; displayFullCommand();})
document.getElementById('general-exitanyhost').addEventListener('change', function () {this.checked? exitanyhost = '-F ': exitanyhost=''; displayFullCommand();})
document.getElementById('general-verbose').addEventListener('change', function () {this.checked? verbose = '-v ': verbose=''; displayFullCommand();})
document.getElementById('general-veryverbose').addEventListener('change', function () {this.checked? veryverbose = '-V ': veryverbose=''; displayFullCommand();})
document.getElementById('general-resume').addEventListener('change', function () {this.checked? resume = '-R ': resume=''; displayFullCommand();})
document.getElementById('general-ignoreresume').addEventListener('change', function () {this.checked? ignoreresume = '-I ': ignoreresume=''; displayFullCommand();})
document.getElementById('general-fileout').addEventListener('change', function () {this.value!=='' ? fileout = '-o '+this.value+' ': fileout=''; displayFullCommand();})
document.getElementById('general-outformat').addEventListener('change', function () {this.value!=='' ? outformat = '-b '+this.value+' ': outformat=''; displayFullCommand();})
document.getElementById('general-port').addEventListener('change', function () {this.value!=='' ? port = '-s '+this.value+' ': port=''; displayFullCommand();})
document.getElementById('general-customcharset').addEventListener('change', function () {this.value!=='' ? customcharset = '-x '+this.value+' ': customcharset=''; displayFullCommand();})
document.getElementById('general-disablexsymbols').addEventListener('change', function () {this.checked? disablexsymbols = '-y ': disablexsymbols=''; displayFullCommand();})
document.getElementById('general-disablexshuffling').addEventListener('change', function () {this.checked? disablexshuffling = '-r ': disablexshuffling=''; displayFullCommand();})
document.getElementById('general-ssl').addEventListener('change', function () {this.checked? ssl = '-S ': ssl=''; displayFullCommand();})
document.getElementById('general-oldssl').addEventListener('change', function () {this.checked? oldssl = '-O ': oldssl=''; displayFullCommand();})
document.getElementById('general-debug').addEventListener('change', function () {this.checked? debug = '-d ': debug=''; displayFullCommand();})
document.getElementById('general-quiet').addEventListener('change', function () {this.checked? quiet = '-q ': quiet=''; displayFullCommand();})
document.getElementById('general-dontredo').addEventListener('change', function () {this.checked? dontredo = '-K ': dontredo=''; displayFullCommand();})
document.getElementById('general-ipversion').addEventListener('change', function () {this.value!=='' ? ipversion = this.value+' ': ipversion=''; displayFullCommand();})
document.getElementById('general-fileserver').addEventListener('change', function () {this.value!=='' ? fileserver = '-M '+this.value+' ': fileserver=''; displayFullCommand();})
document.getElementById('general-paralleltarget').addEventListener('change', function () {this.value!=='' ? paralleltarget = '-t '+this.value+' ': paralleltarget=''; displayFullCommand();})
document.getElementById('general-paralleloverall').addEventListener('change', function () {this.value!=='' ? paralleloverall = '-T '+this.value+' ': paralleloverall=''; displayFullCommand();})
document.getElementById('general-timeoutresponse').addEventListener('change', function () {this.value!=='' ? timeoutresponse = '-w '+this.value+' ': timeoutresponse=''; displayFullCommand();})
document.getElementById('general-timeoutconnection').addEventListener('change', function () {this.value!=='' ? timeoutconnection = '-W '+this.value+' ': timeoutconnection=''; displayFullCommand();})
document.getElementById('general-waittime').addEventListener('change', function () {this.value!=='' ? waittime = '-c '+this.value+' ': waittime=''; displayFullCommand();})
document.getElementById('general-additionalchecks').addEventListener('change', function () {
    var input = this.getElementsByTagName('input');
    var inputList = Array.prototype.slice.call(input);
    additionalchecks = '-e '
    inputList.forEach(element => {
        if (element.id === "additionaln" && document.getElementById(element.id).checked){
            additionalchecks += 'n'
        }
        if (element.id === "additionals" && document.getElementById(element.id).checked){
            additionalchecks += 's'
        }
        if (element.id === "additionalr" && document.getElementById(element.id).checked){
            additionalchecks += 'r'
        }
    });
    console.log("additionalchecks: "+additionalchecks);
    additionalchecks.length == 3 ? additionalchecks = '': additionalchecks += ' ';
    console.log("additionalchecks: "+additionalchecks);
    displayFullCommand();})

function displayFullCommand(){
    let output = "";
    output += "hydra ";
    output += onelogin;
    output += filelogin;
    output += onepass;
    output += filepass;
    output += filecombined;
    output += additionalchecks;
    output += looppw;
    output += exitperhost;
    output += exitanyhost;
    output += verbose;
    output += veryverbose;
    output += resume;
    output += ignoreresume;
    output += fileout;
    output += outformat;
    output += port;
    output += customcharset;
    output += disablexsymbols;
    output += disablexshuffling;
    output += ssl;
    output += oldssl;
    output += debug;
    output += quiet;
    output += dontredo;
    output += ipversion;
    output += fileserver;
    output += paralleltarget;
    output += paralleloverall;
    output += timeoutresponse;
    output += timeoutconnection;
    output += waittime;
    output += pickedmodule;
    output += target;


    document.getElementById('FullCommand').innerText = output;
}