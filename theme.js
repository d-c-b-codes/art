var doc = document;

// var toggle = doc.getElementById('toggle');

var toggle = doc.getElementById('toggle');
console.log(toggle);
toggle.addEventListener('click', changeTheme);


function changeTheme(){
    var pictures = doc.getElementsByClassName('picture');
        for (let picture of pictures) {
            if (picture.classList.contains('plants')) {
                switchToArchitecture(picture);
            } 
            else if (picture.classList.contains('architecture')) {
                switchToPlants(picture);
            }
            switchImg(picture)
        }
}

button = doc.getElementById('button1');
button.addEventListener('click', changeAbout);

function switchToPlants(pic) {
    pic.classList.remove('architecture');
    pic.classList.add('plants');
}


function switchToArchitecture(pic) {
    pic.classList.remove('plants');
    pic.classList.add('architecture');
}

function switchImg(pic) {
    let picTheme = pic.classList[1];
    let picID = pic.id;
    let picURL = getImageUrl(picTheme, picID)
    pic.style.backgroundImage=picURL
}

function changeAbout(){
    console.log('about clicked');
    var aboutpicture = doc.getElementById('about');
    aboutpicture.style.backgroundImage='url(/images/website_images/house1.png)';
}

function getImageUrl(theme, id){
    return (`url(/images/website_images/${theme}/${id}.png`)
}