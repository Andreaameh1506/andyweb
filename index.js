const btn_click = document.getElementById('btn-click')

btn_click.addEventListener('click', () => {
    const header = document.getElementById('header')
    header.style.fontWeight = 'bolder'
    const myForm = document.getElementById('myform');
    myForm.style.backgroundColor = 'black';
    myForm.style.padding = '30px'

})

