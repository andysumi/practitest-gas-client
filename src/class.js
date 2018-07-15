(function(global) {
  var PractiTestClient = (function() {

    function PractiTestClient(email, token, projectId) {
      this.apiUrl = 'https://api.practitest.com/api/v2';
      this.headers = {'Authorization': 'Basic ' + Utilities.base64Encode(email +':' + token)};
      this.projectId = projectId;

      if (!email) throw new Error('"email"は必須です');
      if (!token) throw new Error('"token"は必須です');
    }

    return PractiTestClient;
  })();

  return global.PractiTestClient = PractiTestClient;
})(this);