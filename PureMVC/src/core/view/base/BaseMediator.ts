// TypeScript file



/**
  * 面板 mediator 的 base
  */
namespace core.view.base {

    export abstract class Mediator extends puremvc.Mediator implements puremvc.IMediator {

        /**
          * 讀取頁面
          */
        private _progressUI: core.view.ProgressUI;

        public constructor(mediatorName: string = "", viewComponent: Object = null) {
            super(mediatorName, viewComponent);
        }

        /**
        * 添加面板方法，裡面會依序實作 onCreateUI 跟 onCreateData 還有 onAddUI 的方法
        */
        public showUI(): void {
            this.showProgressUI();
            this.onCreateUI();
            this.onCreateData();
            this.onAddUI();
        }
        /**
          * progressUI show
          */
        public showProgressUI() {
            this._progressUI = new core.view.ProgressUI();
        }

        /**
          * progressUI hidden
          */
        public hiddenProgressUI() {
            if (this._progressUI != undefined) {
                this._progressUI = null;
            }
        }

        /**
        * 場景切換
        * @param notifyName {string} 當前需要打開哪個新頁面
        * @param notifyBody {string} 推播附帶的參數
        * @param animationType  {number} 0：没有动画 1:
        */
        public navigateLayer(notifyName: string, notifyBody: string = "", animationType: number = 0): void {
            core.view.GameLayerManager.getInstance().popLayer().catch((errorMsg) => {
                helper.logError(errorMsg);
            }).then((isSuccess) => {
                AppFacade.getInstance().sendNotification(notifyName, notifyBody);
                this.onDestroy();
            });
        }

        /******************************************************************************************************
        *
        * abstract methods
        *
        *****************************************************************************************************/

        /**
         * 初始化面板ui
         */
        abstract onCreateUI()
        /**
         * 初始化面板数据
         */
        abstract onCreateData();
        /**
        * 把需要呈現的 view 加上去 
        */
        abstract onAddUI();
        /**
         * 面板关闭后需要销毁的对象
         */
        abstract onDestroy();
    }
}