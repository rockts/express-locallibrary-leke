const Bookinstance = require("../models/bookinstance");

// 显示完整的藏书副本
exports.bookinstance_list = (req, res) => {
  res.send("未实现：作者列表");
};

// 为藏书副本显示详细信息的页面
exports.bookinstance_detail = (req, res) => {
  res.send("未实现：作者详细信息：" + req.params.id);
};

// 由 GET 显示创建藏书副本的表单
exports.bookinstance_create_get = (req, res) => {
  res.send("未实现：作者创建表单的 GET");
};

// 由 POST 处理藏书副本创建操作
exports.bookinstance_create_post = (req, res) => {
  res.send("未实现：创建作者的 POST");
};

// 由 GET 显示删除藏书副本的表单
exports.bookinstance_delete_get = (req, res) => {
  res.send("未实现：作者删除表单的 GET");
};

// 由 POST 处理藏书副本删除操作
exports.bookinstance_delete_post = (req, res) => {
  res.send("未实现：删除作者的 POST");
};

// 由 GET 显示更新藏书副本的表单
exports.bookinstance_update_get = (req, res) => {
  res.send("未实现：作者更新表单的 GET");
};

// 由 POST 处理作者藏书副本操作
exports.bookinstance_update_post = (req, res) => {
  res.send("未实现：更新作者的 POST");
};
