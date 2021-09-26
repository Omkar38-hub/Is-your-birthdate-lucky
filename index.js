var dateOfBirth=document.querySelector("#dob-input");
var luckyNumber=document.querySelector("#lucky-input");
var checkButton=document.querySelector("#btn");
var outputBox=document.querySelector("#output");
function showMsg(message)
{
  outputBox.innerText=message;
}

function checkLucky(sumDob)
{
  if(sumDob%(luckyNumber.value)===0)
    showMsg("Yaah!🎉 "+ luckyNumber.value +" is lucky.");
  else
    showMsg("Ohh!😞 "+ luckyNumber.value +" is not that lucky.");
}
function findSumOfDob(dob)
{
  var sum=0;
  for(var i=0;i<dob.length;i++)
  {

    sum=sum+Number(dob.charAt(i));
  }
  return sum;
}

checkButton.addEventListener("click",function(){
  var dob=dateOfBirth.value;
  dob=dob.replaceAll("-","");
  var sumDob=findSumOfDob(dob);
  if(sumDob && luckyNumber.value)
      checkLucky(sumDob);
  else
      showMsg("Please enter both the fields!");
})
