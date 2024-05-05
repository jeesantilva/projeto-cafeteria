// Estudar esse codigo:::


function hiddenElementTransition (paramClass , paramId){

    const nameConst = document.querySelector(paramClass);
    document.querySelector(paramId).onclick = () => {
        nameConst.classList.toggle('active')
    }
}

hiddenElementTransition('.search-box' , '#search-icon' );
hiddenElementTransition('.navbar' , '#menu-icon' )

document.addEventListener('click', () => {

})


