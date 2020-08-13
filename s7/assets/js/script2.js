function dark_mode() {
    var mybody = document.getElementById("mybody")
    var myButton = document.getElementById("myButton")
    var myIcon = document.getElementById("myIcon")
    var mytext = document.getElementById("myText")
    if(mybody.classList.contains('bg-light'))
    {
    mybody.classList.remove('bg-light')
    myButton.classList.remove('btn-dark')
    myIcon.classList.remove('fa-moon')
    mytext.classList.remove('text-dark')

    mybody.classList.add('bg-dark')
    myButton.classList.add('btn-light')
    myIcon.classList.add('fa-sun')
    mytext.classList.add('text-white')

    } else if(mybody.classList.contains('bg-dark')){

    mybody.classList.add('bg-light')
    myButton.classList.add('btn-dark')
    myIcon.classList.add('fa-moon')
    mytext.classList.add('text-dark')

    mybody.classList.remove('bg-dark')
    myButton.classList.remove('btn-light')
    myIcon.classList.remove('fa-sun')
    mytext.classList.remove('text-white')}
}