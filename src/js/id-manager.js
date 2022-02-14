// URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const user_phone = urlParams.get('user-phone');

// Components
const submit_btn = document.getElementById('phone_form_block_body_submit');
const phone_input = document.getElementById('phone_form_block_body_input');
const phone_list = ['684331123', '603345202', '621002746', '696393392', '603330343', '655720109', '648419497', '643020348', '635967638'];





const loading_spinner = document.getElementById('loading_spinner');

const finish_div = document.getElementById('finish_btn_div');

//Download Invitation
const download_files = ['https://inovomiast.000webhostapp.com/user/inovomiast/cdn/private/invitaciones/Invitacion%20-%20Ruben%20-%20Cumplea%c3%b1os%20Dimitri.pdf', 'https://inovomiast.000webhostapp.com/user/inovomiast/cdn/private/invitaciones/Invitacion%20-%20Raquel%20-%20Cumplea%c3%b1os%20Dimitri.pdf', 'https://inovomiast.000webhostapp.com/user/inovomiast/cdn/private/invitaciones/Invitaci%c3%b3n%20-%20Borys%20-%20Cumplea%c3%b1os%20Dimitri.pdf', 'https://inovomiast.000webhostapp.com/user/inovomiast/cdn/private/invitaciones/Invitaci%c3%b3n%20-%20Alejandro%20Pino%20-%20Cumplea%c3%b1os%20Dimitri.pdf', 'https://inovomiast.000webhostapp.com/user/inovomiast/cdn/private/invitaciones/Invitaci%c3%b3n%20-%20Leonardo%20-%20Cumplea%c3%b1os%20Dimitri.pdf', 'https://inovomiast.000webhostapp.com/user/inovomiast/cdn/private/invitaciones/Invitaci%c3%b3n%20-%20Leticia%20-%20Cumplea%c3%b1os%20Dimitri.pdf', 'https://inovomiast.000webhostapp.com/user/inovomiast/cdn/private/invitaciones/Invitaci%c3%b3n%20-%20Marcos%20-%20Cumplea%c3%b1os%20Dimitri.pdf', '']
const download_file_link = document.getElementById('download_file_link');



//Form

submit_btn.addEventListener('click', () => {
    if (phone_input.value == "") {
        phone_input.style.backgroundColor = "red";
        setTimeout(() => {
            phone_input.style.backgroundColor = "white";
        }, 2000);
    }if (phone_list.includes(phone_input.value)) {
        window.location.href = "./?user-phone=" + phone_input.value;
    }
});

//URL Gestion

//Ruben
if (user_phone == phone_list[0]) {
    //===================================//
      submit_btn.style.display = 'none';
      phone_input.style.display = 'none';
    //===================================//
      loading_spinner.style.display = 'block';
      setTimeout(() => {
        loading_spinner.style.display = 'none';
        finish_div.style.display = 'block';
        download_file_link.href = download_files[0]; 
      }, 5500);
      
}

//Raquel
else if (user_phone == phone_list[1]) {
    //===================================//
      submit_btn.style.display = 'none';
      phone_input.style.display = 'none';
    //===================================//
      loading_spinner.style.display = 'block';
      setTimeout(() => {
          loading_spinner.style.display = 'none';
          finish_div.style.display = 'block';
          download_file_link.href = download_files[1];    
      }, 5000);
    //===================================//
      
}

//Borys
else if (user_phone == phone_list[2]) {
  //===================================//
    submit_btn.style.display = 'none';
    phone_input.style.display = 'none';
  //===================================//
    loading_spinner.style.display = 'block';
    setTimeout(() => {
        loading_spinner.style.display = 'none';
        finish_div.style.display = 'block';
        download_file_link.href = download_files[2];    
    }, 5000);
  //===================================//
    
}

//Pinus
else if (user_phone == phone_list[3]) {
  //===================================//
    submit_btn.style.display = 'none';
    phone_input.style.display = 'none';
  //===================================//
    loading_spinner.style.display = 'block';
    setTimeout(() => {
        loading_spinner.style.display = 'none';
        finish_div.style.display = 'block';
        download_file_link.href = download_files[3];    
    }, 5000);
  //===================================//
    
}

//Leonardo
else if (user_phone == phone_list[4]) {
  //===================================//
    submit_btn.style.display = 'none';
    phone_input.style.display = 'none';
  //===================================//
    loading_spinner.style.display = 'block';
    setTimeout(() => {
        loading_spinner.style.display = 'none';
        finish_div.style.display = 'block';
        download_file_link.href = download_files[4];    
    }, 5000);
  //===================================//
    
}

//Leticia
else if (user_phone == phone_list[5]) {
  //===================================//
    submit_btn.style.display = 'none';
    phone_input.style.display = 'none';
  //===================================//
    loading_spinner.style.display = 'block';
    setTimeout(() => {
        loading_spinner.style.display = 'none';
        finish_div.style.display = 'block';
        download_file_link.href = download_files[5];    
    }, 5000);
  //===================================//
    
}

//MarcosM
else if (user_phone == phone_list[6]) {
  //===================================//
    submit_btn.style.display = 'none';
    phone_input.style.display = 'none';
  //===================================//
    loading_spinner.style.display = 'block';
    setTimeout(() => {
        loading_spinner.style.display = 'none';
        finish_div.style.display = 'block';
        download_file_link.href = download_files[6];    
    }, 5000);
  //===================================//
    
}

//SergioM
else if (user_phone == phone_list[7]) {
  //===================================//
    submit_btn.style.display = 'none';
    phone_input.style.display = 'none';
  //===================================//
    loading_spinner.style.display = 'block';
    setTimeout(() => {
        loading_spinner.style.display = 'none';
        finish_div.style.display = 'block';
        download_file_link.href = download_files[7];    
    }, 5000);
  //===================================//
    
}

//Aaron
else if (user_phone == phone_list[8]) {
  //===================================//
    submit_btn.style.display = 'none';
    phone_input.style.display = 'none';
  //===================================//
    loading_spinner.style.display = 'block';
    setTimeout(() => {
        loading_spinner.style.display = 'none';
        finish_div.style.display = 'block';
        download_file_link.href = download_files[8];    
    }, 5000);
  //===================================//
    
}