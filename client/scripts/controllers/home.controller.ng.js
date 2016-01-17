(function(){
  angular.module('app').controller('HomeCtrl', HomeCtrl);

  //HomeCtrl.$inject = ['$meteor'];

  function HomeCtrl($scope, $meteor, $reactive){
    $reactive(this).attach($scope);
    var vm = this;

    vm.tweet = "your tweet message";
    vm.facebookUrl = "//yourpath.meteor.com/";

    this.helpers({
      isLoggedIn () {
        return Meteor.userId() !== null;
      },
      currentUser2 () {
        return Meteor.user();
      }
    });
  }
})();