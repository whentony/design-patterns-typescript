class parserHTML{
    private filePath: string;
    private htmlBuffer: string;

    constructor(filePath: string) {
        this.filePath = filePath;
        this.htmlBuffer = '';
    }

    public getHMLTFileFromPath() {
        console.log( `Pegando o arquivo HTML ${this.filePath} do caminho indicado`);

        return this;
    }

    public parseHTMl() {
        console.log(`Parseando o arquivo HTML ${this.filePath}`);

        return this.htmlBuffer;
    }
}

class HTMLtoPDFConverter{
    private htmlBuffer: string;

    constructor(htmlBuffer: string) {
        this.htmlBuffer = htmlBuffer;
    }

    public convert() {
        console.log("Arquivo convertido com sucesso!")
        return this.htmlBuffer;
    }
} 

class ConverterFacade {
    public convert(htmlPath: string) {
        const parseHTMl = new parserHTML(htmlPath);
        const htmlBuffer = parseHTMl
        .getHMLTFileFromPath()
        .parseHTMl();

        const htmltoPDFConverter = new HTMLtoPDFConverter(htmlBuffer);

        return htmltoPDFConverter.convert()

    }
}

function clientCode() {
    const converter = new ConverterFacade();

    converter.convert("/users/me/file.html");
}

clientCode()