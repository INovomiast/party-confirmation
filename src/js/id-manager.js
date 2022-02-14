// URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const user_phone = urlParams.get('user-phone');

// Components
const submit_btn = document.getElementById('phone_form_block_body_submit');
const phone_input = document.getElementById('phone_form_block_body_input');
const phone_list = ['650920636', '684331123', '603345202', '602558735'];

const loading_spinner = document.getElementById('loading_spinner');

//Form

submit_btn.addEventListener('click', () => {
    if (phone_input.value == "") {
        phone_input.style.backgroundColor = "red";
        setTimeout(() => {
            phone_input.style.backgroundColor = "white";
        }, 2000);
    }if (phone_list.includes(phone_input.value)) {
        window.location.href = "./index.html?user-phone=" + phone_input.value;
    }if (!phone_list.includes(phone_input.value)) {
        alert('Phone is not on the list!');
    }
});

//URL Gestion

//Prueba
if (user_phone == phone_list[0]) {
  //===================================//
    submit_btn.style.display = 'none';
    phone_input.style.display = 'none';
  //===================================//
    loading_spinner.style.display = 'block';
    setTimeout(() => {
        alert('Charge Completed!');
    }, 5500);
    
}
//Ruben
if (user_phone == phone_list[1]) {
    //===================================//
      submit_btn.style.display = 'none';
      phone_input.style.display = 'none';
    //===================================//
      loading_spinner.style.display = 'block';
      setTimeout(() => {
          alert('Charge Completed!');
      }, 5500);
      
}

//Raquel
if (user_phone == phone_list[2]) {
    //===================================//
      submit_btn.style.display = 'none';
      phone_input.style.display = 'none';
    //===================================//
      loading_spinner.style.display = 'block';
      setTimeout(() => {
          alert('Charge Completed!');
      }, 5500);
      
}