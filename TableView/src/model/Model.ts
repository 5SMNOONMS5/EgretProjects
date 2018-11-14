// TypeScript file



interface TableViewDataInterface {
    text: string;
    textColor: number;
    textBackGround: number;
}

namespace model {

    export class TableViewData implements TableViewDataInterface {
        // export class TableViewData  {
        public text: string;
        public textColor: number;
        public textBackGround: number;

        constructor(text: string, textColor: number, textBackGround: number) {
            this.text = text;
            this.textColor = textColor;
            this.textBackGround = textBackGround;
        }
    }
}
