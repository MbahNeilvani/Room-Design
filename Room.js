
const m02 = document.getElementById('img02')
const m03 = document.getElementById('img03')

let run = [m02, m03]

document.getElementById('grp-btn').addEventListener('click', slide)



function slide(){
    // alert('Working')
    for(let i = 2; i <= run.length; i++){
        
        img02.classList.toggle('hidden')
        img03.classList.add('hidden')
    }
     
    // document.getElementsById('show').innerHTML = run 
}




