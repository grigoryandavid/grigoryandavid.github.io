angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.home', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.schematics', {
    url: '/sch',
    views: {
      'tab2': {
        templateUrl: 'templates/schematics.html',
        controller: 'schematicsCtrl'
      }
    }
  })

  .state('page4', {
    url: '/page4',
    templateUrl: 'templates/page4.html',
    controller: 'page4Ctrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.resistors', {
    url: '/resistors',
    views: {
      'tab1': {
        templateUrl: 'templates/resistors.html',
        controller: 'resistorsCtrl'
      }
    }
  })

  .state('tabsController.resistorColourCode', {
    url: '/colour code ',
    views: {
      'tab1': {
        templateUrl: 'templates/resistorColourCode.html',
        controller: 'resistorColourCodeCtrl'
      }
    }
  })

  .state('tabsController.capacitors', {
    url: '/caps',
    views: {
      'tab1': {
        templateUrl: 'templates/capacitors.html',
        controller: 'capacitorsCtrl'
      }
    }
  })

  .state('tabsController.capacitorColourCode', {
    url: '/capcolor',
    views: {
      'tab1': {
        templateUrl: 'templates/capacitorColourCode.html',
        controller: 'capacitorColourCodeCtrl'
      }
    }
  })

  .state('calculator', {
    url: '/calculator',
    templateUrl: 'templates/calculator.html',
    controller: 'calculatorCtrl'
  })

  .state('tabsController.diodes', {
    url: '/diodes ',
    views: {
      'tab1': {
        templateUrl: 'templates/diodes.html',
        controller: 'diodesCtrl'
      }
    }
  })

  .state('tabsController.transistors', {
    url: '/transistors ',
    views: {
      'tab1': {
        templateUrl: 'templates/transistors.html',
        controller: 'transistorsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/home')


});