const MesUpdate = document.querySelector('#welmes');
MesUpdate.addEventListener('click', () => {
    MesUpdate.innerHTML = '<h1>Have a good time!</h1>';
});

const btnToggle = document.querySelector('#btntg');
btnToggle.addEventListener('click', () => {
    const btntg = document.querySelector('.container1');
    if(btntg.style.display === 'none'){
        btntg.style.display = 'flex';
    }else{
        btntg.style.display = 'none';
    }
});