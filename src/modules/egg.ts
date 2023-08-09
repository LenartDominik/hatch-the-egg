export enum EggState {
	Egg = 'egg',
	Tamagtochi = 'tamagotchi',
}

interface EggParams {
	clicksToHatch: number;
	onEggHatch: () => void;
}

export class Egg {
	eggClicks: number = 0;
	assets = new Map([
		[EggState.Egg, 'assets/egg.svg'],
		[EggState.Tamagtochi, 'assets/tamagotchi.svg'],
	]);
}
