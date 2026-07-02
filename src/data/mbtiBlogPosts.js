const mbtiBlogPosts = [
  {
    slug: 'mbti-overview', title: 'MBTI 16型人格是什么？——四个字母里藏着你的出厂设置',
    description: 'MBTI 是什么、四个维度分别代表什么、16种类型怎么划分。一篇给新手的完整入门指南。',
    date: '2026-06-26', readTime: '7 分钟', heroIcon: '🧩',
    sections: [
      { icon: '🧩', title: 'MBTI 不是星座，是有心理学依据的工具', content: ['MBTI（Myers-Briggs Type Indicator）是基于荣格心理类型理论发展出来的人格评估工具。它不给你贴标签——它帮你理解你为什么以某种方式思考、感受和行动。全球每年有超过 200 万人接受 MBTI 评估。'], footer: '' },
      { icon: '📊', title: '四个维度，16 种组合', content: [], subsections: [
        { title: 'E (外向) vs I (内向) —— 你的能量从哪来', text: '外向者通过与人互动获得能量。内向者通过独处恢复能量。这不是"会不会社交"的问题，而是"社交让你充电还是耗电"。' },
        { title: 'S (实感) vs N (直觉) —— 你如何处理信息', text: '实感型的人关注具体的、可触摸的事实和细节。直觉型的人关注抽象的模式、可能性和未来。' },
        { title: 'T (思考) vs F (情感) —— 你如何做决定', text: '思考型的人依靠逻辑和客观标准做决定。情感型的人考虑价值观和对人的影响。' },
        { title: 'J (判断) vs P (感知) —— 你如何面对生活', text: '判断型的人喜欢计划、结构和确定性。感知型的人喜欢灵活、开放和即兴。' },
      ], footer: '这四个维度组合成 16 种类型——比如 INTJ、ENFP、ISTJ 等。' },
      { icon: '💡', title: 'MBTI 不是"你是谁"的答案——它是"你如何运作"的地图', content: ['知道自己的类型不是终点，是一个起点。'], cta: true, footer: '' },
    ],
  },
  {
    slug: 'mbti-popular-types', title: '最受欢迎的 4 种 MBTI 类型——有没有你？',
    description: 'INFJ、INFP、ENFP、INTJ：这四种类型为什么话题度最高？',
    date: '2026-06-26', readTime: '6 分钟', heroIcon: '🌟',
    sections: [
      { icon: '🌟', title: '为什么这四种类型讨论度最高？', content: ['INFJ、INFP、ENFP、INTJ 都使用"直觉(N)"功能——天生喜欢探索抽象概念和意义，容易被心理测试吸引。'], footer: '' },
      { icon: '🌿', title: 'INFJ —— 最稀有的理想主义者', content: ['人口占比 ~1%。拥有惊人的洞察力，能感知到别人没说出口的情感和需求。'], footer: '适合职业：心理咨询师、作家、教师。' },
      { icon: '🦋', title: 'INFP —— 内心丰富的浪漫主义者', content: ['忠于自己的价值观，追求意义和真实性，对美和情感有着敏锐的感知力。'], footer: '适合职业：艺术家、作家、编辑。' },
      { icon: '🎪', title: 'ENFP —— 自由奔放的社交灵魂', content: ['人群中的能量源。热爱新体验、新想法和新朋友。'], footer: '适合职业：创意工作者、记者、创业者。' },
      { icon: '🏛️', title: 'INTJ —— 沉默的战略大师', content: ['最独立的类型之一。擅长制定长期计划并有执行力去实现。'], footer: '适合职业：科学家、工程师、战略顾问。' },
      { icon: '🔗', title: '想知道你是哪种？', content: [], cta: true, footer: '' },
    ],
  },
  {
    slug: 'mbti-vs-hsp', title: 'MBTI 和 HSP 高敏感人格有什么区别？——可以同时存在吗？',
    description: '两个测试的关系是什么？结果会冲突吗？一篇文章讲清楚。',
    date: '2026-06-26', readTime: '5 分钟', heroIcon: '🔄',
    sections: [
      { icon: '🔄', title: '一个常见困惑', content: ['很多人在完成 HSP 自测后，又去测了 MBTI，然后产生了困惑。答案是：它们测量的是两个完全不同的东西。'], footer: '' },
      { icon: '📐', title: '核心区别', content: [], subsections: [
        { title: 'MBTI 测的是"认知偏好"', text: 'MBTI 回答的是：你倾向于如何处理信息和做决定？这些都是偏好——你可以选择用不同的方式行事。' },
        { title: 'HSP 测的是"神经系统的敏感度"', text: 'HSP 回答的是：你的神经系统对刺激的敏感程度是怎样的？这些不是偏好，是神经生物学的特性。' },
        { title: '一句话总结', text: 'MBTI 是你的软件（认知策略），HSP 是你的硬件（神经系统）。同一种软件可以跑在不同的硬件上。' },
      ], footer: '' },
      { icon: '✅', title: '测完 MBTI 后，建议你再测一下 HSP', content: ['两种测试结合使用，你能获得更完整的自我认知。'], cta: true, footer: '' },
    ],
  },
];

export default mbtiBlogPosts;
