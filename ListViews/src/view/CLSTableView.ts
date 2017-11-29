// TypeScript file


namespace view {

    export class CLSTableView extends eui.Component {

        public mList: eui.List;

        private _isCompleteLoadSkin: boolean = false;

        public constructor() {
            super();
            this.addEventListener(eui.UIEvent.COMPLETE, this.omComplete, this);
            this.skinName = "skins.CLSTableViewSkin";
                  console.log("constructor");
        }

        public refresh(sender: model.CLSTableViewData[]) {

            this.mList.$setDataProvider(new eui.ArrayCollection(sender));
            this.mList.dataProviderRefreshed();
        }

        /******************************************************************************************************
        *
        * Private method
        * 
        *****************************************************************************************************/

        private omComplete(): void {

            console.log("omComplete");
            
            this._isCompleteLoadSkin = true;
            this.removeEventListener(eui.UIEvent.COMPLETE, this.omComplete, this);
        }
    }
}
