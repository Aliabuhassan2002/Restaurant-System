let form=document.getElementById("frm");

form.addEventListener("submit",

    function(event){
        event.preventDefault();
        let date=document.getElementById("date").value;
        let gender=document.getElementById("gnd").value;
        let password=document.getElementById("pass").value;
        let orders=document.getElementsByName("Order Type");
        let ord=[];
        let name=document.getElementById("name").value;
        let email=document.getElementById("email").value;
        let phone=document.getElementById("phone").value;
        //name regex
        let regex_space=/\s/;
        let spc=name.match(regex_space);
        //password regex
        let regex_password=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
        let pas=password.match(regex_password);
        //Date regex
        let regex_date = /^\d{4}-\d{2}-\d{2}$/;
        let dte=date.match(regex_date);
        //email regex
        let regex_email=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        //phone regex
        let regex_phone=/^07\d{8}$/;
        let phn=phone.match(regex_phone);
        
   
        if(spc){
            alert('your name must be without spaces');
        }
        else if(!pas){
            alert('your password must be without spaces');

        }
        else if(!dte){
            alert('your Date of birth must be in YYYY-MM-DD format');

        }
        else if(!regex_email.test(email)){
            alert('your email is not valid');

        }
        else if(!phn){
            alert('your phone is incorrect');

        }

        else{
            alert('your registeraiton is done successfully');
            let key=['name','date','gender','phone','orders'];
            
        let value=[name,date,gender,phone]
        for(let i=0;i<value.length;i++){
            
            localStorage.setItem(key[i],value[i]);
            
        }
        for(let i=0;i<orders.length;i++){

            if(orders[i].checked){
                ord[i]=orders[i].value;
            }
        }
        localStorage.setItem(key[4],ord);

        document.getElementById("crd").innerHTML=` <div class="card" id="crd" style="width: 18rem;">
        <img src="assets/vvv4.png" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text" id="paragraph">name: ${localStorage.getItem('name')} <br>date of birth: ${localStorage.getItem('date')} <br>Gender: ${localStorage.getItem('gender')} <br>Phone: ${localStorage.getItem('phone')}<br>order: ${localStorage.getItem('orders')} <br></p>
        </div>
      </div>`


        }
         
       
                


    }
)
function clearstroage(){

    localStorage.clear();
}
