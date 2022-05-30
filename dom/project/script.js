const buttonOpenModal = document.getElementById('openModal');

const modelWrapper = document.querySelector('modal-wrapper');

buttonOpenModal.onclick = function(){
    modelWrapper.classList.remove('invisible') //remove a classe "invisible"
}

document.addEventListener('keydown' , function(event){
    const isEsckKey = event.key === "Escape";

    if (isEsckKey){
        modelWrapper.classList.add('invisible')
    }

})