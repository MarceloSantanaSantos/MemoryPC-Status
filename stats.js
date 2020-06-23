// Importar o módulo 'os'
const os = require('os');

// Definir a repetição do loop (arrow function = () => {}, tempo de atualização)
setInterval(() => {
    // Extrair as funções de 'os'
    const {freemem, totalmem} = os

    // Obter o valor de cada unidade (function)
    const total = parseInt(totalmem() /1024 /1024)
    const mem = parseInt(freemem() / 1024 / 1024)
    const percents = parseInt((mem / total) * 100)

    // Incluir as unidades (functions) em um objeto
    const stats = {
        mem: `${mem} MB`,
        total: `${total} MB`,
        usage: `${percents}%`,
    }

    // Exibir os valores obtidos de 'stats' em formato de table
    console.clear()
    console.log("====== PC Status ======")
    console.table(stats)

}, 1000)