package service

import (
	"gin-blog/dao"
	"gin-blog/model"
	"gin-blog/model/resp"
	"gin-blog/utils"
	"gin-blog/utils/r"
	"strings"

	"github.com/gin-gonic/gin"
)

type BlogInfo struct{}

// Cache Aside Pattern: 经典的缓存 + 数据库的读写模式

// 用户上报信息: 统计地域信息, 访问数量
func (*BlogInfo) Report(c *gin.Context) (code int) {
	ipAddress := utils.IP.GetIpAddress(c)
	userAgent := utils.IP.GetUserAgent(c)
	browser := userAgent.Name + " " + userAgent.Version.String()
	os := userAgent.OS + " " + userAgent.OSVersion.String()
	uuid := utils.Encryptor.MD5(ipAddress + browser + os)
	// 当前用户没有统计过访问人数 (不在 用户set 中)
	if !utils.Redis.SIsMember(KEY_UNIQUE_VISITOR_SET, c, uuid) {
		// 统计地域信息
		ipSource := utils.IP.GetIpSource(ipAddress)
		if ipSource != "" { // 获取到具体的位置, 提取出其中的 省份
			address := strings.Split(ipSource, "|")
			province := strings.ReplaceAll(address[2], "省", "")
			utils.Redis.HIncrBy(KEY_VISITOR_AREA, province, c, 1)
		} else {
			utils.Redis.HIncrBy(KEY_VISITOR_AREA, "未知", c, 1)
		}
		// 访问数量 + 1
		utils.Redis.Incr(KEY_VIEW_COUNT, c)
		// 将当前用户记录到 用户set
		utils.Redis.SAdd(KEY_UNIQUE_VISITOR_SET, c, uuid)
	}
	return r.OK
}

// 博客后台首页信息 TODO: 完善首页显示
func (b *BlogInfo) GetHomeInfo(ctx *gin.Context) resp.BlogHomeVO {
	articleCount := dao.Count(model.Article{}, ctx, "status = ? AND is_delete = ?", 1, 0)
	userCount := dao.Count(model.UserInfo{}, ctx, "")
	messageCount := dao.Count(model.Message{}, ctx, "")
	viewCount := utils.Redis.GetInt(KEY_VIEW_COUNT, ctx)
	// categoryCount := dao.Count(model.Category{}, "")
	// tagCount := dao.Count(model.Tag{}, "")
	// blogConfigVO := b.GetBlogConfig()
	return resp.BlogHomeVO{
		ArticleCount: articleCount,
		UserCount:    userCount,
		MessageCount: messageCount,
		ViewCount:    viewCount,
		// CategoryCount: categoryCount,
		// TagCount:      tagCount,
		// BlogConfig:    blogConfigVO,
	}
}

// 获取博客设置
func (*BlogInfo) GetBlogConfig(ctx *gin.Context) (respVO model.BlogConfigDetail) {
	// 尝试从 Redis 中取值
	blogConfig := utils.Redis.GetVal(KEY_BLOG_CONFIG, ctx)
	// Redis 中没有值, 再查数据库, 查到后设置到 Redis 中
	if blogConfig == "" {
		blogConfig = dao.GetOne(model.BlogConfig{}, "id", ctx, 1).Config
		utils.Redis.Set(KEY_BLOG_CONFIG, blogConfig, 0, ctx)
	}
	// 反序列化字符串为 golang 对象
	utils.Json.Unmarshal(blogConfig, &respVO)
	return respVO
}

// 更新博客设置
func (*BlogInfo) UpdateBlogConfig(reqVO model.BlogConfigDetail, ctx *gin.Context) (code int) {
	blogConfig := model.BlogConfig{
		Universal: model.Universal{ID: 1},
		Config:    utils.Json.Marshal(reqVO), // 序列化 golang 对象
	}
	dao.Update(&blogConfig, ctx, "config")
	utils.Redis.Del(KEY_BLOG_CONFIG, ctx) // 从 Redis 中清除旧值
	return r.OK
}

func (*BlogInfo) GetAbout(ctx *gin.Context) string {
	return utils.Redis.GetVal(KEY_ABOUT, ctx)
}

func (*BlogInfo) UpdateAbout(data model.About, ctx *gin.Context) (code int) {
	utils.Redis.Set(KEY_ABOUT, data.Content, 0, ctx)
	return r.OK
}

/* 前台接口 */

// 获取前台首页信息
func (b *BlogInfo) GetFrontHomeInfo(ctx *gin.Context) resp.FrontBlogHomeVO {
	articleCount := dao.Count(model.Article{}, ctx, "status = ? AND is_delete = ?", 1, 0)
	userCount := dao.Count(model.UserInfo{}, ctx, "")
	messageCount := dao.Count(model.Message{}, ctx, "")
	categoryCount := dao.Count(model.Category{}, ctx, "")
	tagCount := dao.Count(model.Tag{}, ctx, "")
	blogConfigVO := b.GetBlogConfig(ctx)
	viewCount := utils.Redis.GetInt(KEY_VIEW_COUNT, ctx)
	pageList := dao.List([]model.Page{}, ctx, "id, name, label, cover, created_at, updated_at", "", "")
	return resp.FrontBlogHomeVO{
		ArticleCount:  articleCount,
		UserCount:     userCount,
		MessageCount:  messageCount,
		CategoryCount: categoryCount,
		ViewCount:     viewCount,
		TagCount:      tagCount,
		BlogConfig:    blogConfigVO,
		PageList:      pageList,
	}
}
