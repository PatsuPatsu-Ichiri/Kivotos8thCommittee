import type { AnnouncementConfig } from "../types/announcementConfig";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "📢 公告",//为空则显示默认文本，字符串结构： emojio + 空格 +  具体内容

	// 公告内容:
	content: "	锵锵，我们是霸中Kivotos —— The 8th Committee! 欢迎访问! \n 	加入我们，无论是发布内容，还是一起开发网页，我们都欢迎您的到来",

	// 是否允许用户关闭公告，
	closable: false,//！！！该组件此属性已弃用，请请勿更改此处代码内容以免未知错误

	link: {//！！！该组件此属性已弃用，请请勿更改此处代码内容以免未知错误
		// 启用链接
		enable: false,
		// 链接文本
		text: "了解更多",
		// 链接 URL
		url: "/about/",
		// 内部链接
		external: false,
	},
};
