let fnameNode=document.getElementById("fname");
let emailNode=document.getElementById("email");
let mobileNode=document.getElementById("mobile");
let border1="2px solid red";
let border2="2px solid green";
let tdNode1=document.getElementById("error1");
let tdNode4=document.getElementById("error4");
let tdNode5=document.getElementById("error5");


function validate1(){
    tdNode1.textContent="";
    let fname=fnameNode.value;
    let regExp=new RegExp("^[A-Za-z]*$");  
    console.log(regExp.test(fname));
    if(fname==''){
        tdNode1.textContent="this field is required";
        fnameNode.style.border=border1;
        return false;
    }
    else if(regExp.test(fname)==false){
        tdNode1.textContent="name should have only alphabets";
        fnameNode.style.border=border1;
        return false;
    }
    else{
        fnameNode.style.border=border2;
        return true;
    }
}


function validate4(){
    tdNode4.textContent="";
    let emailId=emailNode.value;
    let ss=emailId.substring(emailId.indexOf('@')+1);
    console.log(ss);
    if(emailId==''){
        tdNode4.textContent="this field is required";
        emailNode.style.border=border1;
        return false;
    }
    else if(!emailId.includes('@') || ss==''){
        tdNode4.textContent="Please put valid email id";
        emailNode.style.border=border1;
        return false;
    }
    else{
        emailNode.style.border=border2;
        return true;
    }
}
function validate5(){
    tdNode5.textContent="";
    let mobileNumber=mobileNode.value;
    let regExp=new RegExp("^[0-9]*$"); 
    if(mobileNumber==''){
        tdNode5.textContent="this field is required";
        mobileNode.style.border=border1;
        return false;
    }
    else if(regExp.test(mobileNumber)==false){
        tdNode5.textContent="mobile number should contain only digits";
        mobileNode.style.border=border1;
        return false;
    }
    else if(mobileNumber.length!=10){
        tdNode5.textContent="please put valid mobile number";
        mobileNode.style.border=border1;
        return false;
    }
    else{
        mobileNode.style.border=border2;
        return true;
    }
   
}


function validateForm(){
    let st1=validate1(); 
    let st4=validate4();
    let st5=validate5();
    // let st6=validate6();
   
    return st1 &&  && st4 && st5  ;
}