var doc = document;
const pictures = doc.getElementsByClassName('picture');
const toggle = doc.getElementById('toggle');

// on open, setting themes

let openTheme = localStorage.getItem('theme');

// three possibilities on open
switch(openTheme) {
    default: // 'null'
    case 'architecture':
        toggle.checked = false;
        setToTheme('architecture');                
        break;
    
    case 'plants':
        toggle.transition = 0; // dunno if this works!!
        toggle.checked = true;
        setToTheme(openTheme);                
}

function setToTheme(theme) {
    for (let pic of pictures) {
        let picID = pic.id;
        let picURL = getImageUrl(theme, picID);
        pic.style.backgroundImage = picURL;
    };
    localStorage.setItem('theme',theme);
}


// changing themes

toggle.addEventListener('click', changeTheme);

function changeTheme() {
    let currentTheme = localStorage.getItem('theme');
    switch(currentTheme) {
        default: // 'null'
        case 'architecture':
            setToTheme('plants');
            break;

        case 'plants':
            setToTheme('architecture');
            break;
    }
}


function getImageUrl(theme, id){
    return (`url(/images/website_images/${theme}/${id}.png)`);
}
