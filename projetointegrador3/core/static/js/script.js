const inputs = document.querySelectorAll('.input');

const handleFocus =({target}) =>{
    const span = target.previousElementSibling;
    span.classList.add('span_active');
}

const handleFocusout =({target}) =>{
    if(target.value === ''){
        const span = target.previousElementSibling;
        span.classList.remove('span_active');
    }
}

inputs.forEach((input)=> input.addEventListener('focus', handleFocus));
inputs.forEach((input)=> input.addEventListener('focusout', handleFocusout));

function mudarMenu(){
    document.getElementById("icone_menu").src="static/img/menu.png";
}

function voltarMenu(){
    document.getElementById("icone_menu").src="static/img/menu_icon.png";
}


