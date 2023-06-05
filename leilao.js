var maior = 0;
var pessoaM = '';

var n;
scanf("%d", 'n')
var p, v;

for (let i = 0; i < n; i++) {
    scanf("%s%d", "p", "v")
    if (v > maior) {
        maior = v
        pessoaM = p
    }
}

printf('%s\n%d\n',  pessoaM, maior)