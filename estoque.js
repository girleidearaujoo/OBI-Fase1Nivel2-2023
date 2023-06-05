

var vendido = 0;

var n, m, p;
scanf("%d%d", 'n', 'm')
var l = [];
var matriz = [];
for (let i = 0; i < n; i++) {
    
    for (let j = 0; j < m; j++) {
        scanf("%d", "p");
        l.push(p)
    }
    matriz.push(l)
    l = []
}

var vendas;
scanf("%d", "vendas")

var linhas, colunas;

for (let i = 0; i < vendas; i++) {
     scanf("%d%d", "linhas", "colunas")
     if (matriz[linhas -1][colunas-1] === 0) {
        continue
     }
     matriz[linhas-1][colunas-1] -= 1
     vendido++
}
// console.log(matriz);
printf('%d\n',  vendido)
