package dao

import (
	"gin-blog/model"
	"gin-blog/model/req"
	"gin-blog/model/resp"

	"github.com/gin-gonic/gin"
)

type Tag struct{}

func (*Tag) GetList(req req.PageQuery, ctx *gin.Context) ([]resp.TagVO, int64) {
	var datas = make([]resp.TagVO, 0)
	var total int64

	db := DB.WithContext(ctx.Request.Context()).Table("tag t").
		Select("t.id", "name", "COUNT(at.article_id) AS article_count", "t.created_at", "t.updated_at").
		Joins("LEFT JOIN article_tag at ON t.id = at.tag_id")
	if req.Keyword != "" {
		db = db.Where("name LIKE ?", "%"+req.Keyword+"%")
	}
	db.Group("t.id").Order("t.id DESC").
		Count(&total).
		Limit(req.PageSize).Offset(req.PageSize * (req.PageNum - 1)).
		Find(&datas)
	return datas, total
}

func (*Tag) GetOption(ctx *gin.Context) []resp.OptionVo {
	var list = make([]resp.OptionVo, 0)
	DB.WithContext(ctx.Request.Context()).Model(&model.Tag{}).Select("id", "name").Find(&list)
	return list
}

// 根据 [文章id] 获取 [标签名称列表]
func (*Tag) GetTagNamesByArtId(id int, ctx *gin.Context) []string {
	list := make([]string, 0)
	DB.WithContext(ctx.Request.Context()).Table("tag").
		Joins("LEFT JOIN article_tag ON tag.id = article_tag.tag_id").
		Where("article_id", id).
		Pluck("name", &list)
	return list
}
