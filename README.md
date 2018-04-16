# Auxiliadores

## waitForElement

Essa função serve para auxiliar nos desenvolvimentos, principalmente de teste A/B, onde temos que esperar um elemento existir, ou ter algum valor, para então executar algo.

### Como usar
- Como primeiro parâmetro recebe a condição para que o setInterval seja finalizado e dispare o callback, podendo passar uma função com retorno de um valor boleano, ou uma string que será adicionado dentro de um seletor e irá usar a quantidade de elementos para retornar um booleano "document.querySelectorAll('condicao').length".

- Como segundo parâmetro recebe a condição do callback que será executado a partir do momento que a primeira condição seja verdadeira.
  
- Como terceiro parâmetro, esse parâmetro diferente dos outros dois não é obrigatório, irá receber uma quantidade de tempo em milesegundos para que o intervalo após o callback possa ser finalizado, por default ele irá verificar até o elemento existir por 10000, ou seja 10s, caso ainda sim o elemento não exista ele será finalizado.

#### Exemplo de como usar.
##### Passando uma string como parâmetro:
```javascript
	waitForElement('body', function(){
		// código.
	})
```
##### Passando uma função como parâmetro:
```javascript
	waitForElement(() => document.querySelector('.text').innerHTML === 'text', function(){
		// código
	})
```

##### Passando um valor maior que dez segundos para verificar se a string 'text' dentro da classe '.text' é verdadeira:
```javascript
	waitForElement(() => document.querySelector('.text').innerHTML === 'text', function(){
		// código
	}, 20000)
````