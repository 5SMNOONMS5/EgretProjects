// TypeScript file

namespace core {

	export class AppView extends puremvc.View implements puremvc.IView {

		public constructor() {
			super();
		}

		public static getInstance(): AppView {
			if (this.instance == null) {
				this.instance = new AppView();
			}
			return this.instance as AppView;
		}

		public initializeView(): void {
			super.initializeView();
		}
	}
}