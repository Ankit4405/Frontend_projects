const image_gallery = ['https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_480,c_limit,dpr_1/cdn/2c2dd0ea-8dec-4d49-8a95-f7b18f0b7aed/df312655-1d96-457d-88f4-cfc93c580d1d_560_420.jpg',
    'https://images.unsplash.com/photo-1655457418551-8405d8adc3f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1655494393495-79b474dd2968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1655379460199-4625c811fcb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1655508342579-d139e8d74bbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1655552173583-c5f030fe4346?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60']
function random_image_picker(min, max) {
    let a = Math.floor(Math.random() * (max - min + 1) + min);
    return image_gallery[a];
}
let background_theme = document.querySelector('#background_theme');
let main = document.getElementsByTagName('main')[0];
background_theme.addEventListener('click', function () {

    main.style.backgroundImage = `url(${random_image_picker(0, 5)}`;
});
let seconds = 7;
const change_image = setInterval(function(){
    --seconds;
    if(seconds<=0 || seconds<1){
        main.style.backgroundImage = `url(${random_image_picker(0,5)})`
        setInterval(change_image,1000);
        seconds = 7;
    }
},1000)

let btn_submit = document.querySelector('#btn_submit');
let input_name = document.querySelector('#full_name');
let hi_there = document.getElementById('hi_there');
let btn_starts = document.getElementById('btn_starts')
btn_submit.addEventListener('click', function () {
    hi_there.style.color = 'green'
    hi_there.innerHTML = `Hi ${input_name.value}! Welcome in ABC Memo Characters Game`;
    btn_submit.style.display = 'none';
    btn_starts.style.display = 'block';
    
})
// ----
// let btn_checks = document.getElementById('btn_checks');
//         let slow_down = document.getElementById('slow_down');
//         let content_area = document.getElementById('content_area');
//         btn_checks.addEventListener('click',function(){
//             let a = content_area.value;
//             let b = a.replace(/ /g,'').length;
//             let d = a.match(/\w+/g).length;
//             slow_down.style.color = 'green'
//             slow_down.innerHTML = `Content has ${b} characters and ${d} words`
//         });
// ------

