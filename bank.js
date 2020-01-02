window.onload = initAll;
var total=0;
function Options(){
  var option = document.getElementById("Option").value;
  document.getElementById("Option").value = "";
  console.log(option);
  switch (option) {
    case 'D':
    document.getElementById('section-1').style.display = 'initial';
    document.getElementById('section-2').style.display = 'none';
    document.getElementById('section-3').style.display = 'none';
    document.getElementById('section-4').style.display = 'none';
      break;
    case 'W':
    document.getElementById('section-1').style.display = 'none';
    document.getElementById('section-2').style.display = 'initial';
    document.getElementById('section-3').style.display = 'none';
    document.getElementById('section-4').style.display = 'none';
      break;
    case 'B':
    document.getElementById('section-1').style.display = 'none';
    document.getElementById('section-2').style.display = 'none';
    document.getElementById('section-3').style.display = 'initial';
    document.getElementById('section-4').style.display = 'none';
    document.getElementById('balance').innerHTML = "Your Account Balance is :$"+total;
      break;
    case 'Q':
    document.getElementById('section').style.display = 'none';
    document.getElementById('section-1').style.display = 'none';
    document.getElementById('section-2').style.display = 'none';
    document.getElementById('section-3').style.display = 'none';
    document.getElementById('section-4').style.display = 'initial';
    break;
    default:
    console.log('Press Q to quit');
  }
}
function initAll(){
  document.getElementById('section').style.display = 'initial';
  document.getElementById('section-1').style.display = 'none';
  document.getElementById('section-2').style.display = 'none';
  document.getElementById('section-3').style.display = 'none';
  document.getElementById('section-4').style.display = 'none';
}
function creditAmount(){
  var amount = document.getElementById("creditAmt").value;
  if(amount > 50000){
    alert("Cannot Credit Amount more than $50,000");
  }
  else{
  total = total + parseFloat(amount);
  document.getElementById("newBalance").innerHTML = "Your balance is:$"+total;
  document.getElementById('creditAmt').value = "";
  console.log('total:'+total);
  }
}
function debitAmount(){
  var amount = document.getElementById("debitAmt").value;
  if(total>0 && total>amount && (total-amount) > 300){
    total = total-amount;
  }
  else if(total>0 && total>amount && (total-parseFloat(amount)) <= 300){
    var txt;
    if(confirm("Low Balance,Are you sure you want to continue to withdraw"))
    {
      total = total-parseFloat(amount);
      document.getElementById('demo').innerHTML = "Amount Withdrawn successfully";
      document.getElementById('total').innerHTML = "$"+total;
    }
    else{
      txt = "You pressed Cancel!";
      document.getElementById('total').innerHTML = txt;
    }
  }
  else{
    alert("Low Balance");
  }
  document.getElementById("total").innerHTML = "Total Balance is:$"+total;
  document.getElementById('debitAmt').value = "";
  console.log('debit amount:'+total);
}
function viewBalance(){
  document.getElementById("balance").innerHTML= "Your Balance is:$"+total;
}
