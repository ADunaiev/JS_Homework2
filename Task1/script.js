function preventDigits(e) {
    var charCode = (e.which) ? e.which : e.keyCode;

    if ( (charCode >= 48) && (charCode <=57))
        e.preventDefault();

}