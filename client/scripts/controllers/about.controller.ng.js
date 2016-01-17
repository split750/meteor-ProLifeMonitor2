(function(){
  angular.module('app').controller('AboutCtrl', AboutCtrl);

  //AboutCtrl.$inject = ['$meteor'];

  function AboutCtrl($scope, $meteor, $state, $reactive){
  	$reactive(this).attach($scope);

  	this.subscribe("userData");

  	this.helpers({
	    user() {
	      return Meteor.user();
	    }
	});

	$scope.updateProfil = function (profile) {
		$scope.isSubmitting = true;
	    Meteor.call('updateProfil', profile, function(error, result){
		  if(error){
		    console.log(error.reason);
		    return;
		  }

		});
		$scope.isSubmitting = false;
		$state.go('home');
	};

  }
})();