// TypeScript file

namespace core.view {

    export class HallMediator extends core.view.base.Mediator {

        public constructor() {
            super("");
        }

        public listNotificationInterests(): Array<any> {
            return [
             
            ];
        }

        public handleNotification(notification: puremvc.INotification): void { 


        }

        /******************************************************************************************************
        *
        * Abstract methods
        *
        *****************************************************************************************************/

        public onCreateUI(): void {
        }

        public onCreateData(): void {

        }

        public onAddUI(): void {
            GameLayerManager.getInstance().pushLayer().then((mainLayer) => {
            });
           
        }

        public onDestroy(): void {

        }
    }
}