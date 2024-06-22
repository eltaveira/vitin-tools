# vitin-tools

`vitin-tools` é uma biblioteca utilitária para Node.js, escrita em TypeScript, que fornece funções para gerar IDs únicos, pausar a execução, manipular logs e strings, entre outras.

## Instalação

Para instalar a biblioteca, use npm:

```sh
npm install vitin-tools
```

## Importação

Importe as funções que você precisa:

```ts
import { 
  getDateTimeNow, 
  getPartOfUuid, 
  getUniqueId, 
  pause, 
  writeToLog, 
  unsafeStringfy, 
  safeStringfy, 
  getSizeOfString 
} from 'vitin-tools';
```

## Funções

### `getDateTimeNow(): string`

Retorna a data e hora atual no formato `YYYY-MM-DD_HHMMSSmmm`.

**Exemplo de uso:**

```ts
const dateTimeNow = getDateTimeNow();
console.log(dateTimeNow); // Exemplo de saída: 2024-06-22_153045123
```

### `getPartOfUuid(): string`

Gera uma parte de um UUID (Universally Unique Identifier).

**Exemplo de uso:**

```ts
const partOfUuid = getPartOfUuid();
console.log(partOfUuid); // Exemplo de saída: 'a1b2c3d4'
```

### `getUniqueId(): string`

Gera um ID único combinando a data e hora atual com uma parte de um UUID.

**Exemplo de uso:**

```ts
const uniqueId = getUniqueId();
console.log(uniqueId); // Exemplo de saída: 2024-06-22_153045123_a1b2c3d4
```

### `pause(baseMs: number): Promise<void>`

Pausa a execução por um período aleatório de tempo, baseado em um valor base.

**Parâmetros:**
- `baseMs` (number): O tempo base em milissegundos.

**Exemplo de uso:**

```ts
await pause(1000);
console.log('A pausa terminou.');
```

### `writeToLog(fileName: string, ext: string, content = ''): void`

Escreve uma mensagem em um arquivo de log, com nome gerado a partir da data e hora atual, uma parte de um UUID e o nome do arquivo especificado.

**Parâmetros:**
- `fileName` (string): O nome base do arquivo de log.
- `ext` (string): A extensão do arquivo de log.
- `content` (string, opcional): O conteúdo a ser escrito no log.

**Exemplo de uso:**

```ts
writeToLog('error', 'txt', 'Ocorreu um erro.');
```

### `unsafeStringfy(obj: unknown): string`

Converte um objeto para uma string JSON sem capturar exceções.

**Parâmetros:**
- `obj` (unknown): O objeto a ser convertido.

**Exemplo de uso:**

```ts
const jsonString = unsafeStringfy({ key: 'value' });
console.log(jsonString); // Exemplo de saída: '{"key":"value"}'
```

### `safeStringfy(obj: unknown): string | null`

Converte um objeto para uma string JSON, retornando `null` se ocorrer uma exceção.

**Parâmetros:**
- `obj` (unknown): O objeto a ser convertido.

**Exemplo de uso:**

```ts
const jsonString = safeStringfy({ key: 'value' });
console.log(jsonString); // Exemplo de saída: '{"key":"value"}'
```

### `getSizeOfString(str: string): number`

Retorna o tamanho de uma string em bytes.

**Parâmetros:**
- `str` (string): A string cujo tamanho será calculado.

**Exemplo de uso:**

```ts
const size = getSizeOfString('Hello, world!');
console.log(size); // Exemplo de saída: 13
```

## Contribuição

Sinta-se à vontade para contribuir com este projeto abrindo issues ou pull requests no [repositório do GitHub](https://github.com/seu-usuario/vitin-tools).

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.