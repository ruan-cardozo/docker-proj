// Comentário de uma linha
/* Comentário de
   várias linhas */

// A cláusula package aparece no início de cada arquivo.
// main é um nome especial declarando um executável ao invés de uma biblioteca.
package main

// A cláusula Import declara os pacotes referenciados neste arquivo.
import (
	"fmt" // Um pacote da biblioteca padrão da linguagem Go
	//"net/http"// Sim, um servidor web!
	//"strconv" // Conversão de Strings
)

// Definição de uma função. Main é especial. É o ponto de entrada para o
// programa executável. Goste-se ou não, a linguagem Go usa chaves.
func main()  {
	fmt.Println("Hello, World")

	beyondHello()
}

// As funções declaram os seus parâmetros dentro de parênteses. Se a função
// não receber quaisquer parâmetros, é obrigatório usar parênteses vazios.
func beyondHello() {
	var x int // Declaração de variável. Tem de ser declarada antes de usar.
	x = 3; // Atribuição de variável.
	fmt.Println(x)

	y:=20  // Declarações "curtas" usam := para inferir o tipo, declarar e atribuir.
	fmt.Println(y)

	sum, prd := learnMultiple(x,y) // a função retorna dois valores
	fmt.Println("Soma:", sum,"Produto:", prd)
}

func learnMultiple(x, y int) (sum, prd int) {
	return x + y, x * y; // returno de dois valores
}

func learnTypes() {
	// Declarações "curtas" geralmente servem para o que pretendemos.
	s := "Learn Go!" //string type
	s2 := `
		String para quebra de linhas
	`

	// literal não-ASCII. A linguagem Go utiliza de raiz a codificação UTF-8.
	g := 'Σ' // tipo rune, um alias para int32, que contém um código unicode

	f := 3.14159 //float, numero flutante de 64bit (IEEE-754)
	c := 3 + 4i //complex128, representando internamente com dois float64s

	//declaração de variaveis, com inicialização
	var u uint = 7
	var pi float32 = 22. / 7

	//sintaxe de conversão de tipo, com declaração curta
	n := byte('\n')

    // Os arrays têm tamanho fixo e definido antes da compilação.
	var a4 [4]int // um array de 4 ints, inicializado com ZEROS
	a3 := [...]int{3,1,5} // um array de 3 ints, inicializado como mostrado

	// As slices têm tamanho dinâmico. Os arrays e as slices têm cada um as
    // suas vantagens mas o uso de slices é muito mais comum.
	s3 := []int{4, 5, 9}   // compare com a3. sem reticências aqui
	s4 := make([]int, 4)   // aloca uma slice de 4 ints, inicializada com ZEROS
    var d2 [][]float64     // declaração apenas, nada é alocado
    bs := []byte("uma slice") // sintaxe de conversão de tipos
}