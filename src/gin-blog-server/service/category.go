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

type Category struct{}

func (*Category) SaveOrUpdate(req req.AddOrEditCategory, ctx *gin.Context) int {
	// 查询分类是否存在
	existByName := dao.GetOne(model.Category{}, "name = ?", ctx, req.Name)
	// (同名存在) && (存在的id不等于当前要更新的id) -> 重复
	if !existByName.IsEmpty() && existByName.ID != req.ID {
		return r.ERROR_CATE_NAME_USED
	}

	category := utils.CopyProperties[model.Category](req) // vo -> po

	if req.ID != 0 {
		dao.Update(&category, ctx, "name")
	} else {
		dao.Create(&category, ctx)
	}
	return r.OK
}

func (*Category) Delete(ids []int, ctx *gin.Context) (code int) {
	// 查看分类下是否存在文章
	count := dao.Count(model.Article{}, ctx, "category_id in ?", ids)
	if count > 0 {
		return r.ERROR_CATE_ART_EXIST
	}
	dao.Delete(model.Category{}, ctx, "id in ?", ids)
	return r.OK
}

// 条件查询列表(后台)
func (*Category) GetList(req req.PageQuery, ctx *gin.Context) resp.PageResult[[]resp.CategoryVo] {
	data, total := categoryDao.GetList(req, ctx)
	return resp.PageResult[[]resp.CategoryVo]{
		Total:    total,
		List:     data,
		PageSize: req.PageSize,
		PageNum:  req.PageNum,
	}
}

func (*Category) GetOption(ctx *gin.Context) []resp.OptionVo {
	return categoryDao.GetOption(ctx)
}

// 查询列表(前台)
func (*Category) GetFrontList(ctx *gin.Context) resp.ListResult[[]resp.CategoryVo] {
	data, total := categoryDao.GetList(req.PageQuery{}, ctx)
	return resp.ListResult[[]resp.CategoryVo]{
		Total: total,
		List:  data,
	}
}
