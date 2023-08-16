<link rel="stylesheet" href="stylesheet.css">
<link rel="login" href="login.css">
<link rel="plus" href="plus.css">
<link rel="2" href="2.css">

//<![CDATA[
/*  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();*/
//]]>
</script>
import requests

api_key = "6LdxntgZAAAAAFUGnqxdFolgOmLuQ6januc8AQDq"
base_url = 'https://.sportsmonks.com/api/v2.0/'

endpoint = 'fixtures'  'fixtures', 'leagues', etc.

params = {
    'api_token': api_key,

}

response = requests.get(f'{base_url}{endpoint}', params=params)

if response.status_code == 200:
    data = response.json()
else:
    print(f"Error: {response.status_code}")
    
    </link>document.getElementById("plansUser").addEventListener("click",signup)
function signup(){
    window.location.href= "cricbuzz_login.html"
}
document.getElementById("plans_left").addEventListener("click",homePage)
function homePage(){
    window.location.href= "index.html"
}
var emailData=[];
var emailObj={
    email: "girisuman289@gmail.com",
    gmail:"dhawal100@gamil.com",
    tmail:"sudhir200@gmail.com",
    cmail:"shrawani500@gmail.com"
};
emailData.push(emailObj)
localStorage.setItem("cricbuzzEmail",JSON.stringify(emailData))

document.getElementById("continue").addEventListener("click",canProceedOrNot)


var count=0;
var k=0+count;
document.getElementById("myCheckBox").addEventListener("click",newval);

function newval(){
count++;
if(count%2==0){
    k=0;
}
if(count%2==1){
   k=1;
}
}

function canProceedOrNot(){
if(k==1){
       window.location.href= "cricbuzz_login.html"

}
if(k==0){

    alert("Please agree to the terms and conditions")
}
}