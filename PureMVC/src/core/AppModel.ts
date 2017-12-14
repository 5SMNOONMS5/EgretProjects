// TypeScript file

namespace core {
	export class AppModel extends puremvc.Model implements puremvc.IModel {

		public constructor() {
			super();
		}

		public static getInstance(): AppModel {
			if (this.instance == null) {
				this.instance = new AppModel();
			}
			return this.instance as AppModel;
		}

		public initializeModel(): void {
			super.initializeModel();
		}
	}
}