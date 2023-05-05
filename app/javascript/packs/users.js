$(document).on("change", "#file_photo", function(e) {
  // ユーザーのコンピュータで読み込んだファイルを保持
  let reader;
  // ファイルの有無を確認
  if (e.target.files.length) {
    // Blobオブジェクトからデータを読み込む
    reader = new FileReader;
    // ファイルの読み込みが成功したときに発生するイベント
    reader.onload = function(e) {
      let userThumbnail;
      // プレビューを表示するための要素
      userThumbnail = document.getElementById('thumbnail');
      // .is-activeクラスの付与をすることで表示できるようになる
      $("#userImgPreview").addClass("is-active");
      // imgタグのsrc属性に[e.target.result]で取得したファイル名を設定
      userThumbnail.setAttribute("src", e.target.result);
    };
    return reader.readAsDataURL(e.target.files[0]);
  }
});