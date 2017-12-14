// TypeScript file


namespace core {
	/**
	  * The AppController class is implemented as a Singleton that maintains a
	  *	mapping between Notification names and Command class references. 
	  */
	export class AppController extends puremvc.Controller implements puremvc.IController {

		public constructor() {
			super();
		}

		public static getInstance(): AppController {
			if (this.instance == null) {
				this.instance = new AppController();
			}
			return this.instance as AppController;
		}

		public initializeController(): void {
			super.initializeController();
		}
	}
}