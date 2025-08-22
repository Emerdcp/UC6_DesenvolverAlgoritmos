const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetMirrored
	];
};
self.C3_JsPropNameTable = [
	{Plataforma: 0},
	{personagem: 0},
	{chao: 0},
	{Sólido: 0},
	{chaoNovo: 0},
	{chaoNovo2: 0},
	{tubo: 0},
	{caixaSupresa: 0},
	{caixa: 0},
	{fundo: 0},
	{Teclado: 0},
	{mario: 0}
];

self.InstanceType = {
	personagem: class extends self.ISpriteInstance {},
	chao: class extends self.ISpriteInstance {},
	chaoNovo: class extends self.ISpriteInstance {},
	chaoNovo2: class extends self.ISpriteInstance {},
	tubo: class extends self.ISpriteInstance {},
	caixaSupresa: class extends self.ISpriteInstance {},
	caixa: class extends self.ISpriteInstance {},
	fundo: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	mario: class extends self.ISpriteInstance {}
}