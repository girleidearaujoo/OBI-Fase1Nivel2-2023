
var conta, v, a, f;
scanf("%d%d%d%d", "conta", "v", "a", "f")
var j = 0
var dividas = [v, a, f]

for (let i = 0; i < dividas.length; i++) {
    if (conta < dividas[i]) {
        continue
    }
    conta -= dividas[i]
    j++
}

printf('%d\n', j)