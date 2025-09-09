type Doc = {
    titulo: string
    texto: string
    data?: Date
}

const documento: Doc = {
    titulo: 'O título',
    texto: 'O texto',
    data: new Date(),
}

console.log(documento.data?.toDateString() ?? 'Não existe data.')
