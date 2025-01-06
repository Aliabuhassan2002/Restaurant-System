
function customers(fullname, DOB, password, gender, phoneNum,ord, img){
this.fullname=fullname;
this.DOB=DOB;
this.password=password;
this.gender=gender;
this.phoneNum=phoneNum;
this.ord=ord;
this.img=img;




}

let form=document.getElementById("frm");
form.addEventListener("submit",
    
    function(event){
        event.preventDefault();
        let name=document.getElementById("name").value;
        let date=document.getElementById("date").value;
        let gender=document.getElementById("gnd").value;
        let password=document.getElementById("pass").value;
        let orders=document.getElementsByName("Order Type");
        let ord=[];
        for(let i=0;i<orders.length;i++){
            if (orders[i].checked) {
                
                ord[i]=orders[i].value;
            }
        }
        let c1=new customers(name,date,password,gender,'09876',ord ,'assets/vvv4.png');
// console.log(c1.fullname+c1.DOB+c1.password+c1.gender+c1.phoneNum + c1.ord);
document.getElementById("paragraph").innerHTML=`Name: ${c1.fullname}<br> The date of birth: ${c1.DOB}<br>password: ${c1.password}<br>Gender: ${c1.gender}<br> Phone: ${c1.phoneNum} <br> Orders: ${c1.ord}`;
document.querySelector('img').src=c1.img;


    });