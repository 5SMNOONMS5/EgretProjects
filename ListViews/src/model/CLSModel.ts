// TypeScript file



interface TableViewDataInterface {
    text: string;
    textColor: number;
    textBackGround: number;
}

namespace model {

    export class CLSTableViewData implements TableViewDataInterface {
        text: string;
        textColor: number;
        textBackGround: number;

        constructor(text: string, textColor: number, textBackGround: number) {
            this.text = text;
            this.textColor = textColor;
            this.textBackGround = textBackGround;
        }
    }
}
