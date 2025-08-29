# Explicação de Igualdade

= -> Atribuição
== -> Igualdade
=== -> Valor + Tipo

```sql
programa{
    funcao inicio(){
        caracter letra
        escreva("Informe uma letra")
        leia(letra)
        se(letra == "w"){
            escreva("Pulando")
        }
    }
}
```

```sql
programa{
    funcao inicio(){
        real nota1=0, nota2=0, nota3=0, nota4=0, media=0
        escreva("Digite a Nota 01: ")
        leia(nota1)
        escreva("Digite a Nota 02: ")
        leia(nota2)
        escreva("Digite a Nota 03: ")
        leia(nota3)
        escreva("Digite a Nota 04: ")
        leia(nota4)
        media=(nota1+nota2+nota3+nota4)/4
        se(media >=5){
            se(media ==10){
                escreva("Aprovado com honras")
            }senao("Aprovado")
        }senao{
            escreva(Reprovadp)
        }
    }
}
```