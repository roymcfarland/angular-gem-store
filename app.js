(function(){
	var gems = [
	{
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quibusdam atque iure maiores, hic magni obcaecati quos minima doloremque blanditiis mollitia molestias nihil, nam ratione debitis. Porro explicabo eum soluta.',
		canPurchase: true,
		soldOut: false,
		reviews: [
			{
				stars: 5,
				body: 'I love this product.',
				author: 'linda@lover.com',
			},
			{
				stars: 1,
				body: 'I hate this product.',
				author: 'rick@hater.com',
			}
		]
	},
	{
		name: 'Pentagonal Gem',
		price: 5.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate fugit vero libero odit aliquam impedit omnis consectetur fugiat voluptas ab maxime ducimus hic aliquid ut non optio pariatur, temporibus rerum.',
		canPurchase: true,
		soldOut: false
	},
	{
		name: 'Diamond',
		price: 1000000,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores sit eveniet excepturi quisquam in dolores ducimus hic dolore at cupiditate pariatur, atque consectetur et, quis itaque eius necessitatibus! Itaque, ab.',
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

	app.controller('ReviewController', function(){
		this.review = {};
		this.addReview = function(product) {
			// this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	app.directive('productTitle', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-title.html'
		};
	});

	app.directive("productSpecs", function() {
	  return {
	    restrict:"A",
	    templateUrl: "product-specs.html"
	  };
	});





})();