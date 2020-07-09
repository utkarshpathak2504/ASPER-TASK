function cal(num) {
    document.form.input.value=document.form.input.value+num
}
function clr() {
    document.form.input.value="";
}
function equal() {
    var v=document.form.input.value;
    if(v){
        document.form.input.value=eval(v)
        return;
    }
}
function sqrt(){
    var v=document.form.input.value;
    let y=Math.sqrt(v)
    document.form.input.value=y.toFixed(3)
    return;
}
function abs() {
    var v = document.form.input.value;
    let y = Math.abs(v)
    document.form.input.value= y
    return false;

}