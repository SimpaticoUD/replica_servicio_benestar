// Citizenpedia Core Client (ctz-core.js)
//-----------------------------------------------------------------------------
// This JavaScript contains the client side of the Citizenpedia component 
// related to Questions and Answers features. The main functionality is to 
// create the calls to the server side of the Citizenpedia instance
// - Used by ctz-ui.js
// - The Citizenpedia server side code is available in:
//              https://github.com/SIMPATICOProject/Citizenpedia
//-----------------------------------------------------------------------------

var qaeCORE = (function () {
  var instance;
  function Singleton () {

    // Variables to store the used API and URL paths
    var createQuestionURL = '';
    var showQuestionURL = '';
    var getQuestionsAPI = '';
    var getDiagramAPI = '';
    var getTermsAPI = '';

    // In inits the main used variables
    // In this case it generates the used API and URL paths
    // An object with an endpoint 
    function initComponent(parameters) {
      createQuestionURL = parameters.endpoint + '/questions/create';
      showQuestionURL = parameters.endpoint + '/questions/show';
      getQuestionsAPI = parameters.endpoint + '/api/qae/questions';
      //getDiagramAPI = parameters.endpoint + '/api/diagram/eService';
      //getDiagramAPI = 'https://simpatico.business-engineering.it/cpd/api/diagram/eService';
      getDiagramAPI = 'https://simpatico.morelab.deusto.es/replica_servicio_benestar/';
      getTermsAPI = parameters.endpoint + '/api/terms';
      
    }

    // Get questions from Citizenpedia related to a paragraphName.
    // It needs the eservice code and the paragraph or sentence id
    // - serviceID: the id corresponding to the e-service
    function getQuestions(serviceID, paragraphName, questionsCallback) {
      console.log(">>>>getQuestions");
      jQuery.getJSON(getQuestionsAPI + '/' + serviceID + '/' + paragraphName,
        function(jsonResponse) {
          questionsCallback(paragraphName, jsonResponse);
        }
      );
    }

    function getTermDescription (term, paragraph, termsCallback)
    {
      
      var termToSearch = document.getElementById(term).innerHTML;
      termToSearch = termToSearch.replace("(","");
      termToSearch = termToSearch.replace(")","");

      jQuery.getJSON(getTermsAPI + "/" + termToSearch, 
       function (jsonResponse) {
         termsCallback(jsonResponse[0].content, paragraph);
        }
       );


    }

    // It creates an URL which can be used to redirect to the details of the 
    // question passed as parameter
    function createQuestionDetailsURL(questionID) {
      return showQuestionURL + '/' + questionID;
    }

    // It creates an URL which can be used to redirect and create a question
    // related to the info. passed as parameters
    // - category: the general category of the e-service
    // - serviceID: the id corresponding to the e-service
    // - paragraphID: the id of the paragraph which is the question about
    // - text: the text contained by the paragraph
    function createNewQuestionURL(category, serviceID, paragraphID, text) {
      if (category != "")
      {
        var tagString = " &tags=" + category + 
                  "," + serviceID + 
                  "," + paragraphID; 
      }else{
        var tagString = " &tags=" + serviceID + 
                  "," + paragraphID; 
      }
      return createQuestionURL + "?text=" + text + 
                  tagString;
    }


    // It creates an URL which can be used to redirect to the diagram details of the CPD
    // - serviceID: the id corresponding to the e-service
    function getDiagramDetails(serviceID, diagramCallback) {
      console.log(">>>getDiagramDetails");
      //jQuery.getJSON(getDiagramAPI +'/' + serviceID + '/summary',
      jQuery.getJSON(getDiagramAPI +'/cpd.json',
        function(jsonResponse) {
          diagramCallback(jsonResponse);
        }
      );
    }

    return {
        init: initComponent,
        getQuestions: getQuestions,
        getTermDescription: getTermDescription,
        createQuestionDetailsURL: createQuestionDetailsURL,
        createNewQuestionURL: createNewQuestionURL,
        getDiagramDetails: getDiagramDetails
      };
  }
  return {
    getInstance: function() {
      if(!instance) instance = Singleton();
      return instance;
    }
  };
})();