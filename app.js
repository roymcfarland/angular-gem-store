(function(){
	var gems = [
	{
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quibusdam atque iure maiores, hic magni obcaecati quos minima doloremque blanditiis mollitia molestias nihil, nam ratione debitis. Porro explicabo eum soluta.',
		canPurchase: true,
		soldOut: false
	},
	{
		name: 'Pentagonal Gem',
		price: 5.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate fugit vero libero odit aliquam impedit omnis consectetur fugiat voluptas ab maxime ducimus hic aliquid ut non optio pariatur, temporibus rerum.',
		canPurchase: true,
		soldOut: false
	}
	];

	var app = angular.module('store', [ ]);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1;
		
		this.selectTab = function(setTab){
			this.tab = setTab || 0;
		};

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

})();