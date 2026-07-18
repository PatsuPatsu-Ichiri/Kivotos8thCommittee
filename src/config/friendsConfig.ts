import type { FriendLink, FriendsPageConfig } from "../types/friendsConfig";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "特色栏目",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 是否显示底部自定义内容（friends.mdx 中的内容）
	showCustomContent: true,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否开启随机排序配置，如果开启，就会忽略权重，构建时进行一次随机排序
	randomizeSort: false,
};

// 友链配置
export const friendsConfig: FriendLink[] = [
	{
		title: "心理健康",
		imgurl:
			"/assets/images/logo/cornhub.png",
		desc: "JmACG|PicaComic|“点击看看”",
		siteurl: "https://www.studytimes.cn/whjy/202606/t20260605_88150.html",
		tags: ["???"],
		weight: 7, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "在线观看",
		imgurl: "/assets/images/logo/mxgh.png",
		desc: "历任校长|名师风采|校史馆",
		siteurl: "https://vdse.bdstatic.com//192d9a98d782d9c74c96f09db9378d93.mp4",
		tags: ["校方文档"],
		weight: 10,
		enabled: true,
	},
	{
		title: "少女乐队",
		imgurl: "/assets/images/logo/yd.png",
		desc: "GBC · 結束バンド · 放学后茶会",
		siteurl: "https://www.gbcclub.com/",
		tags: ["社团活动"],
		weight: 8,
		enabled: true,
	},
];

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends.sort((a, b) => b.weight - a.weight);
};
