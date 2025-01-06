let form=document.getElementById("frm");

form.addEventListener("submit",

    function(event){
        event.preventDefault();
        let name=document.getElementById("name").value;
         
        let date=document.getElementById("name").value;
        letgender=document.getElementById("gnd").value;
        let password=document.getElementById("pass").value;
        let orders=document.getElementsByName("Order Type");
        let ord=[];
        for(let i=0;i<orders.length;i++){
            if(orders[i].checked){
                ord[i]=orders[i].value;
                localStorage.setItem(`${i}`,ord[i]);
            }
        }

    }
)
function clearstroage(){

    localStorage.clear();
}