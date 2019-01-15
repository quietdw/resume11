window.Model = function (options) {
  let resouceName = options.resouceName;
  return {
    init: function () {
      var APP_ID = 'KMOXV4q9U0oDj41GjcqDuFe0-gzGzoHsz';
      var APP_KEY = 'vt42FiDltVxEsHYopyyLvLDj';
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      });
    },
    fetch: function () {
      var query = new AV.Query(resouceName);
      return query.find();
    },
    save: function (object) {
      var X = AV.Object.extend(resouceName);
      var x = new X();
      return x.save(object);
    }
  };
};