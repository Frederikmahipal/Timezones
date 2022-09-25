
function displayTime() {


  document.getElementById("DKtime").innerHTML = new Date().toLocaleString("da-DK",{timeZone:'CET'})
  document.getElementById("UKtime").innerHTML = new Date().toLocaleString("da-DK",{timeZone:'Europe/London'})
  document.getElementById("UStime").innerHTML = new Date().toLocaleString("en-US",{timeZone:'America/Chicago', hourCycle:'h24'})
  document.getElementById("AUtime").innerHTML = new Date().toLocaleString("en-AU",{timeZone:'Australia/Adelaide', hourCycle:'h24'})
  document.getElementById("CHtime").innerHTML = new Date().toLocaleString("cz-CH",{timeZone:'Asia/Shanghai'})
    

}

setInterval(displayTime, 1000);
displayTime();
