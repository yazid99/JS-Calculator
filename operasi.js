function tambahKarakter(form, character){
    form.value += character;
}
function kalkulasi(form){
    form.tampilan.value = eval(form.tampilan.value);
}
function clearthis(form){
        form.value = null;
}