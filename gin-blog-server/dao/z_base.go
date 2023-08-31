package dao

import (
	"errors"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

// 数据库指针
var DB *gorm.DB

// 通用 CRUD
// 创建数据(可以创建[单条]数据, 也可[批量]创建)
func Create[T any](data *T, ctx *gin.Context) {
	err := DB.WithContext(ctx.Request.Context()).Create(&data).Error
	if err != nil {
		panic(err)
	}
}

// [单条]数据查询
func GetOne[T any](data T, query string, ctx *gin.Context, args ...any) T {
	err := DB.WithContext(ctx.Request.Context()).Where(query, args...).First(&data).Error
	if err != nil && !errors.Is(err, gorm.ErrRecordNotFound) { // 记录找不到 err 不 panic
		panic(err)
	}
	return data
}

// [单行]更新: 传入对应结构体[传递主键用] 和 带有对应更新字段值的[结构体]，结构体不更新零值
func Update[T any](data *T, ctx *gin.Context, slt ...string) {
	if len(slt) > 0 {
		DB.WithContext(ctx.Request.Context()).Model(&data).Select(slt).Updates(&data)
		return
	}
	err := DB.WithContext(ctx.Request.Context()).Model(&data).Updates(&data).Error
	if err != nil {
		panic(err)
	}
}

// [批量]更新: map 的字段就是要更新的字段 (map 可以更新零值), 通过条件可以实现[单行]更新
func UpdatesMap[T any](data *T, ctx *gin.Context, maps map[string]any, query string, args ...any) {
	err := DB.WithContext(ctx.Request.Context()).Model(&data).Where(query, args...).Updates(maps).Error
	if err != nil {
		panic(err)
	}
}

// [批量]更新: 结构体的属性就是要更新的字段 (结构体不更新零值), 通过条件可以实现[单行]更新
func Updates[T any](data *T, ctx *gin.Context, query string, args ...any) {
	err := DB.WithContext(ctx.Request.Context()).Model(&data).Where(query, args...).Updates(&data).Error
	if err != nil {
		panic(err)
	}
}

// 数据列表
func List[T any](data T, ctx *gin.Context, slt, order, query string, args ...any) T {
	db := DB.WithContext(ctx.Request.Context()).Model(&data).Select(slt).Order(order)
	if query != "" {
		db = db.Where(query, args...)
	}
	if err := db.Find(&data).Error; err != nil {
		panic(err)
	}
	return data
}

// [批量]删除数据, 通过条件控制可以删除单条数据
func Delete[T any](data T, ctx *gin.Context, query string, args ...any) {
	err := DB.WithContext(ctx.Request.Context()).Where(query, args...).Delete(&data).Error
	if err != nil {
		panic(err)
	}
}

// 统计数量
func Count[T any](data T, ctx *gin.Context, query string, args ...any) int64 {
	var total int64
	db := DB.WithContext(ctx.Request.Context()).Model(data)
	if query != "" {
		db = db.Where(query, args...)
	}
	if err := db.Count(&total).Error; err != nil {
		panic(err)
	}
	return total
}
