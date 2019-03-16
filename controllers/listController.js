
exports.new_get = function (req, res) {
  res.render('new_list', {title: "Create a new list", user: req.user});
}

exports.explore = function(req, res) {
  res.render('explore', {title: "Explore lists on " + global.gConfig.app_name, user: req.user});
}
