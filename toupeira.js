
var a, b;
var u, v;
scanf("%d%d", "a", "b")
var listaAdj = [];

for (let i = 0; i < a; i++) {
    listaAdj.push([])
}

for (let i = 0; i < b; i++) {
    scanf("%d%d", "u", "v")
    listaAdj[u-1].push(v-1);
    listaAdj[v-1].push(u-1);
}

var n;
var caminho = []
scanf("%d", "n")


var ans = 0
var o, vertice;
for (let i = 0; i < n; i++) {
    scanf("%d", "o")
    for (let l = 0; l < o; l++) {
        scanf('%d', 'vertice')
        caminho.push(vertice-1)
    }
    
        while (caminho.length > 0) {
            var node1 = caminho[0]
            var node2 = caminho[1]
            if (listaAdj[node1].includes(node2)) {
            caminho.shift()
            
            } 
            else{
                break
            }
        }
        if (caminho.length <= 1) {
            ans++
        }
    caminho = []
}
printf('%d\n', ans)