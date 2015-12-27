//=require dependency.js

(function() {
    // 無駄にラッパーを入れたのはminifyされていることを確認しやすくするため
    function alertWrapper(msg) {
        alert(msg);
    }

    alertWrapper(msg);
})();
