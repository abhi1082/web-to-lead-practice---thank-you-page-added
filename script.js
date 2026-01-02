function beforesubmit() {
    let outputdate = document.querySelector('.outputdate');
    let inputdate = document.querySelector('.inputdate');
    console.log('inputdate : ', inputdate.value); //string -> date (en-IN)
    
    let formattedDate = new Date(inputdate.value).toLocaleDateString('en-IN');
    outputdate.value = formattedDate;
}