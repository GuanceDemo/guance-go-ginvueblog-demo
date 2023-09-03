package dao

import (
	"gin-blog/model"
	"gin-blog/model/req"
	"gin-blog/model/resp"

	"github.com/gin-gonic/gin"
)

type Category struct{}

func (*Category) GetList(req req.PageQuery, ctx *gin.Context) ([]resp.CategoryVo, int64) {
	var datas = make([]resp.CategoryVo, 0)
	var total int64

	db := DB.WithContext(ctx.Request.Context()).Table("category c").
		Select("c.id", "c.name", "COUNT(a.id) AS article_count", "c.created_at", "c.updated_at").
		Joins("LEFT JOIN article a ON c.id = a.category_id AND a.is_delete = 0 AND a.status = 1")
	// 条件查询
	if req.Keyword != "" {
		db = db.Where("name LIKE ?", "%"+req.Keyword+"%")
	}
	db.Group("c.id").
		Order("c.id DESC").
		Count(&total).
		Limit(req.PageSize).Offset(req.PageSize * (req.PageNum - 1)).
		Find(&datas)
	return datas, total
}

func (*Category) GetOption(ctx *gin.Context) []resp.OptionVo {
	var list = make([]resp.OptionVo, 0)
	DB.WithContext(ctx.Request.Context()).Model(&model.Category{}).Select("id", "name").Find(&list)
	return list
}

// TODO 修改前台查询
// func (*Category) GetFrontList() {

// }
