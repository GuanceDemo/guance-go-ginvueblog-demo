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

type FriendLink struct{}

func (*FriendLink) GetList(req req.PageQuery, ctx *gin.Context) (data resp.PageResult[[]model.FriendLink]) {
	list, total := friendLinkDao.GetList(req, ctx)
	return resp.PageResult[[]model.FriendLink]{
		PageSize: req.PageSize,
		PageNum:  req.PageNum,
		Total:    total,
		List:     list,
	}
}

func (*FriendLink) SaveOrUpdate(req req.SaveOrUpdateLink, ctx *gin.Context) (code int) {
	friendLink := utils.CopyProperties[model.FriendLink](req) // vo -> po
	if friendLink.ID != 0 {
		dao.Update(&friendLink, ctx)
	} else { // 新增
		dao.Create(&friendLink, ctx)
	}
	return r.OK
}

func (*FriendLink) Delete(ids []int, ctx *gin.Context) (code int) {
	dao.Delete(model.FriendLink{}, ctx, "id in ?", ids)
	return r.OK
}

func (*FriendLink) GetFrontList(ctx *gin.Context) (data []model.FriendLink) {
	return dao.List([]model.FriendLink{}, ctx, "*", "", "")
}
