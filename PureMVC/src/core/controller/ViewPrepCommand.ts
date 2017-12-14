

/**
  * The SimpleCommand class merely has an execute method which is
  * called with the Notification object
  */
namespace core.controller {

	export class ViewPrepCommand extends puremvc.SimpleCommand implements puremvc.ICommand {

		public constructor() {
			super();
		}
		
		public execute(notification: puremvc.INotification): void {

		}
	}
}