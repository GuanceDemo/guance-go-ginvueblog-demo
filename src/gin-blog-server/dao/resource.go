package dao

import (
	"gin-blog/model"

	"github.com/gin-gonic/gin"
)

type Resource struct{}

// 根据 [资源id列表] 获取 [资源列表]
func (*Resource) GetListByIds(ids []int, ctx *gin.Context) (list []model.Resource) {
	return List([]model.Resource{}, ctx, "url, request_method", "", "id in ?", ids)
}

// 根据关键字获取资源列表(非树形)
func (*Resource) GetListByKeyword(keyword string, ctx *gin.Context) (list []model.Resource) {
	if keyword != "" {
		list = List([]model.Resource{}, ctx, "*", "", "name like ?", "%"+keyword+"%")
	} else {
		list = List([]model.Resource{}, ctx, "*", "", "")
	}
	return
}
