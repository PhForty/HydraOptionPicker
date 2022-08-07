file = open("generalOptions")
for line in file:
    line = line.replace("\n", "")
    lineshort = line[8:]
    print("document.getElementById('"+line+"').addEventListener('change', function () {this.value!=='' ? "+lineshort+" = this.value+' ': "+lineshort+"=''; displayFullCommand();})")

file = open("generalOptions")
for line in file:
    lineshort = line[8:].replace("\n", "")
    print(""+lineshort+" = ", end = '')

file = open("generalOptions")
for line in file:
    lineshort = line[8:].replace("\n", "")
    print("output += "+lineshort+";")