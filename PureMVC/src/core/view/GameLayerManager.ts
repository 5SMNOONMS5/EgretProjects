/**
  * 游戏容器类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved. 
  * EgerPro显示对象层级
  * Main-GameScene（sceneLayer、mainLayer、popLayer、effectLayer、maskLayer、loadLayer）
  * 
  */
namespace core.view {

    export class GameLayerManager extends eui.UILayer {

        // 场景层 如 战场、主城、副本战场之类的
        public sceneLayer: eui.UILayer = new eui.UILayer();
        // 主UI层 如 底部功能栏
        public mainLayer: eui.UILayer = new eui.UILayer();
        // 弹窗层 如 设置、背包、装备之类的
        public panelLayer: eui.UILayer = new eui.UILayer();
        // 特效层 如 闪烁、飘字之类的
        public effectLayer: eui.UILayer = new eui.UILayer();
        // 通讯遮罩层 和服务器通讯UI
        public maskLayer: eui.UILayer = new eui.UILayer();
        // 加载遮罩层 场景切换的时候加载资源UI
        public loadLayer: eui.UILayer = new eui.UILayer();

        private static _instance: GameLayerManager;

        // 构造方法
        public constructor() {
            super();
            this.init();
        }
        
        // 游戏容器管理器单例
        public static getInstance(): GameLayerManager {
            if (!this._instance) {
                this._instance = new GameLayerManager();
            }
            return this._instance;
        }

        /**
         * 增加層級
         * @returns {eui.UILayer} 返回當前 layer 給予添加
         */
        public pushLayer(): Promise<eui.UILayer> {
            return new Promise((resolve) => {
                return (resolve(this.mainLayer));
            });
        }

        /**
          * 刪除層級
          * 幾個層級 {number} 
          * @returns {Promise<any>} 是否成功 remove，如果不成功就返回錯誤訊息
          */
        public popLayer(layer: number = 1): Promise<any> {
             if (this.mainLayer.numChildren <= 0 && this.mainLayer.numChildren <= layer) {
                return new Promise((reject) => {
                    return reject(constants.error.EMPTY_LAYER);
                });
             } else {
                 for (var index = 0; index < layer; index++) {
                    this.mainLayer.removeChildAt(this.mainLayer.numChildren - 1);
                }
                return new Promise((resolve) => {
                    return resolve(true);
                });
             }
        }


        /******************************************************************************************************
        *
        * Private
        *
        *****************************************************************************************************/

        // 初始化场景类
        private init(): void {
            this.touchThrough = true;
            this.sceneLayer.touchThrough = true;
            this.mainLayer.touchThrough = true;
            this.panelLayer.touchThrough = true;
            this.effectLayer.touchThrough = true;
            this.maskLayer.touchThrough = true;
            this.loadLayer.touchThrough = true;
            this.addChild(this.sceneLayer);
            this.addChild(this.mainLayer);
            this.addChild(this.panelLayer);
            this.addChild(this.effectLayer);
            this.addChild(this.maskLayer);
            this.addChild(this.loadLayer);
        }
    }
}




