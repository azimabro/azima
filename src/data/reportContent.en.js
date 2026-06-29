/**
 * English report content — complete HSP deep-dive interpretations
 */

export const LEVEL_INTERPRETATIONS = {
  high: {
    title: 'You Are a Highly Sensitive Person',
    summary: 'Your nervous system is naturally more refined and processes information more deeply than most. Neuroscientists have found that HSP brains use more brain regions when processing sensory information — you literally take in more of the world. This explains why you get tired faster in stimulating environments, but also why you have deeper empathy, richer insights, and a more vivid inner life.',
    strengths: [
      'Deep empathy — you sense what others leave unsaid',
      'Detail awareness — you catch subtleties others miss',
      'Deep thinking — you naturally go beyond the surface',
      'Aesthetic sensitivity — beauty resonates more deeply with you',
      'Risk anticipation — you sense potential problems earlier than others',
    ],
    challenges: [
      'Easily overwhelmed in noisy, crowded environments',
      'Other people\'s moods strongly affect your state',
      'Often labeled "too sensitive" or an "overthinker"',
      'Need more alone time to recover than most people',
    ],
    keyMessage: 'You don\'t need to "become less sensitive." You need to understand how your system works and design your life accordingly. Treat your sensitivity like a precision instrument — it needs protection and regular calibration, but it detects signals others can\'t perceive.',
  },
  midHigh: {
    title: 'You Have Moderately High Sensitivity',
    summary: 'While not at the highest end of the sensitivity spectrum, you perceive more deeply than average in many areas. You may show strong HSP traits in some situations while remaining relatively unfazed in others. This is a great balance — you enjoy the richness sensitivity brings without being completely consumed by it.',
    strengths: [
      'Flexible switching — you can be sensitive when needed, resilient when needed',
      'Emotional awareness — you notice your emotional shifts',
      'Moderate empathy — you understand others without burning out',
      'Good adaptability — you find your rhythm in various settings',
    ],
    challenges: [
      'May still get overwhelmed in high-pressure situations',
      'Sometimes wonder "am I too sensitive?"',
      'Still feel discomfort in extremely chaotic environments',
    ],
    keyMessage: 'You\'re in a sweet spot. Use HSP knowledge as a toolkit — deploy self-care strategies during high-stress periods, and enjoy your natural balance the rest of the time.',
  },
  mid: {
    title: 'You Have Moderate Sensitivity',
    summary: 'You\'ve found a balance between sensitivity and resilience. You may be sensitive in certain areas (like art or others\' emotions) while being less sensitive in others. This moderate level allows you to navigate most daily situations comfortably while retaining meaningful perceptiveness.',
    strengths: [
      'Strong environmental adaptability — few settings overwhelm you',
      'Emotional stability — not easily swayed by external moods',
      'Pragmatic — balance intuition with rational decision-making',
      'Social ease — you don\'t over-interpret others\' words and actions',
    ],
    challenges: [
      'Sometimes may lack nuance, missing subtle signals',
      'May need conscious effort in situations requiring deep empathy',
    ],
    keyMessage: 'You\'re in a comfortable middle ground. Your task is to discover which areas you\'re more sensitive in and which less, then consciously dial sensitivity up or down as situations demand.',
  },
  low: {
    title: 'You Have Lower Sensitivity',
    summary: 'You\'re relatively less reactive to sensory and emotional stimuli — this is a real advantage in many environments. You can stay focused amid chaos, remain calm under pressure, and aren\'t easily unsettled by minor changes. You tend to be practical, rational, and steady.',
    strengths: [
      'Calm and composed under high pressure',
      'Not easily disrupted by external stimuli',
      'More rational and decisive in decision-making',
      'Maintains efficiency amid change and chaos',
    ],
    challenges: [
      'May come across as less attuned in interpersonal situations',
      'May miss some subtle aesthetic or emotional experiences',
      'Might lack understanding when dealing with highly sensitive people',
    ],
    keyMessage: 'Lower sensitivity doesn\'t mean "coarse." It\'s a different nervous system configuration. Your task is to appreciate your strengths (stability, resilience) while consciously practicing openness in situations that call for nuance — like intimate relationships or artistic appreciation.',
  },
};

export const DIMENSION_REPORTS = {
  emotional: {
    name: 'Emotional Sensitivity',
    icon: '💙',
    whatItMeasures: 'How strongly you react to emotional stimuli — including how easily emotions are triggered, their depth and duration, and whether you tend to be overwhelmed by your own or others\' emotions.',
    levels: {
      high: {
        label: 'High Emotional Sensitivity',
        description: 'Your emotional system is highly responsive. When you\'re happy, you feel immense joy. When you\'re sad, it takes longer to recover. You might be the one who cries hardest at movies, or who falls into a deep mood from a single song. Your emotions aren\'t "overreactions" — your system is designed in high-fidelity mode, receiving raw, uncompressed emotional signals.',
        scenarios: [
          'A movie or book stays with you emotionally for days',
          'A careless remark from someone replays in your mind repeatedly',
          'During conflict, your heart races and you need substantial time to calm down',
          'You\'re moved by "small" things — a falling leaf, a kind word',
        ],
        tips: [
          'Create an "emotional buffer": pause 10 seconds between being triggered and responding',
          'Practice naming emotions precisely: not "I\'m bad" but "I\'m feeling anxious right now"',
          'Set a daily "emotional clearing" time: journal for 10 minutes to release accumulated feelings',
          'Avoid making important decisions during emotional peaks — wait until you\'ve regulated',
        ],
      },
      mid: { label: 'Moderate Emotional Sensitivity', description: 'Your emotional sensitivity sits in the middle range. You experience rich emotions but usually aren\'t completely overwhelmed by them. This gives you a good balance between empathy and rationality.', scenarios: ['You understand others\' emotions without absorbing them fully', 'Strong emotional experiences affect you but you recover fairly quickly', 'You usually make balanced judgments between emotion and reason'], tips: ['Continue your emotional awareness practice', 'Give yourself recovery time after major emotional events', 'Try occasionally diving deep into a feeling — expand your emotional range'] },
      low: { label: 'Lower Emotional Sensitivity', description: 'Your emotional system is relatively stable. You aren\'t easily triggered into strong emotional reactions by external stimuli. This is a major advantage in high-pressure environments, though it may sometimes come across as less "emotional."', scenarios: ['You stay calm and rational during crises', 'Others\' emotions don\'t easily infect you', 'You lean toward logic over intuition in decisions'], tips: ['Practice emotional awareness: 2 minutes daily asking "what am I feeling right now?"', 'Use art (music, film, literature) to expand your emotional range', 'In close relationships, consciously express your feelings — even if less intense than your partner\'s'] },
    },
  },
  sensory: {
    name: 'Sensory Sensitivity',
    icon: '💜',
    whatItMeasures: 'Your sensitivity to external sensory input — light, sound, smell, touch (fabrics, tags), temperature, and taste. Highly sensory-sensitive people have sharper sensory systems and notice environmental details others miss.',
    levels: {
      high: {
        label: 'High Sensory Sensitivity',
        description: 'Your sensory system operates in high definition. You can taste subtle spice layers in food, hear electrical humming others ignore, and sense the warmth or coolness of a room the moment you enter. But this fidelity means rough sensory input — harsh fluorescent lights, subway noise, synthetic fabric on skin — isn\'t just "a bit uncomfortable" for you; it\'s genuinely distressing.',
        scenarios: [
          'Sudden loud noises (a slammed door) make your heart race and take time to settle',
          'You\'re sensitive to fabric textures — tags or seams bother you',
          'Bright lights, especially cool-white fluorescents, make you tense and tired',
          'Your reaction to caffeine, medication, or alcohol is stronger than most',
          'Noisy restaurants make it hard to focus on conversation — you just want to leave',
        ],
        tips: [
          'Design your sensory environment: warm desk lamps instead of overhead lights; noise-canceling headphones are a necessity, not a luxury',
          'Identify your "sensory triggers": track for a week what environmental factors cause discomfort, then systematically reduce them',
          'Carry a "sensory emergency kit": earplugs, a comforting scent, a soft scarf — use when overstimulated',
          'Before entering stimulus-heavy places (malls, parties), pre-set your exit time and plan',
        ],
      },
      mid: { label: 'Moderate Sensory Sensitivity', description: 'Your sensory sensitivity is moderate. Most everyday environments don\'t bother you, but you have some sensory awareness. You usually don\'t notice subtle environmental changes unless you consciously pay attention.', scenarios: ['You work comfortably under most artificial lighting', 'You occasionally notice certain sounds or smells without being bothered', 'You appreciate food flavors without obsessing over details'], tips: ['Try "sensory meditation": close your eyes and focus on one sensory channel at a time', 'Optimize your work and sleep environment — better sensory conditions boost performance', 'Eliminating background noise helps when you need deep focus'] },
      low: { label: 'Lower Sensory Sensitivity', description: 'Your sensory threshold is relatively high. You\'re not easily bothered by environmental stimuli. You can work focused in a noisy café, don\'t notice clothing tags, and rarely pick up on subtle odor changes. This lets you stay comfortable across many environments.', scenarios: ['You feel comfortable in most environments regardless of lighting or noise', 'Clothing textures or tags don\'t bother you', 'Environmental changes rarely grab your attention'], tips: ['Practice noticing sensory details around you — it enriches daily experience', 'Consciously "savor" food, music, or nature — expand your sensory pleasure', 'When someone nearby is bothered by stimuli, try understanding rather than dismissing their experience'] },
    },
  },
  social: {
    name: 'Social Sensitivity',
    icon: '💚',
    whatItMeasures: 'Your awareness of social environments and others\' emotions. Highly socially sensitive people are natural "emotional radar" — they quickly read a room\'s emotional temperature, detect subtle social signals, and sense unspoken needs. But this means socializing drains them faster.',
    levels: {
      high: {
        label: 'High Social Sensitivity',
        description: 'You have powerful social antennae. In a group, you sense everyone\'s emotional state — who\'s tense, who\'s uncomfortable, who\'s covering something up. Friends may call you their "go-to person" because you understand what they haven\'t said aloud. But this awareness comes at a cost: socializing is high-energy expenditure, and after a few hours with people, you may need an entire day of solitude to recover.',
        scenarios: [
          'You notice subtle emotional shifts in others — a glance, a change in tone is enough',
          'In groups, you often sense mood changes or brewing conflict before others do',
          'After social events (even enjoyable ones), you need solitude to "recharge"',
          'Some people inexplicably drain your energy',
          'You care about others\' opinions and sometimes over-analyze your social performance',
        ],
        tips: [
          'Set a "social budget": treat socializing like money — a finite resource. Prioritize what matters and say "no" to the rest',
          'Build an "exit strategy": before any social event, decide in advance when and how you\'ll leave',
          'Differentiate "your emotions" from "others\' emotions": when you feel suddenly low or anxious, ask — is this mine, or did I absorb it?',
          'Find your best "social recharge" activity: walking, bathing, reading — discover what restores you fastest',
        ],
      },
      mid: { label: 'Moderate Social Sensitivity', description: 'Your social perceptiveness is at a comfortable level. You understand others\' emotions reasonably well without over-depleting yourself. You navigate most social situations with ease while maintaining your own sense of self.', scenarios: ['You feel at ease in most social settings without excessive stress or fatigue', 'You pick up on obvious social signals without over-interpreting every detail', 'You balance helping friends with protecting your own energy'], tips: ['Continue developing social intuition — notice subtle cues you might overlook', 'In deeper relationships, try more intentional empathy to strengthen connection', 'If socializing leaves you tired, honor that feeling and take recovery time'] },
      low: { label: 'Lower Social Sensitivity', description: 'Your emotions are relatively independent — you\'re not easily swayed by others\' moods or social dynamics. You usually maintain your own rhythm and emotional baseline regardless of surrounding emotional shifts.', scenarios: ['You hold your ground even when your views differ from the group\'s', 'Social activities don\'t exhaust you; you switch between social and solo easily', 'You don\'t obsess over the hidden meanings behind others\' words and actions'], tips: ['In important conversations, consciously observe body language and tone changes', 'Practice "active empathy": when someone shares emotions, try feeling what they feel, not just hearing the words', 'Remember: some people need more time to express feelings — patience is a gift'] },
    },
  },
  aesthetic: {
    name: 'Aesthetic Sensitivity',
    icon: '🧡',
    whatItMeasures: 'Your ability to perceive and enjoy beauty, art, and life\'s subtle pleasures. Highly aesthetically sensitive people feel near-physical resonance from music, can be moved to tears by a painting, and find overlooked beauty in daily life. This is one of the most precious gifts of the HSP trait.',
    levels: {
      high: {
        label: 'High Aesthetic Sensitivity',
        description: 'Beauty isn\'t decorative for you — it\'s essential. A good piece of music gives you goosebumps. A poem can make you cry. A thoughtfully designed space makes you feel safe and joyful. Your inner world is rich and nuanced; your imagination is vivid. You don\'t need anyone to tell you what\'s beautiful — you naturally know. This is your deepest resource. Don\'t dismiss it as "impractical"; it\'s what gives your life texture and depth.',
        scenarios: [
          'Music triggers strong physical reactions — goosebumps, heartbeat changes, sometimes tears',
          'You\'re highly attuned to spatial atmosphere — a well-arranged room brings you genuine comfort',
          'You find beauty in everyday details others overlook — rain reflecting on pavement, leaf textures, rhythm in prose',
          'You easily lose track of time immersed in a book, film, or artwork',
        ],
        tips: [
          'Integrate beauty into daily life: a beautiful object on your desk, a wallpaper that moves you — these small things genuinely soothe your nervous system',
          'Use creativity to digest emotions: writing, painting, photography, music — you don\'t need to be professional; expression itself heals',
          'Schedule regular "beauty dates" with yourself: solo museum visit, a concert, an afternoon in a park — this is nourishment, not indulgence',
          'Share your aesthetic discoveries: the beauty you see might be exactly what someone else needs — a post, a note, a song recommendation',
        ],
      },
      mid: { label: 'Moderate Aesthetic Sensitivity', description: 'You have some aesthetic perception — you can appreciate and enjoy art and beauty, but you\'re not overly absorbed by aesthetic experiences. You find joy in daily life while switching to pragmatic mode when needed.', scenarios: ['You enjoy good music and films without them derailing your day', 'You notice environmental comfort but don\'t obsess over every detail', 'Your creativity flows well when inspiration strikes'], tips: ['Expose yourself to diverse art forms — you may discover new sources of resonance', 'Try creating: write down feelings, photograph what you see — creation deepens aesthetic experience', 'Use beauty (music, nature, art) to regulate your state when stressed'] },
      low: { label: 'Lower Aesthetic Sensitivity', description: 'You lean toward the practical and rational. You\'re not strongly swayed by beauty or art. This is an advantage in efficiency-driven environments, but you may be missing out on life\'s rich sensory experiences.', scenarios: ['Artwork rarely moves you strongly — you focus more on function or information', 'Practicality matters more than aesthetics in your decisions', 'You might see time spent on "pure beauty" as a luxury'], tips: ['Spend 5 minutes daily deliberately noticing one beautiful detail — sunlight on a wall, coffee fragrance, an elegant sentence', 'Try an art form you\'ve never explored — classical music, ink painting, pottery', 'Remember: aesthetic sensitivity is trainable, like a muscle — the more you use it, the sharper it gets'] },
    },
  },
};

export function getPatternAnalysis(dimScores) {
  const patterns = [];
  const sorted = Object.entries(dimScores).sort((a, b) => b[1] - a[1]);
  const [top] = sorted;

  if (dimScores.emotional >= 65 && dimScores.aesthetic >= 65) {
    patterns.push({ title: '🎨 The Creative Sensitive', body: 'Your emotional and aesthetic sensitivity are both high — the classic "creative sensitive" profile. You feel deeply and can channel that feeling into beautiful expression. Many writers, musicians, and artists share this pattern. Keep creating — it\'s your best emotional outlet.' });
  }
  if (dimScores.sensory >= 65 && dimScores.emotional >= 65) {
    patterns.push({ title: '⚡ The Highly Reactive Sensitive', body: 'Both your sensory and emotional systems are finely tuned, meaning you react intensely to external stimuli. A harsh light or a hurtful word hits you harder than most. Actively managing your environment is essential. The silver lining: you also experience beauty and joy with equal intensity.' });
  }
  if (dimScores.sensory >= 65 && dimScores.social >= 65) {
    patterns.push({ title: '🛡️ The Environment-Dependent Sensitive', body: 'High sensitivity in both sensory and social dimensions means you face double pressure in stimulating social settings. Prioritize quiet, private, small gatherings. Your comfort depends heavily on the quality of your environment.' });
  }
  if (top[0] === 'social' && dimScores.sensory < 50) {
    patterns.push({ title: '🤝 The People-Sensitive', body: 'Your sensitivity is primarily interpersonal rather than sensory. You thrive in deep one-on-one conversations and may feel less affected by physical environments. This makes you a natural listener and communicator.' });
  }
  if (sorted.every(([, s]) => s >= 40 && s <= 65)) {
    patterns.push({ title: '⚖️ The Balanced Sensitive', body: 'Your four dimensions are relatively balanced. You maintain stability across various situations. Your flexibility is your strength — you can consciously develop specific dimensions as you choose.' });
  }
  return patterns;
}

export const BOOK_RECOMMENDATIONS = {
  beginner: [
    { title: 'The Highly Sensitive Person', author: 'Elaine N. Aron, Ph.D.', reason: 'The original classic. If you read only one book about HSP, make it this one. Comprehensive, research-backed, and deeply validating.' },
    { title: 'The Highly Sensitive Person\'s Workbook', author: 'Elaine N. Aron, Ph.D.', reason: 'Practical exercises to apply HSP insights to your daily life. Great follow-up to the main book.' },
  ],
  intermediate: [
    { title: 'Quiet: The Power of Introverts', author: 'Susan Cain', reason: 'While not exclusively about HSP, introversion and sensitivity significantly overlap. A powerful reframe of quiet traits as strengths.' },
    { title: 'The Empowered Highly Sensitive Person', author: 'Julie Bjelland', reason: 'Practical strategies for managing overstimulation and building resilience as an HSP.' },
  ],
  advanced: [
    { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', reason: 'For understanding how past experiences shape your nervous system\'s sensitivity. Dense but essential.' },
    { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', reason: 'Understand why your brain produces intense emotional reactions and how to engage your rational system for balance.' },
  ],
};

export function get30DayPlan(totalScore) {
  const tier = totalScore >= 80 ? 'high' : totalScore >= 60 ? 'midHigh' : 'mid';

  const weeklyThemes = {
    high: [
      { week: 1, theme: 'Awareness & Acceptance', focus: 'Understand your sensitivity patterns; stop self-criticism' },
      { week: 2, theme: 'Environment Design', focus: 'Actively reshape your physical and social spaces to reduce unnecessary stimulation' },
      { week: 3, theme: 'Boundary Practice', focus: 'Learn to say no, leave, and protect your energy' },
      { week: 4, theme: 'Leveraging Your Strengths', focus: 'Transform sensitivity from "burden" to "superpower"' },
    ],
    midHigh: [
      { week: 1, theme: 'Pattern Recognition', focus: 'Discover when and where your sensitivity shows up' },
      { week: 2, theme: 'Building Your Toolkit', focus: 'Collect self-care strategies that work for you' },
      { week: 3, theme: 'Communication Practice', focus: 'Express your needs and boundaries to others' },
      { week: 4, theme: 'Integration', focus: 'Weave sensitivity into your strengths and lifestyle' },
    ],
    mid: [
      { week: 1, theme: 'Sensitivity Scan', focus: 'Identify your sensitive and resilient dimensions' },
      { week: 2, theme: 'Deliberate Practice', focus: 'Train perception in less-sensitive dimensions' },
      { week: 3, theme: 'Environment Tuning', focus: 'Better surroundings improve quality of life at any sensitivity level' },
      { week: 4, theme: 'Finding Balance', focus: 'Discover your optimal point between sensitivity and resilience' },
    ],
  };

  const dailyTasks = {
    high: [
      ['Record 3 moments you felt overstimulated today', 'Give yourself 15 minutes of complete silence', 'Write 3 positive things about your sensitivity', 'Find and adjust one sensory irritant in your home', 'Practice one "gentle no" — decline something you don\'t want to do', 'Listen to music that moves you and fully immerse in it', 'Week review: what did you learn about yourself?'],
      ['Identify your sensory triggers — which lights/sounds/textures bother you', 'Set phone to Do Not Disturb for at least 4 hours', 'Notice your energy shifts during social situations', 'Buy one item that reduces sensory burden (earplugs, warm lamp, soft clothing)', 'Practice 5 minutes of meditation or deep breathing', 'Share your HSP discovery with a trusted friend', 'Week review: how effective were your environment changes?'],
      ['Before starting anything, ask: is this worth my energy?', 'Set a daily energy budget — only 3 truly important tasks', 'Tell someone your exit time before a social gathering begins', 'Politely but firmly decline an uncomfortable request', 'Write something you\'ve been wanting to say but haven\'t', 'Try one day without social media', 'Week review: what was hardest about setting boundaries?'],
      ['List 3 advantages of your sensitivity — genuinely compliment yourself', 'Use your aesthetic ability: photograph, write, arrange your space', 'Listen deeply to a friend without interrupting or judging', 'Write a short reflection on what you\'ve learned this month', 'Plan next month: how will you further leverage your sensitivity?', 'Review the 30 days: what\'s your biggest takeaway?', 'Congratulations! Reward yourself.'],
    ],
    midHigh: [
      ['Note 3 situations where sensitivity showed up today', 'Try 10 minutes of meditation — observe your thoughts', 'Write 3 neutral descriptions of your sensitivity (no judgment)', 'Identify one work factor that drains you', 'Practice saying "no" to a small thing', 'Listen to a favorite song with full attention', 'Week review: what patterns did you notice?'],
      ['List 3 self-care strategies that work for you', 'Rest before you\'re completely drained', 'Notice which people energize vs. drain you in social settings', 'Optimize your work/study environment — lighting, chair, noise level', 'Try mindful eating — focus entirely on one meal', 'Read one article about HSP', 'Week review: which strategies worked best?'],
      ['Practice expressing one genuine need to someone', 'Speak up when you\'re uncomfortable — don\'t hold it in', 'Set a daily social limit (e.g., one gathering max)', 'Write something you want to say but are afraid to (don\'t send it)', 'Try 5 minutes of deep breathing', 'Recall a time you successfully protected your boundaries', 'Week review: what made expressing needs difficult?'],
      ['List 3 life areas you want to enhance through sensitivity', 'Do one kind thing using your empathy today', 'Find one way to apply your sensitivity at work or in life', 'Create an energy recovery list — which activities recharge you fastest?', 'Write your personal growth goals for the next 3 months', 'Review your 30-day journey', 'Celebrate your progress!'],
    ],
    mid: [
      ['Complete the HSP self-test and read your results carefully', 'Today, notice 3 sensory details you usually overlook', 'Read one introductory article about HSP', 'Observe if any friends or colleagues seem particularly sensitive', 'Record 3 things that shifted your mood today', 'Eat one meal without looking at your phone — notice the flavors', 'Week review: which findings surprised you?'],
      ['Pick one dimension you scored lower on and practice it today', 'Practice "active listening" — just listen, don\'t plan your response', 'Visit a place you wouldn\'t normally pay attention to (park, gallery, concert)', 'Try describing your current feeling in 50 words', 'Ask a friend: what would you say I\'m sensitive/insensitive to?', 'Do something slightly uncomfortable but manageable — expand your comfort zone', 'Week review: did deliberate practice help?'],
      ['Optimize your sleep environment — blackout curtains, white noise, comfortable temperature', 'Create a small morning ritual: water before phone', 'Schedule a daily "stimulus-free time" — no screens', 'Learn a simple breathing technique (4-7-8 breathing)', 'Declutter your workspace — reduce visual chaos', 'When stressed, spend 5 minutes looking at nature outside', 'Week review: how much does environment affect you?'],
      ['Summarize: in what situations do you wish you were more sensitive? More resilient?', 'Create a simple "mode switching" strategy based on this', 'When empathy is needed, remind yourself to activate "sensitive mode"', 'When focus is needed, remind yourself to activate "resilient mode"', 'Write down the sensitivity strengths to develop and challenges to manage going forward', 'Review your 30-day journey', 'Set your plan for next month'],
    ],
  };

  return { themes: weeklyThemes[tier] || weeklyThemes.mid, tasks: dailyTasks[tier] || dailyTasks.mid };
}

export const LIFESTYLE_ADVICE = {
  career: {
    high: {
      suitable: [
        'Creative work (writing, design, art) — your aesthetic sensitivity is a competitive advantage',
        'One-on-one helping professions (counseling, coaching, education) — empathy is your superpower',
        'Deep-focus work (research, programming, analysis) — you thrive on depth over breadth',
        'Freelance or remote work — you control your environment',
      ],
      avoid: [
        'Open-plan offices — constant sensory and social stimulation will rapidly deplete you',
        'High-multitasking roles — parallel processing is your kryptonite',
        'High-conflict, high-pressure sales roles',
        'Jobs requiring constant travel or meeting large numbers of strangers',
      ],
    },
    midHigh: {
      suitable: ['Roles balancing analysis and intuition (product manager, project manager)', 'Education, training, mentoring', 'Specialist roles in small-to-medium teams'],
      avoid: ['Extreme open-plan offices', 'Zero-autonomy, micromanaged positions'],
    },
    mid: { suitable: ['Most careers work — you\'re at the sweet spot between sensitivity and resilience', 'Roles requiring flexible switching between different work modes are especially good'], avoid: [] },
  },
  relationships: {
    high: [
      'In close relationships, directly express your needs: "I need X because this is how my system works"',
      'Choose partners and friends who understand and respect your sensitivity — this isn\'t picky, it\'s self-care',
      'Explain HSP to your partner/friends proactively — give them a framework to understand you',
      'During conflicts, take a "pause break" — step away when overwhelmed, return when regulated',
      'Never apologize for being sensitive — it\'s a trait, not a flaw',
    ],
    midHigh: [
      'Share your sensitivity trait in important relationships — people don\'t always know when you need space',
      'Notice which relationships energize vs. drain you — adjust your social investments accordingly',
      'When tired, permit yourself to temporarily withdraw — relationships survive this',
    ],
    mid: [
      'Understand the highly sensitive people in your life — their reactions aren\'t "overreacting," their nervous system really is different',
      'Occasionally go deeper in relationships — discuss feelings, not just facts',
    ],
  },
  selfCare: {
    high: [
      'Treat solitude as essential nutrition, not avoidance — at least 30 minutes of pure alone time daily',
      'Practice "low-information diet": reduce social media and news intake — your system overloads faster',
      'Maintain regular sleep and meal schedules — your body reacts more to change; regularity stabilizes you',
      'Choose gentle exercise: yoga, walking, swimming suit you better than HIIT',
      'Reset regularly in nature — forests, beaches, parks; green spaces calm your nervous system',
      'Build a "pre-sleep buffer": no screens for the hour before bed; read or meditate instead',
    ],
    midHigh: [
      'Balance solitude and social time — both matter; find your ratio',
      'Build your "energy recovery list" — 3-5 activities that restore you quickly',
      'Pay attention to diet and sleep quality — they affect your mood more than you think',
    ],
    mid: [
      'Try some HSP self-care strategies — you may not need them, but experimenting costs nothing',
      'Maintain your current good habits — you\'re doing fine',
    ],
  },
};
