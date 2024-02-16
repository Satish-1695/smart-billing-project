function netflix(){
    let plan1=document.getElementById("monthly").value;
    let plan2=document.getElementById("months3").value;
    let plan3=document.getElementById("halfyearly").value;
    let plan4=document.getElementById("yearly").value;

    let selectedPlan = document.getElementById("details").value;
    let name = document.getElementById("front").value;
    let email = document.getElementById("next").value;
    let btn = document.getElementById("btn");

    var totalPrice;

    if((selectedPlan==parseInt(plan1))||(selectedPlan==parseInt(plan2)) || (selectedPlan==parseInt(plan3)) || (selectedPlan==parseInt(plan4))){

        totalPrice=selectedPlan;
        let total = parseInt(selectedPlan);
        let totalWithGst = parseInt(total*(18/100));
        totalPrice = total+totalWithGst;

        let bill = document.getElementById("bill");
        let para1=document.querySelector(".para1");
        let para2=document.querySelector(".para2");
        let para3=document.querySelector(".para3");
        let para4=document.querySelector(".para4");
        let para5=document.querySelector(".para5");
        let para6=document.querySelector(".para6");

        para1.innerHTML=`Name : <strong>${name}</strong>`;
        para2.innerHTML=`Email : <strong>${email}</strong>`;
        para3.innerHTML=`Selected plan : <strong>${total}</strong>`;
        para4.innerHTML=`GST 18% : <strong>${totalWithGst}</strong>`;
        para5.innerHTML=`TOTAL AMOUNT : <strong>${totalPrice}</strong>`; 
        para6.innerHTML=`THANK YOU ENJOY YOUR UNLIMITED MOVIES & TV SHOWS🥳🥳🎊🎉...!!`;

    }else{
        alert("Enter valid plan amount");
    }
};