receta.controller('todocontroller',function($scope){
	$scope.title="Employee Details";
  $scope.x1 = "THIS IS AN test app";
  $scope.x2 = angular.lowercase($scope.x1);
  $scope.x3 = angular.uppercase($scope.x1);
  $scope.x4 = angular.isString($scope.x1);
  $scope.x5 = angular.isNumber($scope.x1);
  $scope.contact_details=[{name:"Ram",email:"ram@abc.com",phno:"7346379478",age:"28",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},
         {name:"Shyam",email:"shyam@abc.com",phno:"878648465934",age:"26",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},
         {name:"Rohan",email:"rohan@abc.com",phno:"24466756567",age:"30",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},
         {name:"Nikita",email:"nikita@abc.com",phno:"657264564",age:"40",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}];


$scope.IsVisible = false;
  $scope.createuser = function () {
  $scope.IsVisible = !$scope.IsVisible;
}

$scope.submit=function(){
  $scope.contact_details.push({'name':$scope.uname, 'email':$scope.email,'phno':$scope.phno,'age':$scope.age,'info':$scope.info});
  $scope.uname='';
  $scope.email='';
  $scope.phno='';
  $scope.age='';
  $scope.info='';

  $scope.IsVisible=false;
}

$scope.deletevalue=function(x){
  $scope.contact_details.splice(x,1);
}
});
