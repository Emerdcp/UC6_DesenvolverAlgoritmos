document.getElementById('bt-calcular').addEventListener('click', function(){
    let salario = parseFloat(document.getElementById('salario').value)
    let horasTrabalhadas = parseFloat(document.getElementById('horas-trabalhadas').value)
    let cargaHoraria = parseFloat(document.getElementById('carga-horaria').value)
    let horasExtras = fnHorasExtras(salario, horasTrabalhadas, cargaHoraria)
    document.getElementById('resposta').innerHTML = fnFormatarMonetario(horasExtras)
})