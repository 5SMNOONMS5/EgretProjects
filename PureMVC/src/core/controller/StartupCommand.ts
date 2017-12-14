



/**
  *  The MacroCommand class allows you to execute multiple
  * 'subcommands' sequentially, each being created and passed the
  *  original Notification on its execute method. 
  */
namespace core.controller {

	export class StartupCommand extends puremvc.MacroCommand {

		public constructor() {
			super();
		}
		
		public initializeMacroCommand(): void {
			this.addSubCommand(core.controller.ControllerPrepCommand);
			this.addSubCommand(core.controller.ModelPrepCommand);
			this.addSubCommand(core.controller.ViewPrepCommand);
		}
	}
}