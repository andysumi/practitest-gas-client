/**
 * PractiTest Clientのインスタンスを作成する
 * @param {String} email 【必須】メールアドレス
 * @param {String} token 【必須】APIアクセストークン
 * @param {Integer} projectId 【任意】プロジェクトID
 * @return {PractiTestClient} PractiTest Clientのインスタンス
 */
function create(email, token, projectId) { // eslint-disable-line no-unused-vars
  return new PractiTestClient(email, token, projectId);
}

/**
 * プロジェクト内のIssueを取得する
 * @param {Integer} projectId 【任意】プロジェクトID
 * @return {Object} Issueのオブジェクト
 */
function getIssuesInProject(projectId) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}

/**
 * 指定したIssueを取得する
 * @param {Integer} issueId 【必須】IssueID
 * @return {Object} Issueのオブジェクト
 */
function getSpecificIssue(issueId) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}
