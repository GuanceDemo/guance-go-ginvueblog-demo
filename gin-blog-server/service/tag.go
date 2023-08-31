package service

import (
	"gin-blog/dao"
	"gin-blog/model"
	"gin-blog/model/req"
	"gin-blog/model/resp"
	"gin-blog/utils"
	"gin-blog/utils/r"

	"github.com/gin-gonic/gin"
)

type Tag struct{}

// 新增 / 修改
func (*Tag) SaveOrUpdate(req req.AddOrEditTag, ctx *gin.Context) int {
	// 检查标签名称是否已经存在
	exist := dao.GetOne(model.Tag{}, "name", ctx, req.Name)
	if !exist.IsEmpty() && exist.ID != req.ID {
		return r.ERROR_TAG_EXIST
	}

	tag := utils.CopyProperties[model.Tag](req) // vo -> po

	if req.ID != 0 {
		dao.Update(&tag, ctx, "name")
	} else {
		dao.Create(&tag, ctx)
	}
	return r.OK
}

// 删除标签
func (*Tag) Delete(ids []int, ctx *gin.Context) (code int) {
	// 检查标签下面有没有文章
	count := dao.Count(model.ArticleTag{}, ctx, "tag_id in ?", ids)
	if count > 0 {
		return r.ERROR_TAG_ART_EXIST
	}
	dao.Delete(model.Tag{}, ctx, "id in ?", ids)
	return r.OK
}

// 分页查询标签
func (*Tag) GetList(req req.PageQuery, ctx *gin.Context) resp.PageResult[[]resp.TagVO] {
	data, total := tagDao.GetList(req, ctx)
	return resp.PageResult[[]resp.TagVO]{
		Total:    total,
		List:     data,
		PageSize: req.PageSize,
		PageNum:  req.PageNum,
	}
}

func (*Tag) GetOption(ctx *gin.Context) []resp.OptionVo {
	return tagDao.GetOption(ctx)
}

// 查询标签列表(前台)
func (*Tag) GetFrontList(ctx *gin.Context) resp.ListResult[[]resp.TagVO] {
	data, total := tagDao.GetList(req.PageQuery{}, ctx)
	return resp.ListResult[[]resp.TagVO]{
		Total: total,
		List:  data,
	}
}
