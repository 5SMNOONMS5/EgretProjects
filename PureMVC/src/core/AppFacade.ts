namespace core {

	export class AppFacade extends puremvc.Facade implements puremvc.IFacade {
		/**
		  * The View primarily caches named references to Mediators, which adapt and
		  *	steward the View Components that make up the user interface. 
		  */
		public static view: core.AppView;

		/**
		  * The Model caches named references to Proxies, which expose an API for
		  * manipulating the Data Model (including data retrieved from remote services). 
		  */
		public static model: core.AppModel;

		/** 
		  * The Controller maintains named mappings to Command classes, which are
		  * stateless, and only created when needed. 
		  */
		public static controller: core.AppController;

		public constructor() {
			super();
		}

		public static getInstance(): AppFacade {
			if (this.instance == null) {
				this.instance = new AppFacade();
			}
			return this.instance as AppFacade;
		}

		/******************************************************************************************************
		*
		* init
		*
		*****************************************************************************************************/

		public initializeFacade(): void {
			this.initializeView();
			this.initializeModel();
			this.initializeController();
		}

		public initializeController(): void {
			if (this.controller != null) {
				return;
			}
			this.controller = core.AppController.getInstance();
			this.controller.registerCommand(constants.START_APP, core.controller.StartupCommand);
		}

		public initializeModel(): void {
			if (this.model != null) {
				return;
			}
			this.model = core.AppModel.getInstance();
		}

		public initializeView(): void {
			if (this.view != null) {
				return;
			}
			this.view = core.AppView.getInstance();
		}

		/**
			* 開始整個 app
			*/		
		public start(): void {
			this.sendNotification(constants.START_APP);
			this.removeCommand(constants.START_APP);
		}
	}
}


