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
