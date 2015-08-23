var demoApp= angular.module('demoApp',[]);


demoApp.config(function ($routeProvider){

	$routeProvider
			.when('/view1',
					{
							controller: 'simpleController',
							templateUrl: 'Partials/view1.html'
					})
			.when('/view2',
					{
							controller: 'simpleController',
							templateUrl: 'Partials/view2.html'
					})
			.otherwise({ redirectTo: '/view1'});

});


demoApp.controller('simpleController', function($scope){
	$scope.customers=[
	{name:'Jone', city:'Barklay'},
	{name:'jane', city:'newtwn'},
	{name:'mark', city:'sent.brg'}
	];

	$scope.addCustomer = function (){
		$scope.customer.push(
			{
					name: $scope.newCustomer.name,
					city: $scope.newCustomer.city
			});
	};
});






/*var controllers = {};

controllers.simpleController = function($scope){
	$scope.customers=[
	{name:'Jone', city:'Barklay'},
	{name:'jane', city:'newtwn'},
	{name:'mark', city:'sent.brg'}
	];
};

demoApp.controller(controllers);*/



/*newctrl.config('defaultConfig', function($routeProvider)){
	$routeProvider
		.when('/',
			{
				controller: 'dataController',
				templateUrl: 'index.html'
			})
		.when('/secondView',
			{
				controller: 'dataController',
				templateUrl: 'Views/Home.html'
			})
		.otherwise({ redirectTo: '/'});
}*/
