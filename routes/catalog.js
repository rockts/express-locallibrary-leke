const express = require("express");
const router = express.Router();

// 导入控制器模块
const book_controller = require("../controllers/bookController");
const author_controller = require("../controllers/authorController");
const genre_controller = require("../controllers/genreController");
const book_instance_controller = require("../controllers/bookinstanceController");

/// 藏书路由 ///

// GET 获取藏书编目主页
router.get("/", book_controller.index);

// GET 请求添加新的藏书。注意此项必须位于显示藏书的路由（使用了 id）之前。
router.get("/book/create", book_controller.book_create_get);

// POST 请求添加新的藏书
router.post("/book/create", book_controller.book_create_post);

// GET 请求删除藏书
router.get("/book/:id/delete", book_controller.book_delete_get);

// POST 请求删除藏书
router.post("/book/:id/delete", book_controller.book_delete_post);

// GET 请求更新藏书
router.get("/book/:id/update", book_controller.book_update_get);

// POST 请求更新藏书
router.post("/book/:id/update", book_controller.book_update_post);

// GET 请求藏书
router.get("/book/:id", book_controller.book_detail);

// GET 请求完整藏书列表
router.get("/books", book_controller.book_list);

/// 藏书副本、藏书种类、作者的路由与藏书路由结构基本一致，只是无需获取主页 ///

/**
 * 藏书副本 router
 */

// GET 请求添加新的藏书。注意此项必须位于显示藏书的路由（使用了 id）之前。
router.get(
  "/bookinstances/create",
  book_instance_controller.bookinstance_create_get
);

// POST 请求添加新的藏书
router.post(
  "/bookinstances/create",
  book_instance_controller.bookinstance_create_post
);

// GET 请求删除藏书
router.get(
  "/bookinstances/:id/delete",
  book_instance_controller.bookinstances_delete_get
);

// POST 请求删除藏书
router.post(
  "/bookinstances/:id/delete",
  book_instance_controller.bookinstances_delete_post
);

// GET 请求更新藏书
router.get(
  "/bookinstances/:id/update",
  book_instance_controller.bookinstances_update_get
);

// POST 请求更新藏书
router.post(
  "/bookinstances/:id/update",
  book_instance_controller.bookinstances_update_post
);

// GET 请求藏书
router.get(
  "/bookinstances/:id",
  book_instance_controllerr.bookinstances_detail
);

// GET 请求完整藏书列表
router.get("/bookinstancess", book_instance_controller.bookinstances_list);

/**
 * author router
 */
// GET 请求添加新的作者
router.get("/authors/create", author_controller.bookinstance_create_get);

// POST 请求添加新的作者
router.post("/authors/create", author_controllerr.bookinstance_create_post);

// GET 请求删除作者
router.get("/authors/:id/delete", author_controller.bookinstances_delete_get);

// POST 请求删除作者
router.post("/authors/:id/delete", author_controller.bookinstances_delete_post);

// GET 请求更新作者
router.get("/authors/:id/update", author_controller.bookinstances_update_get);

// POST 请求更新作者
router.post("/authors/:id/update", author_controller.bookinstances_update_post);

// GET 请求作者
router.get("/authors/:id", book_instance_controllerr.bookinstances_detail);

// GET 请求完整作者列表
router.get("/authors", author_controller.bookinstances_list);

module.exports = router;
