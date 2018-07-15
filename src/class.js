(function(global) {
  var PractiTestClient = (function() {

    function PractiTestClient(email, token, projectId) {
      this.apiUrl = 'https://api.practitest.com/api/v2';
      this.headers = {'Authorization': 'Basic ' + Utilities.base64Encode(email +':' + token)};
      this.projectId = projectId;

      if (!email) throw new Error('"email"は必須です');
      if (!token) throw new Error('"token"は必須です');
    }

    PractiTestClient.prototype.getIssuesInProject = function(projectId) {
      var id = projectId || this.projectId;
      return this.fetch_('/projects/' + id + '/issues.json',{'method': 'get'});
    };

    PractiTestClient.prototype.fetch_ = function(endPoint, options) {
      var url = this.apiUrl + endPoint;
      var response = UrlFetchApp.fetch(url, {
        'method': options.method,
        'muteHttpExceptions': true,
        'contentType': 'application/json; charset=utf-8',
        'headers': this.headers,
        'payload': options.payload || {}
      });

      return JSON.parse(response.getContentText());
    };

    return PractiTestClient;
  })();

  return global.PractiTestClient = PractiTestClient;
})(this);
