$(document).ready(function(){ 
    $("#ocultarCaixa").click(function(e){
        $("#caixa1").fadeOut(function(){
        $(this).delay(1000);
        $(this).fadeIn();
        });
    })
    $("#ocultarTudo").click(function(e){
        $("#lista").fadeOut();
        });
        
    $("#mostrarTudo").click(function(e){
       $("#lista").fadeIn();
    });
    $("#ocultarMostrar").click(function(e){
        $("#lista").toggle(1000);
    });
    $(document).ready(function() {
        $("#ocultarCaixa").click(function(e) {
            $("#caixa1").fadeOut(function() {
                $(this).delay(1000);
                $(this).fadeIn();
            });
        });
    
        $("#ocultarTudo").click(function(e) {
            $("#lista").fadeOut();
        });
    
        $("#mostrarTudo").click(function(e) {
            $("#lista").fadeIn();
        });
    
        $("#ocultarMostrar").click(function(e) {
            $("#lista").toggle(1000);
        });
    
        $("#mudar").click(function() {
            var inputValue = parseFloat($('#input-range').val());
            var opacidadeEsc = $("#select-element").val();
            $("#input-range").change(function(){
                $("#input-view").val($(this).val());
                });
                
    
            if (opacidadeEsc == "e1") {
                $("#ele1").fadeTo(500, inputValue);
            } else if (opacidadeEsc == "e2") {
                $("#ele2").fadeTo(500, inputValue);
            } else if (opacidadeEsc == "e3") {
                $("#ele3").fadeTo(500, inputValue);
            }
        });
    
        $("#resetar").click(function() {
            location.reload();
        });
    });
    
});