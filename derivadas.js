h = 0.0000001;
function f(x) 
    {
        return Number(a) * (Number(x)**2) + Number(b) * Number(x) + Number(c);
    }
$("#botonAlerta").click(function(){
    $("#alerta").removeClass('show');
    $("#alerta").addClass('hide');
})
$('#firstBtn').click(function() {
    a = $('#aTerm').val();
    b = $('#bTerm').val();
    c = $('#cTerm').val();
    
   
    

    if (a != 0 && a != 1 && a != -1)
    {
        firstTerm = a + 'x² '
    }
    else if (a == 1)
    {
        firstTerm = 'x² ';
    } 
    else if (a == -1)
    {
        firstTerm = '-x² ';
    }
    else if (a == 0)
    {
        firstTerm = '';
    }





    if (b > 0 && b != 1 && b != -1)
    {
        secondTerm = '+ ' + b + 'x '
    }
    else if (b == 1 && a == 0)
    {
        secondTerm = ' x ';
    }
    else if (b == 1)
    {
        secondTerm = '+ x ';
    }
    else if (b == -1)
    {
        secondTerm = '- x ';
    }
    else if (b == 0)
    {
        secondTerm = '';
    }



    if (c == 0)
    {
        thirdTerm = ''
    } 
    else if (c < 0)
    {
        thirdTerm = '- ' + Math.abs(c)
    }
     else if (b == 0)
    {
        thirdTerm = ' ' + c
    }
    else
    {
        thirdTerm = '+ ' + c
    }



    if(c == '' && b == '' && a == '') 
    {
        if($("#alerta").hasClass('hide'))
        {
            $("#alerta").removeClass('hide');
            $("#alerta").addClass('show');
        }
    } 
    else
    {
    $('#functionDisplay').html('Función obtenida: <br><br> <p id="functionDisplayed">f(x) = ' + firstTerm + secondTerm + thirdTerm + '</p>')
    $("#derivativeForm").removeClass('d-none')  
    }})
    

$("#secondBtn").click(function(){
    
    x = $("#derivativePoint").val()
    a0 = Math.round(delta(x))
    b0 = f(Number(x)) - Number(a0)*Number(x)
    if (b0 > 0) {b01 = '+ ' + b0}
    else if (b0 < 0) {b01 = '- ' + Math.abs(b0)}
    else if (b0 == 0) {b01 = ''}
    if(b > 0){b = '+ ' + b}
    else if(b < 0) {b = '- ' + Math.abs(b)}
    else{b = ''}
    derivatedFunction = Number(a)*2 + 'x ' +  b;
    derivatedFunctionInPoint = a0 + 'x ' + b01;

    $("#derivativeResult").html("<br><br><h5>Función derivada: <span>f'(x) = " + derivatedFunction + "</span></h5><h5>Función derivada en un punto: <span>f'(" + x + ") = " + derivatedFunctionInPoint + "</h5>")
})




function delta(x) 
{
    // Devuelve la pendiente en f(x), o el coeficiente de la recta que existe entre los puntos f(x + h) y f(x)
    return ((f(Number(x) + Number(h)) - f(Number(x))) / Number(h));
}



