angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.dadosPessoais', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/dadosPessoais.html',
        controller: 'dadosPessoaisCtrl'
      }
    }
  })

  .state('tabsController.cadastro', {
    url: '/page10',
    views: {
      'tab1': {
        templateUrl: 'templates/cadastro.html',
        controller: 'cadastroCtrl'
      }
    }
  })

  .state('tabsController.reservarVagas', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/reservarVagas.html',
        controller: 'reservarVagasCtrl'
      }
    }
  })

  .state('tabsController.minhasReservas', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/minhasReservas.html',
        controller: 'minhasReservasCtrl'
      }
    }
  })

  .state('opEsDeCadastro', {
    url: '/page11',
    templateUrl: 'templates/opEsDeCadastro.html',
    controller: 'opEsDeCadastroCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.cadastrarVeCulos', {
    url: '/page7',
    views: {
      'tab1': {
        templateUrl: 'templates/cadastrarVeCulos.html',
        controller: 'cadastrarVeCulosCtrl'
      }
    }
  })

  .state('tabsController.selecionarVeCulos', {
    url: '/page8',
    views: {
      'tab2': {
        templateUrl: 'templates/selecionarVeCulos.html',
        controller: 'selecionarVeCulosCtrl'
      }
    }
  })

  .state('sobreNS', {
    url: '/page9',
    templateUrl: 'templates/sobreNS.html',
    controller: 'sobreNSCtrl'
  })

  .state('tabsController.reserva1', {
    url: '/page12',
    views: {
      'tab3': {
        templateUrl: 'templates/reserva1.html',
        controller: 'reserva1Ctrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page3')


});