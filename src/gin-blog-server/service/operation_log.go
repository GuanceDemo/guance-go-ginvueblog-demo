package service

import (
	"gin-blog/dao"
	"gin-blog/model"
	"gin-blog/model/req"
	"gin-blog/model/resp"
	"gin-blog/utils/r"

	"github.com/gin-gonic/gin"
)

type OperationLog struct{}

func (*OperationLog) GetList(req req.PageQuery, ctx *gin.Context) resp.PageResult[[]model.OperationLog] {
	list, total := operationLogDao.GetList(req, ctx)
	return resp.PageResult[[]model.OperationLog]{
		PageSize: req.PageSize,
		PageNum:  req.PageNum,
		List:     list,
		Total:    total,
	}
}

func (*OperationLog) Delete(ids []int, ctx *gin.Context) (code int) {
	dao.Delete(model.OperationLog{}, ctx, "id in ?", ids)
	return r.OK
}
