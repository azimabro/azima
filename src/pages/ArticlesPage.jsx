import { Link } from 'react-router-dom';

const sections = [
  {
    id: 'what-is-hsp',
    icon: '🦋',
    title: '什么是高敏感人格（HSP）？',
    content: `高敏感人格（Highly Sensitive Person，简称 HSP）是由美国心理学家 Elaine Aron 博士在 1990 年代提出的概念。它不是一种疾病或障碍，而是一种天生的神经系统特质。

大约 15-20% 的人口属于高敏感者——这个比例在人类和其他 100 多种动物中惊人地稳定。进化生物学家认为，高敏感者的存在对群体生存至关重要：他们是群体中的"哨兵"，能比其他人更早察觉危险、感知环境变化。

从神经科学的角度看，高敏感者的大脑在处理信息时使用了更多的脑区，做了更深层次的加工。这意味着：
• 你接收到的感官信息比常人更丰富
• 你的情绪体验比常人更深刻
• 你在做决策前会考虑更多的变量
• 你对微妙的变化有更强的觉察力

这解释了为什么你在嘈杂环境中比常人更容易疲惫，但也解释了为什么你拥有更强的共情力、洞察力和创造力。`,
  },
  {
    id: 'signs',
    icon: '🔍',
    title: '高敏感者的常见表现',
    content: `如果你在以下大部分描述中看到自己，你很可能是一个高敏感者：

【感官方面】
• 对强光、噪音、强烈气味特别敏感
• 容易被粗糙的面料、标签或接缝困扰
• 对咖啡因、药物或酒精的反应比常人更强
• 能品尝出食物中别人不在意的微妙味道

【情绪方面】
• 情绪体验深刻而持久——快乐时非常快乐，难过时需要很长时间恢复
• 容易被他人的情绪影响——看完一部悲伤的电影需要好几天走出来
• 容易被艺术、音乐或自然景观深深打动
• 容易受到惊吓

【社交方面】
• 在大型聚会或嘈杂环境中待久了会感到精疲力尽
• 喜欢深度的、一对一的交流胜过群体闲聊
• 能敏锐地察觉到他人的情绪变化和社交氛围
• 独处是充电，而不是孤独

【思考方面】
• 做决定前会反复思考各种可能性
• 拥有丰富的内心世界和想象力
• 对细节有超乎常人的注意
• 倾向于深入而非浅尝辄止地理解事物`,
  },
  {
    id: 'strength',
    icon: '💪',
    title: '高敏感不是弱点，是你的超能力',
    content: `社会常常把"敏感"当作一种缺陷——"你太敏感了""别想那么多""坚强一点"。但大量研究表明，高敏感者在以下方面具有显著优势：

1. 深度共情能力
你能感知到别人没说出口的情绪和需求。这让你成为一个更好的伴侣、朋友、倾听者和团队成员。在咨询、教育、医疗、管理等需要理解人的领域，这是核心竞争力。

2. 缜密的思考能力
你在做决策前会考虑更多的信息和变量，这意味着你的决策往往更周全、更少出错。在需要审慎判断的领域（法律、金融、研究），这是一种稀缺品质。

3. 敏锐的审美与创造力
你对美的感知力超越常人。很多艺术家、音乐家、作家、设计师都是高敏感者——他们的创作之所以能打动人心，正是因为他们的感受更深。

4. 风险预判能力
你能比他人更早感知到潜在的问题和风险。在一个团队中，你往往是第一个发现"这里可能有问题"的人——这种能力在商业决策、项目管理、安全管理中极其宝贵。

5. 忠诚与深度
你倾向于建立少而精的深度关系。你在工作中的投入度和忠诚度往往高于平均水平。你做的每一件事都带着认真的态度。

关键在于：不是要变得"不敏感"，而是要学会管理过度刺激，同时充分发挥你的敏感优势。`,
  },
  {
    id: 'self-care',
    icon: '🧘',
    title: '给高敏感者的自我照顾指南',
    content: `高敏感者需要比常人更主动地管理自己的能量和环境。以下是一些经过验证的有效策略：

【环境管理】
• 打造一个"感官友好"的家：暖色灯光、柔软的织物、降噪窗帘
• 随身携带降噪耳机或耳塞——它们是你的必需品，不是奢侈品
• 在工作空间放置让你愉悦的物品：一盆植物、一张喜欢的照片
• 减少视觉杂乱——杂乱的桌面会让你的大脑更加过载

【能量管理】
• 学习识别自己的"过载信号"：烦躁、头痛、注意力涣散
• 在感到完全耗尽之前就休息——不要等到红灯亮了才加油
• 每天至少安排 30 分钟的纯粹独处时间
• 学会说"不"——你不需要接受每一个邀请、每一次社交

【情绪管理】
• 建立"情绪清空"习惯：每天写 10 分钟日记，把积压的情绪倾倒出来
• 区分"我的情绪"和"别人的情绪"——问自己：这是我自己的感受，还是我吸收的？
• 在重大情绪事件后给自己充足的恢复时间
• 正念冥想对高敏感者尤其有效——每天 5-10 分钟就能显著降低焦虑

【社交管理】
• 把社交看作一种"预算"——你每天只有有限的社交能量，花在最重要的人和事上
• 参加聚会前预先想好"退出策略"：什么时候走、怎么走
• 选择安静、人数少的聚会形式——深度交流而非喧闹的派对
• 找到和你一样敏感的同类——知道"我不是一个人"本身就是治愈`,
  },
  {
    id: 'relationships',
    icon: '💑',
    title: '高敏感者与亲密关系',
    content: `高敏感特质深刻影响着恋爱和亲密关系。理解这一点，可以帮助你和伴侣建立更深层的连接：

如果你是高敏感者：
• 直接告诉伴侣你的需求："我需要一些独处时间来恢复""嘈杂的环境让我很疲惫"
• 不要在情绪过载时讨论重要问题——先冷静，再沟通
• 选择能理解和尊重你敏感特质的伴侣——这不是挑剔，是基本的自我保护
• 你的深度共情是关系中的巨大财富——你比别人更能理解伴侣的需求

如果你的伴侣是高敏感者：
• 当 TA 说"我需要一个人待一会儿"，这不是拒绝，是真正的生理需要
• 不要轻视 TA 对噪音、光线、温度的抱怨——TA 的感受是真实的
• 避免在冲突中说过激的话——高度敏感者对言语的伤害感受更深、恢复更慢
• 欣赏 TA 的细腻和深度——这是你和 TA 在一起的珍贵理由之一`,
  },
  {
    id: 'faq',
    icon: '❓',
    title: '常见问题',
    content: `【高敏感是病吗？】
不是。HSP 是一种天生的神经系统特质，不是疾病或障碍。它不需要"治疗"。但它确实伴随着一些挑战（如容易过载），这些可以通过自我管理策略来应对。

【高敏感和内向有什么区别？】
内向是关于"社交能量来源"的（内向者独处充电，外向者社交充电）。高敏感是关于"信息处理深度"的。大约 70% 的高敏感者是内向者，但约 30% 是高敏感外向者——他们喜欢社交，但容易被过度刺激。

【高敏感和 ADHD / 自闭症有什么区别？】
这三个有一些表面相似之处（容易被过度刺激），但本质不同。HSP 没有注意力缺陷或社交理解障碍，只是信息处理更深。如果你怀疑自己可能有 ADHD 或自闭症，请咨询专业医生。

【可以"变得不敏感"吗？】
不能，也不应该。敏感度是神经系统的硬件配置，不是可以卸载的软件。目标不是"变钝"，而是学会管理过度刺激，同时利用敏感的优势。

【如何向别人解释我是高敏感者？】
"我的神经系统处理信息的方式比大多数人更深。这意味着我更容易被噪音/人多/情绪影响而感到疲惫，但也意味着我更能理解你的感受，更能注意到细节。这不是我'想太多'，是我的大脑就是这样工作的。"

【高敏感者适合什么工作？】
创意类（写作、设计、艺术）、助人类（咨询、教育、医疗）、需要深度专注的（研究、编程、分析）、灵活自主的（自由职业、远程工作）。避免嘈杂的开放式办公室、高压销售、频繁出差的工作。`,
  },
];

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-gray-50 page-enter">
      <div className="max-w-lg mx-auto w-full">
        {/* Header */}
        <div className="bg-white/90 backdrop-blur border-b border-gray-100 px-5 py-3 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-gray-400 hover:text-gray-600 text-sm flex items-center gap-1"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              返回首页
            </Link>
            <span className="text-sm font-semibold text-gray-700">HSP 知识库</span>
            <div className="w-10" />
          </div>
        </div>

        {/* Hero */}
        <div className="bg-gradient-to-br from-primary to-primary-dark px-5 pt-8 pb-10 text-white text-center">
          <div className="text-5xl mb-3">🦋</div>
          <h1 className="text-2xl font-bold mb-2">了解高敏感人格</h1>
          <p className="text-sm text-white/70 max-w-xs mx-auto leading-relaxed">
            关于 HSP 你需要知道的一切——从科学原理到日常实践
          </p>
        </div>

        {/* Deep read banner */}
        <div className="px-5 -mt-4 mb-4">
          <Link to="/blog/what-is-hsp" className="block bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/10 p-4 active:scale-[0.99] transition-transform">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📖</span>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-primary-dark">深度阅读</h3>
                <p className="text-xs text-gray-500 mt-0.5">高敏感人格(HSP)是什么？——不是你太脆弱，是15%的人出厂设置不一样</p>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/50">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Quick nav */}
        <div className="px-5 mb-4">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">目录</h3>
            <div className="space-y-1">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary py-1 transition-colors"
                >
                  <span>{s.icon}</span>
                  <span>{s.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Content sections */}
        <div className="px-5 pb-8 space-y-4">
          {sections.map((s) => (
            <div key={s.id} id={s.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 scroll-mt-20">
              <h2 className="text-base font-bold text-gray-800 flex items-center gap-2 mb-3">
                <span className="text-xl">{s.icon}</span>
                {s.title}
              </h2>
              <div className="text-sm text-gray-600 leading-relaxed space-y-3">
                {s.content.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="whitespace-pre-line">{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="px-5 pb-10 text-center">
          <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
            <h3 className="text-base font-bold text-primary-dark mb-2">准备好了吗？</h3>
            <p className="text-sm text-gray-500 mb-4">花 3 分钟，了解你自己的敏感度分数</p>
            <Link
              to="/test"
              className="inline-block px-8 py-3 rounded-xl bg-primary text-white font-semibold active:scale-[0.98] transition-transform shadow-lg shadow-primary/25"
            >
              开始测试 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
