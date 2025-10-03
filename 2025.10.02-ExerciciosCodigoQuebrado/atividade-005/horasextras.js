function fnHorasExtras(salario, horasTrabalhadas, cargaHoraria) {
    let horasExtras = 0
    if(salario < 0){
        return 'todos os valores devem ser positivos'
    }

    if(horasTrabalhadas > cargaHoraria){
        horasExtras = (horasTrabalhadas - cargaHoraria) * salario
        console.log(horasTrabalhadas , cargaHoraria, salario, horasExtras)
    }

    return horasExtras
}