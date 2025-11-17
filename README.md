---

## 🧠 Repositório de Estudos: Lógica de Programação com JavaScript


Este repositório é dedicado ao meu aprendizado de lógica de programação. Aqui, registro e desenvolvo os exercícios práticos do Livro (Lógica de Programação e Algoritmos com Javascript).
Que utiliza JavaScript como ferramenta principal para ensinar os conceitos.

O objetivo é documentar minha evolução, fixar o conhecimento e ter um portfólio de projetos simples que mostrem meu progresso.
----

## 📑 Resumo do Estudo em JavaScript

Este repositório contém meus estudos iniciais em **JavaScript (Capítulo 01)**, cobrindo conceitos fundamentais de declaração de variáveis, escopo, entrada/saída de dados, comentários e tipos de dados.

### 🚀 Variáveis e Escopo (`var`, `let`, `const`)

Em JavaScript, variáveis são declaradas usando:

  * **`var`**: Possui escopo de função ou global (não recomendado para novos códigos).
  * **`let`**: Usado para variáveis que podem ser **alteradas** (`mutáveis`). Possui **escopo de bloco**, otimizando a memória e evitando dupla declaração no mesmo escopo.
  * **`const`**: Usado para variáveis que devem ter apenas uma **única atribuição** (`imutáveis`). Também possui **escopo de bloco**.

> **Nota:** O uso de `let` e `const` é preferível por oferecer escopo de bloco, o que ajuda na organização e na prevenção de erros.


### 💻 Entrada e Saída de Dados

  * **Entrada (`prompt()`):** O método `prompt()` exibe uma caixa de diálogo na página para que o usuário insira informações. O valor digitado é retornado como uma **string**.
    ```javascript
    const nome = prompt('Qual é seu nome? '); 
    // O valor digitado é armazenado na variável 'nome'.
    ```
  * **Saída (`alert()`):** O método `alert()` exibe uma caixa de alerta simples na página com uma mensagem.
    ```javascript
    alert('Olá ' + nome); // Exibe uma mensagem concatenada.
    ```
  * **Saída para Debug (`console.log()`):** Usado para exibir informações no console do navegador.

### 💬 Comentários

Comentários são essenciais para documentar o código e facilitar a manutenção futura.

  * **Linha única:** `// Este é um comentário de uma linha.`
  * **Múltiplas linhas:**
    ```javascript
    /*
    Este é um
    comentário
    de múltiplas linhas.
    */
    ```



### 🔢 Tipos de Dados e Coerção

Os principais tipos de dados abordados são:

| Tipo | Descrição | Exemplo |
| :--- | :--- | :--- |
| **`string`** | Texto (sequência de caracteres). | `"Olá Mundo"` |
| **`number`** | Números inteiros ou decimais. | `10`, `3.14` |
| **`boolean`** | Valores lógicos (verdadeiro ou falso). | `true`, `false` |

#### Coerção de Tipo (Type Coercion)

Em JavaScript, o operador de soma (`+`) pode causar um comportamento inesperado quando uma das variáveis é uma **string**:

  * **Soma Aritmética:** `number + number = number` (Soma)
  * **Concatenação:** `string + qualquer_coisa = string` (Junção de textos)

**Exemplo:**

```javascript
const a = "20"; // String
const e = a + 2; // Resultado: "202" (concatenação)
```

Para realizar operações matemáticas corretamente, é necessária a conversão explícita (coerção) de `string` para `number`:

  * **`Number(variável)`**
  * **`parseInt(variável)`:** Converte para um número **inteiro**.
  * **`parseFloat(variável)`:** Converte para um número com **decimais**.

**Exemplo de Correção:**

```javascript
const a = "20"; 
const e = parseInt(a) + 10; // Resultado: 30 (20 + 10)
```
#### Verificações Adicionais

  * **`Number.isInteger(variável)`:** Verifica se o valor de uma variável é um número inteiro, retornando `true` ou `false`.
  * **`.toFixed(N)`:** Método de números para formatar o valor com **N** casas decimais na saída.
---
### Cap 02

## 🌐 Resumo do Estudo em JavaScript: Integração com HTML

Este capítulo aborda a integração do JavaScript com o HTML para criar programas interativos, focando na captura de dados de formulários e na manipulação de elementos da página.



### 📥 Criação de Formulários (Input de Dados)

A principal forma de interação com o usuário é através de **campos de formulário** dentro das tags `<form></form>` no HTML.

  * **Campo de Texto:** A tag `<input type="text"...>` é usada para receber texto do usuário.
  * **Botão de Envio:** A tag `<input type="submit"...>` (que se comporta como um botão) é usada para enviar os dados do formulário.
  * **Identificação:** Cada campo (input) deve ter um identificador único usando o atributo **`id`** para que possa ser referenciado no código JavaScript.



### 🔍 Referenciando Elementos HTML

Para que o JavaScript possa interagir e modificar um elemento HTML, ele precisa ser referenciado (localizado) no documento. Isso é feito usando os métodos da propriedade global `document`.

| Método | Finalidade | Sintaxe e Seletor |
| :--- | :--- | :--- |
| **`getElementById()`** | Referencia um elemento apenas pelo seu **`id`**. | `document.getElementById("idDoElemento")` |
| **`querySelector()`** | Método mais flexível que permite referenciar elementos por **`id`**, **`class`**, ou **`tagName`**. | `document.querySelector("#id")` ou `document.querySelector(".class")` ou `document.querySelector("tag")` |

> **Exemplo:**
>
> ```javascript
> const form = document.querySelector("form"); 
> const resp = document.getElementById("changeText");
> ```



### 👂 Introdução a Eventos e Funções

Programas web em JavaScript são amplamente baseados na ocorrência de **eventos**. Um evento é uma ação que ocorre na página (ex: clique, envio de formulário, modificação de campo).

  * **`addEventListener()`:** É o método usado para adicionar um **"ouvinte"** ao elemento, indicando qual evento ele deve escutar e qual **função** (conjunto de comandos) deve ser executada quando o evento ocorrer.

  * **Tipos de Eventos Comuns:** `submit`, `click`, `change`, `blur`, etc.

**Sintaxe de Evento:**

```javascript
frm.addEventListener('submit', (e) => {
    // Comandos a serem executados quando o formulário for submetido
});
```

#### 🛑 Prevenindo o Comportamento Padrão

  * **`preventDefault()`:** Por padrão, clicar no botão *submit* de um formulário recarrega a página, perdendo os dados e as respostas. O método **`e.preventDefault()`** (onde `e` é o objeto evento) é usado dentro da função de evento para **prevenir** esse comportamento padrão.

### 📄 Propriedades de Conteúdo e Manipulação

As seguintes propriedades são usadas para obter e alterar o conteúdo dos elementos HTML referenciados:

| Propriedade | Uso | Descrição |
| :--- | :--- | :--- |
| **`value`** | **Campos de Formulário** (`<input>`, `<textarea>`) | Obtém ou altera o conteúdo digitado em um campo de formulário. |
| **`innerText`** | **Qualquer Elemento** (Ex: `<p>`, `<h1>`) | Obtém ou altera o conteúdo de **texto** de um elemento. |
| **`innerHTML`** | **Qualquer Elemento** (Ex: `<div>`) | Obtém ou altera o conteúdo, **renderizando** comandos HTML que estejam dentro da string atribuída. |

> **Exemplo:**
>
> ```javascript
> const userName = frm.inName.value; // Obtém o dado digitado
> resp.innerText = `Olá, ${userName}!`; // Altera o texto de um elemento
> ```



### 🧮 Funções Matemáticas (`Math` Class)

A classe **`Math`** fornece métodos para realizar operações matemáticas.

| Método | Descrição | Exemplo |
| :--- | :--- | :--- |
| **`Math.abs(num)`** | Retorna o **valor absoluto** (positivo) de um número. | `Math.abs(-7)` $\rightarrow 7$ |
| **`Math.ceil(num)`** | Arredonda o valor para **cima**, para o próximo inteiro. | `Math.ceil(99.5)` $\rightarrow 100$ |
| **`Math.floor(num)`**| Arredonda o valor para **baixo**, retornando a parte inteira. | `Math.floor(50.8)` $\rightarrow 50$ |
| **`Math.pow(base, exp)`**| Retorna a **base elevada ao expoente**. | `Math.pow(3, 2)` $\rightarrow 9$ |
| **`Math.random()`** | Retorna um número **aleatório** entre $0$ (inclusivo) e $1$ (exclusivo). | $0.0 \leq \text{resultado} < 1.0$ |

---
### Cap 04

## ⚙️ Resumo do Estudo em JavaScript: Condições (Capítulo 04)

Este capítulo introduz as estruturas de controle de fluxo para que o programa possa tomar decisões e executar tarefas com base em condições.



### 1\. Estruturas Condicionais (`if` / `else`)

Os comandos **`if`** e **`else`** são a forma clássica de criar condições:

  * **`if` (Se):** Executa um bloco de comandos se a **`condição`** for avaliada como **verdadeira** (`true`).
    ```javascript
    if (condição) { comandos; }
    ```
  * **`else` (Senão):** Executa um bloco de comandos se a condição do `if` for **falsa** (`false`).
    ```javascript
    if (condição) { comandos_true; } else { comandos_false; }
    ```
  * **Múltiplas Condições (`else if`):** Permite verificar várias condições em sequência.
    ```javascript
    if (cond_1) { /* comandos 1 */ } 
    else if (cond_2) { /* comandos 2 */ } 
    else { /* comandos default */ }
    ```

> 💡 **Nota:** Se houver apenas um comando a ser executado dentro do bloco, o uso das chaves `{}` é opcional.



### 2\. Propriedade `checked`

Em elementos de formulário como **Radio Buttons** ou **Checkboxes**, a propriedade **`checked`** retorna um valor **booleano** (`true` ou `false`) indicando se o campo está **selecionado** (marcado).

**Exemplo:**

```javascript
const masculino = frm.inMasculino.checked; // Retorna true se o Radio Button 'inMasculino' estiver selecionado
if (masculino) {
    // comandos se for true
}
```



### 3\. Operador Ternário (`? :`)

O **operador ternário** é uma forma abreviada e concisa de escrever uma estrutura simples de `if...else` em uma única linha, geralmente usada para **atribuição de valor** a uma variável.

**Sintaxe:**

```javascript
const variavel = (condição) ? valor_se_verdadeiro : valor_se_falso;
```

**Exemplo:**

```javascript
const categoria = idade >= 18 ? "Adulto" : "Juvenil";
// Se (idade >= 18) for true, 'categoria' recebe "Adulto"; senão, recebe "Juvenil".
```
--------
### Cap 05
## 🔁 Resumo do Estudo em JavaScript: Estruturas de Repetição (Capítulo 05)

Este capítulo trata dos **laços (loops)**, que são estruturas de repetição que permitem executar o mesmo bloco de comandos múltiplas vezes.

### 1\. Laço `for` (Com Variável de Controle)

O comando **`for`** é ideal quando se sabe exatamente ou se pode predeterminar o número de repetições. Sua sintaxe é composta por três partes obrigatórias:

1.  **Inicialização:** O valor inicial da **variável de controle** (ex: `let i = 0`).
2.  **Condição:** A expressão que determina se a repetição deve **continuar** (enquanto for `true`).
3.  **Incremento/Decremento:** A modificação da variável de controle a cada ciclo (ex: `i++` ou `i--`).

**Sintaxe Básica:**

```javascript
for (let i = 0; i < limite; i++) {
    // Comandos que serão repetidos
}
```

> ⚠️ **Escopo:** A variável declarada com **`let`** dentro do `for` é uma **variável de bloco** e só existe enquanto o laço estiver ativo.

-----

### 2\. Laços `while` e `do...while` (Sem Variável de Controle Fixa)

Estes laços são geralmente utilizados quando **não se sabe previamente** quantas vezes o bloco será executado (por exemplo, quando a repetição depende da entrada do usuário).

#### a. Laço `while(condição)`

  * O teste condicional é realizado **no início** do laço.
  * Se a condição for `false` inicialmente, o bloco de comandos **nunca** será executado.

**Sintaxe:**

```javascript
while (condição) {
    // Comandos
}
```

#### b. Laço `do...while(condição)`

  * O teste condicional é realizado **no final** do laço.
  * Isso garante que o bloco de comandos seja executado **pelo menos uma vez**, independentemente do resultado da primeira avaliação da condição.

**Sintaxe:**

```javascript
do {
    // Comandos
} while (condição);
```


### 3\. Interrupções nos Laços (`break` e `continue`)

Existem comandos especiais para controlar o fluxo dentro dos laços de repetição:

  * **`break`:** Interrompe a execução do laço de repetição **imediatamente** e sai para o próximo comando após o laço.
  * **`continue`:** Interrompe apenas o ciclo atual do laço e **retorna ao início** para verificar a condição (ou ir para o incremento no caso do `for`).

-----

### 4\. Contadores e Acumuladores

São variáveis utilizadas dentro de laços para realizar totalizações ou contagens.

  * **Contador:** Variável que recebe ela mesma mais um **valor constante** (geralmente `1`).
    ```javascript
    let contador = 0;
    contador += 1; // ou contador++;
    ```
  * **Acumulador:** Variável que recebe ela mesma mais o valor de uma **outra variável** (que muda a cada ciclo).
    ```javascript
    let total = 0;
    let preco = 15.50; 
    total += preco; // Forma mais simples
    ```


### 5\. Métodos de String para Formatação (`padStart` e `padEnd`)

Esses métodos são usados para formatar strings, preenchendo-as com um caractere (padrão é espaço em branco) até atingir um comprimento total específico.

  * **`string.padEnd(tamanho, [caractere])`:** Preenche a string no **final** (à direita).
  * **`string.padStart(tamanho, [caractere])`:** Preenche a string no **início** (à esquerda).

**Exemplo:**

```javascript
let produto = "Arroz"; 
// Saída: "     Arroz" (preenche com espaços no início até ter 10 posições)
console.log(produto.padStart(10));
```

---
### Cap 06

## 🗄️ Resumo do Estudo em JavaScript: Vetores (Arrays) (Capítulo 06)

Vetores (ou **Arrays**) são estruturas de dados que armazenam uma **lista de dados** na memória. Cada item é acessado por um **índice numérico** que começa em **0**.

-----

### 1\. Criação e Acesso

Vetores são declarados usando colchetes `[]` ou o construtor `new Array()`.

  * **Declaração:**
    ```javascript
    const produtos = ['Arroz', 'Feijão', 'Suco'];
    // ou: const produtos = new Array();
    ```
  * **Acesso e Alteração:** Para acessar ou alterar um item, use o índice.
    ```javascript
    console.log(produtos[0]); // Saída: Arroz
    produtos[0] = "Ovo";       // Altera o item no índice 0
    ```
    > 📢 **Importante:** Vetores declarados com `const` podem ter seus elementos alterados, mas não podem ser reatribuídos a um novo vetor.

-----

### 2\. Manipulação de Itens

Métodos comuns para gerenciar a lista de elementos:

| Método | Ação | Posição |
| :--- | :--- | :--- |
| **`.push(item)`** | Adiciona um elemento | **Final** do vetor |
| **`.pop()`** | Remove o último elemento | **Final** do vetor |
| **`.unshift(item)`**| Adiciona um elemento | **Início** do vetor |
| **`.shift()`** | Remove o primeiro elemento | **Início** do vetor |

-----

### 3\. Tamanho e Exibição

  * **Tamanho (`.length`):** A propriedade `length` retorna o **número de elementos** contidos no vetor.
    ```javascript
    const tamanho = cidades.length; 
    ```
  * **Conversão para String:**
      * **`.toString()`:** Converte o vetor em uma string, separando os elementos por **vírgulas** (`,` ).
      * **`.join(separador)`:** Converte o vetor em uma string, usando o **caractere/string** especificado como separador.

-----

### 4\. Estruturas de Repetição em Arrays

Para percorrer todos os elementos de um vetor:

| Método | Descrição |
| :--- | :--- |
| **`for` tradicional** | Usa a variável de controle (`i`) e `length` para iteração. |
| **`for...of`** | Uma sintaxe mais limpa. A cada iteração, a variável recebe o **valor** do elemento. A variável pode ser declarada com `const`. |
| **`.forEach((valor, indice) => {...})`**| Percorre e executa uma função para cada elemento. Permite acesso ao `valor` e, opcionalmente, ao `indice` (`i`). **Não permite** o uso de `break` ou `continue`. |

-----

### 5\. Vetores de Objetos

É comum armazenar uma lista de **objetos** em um vetor, onde cada objeto possui atributos (propriedades).

```javascript
const carros = [];
carros.push({modelo: "Sandero", preco: 46500});
// Percorrendo:
for (const carro of carros) {
    console.log(`${carro.modelo} - R$: ${carro.preco}`);
}
```

-----

### 6\. Desestruturação (Destructuring)

A desestruturação é uma sintaxe que permite extrair valores de vetores ou propriedades de objetos em variáveis separadas de forma rápida e concisa.

  * **Desestruturação de Array:** Os nomes das variáveis são definidos pela **posição** no vetor.
    ```javascript
    const [a, b, c] = ["Ana", "Carlos", "Sofia"]; 
    console.log(a); // Ana
    ```
  * **Desestruturação de Objeto:** Os nomes das variáveis devem corresponder aos **nomes das propriedades** do objeto.
    ```javascript
    const carro = {modelo: "Palio", preco: 1500};
    const {modelo, preco} = carro; 
    console.log(modelo); // Palio
    ```

#### Operador Rest (`...`)

Usado na desestruturação para coletar os elementos **restantes** de um vetor e atribuí-los a um novo vetor. O operador **deve ser o último** na lista de variáveis.

```javascript
const [atender, proximo, ...outros] = ["Ana", "Carlos", "Sofia", "João"];
console.log(outros); // ["Sofia", "João"]
```

-----

### 7\. Pesquisa, Filtragem e Transformação

Os métodos **`map()`**, **`filter()`** e **`reduce()`** permitem manipulações de vetores de forma eficiente, criando novos arrays ou um valor único a partir dos dados existentes.

| Método | Função | Resultado |
| :--- | :--- | :--- |
| **`.map((item) => {...})`** | Aplica uma função a cada item. | Cria um **novo array** com o **mesmo tamanho** do original, com os valores transformados. |
| **`.filter((item) => condição)`**| Avalia uma condição booleana. | Cria um **novo array** contendo apenas os elementos para os quais a condição é **verdadeira** (`true`). |
| **`.reduce((acc, item) => {...}, valorInicial)`**| "Reduz" o array, aplicando uma função a um acumulador e cada elemento. | Retorna um **único valor** (soma, média, total de objetos, etc.). É necessário inicializar o acumulador (`acc`). |

-----

### 8\. Classificação (Ordenação)

  * **`.sort()`:** Classifica os itens do vetor **em ordem alfabética crescente** (usando comparação de string, o que pode falhar em números).
      * **Números:** Para ordenar números corretamente, use uma função de comparação:
        ```javascript
        numeros.sort((a, b) => a - b); // Ordem crescente
        ```
  * **`.reverse()`:** Inverte a ordem atual dos elementos de um vetor. Pode ser usado em conjunto com `sort()` para obter a ordem decrescente.

  ---
  ### Cap 07

  ## 📝 Resumo do Estudo em JavaScript: Manipulação de Strings (Capítulo 07)

Este capítulo aborda os métodos essenciais em JavaScript para manipular cadeias de caracteres (strings), permitindo a análise, formatação, busca e modificação de texto.

-----

### 1\. Acesso e Formatação de Caracteres

| Método | Função | Exemplo |
| :--- | :--- | :--- |
| **`.charAt(indice)`** | Retorna o caractere na **posição** (índice, começando em 0) especificada. | `"Olá".charAt(0)` $\rightarrow$ `"O"` |
| **`.toUpperCase()`** | Converte todos os caracteres da string para **maiúsculas**. | `"teste".toUpperCase()` $\rightarrow$ `"TESTE"` |
| **`.toLowerCase()`** | Converte todos os caracteres da string para **minúsculas**. | `"TESTE".toLowerCase()` $\rightarrow$ `"teste"` |

-----

### 2\. Cópia, Substring e Remoção de Espaços

  * **`.substr(posInicial, numCarac)`:** Retorna uma parte da string, começando na `posInicial` e copiando o `numCarac` especificado.

      * Se `numCarac` for omitido, copia até o final.
      * O parâmetro pode ser negativo para contar a partir do final.

    <!-- end list -->

    ```javascript
    const palavra = "Saladas";
    const copia1 = palavra.substr(2);    // -> "ladas"
    const copia2 = palavra.substr(2, 4); // -> "lada"
    ```

  * **Outros Métodos de Cópia:** **`.substring()`** e **`.slice()`** também podem ser usados para obter partes de uma string.

  * **`.trim()`:** Remove os **espaços em branco** extras no **início** e **fim** da string.

-----

### 3\. Localização de Conteúdo

Métodos para pesquisar a existência e a posição de um ou mais caracteres na string:

| Método | Função | Retorno |
| :--- | :--- | :--- |
| **`.indexOf(busca)`** | Retorna o **índice** da **primeira** ocorrência da string `busca`. | Retorna `-1` se não for encontrado. |
| **`.lastIndexOf(busca)`** | Retorna o **índice** da **última** ocorrência da string `busca`. | Retorna `-1` se não for encontrado. |
| **`.includes(busca)`** | Verifica se a string `busca` está contida na string. | Retorna um valor **booleano** (`true` ou `false`). |

-----

### 4\. Conversão de String para Vetor (`.split()`)

O método **`.split(separador)`** converte uma string em um **vetor (array)**, quebrando-a em elementos a cada ocorrência do caractere `separador` fornecido.

**Exemplo:**

```javascript
const sabores = "calabresa, 4 queijos, atum";
const partes = sabores.split(", "); 
// partes será: ["calabresa", "4 queijos", "atum"]
```

-----

### 5\. Pesquisa com Expressões Regulares (`.match()`)

O método **`.match()`** usa **Expressões Regulares (Regex)** para pesquisar padrões complexos dentro de uma string (como letras maiúsculas, números, símbolos, etc.).

  * **Sintaxe Básica:** `palavra.match(/padrão/g)`
      * `/padrão/` define o que buscar.
      * A opção `g` (global) é usada para retornar **todas** as ocorrências.
  * **Retorno:** Um **vetor** contendo as ocorrências encontradas ou `null` se nada for encontrado.

| Padrão Regex (Exemplos) | Significado |
| :--- | :--- |
| `/[a-z]/g` | Letras minúsculas |
| `/[A-Z]/g` | Letras maiúsculas |
| `/[0-9]/g` | Dígitos (números) |
| `/\\W|_/g` | Símbolos (caracteres não alfanuméricos) e o *underline* (`_`). |

-----

### 6\. Substituição de Caracteres (`.replace()`)

O método **`.replace(busca, substituto)`** é usado para substituir um caractere ou conjunto de caracteres em uma string.

  * **Padrão:** Por padrão, substitui apenas a **primeira** ocorrência.
  * **Substituição Global:** Para substituir **todas** as ocorrências, deve-se usar uma **Expressão Regular** com a opção `g` (global).
  * **Imutabilidade:** A string original **não é alterada**; o método retorna uma **nova string** com as substituições.

**Exemplos:**

```javascript
const senha = "ABACAD";
const senha1 = senha.replace("A", "X");    // -> "XBACAD" (Apenas o primeiro "A" é trocado)
const senha2 = senha.replace(/A/g, "X"); // -> "XBXCXD" (Todos os "A" são trocados)
```
