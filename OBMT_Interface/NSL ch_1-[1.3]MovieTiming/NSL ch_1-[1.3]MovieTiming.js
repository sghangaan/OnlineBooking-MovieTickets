let date;
let time;

function saveDate1(){
   
    date = "MONDAY - 11/13/23";
    localStorage.setItem('date' ,date);
    console.log(date);

    var targetButton = document.getElementById("mon")
    var styles ={
        margin: '0 10px', /* Adjust the margin as needed */
        padding: '10px 20px', /* Adjust the padding as needed */
        backgroundColor: '#565555',
        color: 'white',
        border: 'none',
        borderRadius: '13px',
        cursor: 'pointer',
        fontWeight: '400',
        boxShadow: '0px 4px 17px 11px rgba(255, 255, 255, 0.5)'
    }
    Object.assign(targetButton.style,styles)

}

function saveDate2(){
    
    date = "TUESDAY - 11/14/23";
    localStorage.setItem('date',date);
    console.log(date);

    var targetButton = document.getElementById("tues")
    var styles ={
        margin: '0 10px', /* Adjust the margin as needed */
        padding: '10px 20px', /* Adjust the padding as needed */
        backgroundColor: '#565555',
        color: 'white',
        border: 'none',
        borderRadius: '13px',
        cursor: 'pointer',
        fontWeight: '400',
        boxShadow: '0px 4px 17px 11px rgba(255, 255, 255, 0.5)'
    }
    Object.assign(targetButton.style,styles)


}

function saveDate3(){
    
    date = "THURSDAY - 11/15/23";
    localStorage.setItem('date',date);
    console.log(date);

    var targetButton = document.getElementById("thurs")
    var styles ={
        margin: '0 10px', /* Adjust the margin as needed */
        padding: '10px 20px', /* Adjust the padding as needed */
        backgroundColor: '#565555',
        color: 'white',
        border: 'none',
        borderRadius: '13px',
        cursor: 'pointer',
        fontWeight: '400',
        boxShadow: '0px 4px 17px 11px rgba(255, 255, 255, 0.5)'
    }
    Object.assign(targetButton.style,styles)

}

function saveTime1(){
   
    time = "8:00 AM - 10:30 AM";
    localStorage.setItem('time', time);
    console.log(time);

    var targetButton = document.getElementById("eight")
    var styles ={
        margin: '0x 10px', /* Adjust the margin as needed */
        padding: '10px 20px', /* Adjust the padding as needed */
        backgroundColor: '#1f1e1e',
        color: 'white',
        border: 'none',
        borderRadius: '13px',
        cursor: 'pointer',
        fontWeight: '400',
        boxShadow: '0px 4px 17px 11px rgba(255, 255, 255, 0.5)'
    }
    Object.assign(targetButton.style,styles)
}

function saveTime2(){
   
    time = "11:00 AM - 1:30 PM";
    localStorage.setItem('time', time);
    console.log(time);

    var targetButton = document.getElementById("eleven")
    var styles ={
        margin: '0x 10px', /* Adjust the margin as needed */
        padding: '10px 20px', /* Adjust the padding as needed */
        backgroundColor: '#1f1e1e',
        color: 'white',
        border: 'none',
        borderRadius: '13px',
        cursor: 'pointer',
        fontWeight: '400',
        boxShadow: '0px 4px 17px 11px rgba(255, 255, 255, 0.5)'
    }
    Object.assign(targetButton.style,styles)
}

function saveTime3(){

    time = "2:00 PM - 4:30 PM";
    localStorage.setItem('time', time);
    console.log(time);

    var targetButton = document.getElementById("two")
    var styles ={
        margin: '0x 10px', /* Adjust the margin as needed */
        padding: '10px 20px', /* Adjust the padding as needed */
        backgroundColor: '#1f1e1e',
        color: 'white',
        border: 'none',
        borderRadius: '13px',
        cursor: 'pointer',
        fontWeight: '400',
        boxShadow: '0px 4px 17px 11px rgba(255, 255, 255, 0.5)'
    }
    Object.assign(targetButton.style,styles)
}

function resetDate(){

    var targetButton = document.getElementById("mon").style.backgroundColor = 'white';

    
    var targetButton1 = document.getElementById("tues")
    
    
    var targetButton2 = document.getElementById("thurs")
  

  
}

var myLink = document.getElementById('resetDate');
myLink.onclick = resetDate;
