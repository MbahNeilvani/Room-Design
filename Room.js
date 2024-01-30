// const bannerInfo=[{
//     imgSrc:'./img1',
//     title:'Discover innovative ways to decorate',
//     text:'We provide unmatched quality, comfort, and style for property owners across the country.'
// },{
//     imgSrc:'./img2',
//     title:'Discover innovative ways to decorate',
//     text:'We provide unmatched quality, comfort, and style for property owners across the country.'
// },
// {
//     imgSrc:'./img3',
//     title:'Discover innovative ways to decorate',
//     text:'We provide unmatched quality, comfort, and style for property owners across the country.'
// }
// ]
const headerInfo=[
    {src:'/img/desktop-image-hero-1.jpg', content:`We provide unmatched quality, comfort, and style for property
    owners across the country. Our experts combine form and function
    in bringing your vision to life. Create a room in your own style
    with our collection and make your property a reflection of you and
    what you love.`},
    {src:'img/room.jpg', content:'yyiwjhwusujd'},
    {src:'img/room.jpg', content:'yyiwjhwusujd'},
];

const button=document.getElementById('btn-fwrd');
const img=document.getElementById('img');
const content=document.getElementById('content');

button.onclick(()=>{
    const currentIndex=img.data-index;
    img.src=headerInfo[currentIndex>=2?0:currentIndex+1];
    content.innerHTML=headerInfo[currentIndex>=2?0:currentIndex+1];
})