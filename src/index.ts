import chalk from "chalk";
// https://www.npmjs.com/package/chalk
const log = console.log;
log(chalk.blue('Hello') + ' World' + chalk.red('!!!!!!!!'));


import { Command, Option } from 'commander';
const program = new Command();

// https://www.npmjs.com/package/commander

program.addOption(new Option('-s, --secret').hideHelp())
	.addOption(new Option('-t, --timeout <delay>', 'timeout in seconds').default(60, 'one minute'))
	.addOption(new Option('-d, --drink <size>', 'drink size').choices(['small', 'medium', 'large']))
	.addOption(new Option('-p, --port <number>', 'port number').env('PORT'))
	.addOption(new Option('--donate [amount]', 'optional donation in dollars').preset('20').argParser(Number))
	.addOption(new Option('--disable-server', 'disables the server').conflicts('port'))
	.addOption(new Option('--free-drink', 'small drink included free ').implies({ drink: 'small' }));

program.parse();

const options = program.opts();
log(`Donate: ${options.donate}`);
