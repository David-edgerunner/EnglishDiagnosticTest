// ══════════════════════════════════════════════════
// ITEM BANK — Reading Items
// ══════════════════════════════════════════════════

export const READING_ITEMS = [
  {
    "item_id": "673a0953-dfc8-45db-b06b-5ee03a9d347f",
    "stem": "Read the text and answer the question.\n\n\"The café was completely empty when we arrived at 3pm. By 3:30, every table was taken and people were waiting at the door.\"\n\nWhat can we understand from this text?",
    "options": [
      "The café is always busy.",
      "The café became very popular very quickly that afternoon.",
      "The café has bad service.",
      "The writer didn't enjoy the café."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "A2",
    "irt_a_param": 0.9,
    "irt_b_param": -1.4,
    "irt_c_param": 0.25,
    "explanation_text": "The text tells us two things: the café was empty at 3pm, and full by 3:30. The change happened quickly (30 minutes). We can infer it became popular fast that day. We can't say it's 'always' busy — we only know about one afternoon.",
    "explanation_vi": "Quán cà phê từ trống trơn đến đầy khách trong 30 phút. 'Completely empty' → 'every table was taken' = đông khách rất nhanh. Suy luận: mức độ phổ biến tăng đột ngột trong buổi chiều đó.",
    "distractor_traps": {
      "0": "'Always busy' — overgeneralises from one instance; we only know about this one visit",
      "2": "Bad service — nothing in the text mentions service quality",
      "3": "Didn't enjoy — no information about the writer's feelings"
    },
    "goal_tags": [
      "A",
      "D",
      "E"
    ]
  },
  {
    "item_id": "fe0025f4-a9fa-49e1-9f0f-493e8f9d29d9",
    "stem": "Read the text and answer the question.\n\n\"My neighbour always smiles and says good morning. Last week, she brought me soup when I was ill. Yesterday, she helped me carry my shopping upstairs.\"\n\nWhat is the writer's neighbour like?",
    "options": [
      "She is a doctor.",
      "She is a kind and helpful person.",
      "She is the writer's best friend.",
      "She wants something from the writer."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "A2",
    "irt_a_param": 0.9,
    "irt_b_param": -1.5,
    "irt_c_param": 0.25,
    "explanation_text": "Three actions — smiling, bringing soup, carrying shopping — all point to kindness and helpfulness. We can infer this is the neighbour's character. We can't say she's a doctor (bringing soup doesn't mean medical care) or a best friend (she's described as 'neighbour').",
    "explanation_vi": "Luôn mỉm cười + mang súp khi ốm + giúp tưới cây = nhân hậu và hay giúp đỡ. Suy luận = rút ra kết luận từ tổng hợp các bằng chứng. Không phải bác sĩ (không có bằng chứng), không phải bạn thân nhất (chỉ là hàng xóm).",
    "distractor_traps": {
      "0": "Bringing soup when someone is ill doesn't make someone a doctor — it's a common neighbourly act",
      "2": "'Best friend' — the text calls her 'my neighbour,' not 'my friend'",
      "3": "Cynical reading — nothing in the text suggests ulterior motives"
    },
    "goal_tags": [
      "A",
      "D",
      "E"
    ]
  },
  {
    "item_id": "601fb885-f355-4bb9-9c7d-d167a206df8e",
    "stem": "Read the text and answer the question.\n\n\"The company announced record profits for the third consecutive quarter. However, internal documents obtained by journalists revealed that dozens of factory workers had not been paid for overtime during the same period.\"\n\nWhat does the text suggest about the company?",
    "options": [
      "The company is very successful and treats its workers well.",
      "The company's profits may have come partly at the expense of its workers.",
      "The journalists are trying to damage the company's reputation.",
      "The factory workers are planning to go on strike."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "B1",
    "irt_a_param": 1.3,
    "irt_b_param": 0,
    "irt_c_param": 0.2,
    "explanation_text": "The text creates a contrast: record profits on one side, unpaid overtime on the other. The word 'however' signals this contrast. The inference: the profits may be connected to not paying workers properly. The text doesn't state this directly — you have to connect the two facts.",
    "explanation_vi": "'Record profits' nhưng 'workers not paid for overtime' — từ 'however' tạo sự tương phản. Suy luận: lợi nhuận có thể đến từ việc không trả đủ lương cho công nhân. Bài đọc không nói thẳng — bạn phải nối hai sự kiện lại.",
    "distractor_traps": {
      "0": "Contradicted by the second sentence — workers weren't paid for overtime",
      "2": "The text doesn't evaluate the journalists' motives — it simply states what they found",
      "3": "A possible future consequence but nothing in the text mentions or implies a strike"
    },
    "goal_tags": [
      "A",
      "B",
      "C",
      "E"
    ]
  },
  {
    "item_id": "87896eef-be14-4760-a841-b91d9f08caf5",
    "stem": "Read the text and answer the question.\n\n\"After twenty years of teaching, Mr. Nguyen packed his desk, said goodbye to his colleagues, and walked out of the school for the last time. He paused at the gate and looked back at the building where he had spent half his life.\"\n\nHow does Mr. Nguyen most likely feel?",
    "options": [
      "He is angry about having to leave the school.",
      "He is relieved that his career is finally over.",
      "He feels a mixture of emotions as he leaves something meaningful behind.",
      "He is worried about finding a new job."
    ],
    "correct_choice": 2,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "B1",
    "irt_a_param": 1.3,
    "irt_b_param": 0.1,
    "irt_c_param": 0.2,
    "explanation_text": "'Paused at the gate and looked back' — this physical action reveals emotion. If he were simply relieved, he would walk away without stopping. If he were angry, he wouldn't look back fondly. The pause and backward glance suggest attachment and reflection. 'Half his life' reinforces how meaningful the place is to him.",
    "explanation_vi": "'Dừng lại ở cổng và nhìn lại' — hành động thể chất tiết lộ cảm xúc. Nếu chỉ nhẹ nhõm, ông sẽ đi thẳng. Nếu giận, sẽ không nhìn lại. Sự dừng lại và nhìn lại gợi ý sự gắn bó và suy tư. 'Nửa cuộc đời' nhấn mạnh ý nghĩa của nơi này.",
    "distractor_traps": {
      "0": "Nothing suggests anger — packing his desk and saying goodbye suggests a planned, peaceful departure",
      "1": "'Relieved' contradicts the pause and backward look — someone relieved doesn't linger",
      "3": "Nothing in the text mentions future employment or financial concern"
    },
    "goal_tags": [
      "A",
      "D",
      "E"
    ]
  },
  {
    "item_id": "029be2ea-5806-4e29-9b6b-7221ff7fd7f0",
    "stem": "Read the text and answer the question.\n\n\"The hotel website showed bright, spacious rooms with ocean views. When the Tran family arrived, they found a small room facing the car park. The bathroom light flickered, and the air conditioning made a constant rattling noise.\"\n\nWhat does the text imply about the hotel?",
    "options": [
      "The hotel was recently renovated.",
      "The hotel's online presentation did not match the reality.",
      "The Tran family booked the wrong room by mistake.",
      "The hotel was full, so they were given a different room."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "B1",
    "irt_a_param": 1.2,
    "irt_b_param": -0.1,
    "irt_c_param": 0.22,
    "explanation_text": "The text contrasts what the website showed (bright, spacious, ocean views) with what the family found (small, car park, broken fixtures). The gap between promise and reality is the core inference. The text doesn't say the family made a mistake or that the hotel was full.",
    "explanation_vi": "Văn bản tạo sự tương phản giữa hình ảnh trên trang web (sáng sủa, rộng rãi, hướng biển) và thực tế gia đình thấy (nhỏ, hướng bãi xe, nội thất hỏng). Khoảng trống giữa lời hứa và thực tế là suy luận chính. Văn bản không nói gia đình book nhầm hay khách sạn đã hết chỗ.",
    "distractor_traps": {
      "0": "'Recently renovated' contradicts the flickering light and rattling AC — these suggest poor maintenance",
      "2": "The text doesn't suggest a booking error — it presents the gap as the hotel's misrepresentation",
      "3": "Possible but not implied — the text attributes the problem to the hotel's website being misleading, not to capacity issues"
    },
    "goal_tags": [
      "A",
      "C",
      "D",
      "E"
    ]
  },
  {
    "item_id": "ae771d78-c2fb-4ee9-bd5f-1b1a6348f677",
    "stem": "Read the text and answer the question.\n\n\"The university's new admissions policy aims to increase diversity by considering applicants' socioeconomic backgrounds alongside academic performance. Critics argue that this approach undermines meritocracy, while supporters contend that academic performance itself is shaped by socioeconomic factors, making a purely grades-based system inherently biased.\"\n\nWhat position do the supporters of the policy hold?",
    "options": [
      "Academic grades are the only fair measure of student ability.",
      "Socioeconomic background is more important than grades.",
      "A grades-only system already favours privileged applicants, so additional context is needed.",
      "The university should eliminate academic requirements entirely."
    ],
    "correct_choice": 2,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "B2",
    "irt_a_param": 1.5,
    "irt_b_param": 0.7,
    "irt_c_param": 0.18,
    "explanation_text": "The supporters argue that academic performance is 'shaped by socioeconomic factors,' making a grades-only system 'inherently biased.' This means grades don't reflect pure ability — they reflect privilege too. Therefore, considering socioeconomic background compensates for an existing bias, not introduces a new one.",
    "explanation_vi": "Những người ủng hộ lập luận rằng thành tích học tập bị 'tác động bởi yếu tố kinh tế xã hội', khiến hệ thống chỉ dựa vào điểm số 'vốn dĩ đã thiên vị'. Điều này nghĩa là điểm số không chỉ phản ánh năng lực mà còn phản ánh đặc quyền. Vì vậy, xét yếu tố kinh tế xã hội là để bù đắp sự thiên vị sẵn có.",
    "distractor_traps": {
      "0": "This is the critics' implicit position, not the supporters'",
      "1": "The supporters don't argue background is 'more important' — they argue it should be considered 'alongside' grades",
      "3": "Extreme overinterpretation — the policy adds a factor, it doesn't eliminate academic requirements"
    },
    "goal_tags": [
      "A",
      "B",
      "E"
    ]
  },
  {
    "item_id": "ddf63ee4-40b9-4192-a4ad-e3b0a525fe1c",
    "stem": "Read the text and answer the question.\n\n\"A recent longitudinal study found that children who were read to daily before age five scored significantly higher on reading comprehension tests at age twelve than those who were not. The researchers noted, however, that families who read to their children daily also tended to have higher household incomes and more educated parents.\"\n\nWhat concern does the second sentence raise about the study's findings?",
    "options": [
      "The study proves that reading to children guarantees better academic outcomes.",
      "Higher income might be the real reason for the better test scores, not the reading itself.",
      "The study was too short to produce meaningful results.",
      "Parents with higher education are better at choosing books."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "B2",
    "irt_a_param": 1.6,
    "irt_b_param": 0.8,
    "irt_c_param": 0.18,
    "explanation_text": "The second sentence introduces a confounding variable: income and parent education correlate with both daily reading AND test scores. This means we can't be certain reading caused the better scores — the real cause might be the advantages that come with higher income. This is a correlation vs. causation problem.",
    "explanation_vi": "Câu thứ hai giới thiệu một biến số gây nhiễu: thu nhập và học vấn của phụ huynh tương quan với việc đọc sách hàng ngày VÀ điểm thi. Điều này nghĩa là ta không chắc việc đọc sách tạo ra điểm cao — nguyên nhân thực sự có thể là lợi thế từ thu nhập cao. Đây là vấn đề tương quan và nhân quả.",
    "distractor_traps": {
      "0": "The opposite of what the second sentence suggests — it raises doubt about the causal claim, not confirms it",
      "2": "'Longitudinal' (tracking subjects over years) means the study was long-term, not short",
      "3": "Book selection quality isn't mentioned — the concern is about confounding economic factors"
    },
    "goal_tags": [
      "A",
      "B",
      "E"
    ]
  },
  {
    "item_id": "a9c43774-f00e-4bf1-99cd-1da2a8e54ab1",
    "stem": "Read the text and answer the question.\n\n\"The pharmaceutical company published a study showing its new drug reduced symptoms in 70% of patients. However, the study only included patients with mild symptoms, excluded those taking other medications, and was funded entirely by the company itself.\"\n\nWhat is the author's likely purpose in mentioning these details?",
    "options": [
      "To celebrate the drug's success rate.",
      "To suggest the study's conclusions may not be reliable or generalisable.",
      "To encourage patients to ask their doctors about the drug.",
      "To explain why pharmaceutical research is so expensive."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "B2",
    "irt_a_param": 1.6,
    "irt_b_param": 0.9,
    "irt_c_param": 0.18,
    "explanation_text": "The author lists three limitations: narrow patient selection, exclusion criteria, and self-funding. Each one is a reason to question the study's conclusions. The author is not stating the study is wrong — they're highlighting reasons to be sceptical. 'However' signals that what follows will challenge the initial positive claim.",
    "explanation_vi": "Tác giả liệt kê ba hạn chế: lựa chọn bệnh nhân hẹp, tiêu chí loại trừ, và tự tài trợ. Mỗi yếu tố là một lý do để hoài nghi kết quả nghiên cứu. Tác giả không nói nghiên cứu sai — họ chỉ nhấn mạnh lý do để hoài nghi. Từ 'However' báo hiệu sự nghi ngờ đối với tuyên bố ban đầu.",
    "distractor_traps": {
      "0": "The limitations undermine the celebration, not reinforce it",
      "2": "Nothing in the text encourages patients to take action — it raises concerns, not recommendations",
      "3": "Research costs are not mentioned or implied"
    },
    "goal_tags": [
      "A",
      "B",
      "E"
    ]
  },
  {
    "item_id": "be916062-6816-4714-8827-a95bb3c2d33d",
    "stem": "Read the text and answer the question.\n\n\"The government's pledge to achieve carbon neutrality by 2050 has been met with cautious optimism by environmental groups. While they welcome the target, several organisations have pointed out that the pledge is accompanied by neither a detailed implementation plan nor legally binding intermediate milestones. One prominent climate scientist described the announcement as 'an excellent destination with no map and no road.'\"\n\nWhat is the climate scientist's view of the government's pledge?",
    "options": [
      "The goal is admirable but the lack of concrete planning makes it unlikely to be achieved.",
      "The government should set a more ambitious target than 2050.",
      "Environmental groups should be more supportive of the government's efforts.",
      "Carbon neutrality is not a realistic goal for any government."
    ],
    "correct_choice": 0,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "C1",
    "irt_a_param": 1.7,
    "irt_b_param": 1.3,
    "irt_c_param": 0.15,
    "explanation_text": "The metaphor 'an excellent destination with no map and no road' praises the goal ('excellent destination') while criticising the lack of a plan ('no map and no road'). The scientist accepts the ambition but doubts the execution. This is sophisticated hedged criticism — agreeing with the principle while challenging the practicality.",
    "explanation_vi": "Ẩn dụ 'một điểm đến tuyệt vời không có bản đồ và đường đi' khen ngợi mục tiêu nhưng chỉ trích việc thiếu kế hoạch thực hiện. Nhà khoa học chấp nhận tham vọng nhưng nghi ngờ cách thực thi. Đây là kiểu chỉ trích rào đón tinh tế — đồng ý về nguyên tắc nhưng nghi ngờ tính khả thi.",
    "distractor_traps": {
      "1": "The scientist doesn't challenge the target's ambition — they call it 'excellent'",
      "2": "The scientist is not commenting on environmental groups' attitudes",
      "3": "Calling the destination 'excellent' shows the scientist believes the goal is worthy, not unrealistic"
    },
    "goal_tags": [
      "A",
      "B",
      "C",
      "E"
    ]
  },
  {
    "item_id": "94bfd67a-f2b9-4394-a6a4-1bfb96bfe91e",
    "stem": "Read the text and answer the question.\n\n\"The rapid expansion of online education during the pandemic was initially celebrated as a democratisation of knowledge — anyone with an internet connection could access world-class instruction. Five years on, research consistently shows that online learning outcomes correlate strongly with students' pre-existing digital literacy, access to quiet study spaces, and stable internet connectivity — all of which are themselves correlated with socioeconomic status.\"\n\nWhat does the passage suggest about the 'democratisation of knowledge' claim?",
    "options": [
      "It has been proven correct by five years of evidence.",
      "It was idealistic — the same inequalities that exist offline have reproduced themselves online.",
      "Online education is less effective than in-person education for all students.",
      "Governments should invest more in internet infrastructure."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "C1",
    "irt_a_param": 1.8,
    "irt_b_param": 1.5,
    "irt_c_param": 0.15,
    "explanation_text": "The passage sets up the initial claim ('democratisation') then undercuts it: success online depends on digital literacy, quiet spaces, and internet quality — all tied to socioeconomic status. The promise of equal access masks unequal outcomes. The 'democratisation' claim was naive because it assumed equal conditions, which don't exist.",
    "explanation_vi": "Đoạn văn đưa ra tuyên bố ban đầu ('dân chủ hóa') rồi bác bỏ nó: thành công học trực tuyến phụ thuộc vào kỹ năng số, không không gian yên tĩnh, và chất lượng internet — tất cả đều gắn với tình trạng kinh tế xã hội. Tuyên bố 'dân chủ hóa' là ngây thơ vì nó giả định các điều kiện bình đẳng vốn không tồn tại.",
    "distractor_traps": {
      "0": "The research contradicts the claim, not supports it",
      "2": "The passage doesn't compare online vs. in-person — it says online outcomes vary by socioeconomic factors",
      "3": "Infrastructure investment might help but is not what the passage argues — it focuses on the reproduction of inequality"
    },
    "goal_tags": [
      "A",
      "B",
      "E"
    ]
  },
  {
    "item_id": "e65e489b-068c-43c7-8da7-9e9388363125",
    "stem": "Read the text and answer the question.\n\n\"First, preheat the oven to 180°C. Next, mix the flour and sugar in a large bowl. Then, add the eggs and butter. Finally, pour the mixture into a baking tin and bake for 25 minutes.\"\n\nWhat type of text is this?",
    "options": [
      "A news report",
      "A set of instructions",
      "A personal letter",
      "An advertisement"
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Text Structure",
    "cefr_difficulty": "A2",
    "irt_a_param": 0.9,
    "irt_b_param": -1.6,
    "irt_c_param": 0.25,
    "explanation_text": "The sequencing words (first, next, then, finally) and imperative verbs (preheat, mix, add, pour, bake) are signals of instructional text. Instructions tell someone how to do something in order. The topic (baking) is secondary — the structure is the key identifier.",
    "explanation_vi": "Các từ chỉ trình tự (first, next, then, finally) và động từ mệnh lệnh (preheat, mix, add, bake) là dấu hiệu của văn bản hướng dẫn. Văn bản hướng dẫn chỉ cho ai đó cách làm một việc theo thứ tự. Chủ đề (nướng bánh) chỉ là phụ — cấu trúc mới là yếu tố nhận diện chính.",
    "distractor_traps": {
      "0": "News reports describe events, not give commands",
      "2": "Personal letters use 'I/you' and discuss personal topics, not give step-by-step commands",
      "3": "Advertisements try to persuade you to buy something — this text simply instructs"
    },
    "goal_tags": [
      "A",
      "E"
    ]
  },
  {
    "item_id": "41b1fe4e-7c1b-4bab-b35b-5dbdee9c02fb",
    "stem": "Read the text and answer the question.\n\n\"Remote working has become increasingly common since 2020. Supporters argue that it increases productivity and improves work-life balance. Opponents, on the other hand, claim that it leads to isolation and weaker team collaboration. Recent surveys suggest that most employees prefer a hybrid model.\"\n\nHow is this text organised?",
    "options": [
      "Problem → Solution → Evaluation",
      "Topic introduction → Arguments for and against → Conclusion from evidence",
      "Chronological order from past to present",
      "Personal opinion supported by examples"
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Text Structure",
    "cefr_difficulty": "B1",
    "irt_a_param": 1.2,
    "irt_b_param": 0,
    "irt_c_param": 0.22,
    "explanation_text": "The text introduces a topic (remote working), presents supporters' views, then opponents' views ('on the other hand'), and concludes with survey evidence. This is a balanced argument structure — common in IELTS and academic writing. The signal words ('supporters argue,' 'opponents claim,' 'surveys suggest') reveal the structure.",
    "explanation_vi": "Văn bản giới thiệu chủ đề (làm việc từ xa), trình bày quan điểm của người ủng hộ, rồi đến người phản đối ('on the other hand'), và kết luận bằng dữ liệu khảo sát. Đây là cấu trúc lập luận cân bằng — phổ biến trong IELTS và văn bản học thuật.",
    "distractor_traps": {
      "0": "No problem is presented and no solution is proposed — it's a balanced discussion, not problem-solution",
      "2": "While '2020' is mentioned, the text is organised by viewpoints, not by chronological events",
      "3": "The text presents multiple perspectives, not a personal opinion — the author doesn't take a side"
    },
    "goal_tags": [
      "A",
      "B",
      "E"
    ]
  },
  {
    "item_id": "5b294e97-ea01-480d-ac17-5c43da9edd5e",
    "stem": "Read the text and answer the question.\n\n\"Paragraph 1: Coffee consumption has risen dramatically worldwide over the past two decades.\nParagraph 2: Several studies have linked moderate coffee consumption to health benefits, including reduced risk of certain diseases.\nParagraph 3: However, excessive consumption can lead to anxiety, insomnia, and increased heart rate.\nParagraph 4: Therefore, most health experts recommend limiting intake to three or four cups per day.\"\n\nWhat is the function of Paragraph 3 in the overall text?",
    "options": [
      "It provides the main argument of the text.",
      "It introduces a contrasting perspective to balance the previous paragraph.",
      "It summarises all the information presented so far.",
      "It gives a personal opinion about coffee."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Text Structure",
    "cefr_difficulty": "B1",
    "irt_a_param": 1.3,
    "irt_b_param": 0.2,
    "irt_c_param": 0.2,
    "explanation_text": "'However' at the start of Paragraph 3 is a contrast signal. Paragraph 2 discussed benefits; Paragraph 3 introduces risks. This balances the text before the recommendation in Paragraph 4. Recognising these 'pivot' paragraphs — where the argument shifts direction — is essential for IELTS reading.",
    "explanation_vi": "Từ 'However' ở đầu Đoạn 3 là dấu hiệu tương phản. Đoạn 2 thảo luận về lợi ích; Đoạn 3 giới thiệu rủi ro. Điều này làm cân bằng văn bản trước khi đưa ra khuyến nghị ở Đoạn 4. Nhận diện các đoạn 'bản lề' này — nơi lập luận đổi hướng — là rất quan trọng trong IELTS reading.",
    "distractor_traps": {
      "0": "Paragraph 3 presents a counterpoint, not the main argument — the main argument is the overall balanced assessment",
      "2": "It doesn't summarise — it introduces new, contrasting information",
      "3": "It presents factual health risks, not personal opinion"
    },
    "goal_tags": [
      "A",
      "B",
      "E"
    ]
  },
  {
    "item_id": "64fbfcac-f436-4959-b2cd-272f6f5f6f65",
    "stem": "Read the text and answer the question.\n\n\"While urbanisation has brought significant economic benefits to developing nations, it has also created unprecedented challenges in housing, sanitation, and public health. This paradox — growth that simultaneously enriches and endangers — requires policy solutions that acknowledge both dimensions rather than treating them as separate issues.\"\n\nWhat is the function of the phrase 'This paradox' in the text?",
    "options": [
      "It introduces a new topic unrelated to the first sentence.",
      "It summarises the tension described in the first sentence and sets up the argument that follows.",
      "It contradicts the idea that urbanisation has economic benefits.",
      "It provides a definition of urbanisation."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Text Structure",
    "cefr_difficulty": "B2",
    "irt_a_param": 1.5,
    "irt_b_param": 0.7,
    "irt_c_param": 0.18,
    "explanation_text": "'This paradox' is a cohesive device — it refers back to the tension in the first sentence (benefits vs. challenges) and names it. The dash ('—growth that simultaneously enriches and endangers—') explains the paradox. Then 'requires' launches the author's argument. This kind of summarise-and-pivot structure is common in academic writing.",
    "explanation_vi": "'This paradox' là một từ nối — nó ám chỉ sự căng thẳng ở câu đầu (lợi ích vs thách thức) và gọi tên nó. Phần nằm giữa dấu phẩy ngang giải thích nghịch lý đó. Sau đó, 'requires' mở đầu lập luận của tác giả. Cấu trúc tóm tắt-rồi-chuyển-hướng này rât phổ biến trong tiếng Anh học thuật.",
    "distractor_traps": {
      "0": "It refers directly to the first sentence's content — it's not a new topic",
      "2": "It doesn't contradict the benefits — it names the contradiction between benefits and challenges",
      "3": "Urbanisation was defined in the first sentence through its effects, not here"
    },
    "goal_tags": [
      "A",
      "B",
      "E"
    ]
  },
  {
    "item_id": "7b3cd7dd-280c-444c-83f6-c040bb5cae6a",
    "stem": "Read the text and answer the question.\n\n\"The assumption that technology inevitably improves educational outcomes has driven billions of dollars in investment over the past decade. Schools have purchased tablets, interactive whiteboards, and learning management systems at scale. Yet a growing body of research suggests that the impact of these investments on student achievement is modest at best and, in some cases, negligible.\"\n\nWhat is the author's rhetorical strategy in this passage?",
    "options": [
      "Presenting a popular belief, showing its consequences, then challenging it with evidence.",
      "Comparing two educational systems and recommending one.",
      "Describing a historical trend and predicting its future development.",
      "Arguing strongly in favour of technology in education."
    ],
    "correct_choice": 0,
    "skill": "Reading",
    "sub_skill": "Text Structure",
    "cefr_difficulty": "B2",
    "irt_a_param": 1.6,
    "irt_b_param": 0.9,
    "irt_c_param": 0.18,
    "explanation_text": "The passage has three moves: (1) state a widely held assumption ('technology improves outcomes'), (2) show how that assumption led to action ('billions in investment'), (3) undercut the assumption with evidence ('modest at best, negligible'). This setup-and-challenge structure is a classic academic rhetorical strategy.",
    "explanation_vi": "Đoạn văn có ba bước: (1) nêu một giả định phổ biến ('công nghệ cải thiện kết quả'), (2) cho thấy giả định đó dẫn đến hành động ('hàng tỷ đô la đầu tư'), (3) dùng bằng chứng để bác bỏ giả định đó ('modest at best, negligible'). Cấu trúc thiết-lập-rồi-bác-bỏ này là chiến lược học thuật kinh điển.",
    "distractor_traps": {
      "1": "No comparison between two systems — only one approach (technology investment) is discussed",
      "2": "No prediction is made about the future",
      "3": "The passage undermines the pro-technology position, not supports it"
    },
    "goal_tags": [
      "A",
      "B",
      "E"
    ]
  },
  {
    "item_id": "09b53bb9-27b9-4578-bde5-059f10a608bc",
    "stem": "Read the text and answer the question.\n\n\"It would be premature to conclude that remote work is universally preferable to office-based work. While the productivity data from 2020–2023 is broadly encouraging, these findings emerged during extraordinary circumstances — a global pandemic that eliminated alternatives. Whether similar productivity levels would persist in a context of genuine choice remains an open question.\"\n\nWhat is the author doing in this passage?",
    "options": [
      "Arguing that remote work is more productive than office work.",
      "Presenting evidence that remote work reduces productivity.",
      "Qualifying an apparently positive finding by questioning the conditions under which it was produced.",
      "Predicting that remote work will become the standard within ten years."
    ],
    "correct_choice": 2,
    "skill": "Reading",
    "sub_skill": "Text Structure",
    "cefr_difficulty": "B2",
    "irt_a_param": 1.5,
    "irt_b_param": 0.8,
    "irt_c_param": 0.18,
    "explanation_text": "The author acknowledges positive data ('broadly encouraging') but then questions its validity ('extraordinary circumstances,' 'eliminated alternatives,' 'open question'). This is academic hedging — accepting evidence while highlighting its limitations. The phrase 'it would be premature to conclude' is a classic hedge that signals careful, qualified reasoning.",
    "explanation_vi": "Tác giả công nhận dữ liệu tích cực ('broadly encouraging') nhưng sau đó đặt câu hỏi về tính hợp lệ của nó ('extraordinary circumstances'). Đây là cách nói rào đón — chấp nhận bằng chứng nhưng nhấn mạnh giới hạn của nó. Cụm 'it would be premature to conclude' cho thấy lập luận rất cẩn trọng.",
    "distractor_traps": {
      "0": "The author explicitly says it's 'premature' to reach this conclusion",
      "1": "The data is described as 'broadly encouraging,' not negative",
      "3": "No prediction is made — the author says the question 'remains open'"
    },
    "goal_tags": [
      "A",
      "B",
      "C",
      "E"
    ]
  },
  {
    "item_id": "ae1aba54-ccba-4279-978f-dc2651edbcf0",
    "stem": "Read the text and answer the question.\n\n\"The notion that economic growth is inherently incompatible with environmental sustainability has gained considerable traction in recent years. Proponents of 'degrowth' argue that finite planetary resources make perpetual expansion impossible. Yet this framing presents a false binary. A more nuanced reading of the evidence suggests that the relationship between growth and sustainability is mediated by institutional design, technological innovation, and — crucially — political will.\"\n\nWhat is the author's position relative to the 'degrowth' argument?",
    "options": [
      "Full agreement — the author believes growth must stop.",
      "Full rejection — the author believes growth and sustainability are completely compatible.",
      "Partial critique — the author accepts the concern but rejects the either/or framing.",
      "Neutrality — the author presents both sides without taking a position."
    ],
    "correct_choice": 2,
    "skill": "Reading",
    "sub_skill": "Text Structure",
    "cefr_difficulty": "C1",
    "irt_a_param": 1.7,
    "irt_b_param": 1.4,
    "irt_c_param": 0.15,
    "explanation_text": "The author's position is revealed through precise word choices: 'gained considerable traction' (acknowledges the argument's influence without endorsing it), 'false binary' (rejects the either/or frame), 'more nuanced reading' (signals their own position as more sophisticated). The author doesn't dismiss the concern — they reject the simplistic framing.",
    "explanation_vi": "Quan điểm của tác giả thể hiện qua từ vựng: 'gained considerable traction' (công nhận sức ảnh hưởng nhưng không ủng hộ), 'false binary' (bác bỏ khung nhị nguyên), 'more nuanced reading' (thể hiện lập trường tinh tế hơn). Tác giả không bác bỏ mối lo ngại — họ bác bỏ cách trình bày vấn đề qúa đơn giản.",
    "distractor_traps": {
      "0": "'False binary' shows the author disagrees with the degrowth framing, not agrees with it",
      "1": "The author doesn't say growth and sustainability are fully compatible — they say the relationship is 'mediated' by multiple factors",
      "3": "'False binary' and 'more nuanced reading' are the author's evaluative judgments, not neutral presentation"
    },
    "goal_tags": [
      "A",
      "B",
      "E"
    ]
  },
  {
    "item_id": "8de67870-3c8f-465e-b4ae-d07a192b17ee",
    "stem": "Read the text and answer the question.\n\n\"The increasing reliance on algorithmic decision-making in criminal justice — from predictive policing to sentencing recommendations — raises profound questions about accountability. When an algorithm recommends a longer sentence based on statistical patterns, who is responsible for that outcome? The developer who designed the model? The judge who accepted its recommendation? The institution that adopted it? The diffusion of responsibility across human and technical actors is perhaps the most troubling feature of algorithmic governance.\"\n\nWhat rhetorical technique does the author use in the middle of the passage?",
    "options": [
      "A series of rhetorical questions to highlight the complexity of assigning blame.",
      "Statistical evidence to prove that algorithms are biased.",
      "An anecdote about a specific court case.",
      "A direct quotation from a legal expert."
    ],
    "correct_choice": 0,
    "skill": "Reading",
    "sub_skill": "Text Structure",
    "cefr_difficulty": "C1",
    "irt_a_param": 1.8,
    "irt_b_param": 1.5,
    "irt_c_param": 0.15,
    "explanation_text": "The three questions ('The developer? The judge? The institution?') are rhetorical — the author isn't expecting answers. Instead, the rapid succession of possible responsible parties illustrates the problem: responsibility is so dispersed that no one party is clearly accountable. This technique makes the abstract concept of 'diffusion of responsibility' concrete and immediate.",
    "explanation_vi": "Ba câu hỏi ('The developer? The judge? The institution?') là câu hỏi tu tu — tác giả không mong đợi câu trả lời. Việc liên tiếp đưa ra các bên có thể chịu trách nhiệm nhằm minh họa vấn đề: trách nhiệm bị phân tán đến mức không ai thực sự phải chịu. Kỹ thuật này làm cho khái niệm trừu tượng trở nên cụ thể.",
    "distractor_traps": {
      "1": "No statistics or data are presented anywhere in the passage",
      "2": "No specific case is mentioned — the passage discusses the general pattern",
      "3": "No quotation from any external source appears in the passage"
    },
    "goal_tags": [
      "A",
      "B",
      "E"
    ]
  },
  {
    "item_id": "ea8a9c40-6a38-43ad-b4d3-8f8acff1fa78",
    "stem": "I wanted to go to the beach. ______, it started raining, so we stayed home.",
    "options": [
      "Because",
      "However",
      "Also",
      "For example"
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Cohesive Devices",
    "cefr_difficulty": "A2",
    "irt_a_param": 0.9,
    "irt_b_param": -1.4,
    "irt_c_param": 0.25,
    "explanation_text": "'However' introduces a contrast — the writer wanted to go (positive), but rain stopped them (negative). 'However' is one of the most important linking words: it signals that the next idea contrasts with the previous one. 'Because' gives a reason, 'also' adds information, and 'for example' gives an illustration.",
    "explanation_vi": "'However' giới thiệu sự tương phản — người viết muốn đi (tích cực), nhưng mưa đã ngăn họ lại (tiêu cực). 'However' báo hiệu ý tiếp theo tương phản với ý trước đó. 'Because' đưa ra lý do, 'also' dùng để bổ sung thông tin, và 'for example' dùng để đưa ra ví dụ.",
    "distractor_traps": {
      "0": "'Because' introduces a cause, but the rain is a new contrasting event, not a reason for wanting to go",
      "2": "'Also' adds similar information — rain is not similar to wanting to go to the beach",
      "3": "'For example' introduces an illustration of a previous point — rain is not an example of wanting to go to the beach"
    },
    "goal_tags": [
      "A",
      "B",
      "E"
    ]
  },
  {
    "item_id": "9ac74a69-0d18-4684-99be-3ef94d53ce3e",
    "stem": "The government increased funding for public schools. ______, test scores improved significantly within two years.",
    "options": [
      "Nevertheless",
      "In contrast",
      "As a result",
      "Meanwhile"
    ],
    "correct_choice": 2,
    "skill": "Reading",
    "sub_skill": "Cohesive Devices",
    "cefr_difficulty": "B1",
    "irt_a_param": 1.2,
    "irt_b_param": -0.1,
    "irt_c_param": 0.22,
    "explanation_text": "'As a result' shows cause and effect: funding went up → scores improved. This is a consequence connector. 'Nevertheless' would signal an unexpected outcome. 'In contrast' would introduce an opposite situation. 'Meanwhile' would signal events happening at the same time.",
    "explanation_vi": "'As a result' thể hiện nhân quả: tiền tài trợ tăng lên → điểm số cải thiện. Đây là từ nối chỉ kết quả. 'Nevertheless' sẽ báo hiệu một kết quả bất ngờ. 'In contrast' giới thiệu tình huống trái ngược. 'Meanwhile' báo hiệu các sự kiện xảy ra cùng lúc.",
    "distractor_traps": {
      "0": "'Nevertheless' signals an outcome that contradicts expectations — but improved scores are the expected result of more funding",
      "1": "'In contrast' introduces an opposing idea — but the second sentence is a consequence, not a contrast",
      "3": "'Meanwhile' shows simultaneous events — but the scores improved 'within two years,' showing cause-effect, not simultaneity"
    },
    "goal_tags": [
      "A",
      "B",
      "E"
    ]
  },
  {
    "item_id": "71c636e9-a3e4-487f-badb-61880ce85f50",
    "stem": "Many people believe that social media brings people together. ______, research suggests that heavy social media use can actually increase feelings of loneliness.",
    "options": [
      "In addition",
      "On the contrary",
      "Similarly",
      "As a result"
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Cohesive Devices",
    "cefr_difficulty": "B1",
    "irt_a_param": 1.3,
    "irt_b_param": 0.1,
    "irt_c_param": 0.2,
    "explanation_text": "'On the contrary' directly contradicts what came before. People believe social media connects → research shows it increases loneliness. This is a direct opposition, not just a contrast (which would use 'however'). 'On the contrary' is stronger than 'however' — it says the opposite is true.",
    "explanation_vi": "'On the contrary' trực tiếp mâu thuẫn với điều vừa nói. Mọi người tin mạng xã hội kết nối → nghiên cứu cho thấy nó làm tăng cô đơn. Đây là sự đối lập trực tiếp, thay vì chỉ tương phản (như dùng 'however'). Nó mạnh hơn 'however' — nó nói rằng điều ngược lại mới đúng.",
    "distractor_traps": {
      "0": "'In addition' adds a supporting point — but the second sentence contradicts the first",
      "2": "'Similarly' shows agreement between two ideas — the opposite of what's happening here",
      "3": "'As a result' shows cause-effect — but loneliness isn't a result of the belief; it contradicts it"
    },
    "goal_tags": [
      "A",
      "B",
      "D",
      "E"
    ]
  },
  {
    "item_id": "3c5e5db2-44d1-43c0-b584-e3a7457ab4d8",
    "stem": "The initial findings were promising. ______, the researchers cautioned that the sample size was too small to draw definitive conclusions.",
    "options": [
      "Furthermore",
      "Likewise",
      "Nonetheless",
      "Accordingly"
    ],
    "correct_choice": 2,
    "skill": "Reading",
    "sub_skill": "Cohesive Devices",
    "cefr_difficulty": "B2",
    "irt_a_param": 1.5,
    "irt_b_param": 0.6,
    "irt_c_param": 0.18,
    "explanation_text": "'Nonetheless' means 'despite what was just said' — it's a formal alternative to 'however' or 'even so.' The findings were promising, but the researchers still had concerns. 'Nonetheless' is particularly useful in academic writing for introducing caveats after positive statements.",
    "explanation_vi": "'Nonetheless' có nghĩa là 'mặc dù điều vừa được nói' — nó trang trọng hơn 'however'. Các phát hiện rất hứa hẹn, nhưng các nhà nghiên cứu vẫn đưa ra cảnh báo. 'Nonetheless' đặc biệt hữu ích trong bài viết học thuật để giới thiệu các lưu ý đi sau các tuyên bố tích cực.",
    "distractor_traps": {
      "0": "'Furthermore' adds supporting information — but the caution about sample size is a limitation, not additional support",
      "1": "'Likewise' shows similarity — the caution is not similar to the promising findings",
      "3": "'Accordingly' means 'as a logical consequence' — but the caution is a contrast, not a consequence of the promising results"
    },
    "goal_tags": [
      "A",
      "B",
      "E"
    ]
  },
  {
    "item_id": "e1c991f1-b2f9-4ddc-9b85-38a8c86a3266",
    "stem": "Several factors contributed to the project's failure. ______, the budget was cut by forty per cent midway through. ______, key personnel resigned during the critical implementation phase.",
    "options": [
      "For instance / Moreover",
      "However / Therefore",
      "In contrast / Similarly",
      "Consequently / Nevertheless"
    ],
    "correct_choice": 0,
    "skill": "Reading",
    "sub_skill": "Cohesive Devices",
    "cefr_difficulty": "B2",
    "irt_a_param": 1.5,
    "irt_b_param": 0.8,
    "irt_c_param": 0.18,
    "explanation_text": "'For instance' introduces the first specific example of the 'several factors.' 'Moreover' adds a second contributing factor. The structure is: general claim → first example → additional example. In academic writing, 'for instance' and 'moreover' are standard tools for building a detailed argument.",
    "explanation_vi": "'For instance' dẫn dắt ví dụ cụ thể đầu tiên của 'several factors'. 'Moreover' bổ sung yếu tố thứ hai. Cấu trúc là: nhận định chung → ví dụ thứ nhất → ví dụ bổ sung. Trong tiếng Anh học thuật, đây là cách tiêu chuẩn để xây dựng một lập luận chặt chẽ.",
    "distractor_traps": {
      "1": "'However' would signal contrast, but both sentences support the same point (reasons for failure). 'Therefore' shows consequence, but the second factor isn't caused by the first",
      "2": "'In contrast' would mean the second factor opposes the first. 'Similarly' could work but doesn't fit as well as 'moreover' for adding a distinct additional factor",
      "3": "'Consequently' would mean the budget cut caused the failure (possible but not the logical structure here). 'Nevertheless' would contradict — the resignations are not a silver lining"
    },
    "goal_tags": [
      "A",
      "B",
      "C",
      "E"
    ]
  },
  {
    "item_id": "335eaa71-e6e1-40e4-8c1e-4d3280766b35",
    "stem": "The data unequivocally supports the hypothesis that green spaces improve mental health outcomes. ______, this finding should not be taken to mean that urban planners can solve mental health crises through park construction alone.",
    "options": [
      "That said",
      "In other words",
      "By the same token",
      "To that end"
    ],
    "correct_choice": 0,
    "skill": "Reading",
    "sub_skill": "Cohesive Devices",
    "cefr_difficulty": "C1",
    "irt_a_param": 1.7,
    "irt_b_param": 1.3,
    "irt_c_param": 0.15,
    "explanation_text": "'That said' is an advanced discourse marker meaning 'despite what I just stated, here is a qualification.' It acknowledges the previous point as valid while introducing a limitation. It's more nuanced than 'however' — it doesn't contradict the previous point, it narrows its implications.",
    "explanation_vi": "'That said' là một từ nối nâng cao nghĩa là 'mặc dù điều tôi vừa nêu, sau đây là điều lưu ý'. Nó công nhận luận điểm trên là đúng trong khi đưa ra giới hạn. Nó tinh tế hơn 'however' — nó không mâu thuẫn với luận điểm trên, chỉ thu hẹp hàm ý của nó.",
    "distractor_traps": {
      "1": "'In other words' would rephrase the previous idea — but the second sentence introduces a new, limiting point",
      "2": "'By the same token' means 'for the same reason' — it extends an argument, but the second sentence limits it",
      "3": "'To that end' means 'in order to achieve that goal' — but the second sentence is a caution, not a purposeful action"
    },
    "goal_tags": [
      "A",
      "B",
      "E"
    ]
  },
  {
    "item_id": "d924a463-d3b9-4f41-ad74-def7b7c3f783",
    "stem": "The committee's recommendation was unanimous. ______, not all members were equally enthusiastic — several expressed reservations during the private deliberations that preceded the public vote.",
    "options": [
      "Be that as it may",
      "In light of this",
      "As a consequence",
      "For all intents and purposes"
    ],
    "correct_choice": 0,
    "skill": "Reading",
    "sub_skill": "Cohesive Devices",
    "cefr_difficulty": "C1",
    "irt_a_param": 1.8,
    "irt_b_param": 1.6,
    "irt_c_param": 0.15,
    "explanation_text": "'Be that as it may' is a formal concessive marker meaning 'accepting that the previous statement is true, what follows reveals a complication.' It's more sophisticated than 'however' or 'nevertheless' — it explicitly concedes the previous point before introducing the complication. Used in academic, legal, and diplomatic writing.",
    "explanation_vi": "'Be that as it may' là một cụm từ nhượng bộ trang trọng nghĩa là 'dù điều đó có thể là sự thật, điều tiếp theo sẽ trình bày một sự phức tạp'. Nó cao cấp hơn 'however' — vì nó thừa nhận luận điểm trên một cách rõ ràng trước khi chỉ ra vấn đề.",
    "distractor_traps": {
      "1": "'In light of this' means 'considering what was just said' and would introduce a consequence or action, not a complication",
      "2": "'As a consequence' shows cause-effect — but the reservations aren't caused by the unanimity; they complicate it",
      "3": "'For all intents and purposes' means 'effectively' or 'in practice' — it's a summing-up phrase, not a concessive marker"
    },
    "goal_tags": [
      "A",
      "B",
      "C",
      "E"
    ]
  },
  {
    "item_id": "b2v2-0024",
    "format_type": "sentence_reorder",
    "stem": "Which arrangement correctly sequences these sentences into a coherent paragraph?\n\n1: However, this growth has not been without consequence.\n2: Urban populations worldwide have expanded rapidly over the past century.\n3: Policymakers must now grapple with issues of infrastructure, housing, and environmental sustainability.\n4: Cities have absorbed millions of rural migrants in search of better opportunities.",
    "options": [
      "2-4-1-3",
      "1-2-3-4",
      "4-2-1-3",
      "2-1-4-3"
    ],
    "correct_choice": 0,
    "skill": "Reading",
    "sub_skill": "Text Structure",
    "cefr_difficulty": "B2",
    "irt_a_param": 1.4,
    "irt_b_param": 0.85,
    "irt_c_param": 0.17,
    "explanation_text": "Correct order: general claim (2) → supporting detail (4) → contrast/pivot (1) → consequence/solution (3). Sentence 1's 'However' signals a pivot, so it must follow positive information.",
    "explanation_vi": "Thứ tự đúng: luận điểm chung (2) → chi tiết hỗ trợ (4) → câu chuyển hướng (1) → hệ quả/giải pháp (3). 'However' trong câu 1 là tín hiệu chuyển hướng — nó phải đứng sau thông tin tích cực. Khi sắp xếp đoạn văn, hãy tìm các từ nối để xác định vị trí từng câu.",
    "distractor_traps": {
      "1": "Starts with 'However' — learners may miss that contrast needs a preceding positive statement.",
      "2": "Places the supporting detail first, disrupting the general-to-specific flow.",
      "3": "Places the contrast immediately after the general claim, skipping the supporting detail."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v2-0028",
    "format_type": "best_paraphrase",
    "stem": "Which sentence best expresses the meaning of: 'Access to clean water remains elusive for many communities in the developing world.'",
    "options": [
      "Many communities in developing countries find clean water readily available.",
      "Developing countries have recently gained access to clean water.",
      "Clean water is still difficult for many communities in poorer countries to obtain.",
      "Some communities in rich countries struggle to access clean water."
    ],
    "correct_choice": 2,
    "skill": "Reading",
    "sub_skill": "Cohesive Devices",
    "cefr_difficulty": "B1",
    "irt_a_param": 1.2,
    "irt_b_param": -0.1,
    "irt_c_param": 0.2,
    "explanation_text": "'Elusive' = hard to find or obtain; 'remains' = still the case now; 'developing world' = poorer countries. Only option C captures all three elements accurately.",
    "explanation_vi": "Ba yếu tố cần nắm: 'elusive' = khó tìm/đạt được, 'remains' = vẫn còn như vậy đến hiện tại, 'developing world' = các nước đang phát triển. Chỉ đáp án C thể hiện đủ cả ba yếu tố này một cách chính xác.",
    "distractor_traps": {
      "0": "Direct opposite — 'readily available' vs 'elusive'.",
      "1": "'Recently gained' contradicts 'remains elusive'.",
      "3": "Changes 'developing world' to 'rich countries' — a factual distortion."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v2-0039",
    "format_type": "best_paraphrase",
    "stem": "Which sentence most closely captures the meaning of: 'The author implies that institutional neglect contributed to the crisis, without stating so explicitly.'",
    "options": [
      "The author states clearly that institutions caused the crisis.",
      "The author suggests, indirectly, that institutions played a role in causing the crisis.",
      "The author argues that institutions had nothing to do with the crisis.",
      "The author denies that institutional neglect was a factor."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Author's Purpose",
    "cefr_difficulty": "C1",
    "irt_a_param": 1.6,
    "irt_b_param": 1.35,
    "irt_c_param": 0.14,
    "explanation_text": "Key contrast: 'implies' ≠ 'states'. Only option B correctly preserves both the indirectness ('indirectly', 'suggests') and the causal claim. Options A and C distort one element each.",
    "explanation_vi": "Điểm mấu chốt: 'implies' (ngụ ý) ≠ 'states' (khẳng định trực tiếp). Chỉ đáp án B giữ nguyên cả tính gián tiếp ('indirectly', 'suggests') lẫn mối quan hệ nhân quả. Các đáp án khác làm sai lệch một trong hai yếu tố này.",
    "distractor_traps": {
      "0": "Conflates 'imply' with 'state explicitly' — a common reading comprehension error.",
      "2": "Reverses the causal attribution entirely.",
      "3": "'Denies' is the opposite of 'implies' — learners who misread 'without stating so explicitly' may choose this."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v2-0045",
    "format_type": "sentence_reorder",
    "stem": "Which sequence of sentences forms a coherent academic paragraph?\n\n1: As a result, the intervention proved far less effective than anticipated.\n2: The study aimed to assess the impact of early nutrition programmes on child development.\n3: Furthermore, participants dropped out at a higher rate than expected.\n4: However, implementation was hindered by insufficient funding and poor community engagement.",
    "options": [
      "2-4-3-1",
      "1-2-3-4",
      "2-3-4-1",
      "4-2-1-3"
    ],
    "correct_choice": 0,
    "skill": "Reading",
    "sub_skill": "Cohesive Devices",
    "cefr_difficulty": "B2",
    "irt_a_param": 1.42,
    "irt_b_param": 0.9,
    "irt_c_param": 0.17,
    "explanation_text": "Logical order: topic/aim (2) → problem 1 (4, 'However') → problem 2 (3, 'Furthermore') → consequence (1, 'As a result'). Each cohesive device signals the relationship to the previous sentence.",
    "explanation_vi": "Thứ tự logic: chủ đề/mục tiêu (2) → vấn đề 1 (4, 'However') → vấn đề 2 (3, 'Furthermore') → hệ quả (1, 'As a result'). Mỗi từ nối báo hiệu mối quan hệ với câu trước. Khi sắp xếp đoạn văn, hãy đọc các từ nối trước để xác định trật tự.",
    "distractor_traps": {
      "1": "Starts with 'As a result' — no prior cause established.",
      "2": "Puts problem 2 before problem 1, breaking the 'However...Furthermore' logical chain.",
      "3": "Starts with the contrasting problem before the topic sentence."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v2-0048",
    "format_type": "best_paraphrase",
    "stem": "Which sentence most closely expresses the meaning of: 'The phenomenon is by no means confined to urban areas.'",
    "options": [
      "The phenomenon only occurs in urban areas.",
      "The phenomenon does not occur in urban areas.",
      "The phenomenon is not limited to urban areas.",
      "The phenomenon rarely occurs outside urban areas."
    ],
    "correct_choice": 2,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "B2",
    "irt_a_param": 1.4,
    "irt_b_param": 0.95,
    "irt_c_param": 0.16,
    "explanation_text": "'By no means confined to' = certainly not limited to. Option C is the only one that preserves this meaning. Options A and D are opposites; option B removes urban areas entirely.",
    "explanation_vi": "'By no means confined to' = chắc chắn không chỉ giới hạn ở. Đáp án C là duy nhất giữ đúng nghĩa này. Các đáp án A và D có nghĩa ngược lại; đáp án B loại bỏ hoàn toàn khu vực đô thị — sai so với nguyên văn.",
    "distractor_traps": {
      "0": "Opposite meaning — learners may parse 'by no means' as an intensifier rather than a negator.",
      "1": "Removes urban areas from the equation — too extreme.",
      "3": "'Rarely' creates a partial restriction that contradicts 'by no means'."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v2-0058",
    "format_type": "best_paraphrase",
    "stem": "Which sentence most closely expresses the meaning of: 'The research findings lend credence to the theory that sleep deprivation impairs cognitive function.'",
    "options": [
      "The research proves conclusively that poor sleep causes cognitive damage.",
      "The research findings support the idea that not sleeping enough harms thinking ability.",
      "The research suggests that cognitive function affects sleep quality.",
      "The research findings contradict the theory about sleep and the brain."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Author's Purpose",
    "cefr_difficulty": "C1",
    "irt_a_param": 1.65,
    "irt_b_param": 1.38,
    "irt_c_param": 0.14,
    "explanation_text": "'Lend credence to' = support/give credibility to, not prove conclusively. 'Sleep deprivation' = not sleeping enough; 'impairs' = harms; 'cognitive function' = thinking ability. Option A over-claims; C and D distort the direction.",
    "explanation_vi": "'Lend credence to' = ủng hộ/tăng độ tin cậy cho, không phải chứng minh hoàn toàn. 'Sleep deprivation' = thiếu ngủ; 'impairs' = làm suy giảm; 'cognitive function' = chức năng nhận thức. Đáp án A khẳng định quá mức; C và D làm sai hướng của mối quan hệ.",
    "distractor_traps": {
      "0": "'Lend credence' sounds strong — learners conflate support with proof.",
      "2": "Reverses the causal direction: sleep → cognition becomes cognition → sleep.",
      "3": "'Contradict' is the opposite of 'lend credence to'."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v2-0065",
    "format_type": "best_paraphrase",
    "stem": "Which sentence best expresses the meaning of: 'The policy has drawn criticism from both sides of the debate.'",
    "options": [
      "The policy is supported by all sides in the debate.",
      "The policy has been criticised by people who disagree with each other.",
      "The policy has attracted criticism only from its opponents.",
      "The debate has been critical of all policies."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "B1",
    "irt_a_param": 1.22,
    "irt_b_param": 0.1,
    "irt_c_param": 0.2,
    "explanation_text": "'Both sides of the debate' implies people with opposing views, so criticism comes from people who themselves disagree with each other. Option B captures this accurately. C limits criticism to one side; A inverts the meaning.",
    "explanation_vi": "'Both sides of the debate' nghĩa là những người có quan điểm đối lập nhau cùng chỉ trích. Đáp án B nắm đúng ý này. Đáp án C sai vì giới hạn chỉ trích ở một phía; đáp án A đảo ngược hoàn toàn nghĩa gốc.",
    "distractor_traps": {
      "0": "Opposite meaning — 'criticism' becomes 'supported by'.",
      "2": "Partially right but misses that both sides criticise.",
      "3": "Reverses subject and object; changes meaning entirely."
    },
    "goal_tags": [
      "E"
    ]
  },
  {
    "item_id": "b2v2-0072",
    "format_type": "sentence_reorder",
    "stem": "Which sentence arrangement creates a coherent academic paragraph?\n\n1: This shift has been driven by advances in digital technology and changing consumer preferences.\n2: Traditional print media has experienced a significant decline over the past two decades.\n3: In response, many publishers have adopted hybrid models combining print and digital content.\n4: Advertising revenues, once the financial backbone of newspapers, have migrated to online platforms.",
    "options": [
      "2-4-1-3",
      "1-2-3-4",
      "2-1-4-3",
      "4-1-2-3"
    ],
    "correct_choice": 2,
    "skill": "Reading",
    "sub_skill": "Text Structure",
    "cefr_difficulty": "B2",
    "irt_a_param": 1.42,
    "irt_b_param": 0.92,
    "irt_c_param": 0.16,
    "explanation_text": "Order: general claim of decline (2) → cause of decline (1, 'This shift') → specific consequence: ad revenue loss (4) → industry response (3, 'In response'). Sentence 1 refers to 'this shift', which must follow a claim about change.",
    "explanation_vi": "Thứ tự: luận điểm chung về sự suy giảm (2) → nguyên nhân (1, 'This shift') → hệ quả cụ thể: mất doanh thu quảng cáo (4) → phản ứng của ngành (3, 'In response'). Câu 1 dùng 'this shift' — phải đứng sau câu đề cập đến sự thay đổi. Từ chỉ thị 'this/these' là tín hiệu quan trọng để sắp xếp.",
    "distractor_traps": {
      "0": "Puts the ad revenue loss before the cause, breaking the cause→effect chain.",
      "1": "Starts with causes before establishing the problem.",
      "3": "Opens with a specific consequence before the general claim is made."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v2-0074",
    "format_type": "best_paraphrase",
    "stem": "Which sentence most closely expresses the meaning of: 'The author stops short of attributing the famine entirely to government mismanagement.'",
    "options": [
      "The author claims the famine was entirely caused by government mismanagement.",
      "The author does not completely blame the famine on government mismanagement.",
      "The author denies that government mismanagement played any role in the famine.",
      "The author argues that government mismanagement was not a significant factor."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Author's Purpose",
    "cefr_difficulty": "C1",
    "irt_a_param": 1.68,
    "irt_b_param": 1.45,
    "irt_c_param": 0.13,
    "explanation_text": "'Stops short of' = does not go as far as. So the author partially, but not fully, blames the government. Option B precisely captures 'not completely'. Options A and C are opposite extremes; D implies the author downplays the role.",
    "explanation_vi": "'Stops short of' = không đi xa đến mức. Tác giả một phần quy trách nhiệm cho chính phủ nhưng không hoàn toàn. Đáp án B nắm đúng sắc thái 'không hoàn toàn'. Đáp án A và C là hai thái cực đối lập; D ngụ ý tác giả giảm nhẹ vai trò của chính phủ — sai.",
    "distractor_traps": {
      "0": "'Attributing... entirely' may be parsed without the negation 'stops short of'.",
      "2": "'Stops short of' ≠ denies entirely — a subtle but important distinction at C1.",
      "3": "Close to B but 'not significant' is stronger than 'not entirely' — C1 learners must detect this nuance."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v2-0078",
    "format_type": "context_clue",
    "stem": "Read the passage and answer the question.\n\n\"The speaker's tone shifted markedly as she moved from describing the problem to proposing solutions — from measured and cautious to unambiguously bullish.\"\n\nWhat does 'bullish' most likely mean here?",
    "options": [
      "Aggressive and threatening",
      "Optimistic and confident about future prospects",
      "Confused and uncertain",
      "Critical and sceptical"
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Tone & Attitude",
    "cefr_difficulty": "C1",
    "irt_a_param": 1.68,
    "irt_b_param": 1.52,
    "irt_c_param": 0.13,
    "explanation_text": "Contrast with 'cautious': the speaker becomes 'bullish' when discussing solutions. In finance and general use, 'bullish' = optimistic, confident, positive about outcomes. It contrasts directly with her earlier caution.",
    "explanation_vi": "'Bullish' trong tài chính và ngôn ngữ thông thường nghĩa là lạc quan, tự tin về kết quả tốt. Tương phản trực tiếp với 'cautious' (thận trọng) ở đầu đoạn. Từ này có nguồn gốc từ thị trường chứng khoán — 'bull market' là thị trường tăng giá, đối lập với 'bear market'.",
    "distractor_traps": {
      "0": "The literal image of a bull (aggressive animal) traps learners who don't know the metaphorical meaning.",
      "2": "The shift away from caution could suggest confusion to learners who misread the tone change.",
      "3": "Learners may expect critical analysis when discussing problems — and transfer that to the solution section."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v2-0081",
    "format_type": "best_paraphrase",
    "stem": "Which sentence most closely expresses the meaning of: 'The study found a correlation between screen time and sleep disturbances, though causation could not be established.'",
    "options": [
      "The study proved that screen time causes sleep disturbances.",
      "The study found that screen time and sleep disturbances are related, but it is unclear which causes which.",
      "The study found no link between screen time and sleep quality.",
      "The study suggested that sleep disturbances lead to increased screen time."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "B2",
    "irt_a_param": 1.4,
    "irt_b_param": 0.9,
    "irt_c_param": 0.17,
    "explanation_text": "'Correlation' = a statistical relationship; 'causation could not be established' = unclear which causes which. Option B captures both the link and the uncertainty. A over-claims; C contradicts; D reverses direction.",
    "explanation_vi": "'Correlation' = mối tương quan thống kê; 'causation could not be established' = không thể xác định cái nào gây ra cái nào. Đáp án B nắm đúng cả hai yếu tố: có mối liên hệ nhưng không chắc chắn về nhân quả. Đáp án A khẳng định quá mức; C mâu thuẫn; D đảo ngược chiều hướng.",
    "distractor_traps": {
      "0": "Learners conflate 'correlation' with 'causation' — a widespread critical thinking gap.",
      "2": "Contradicts the finding of correlation.",
      "3": "Reverses the direction of the correlation."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v2-0084",
    "format_type": "odd_one_out",
    "stem": "Three of these phrases are commonly used to add information in academic writing. Which one is NOT used for this purpose?",
    "options": [
      "in addition",
      "furthermore",
      "nevertheless",
      "moreover"
    ],
    "correct_choice": 2,
    "skill": "Reading",
    "sub_skill": "Cohesive Devices",
    "cefr_difficulty": "B1",
    "irt_a_param": 1.2,
    "irt_b_param": 0,
    "irt_c_param": 0.21,
    "explanation_text": "'In addition', 'furthermore', and 'moreover' all add information to a previous point. 'Nevertheless' introduces contrast or concession — it signals that something is true despite what came before.",
    "explanation_vi": "'In addition', 'furthermore', 'moreover' đều bổ sung thông tin cho điểm trước. 'Nevertheless' giới thiệu sự tương phản hoặc nhượng bộ — báo hiệu điều gì đó đúng mặc dù có điều trái ngược. Đây là dạng bài tìm từ nối khác chức năng với nhóm còn lại.",
    "distractor_traps": {
      "0": "'In addition' is less academic-sounding to some learners who may doubt it.",
      "1": "'Furthermore' — less familiar; learners may not recognise its additive function.",
      "3": "'Moreover' — sounds similar to 'however' for learners who are still building cohesive device vocabulary."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v2-0094",
    "format_type": "best_paraphrase",
    "stem": "Which sentence most closely expresses the tone and meaning of: 'One might argue that the policy, however well-intentioned, risks entrenching the very inequalities it seeks to address.'",
    "options": [
      "The policy will definitely make inequality worse.",
      "It is possible to argue that, despite good intentions, the policy could reinforce existing inequalities.",
      "The policy is well-designed and should reduce inequality effectively.",
      "There is no doubt that the policy fails to address inequality."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Tone & Attitude",
    "cefr_difficulty": "C1",
    "irt_a_param": 1.68,
    "irt_b_param": 1.45,
    "irt_c_param": 0.13,
    "explanation_text": "The hedged academic tone ('One might argue', 'risks') must be preserved. Only B retains the tentativeness ('It is possible to argue'), the concession ('despite good intentions'), and the risk ('could reinforce').",
    "explanation_vi": "Văn phong học thuật có phòng ngừa ('One might argue', 'risks') phải được giữ nguyên. Chỉ đáp án B giữ được sự dè dặt ('It is possible to argue'), nhượng bộ ('despite good intentions'), và rủi ro ('could reinforce'). Các đáp án khác hoặc quá chắc chắn hoặc bỏ mất một trong ba yếu tố.",
    "distractor_traps": {
      "0": "Removes all hedging — 'will definitely' vs 'might' and 'risks'.",
      "2": "Reverses the argument entirely — the original questions, not endorses the policy.",
      "3": "'No doubt' is the opposite of 'one might argue'; absolutism replaces academic hedging."
    },
    "goal_tags": [
      "B",
      "C",
      "E"
    ]
  },
  {
    "item_id": "b2v2-0096",
    "format_type": "sentence_reorder",
    "stem": "Which arrangement creates a coherent paragraph?\n\n1: These findings have significant implications for public health policy.\n2: Participants who engaged in regular physical activity reported lower levels of stress and anxiety.\n3: A longitudinal study tracked the wellbeing of 2,000 adults over five years.\n4: In particular, policymakers should consider funding community exercise programmes.",
    "options": [
      "3-2-1-4",
      "1-3-2-4",
      "2-3-4-1",
      "3-1-2-4"
    ],
    "correct_choice": 0,
    "skill": "Reading",
    "sub_skill": "Text Structure",
    "cefr_difficulty": "B2",
    "irt_a_param": 1.4,
    "irt_b_param": 0.88,
    "irt_c_param": 0.17,
    "explanation_text": "Correct: method (3) → finding (2) → implication (1) → specific recommendation (4). Sentence 4's 'In particular' must follow a general implication (1), not come before it.",
    "explanation_vi": "Thứ tự đúng: phương pháp (3) → phát hiện (2) → hàm ý (1) → khuyến nghị cụ thể (4). 'In particular' trong câu 4 phải đứng sau hàm ý chung (1), không thể đứng trước. Các từ như 'In particular', 'Specifically' luôn theo sau luận điểm tổng quát.",
    "distractor_traps": {
      "1": "Opens with implications before the study or findings are described.",
      "2": "Leads with findings before the study methodology is established.",
      "3": "Presents method then implications before findings — skips the evidence."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v2-0109",
    "format_type": "best_paraphrase",
    "stem": "Which sentence best expresses the meaning of: 'The results were inconclusive, neither confirming nor refuting the hypothesis.'",
    "options": [
      "The results confirmed the hypothesis.",
      "The results proved the hypothesis was wrong.",
      "The results did not provide clear evidence for or against the hypothesis.",
      "The results were too limited to be published."
    ],
    "correct_choice": 2,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "B2",
    "irt_a_param": 1.4,
    "irt_b_param": 0.88,
    "irt_c_param": 0.17,
    "explanation_text": "'Inconclusive' = not providing a clear conclusion. 'Neither confirming nor refuting' = no evidence for or against. Only option C preserves both elements without distorting direction.",
    "explanation_vi": "'Inconclusive' = không đưa ra kết luận rõ ràng. 'Neither confirming nor refuting' = không có bằng chứng cho hoặc chống lại. Chỉ đáp án C giữ nguyên cả hai yếu tố mà không làm sai lệch hướng. Các đáp án khác hoặc khẳng định quá mức hoặc đảo ngược nghĩa.",
    "distractor_traps": {
      "0": "Opposite of 'neither confirming' — learners may read 'confirming' and miss 'neither'.",
      "1": "Opposite of 'nor refuting' — learners focus on 'refuting' and miss 'nor'.",
      "3": "Publication limits are not mentioned — an inference beyond the text."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v2-0125",
    "format_type": "sentence_reorder",
    "stem": "Which order produces a coherent academic paragraph?\n\n1: This has led some scholars to question the validity of earlier models.\n2: Recent advances in neuroimaging have transformed our understanding of memory formation.\n3: For instance, studies now show that memory consolidation occurs during sleep, not only while awake.\n4: As a result, the field has begun developing more comprehensive theoretical frameworks.",
    "options": [
      "2-3-1-4",
      "1-2-3-4",
      "3-2-1-4",
      "2-1-3-4"
    ],
    "correct_choice": 0,
    "skill": "Reading",
    "sub_skill": "Cohesive Devices",
    "cefr_difficulty": "B2",
    "irt_a_param": 1.42,
    "irt_b_param": 0.9,
    "irt_c_param": 0.17,
    "explanation_text": "Correct: general advance (2) → specific example (3, 'For instance') → implication (1, 'This') → consequence (4, 'As a result'). 'This' in sentence 1 refers to the advance described in 2–3.",
    "explanation_vi": "Thứ tự: tiến bộ chung (2) → ví dụ cụ thể (3, 'For instance') → hàm ý (1, 'This') → hệ quả (4, 'As a result'). 'This' trong câu 1 chỉ về tiến bộ được mô tả ở câu 2–3. Từ chỉ thị 'this/these' luôn đứng sau thông tin mà nó chỉ về.",
    "distractor_traps": {
      "1": "Opens with the implication before the advance is described.",
      "2": "Starts with the example before the general claim — 'For instance' has no referent.",
      "3": "Places the implication before the example, disrupting the logical chain."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v2-0126",
    "format_type": "odd_one_out",
    "stem": "Three of these phrases commonly introduce counter-arguments in academic writing. Which one does NOT?",
    "options": [
      "On the other hand",
      "It could be argued that",
      "Some scholars contend that",
      "This clearly demonstrates that"
    ],
    "correct_choice": 3,
    "skill": "Reading",
    "sub_skill": "Author's Purpose",
    "cefr_difficulty": "B2",
    "irt_a_param": 1.4,
    "irt_b_param": 0.88,
    "irt_c_param": 0.17,
    "explanation_text": "'On the other hand', 'It could be argued', and 'Some scholars contend' all introduce alternative or opposing perspectives. 'This clearly demonstrates' asserts a conclusion — it introduces evidence, not a counter-argument.",
    "explanation_vi": "'On the other hand', 'It could be argued', 'Some scholars contend' đều giới thiệu quan điểm thay thế hoặc đối lập. 'This clearly demonstrates' khẳng định kết luận — giới thiệu bằng chứng, không phải phản luận. Nhận biết mục đích của câu qua từ dẫn đầu.",
    "distractor_traps": {
      "0": "'On the other hand' — familiar but learners may not categorise it as 'counter-argument' introduction.",
      "1": "'It could be argued' — hedged phrasing; learners may see it as weak rather than adversarial.",
      "2": "'Some scholars contend' — learners may not know 'contend' = argue/maintain."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v2-0132",
    "format_type": "best_paraphrase",
    "stem": "Which sentence most closely expresses the meaning of: 'The opposition's argument hinges on a single piece of contested evidence.'",
    "options": [
      "The opposition has no evidence to support its argument.",
      "The opposition's argument depends entirely on one disputed piece of evidence.",
      "The opposition's argument is supported by a wide range of evidence.",
      "The opposition's evidence has been proven conclusively correct."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "B2",
    "irt_a_param": 1.4,
    "irt_b_param": 0.9,
    "irt_c_param": 0.17,
    "explanation_text": "'Hinges on' = depends entirely on. 'Contested' = disputed. Option B preserves both elements. A wrongly says there is no evidence; C says there is wide evidence; D wrongly claims the evidence is proven.",
    "explanation_vi": "'Hinges on' = phụ thuộc hoàn toàn vào. 'Contested' = đang bị tranh cãi, chưa được đồng thuận. Đáp án B giữ nguyên cả hai yếu tố. Đáp án A sai vì nói không có bằng chứng; C nói có nhiều bằng chứng; D khẳng định bằng chứng đã được chứng minh — đều sai so với nguyên văn.",
    "distractor_traps": {
      "0": "Learners may interpret 'single piece... contested' as meaning the evidence doesn't count.",
      "2": "Opposite of 'single piece' — learners may misread 'hinges on' as 'is supported by'.",
      "3": "'Contested' means disputed, not proven — learners who don't know 'contested' may guess it means verified."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v2-0134",
    "format_type": "odd_one_out",
    "stem": "Three of these words are commonly used as discourse markers to signal a conclusion or summary. Which one is NOT used for this purpose?",
    "options": [
      "therefore",
      "consequently",
      "in sum",
      "conversely"
    ],
    "correct_choice": 3,
    "skill": "Reading",
    "sub_skill": "Cohesive Devices",
    "cefr_difficulty": "B2",
    "irt_a_param": 1.4,
    "irt_b_param": 0.88,
    "irt_c_param": 0.17,
    "explanation_text": "'Therefore', 'consequently', and 'in sum' all signal conclusion, result, or summary. 'Conversely' signals contrast or an opposite point — it does not signal a conclusion.",
    "explanation_vi": "'Therefore', 'consequently', 'in sum' đều báo hiệu kết luận, kết quả hoặc tóm tắt. 'Conversely' báo hiệu sự tương phản hoặc điểm đối lập — không báo hiệu kết luận. Đây là dạng bài tìm từ nối khác chức năng — xác định chức năng của ba từ còn lại trước.",
    "distractor_traps": {
      "0": "'Therefore' — learners know it signals conclusion but may question whether it's 'summarising'.",
      "1": "'Consequently' — learners may confuse cause-effect with summary.",
      "2": "'In sum' — learners may not recognise this as a standard academic phrase."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v2-0140",
    "format_type": "best_paraphrase",
    "stem": "Which sentence most closely expresses the tone and meaning of: 'It is worth noting that the sample size, while adequate, is not without limitations.'",
    "options": [
      "The sample size is completely adequate and has no limitations.",
      "The sample size is too small to draw any conclusions.",
      "The sample size is acceptable but does have some limitations that should be acknowledged.",
      "The sample size is the most significant limitation of the study."
    ],
    "correct_choice": 2,
    "skill": "Reading",
    "sub_skill": "Tone & Attitude",
    "cefr_difficulty": "C1",
    "irt_a_param": 1.65,
    "irt_b_param": 1.42,
    "irt_c_param": 0.13,
    "explanation_text": "'While adequate, not without limitations' = acceptable but imperfect. The hedged academic tone ('worth noting', 'not without') must be preserved. Option C maintains both the adequacy and the acknowledged limitation.",
    "explanation_vi": "'While adequate, not without limitations' = chấp nhận được nhưng không hoàn hảo. Văn phong học thuật có phòng ngừa ('worth noting', 'not without') phải được giữ nguyên. Đáp án C duy trì cả sự chấp nhận lẫn hạn chế được thừa nhận. Các đáp án khác hoặc quá tích cực hoặc quá tiêu cực.",
    "distractor_traps": {
      "0": "Removes the limitation entirely — ignores 'not without limitations'.",
      "1": "Too strong a claim — 'not without limitations' ≠ 'too small to draw conclusions'.",
      "3": "Elevates the limitation to 'most significant' — an overclaim beyond what the sentence states."
    },
    "goal_tags": [
      "B",
      "C",
      "E"
    ]
  },
  {
    "item_id": "b2v2-0147",
    "format_type": "sentence_reorder",
    "stem": "Which sequence creates a coherent paragraph?\n\n1: The invention of the printing press in the fifteenth century had profound consequences for the spread of knowledge.\n2: Ideas that once took decades to circulate could now reach thousands of readers within months.\n3: Nevertheless, access to printed materials remained highly unequal across social classes.\n4: Literacy rates began to climb, particularly in urban centres with strong trade networks.",
    "options": [
      "1-4-2-3",
      "1-2-4-3",
      "2-1-4-3",
      "1-4-3-2"
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Text Structure",
    "cefr_difficulty": "B2",
    "irt_a_param": 1.42,
    "irt_b_param": 0.92,
    "irt_c_param": 0.17,
    "explanation_text": "Correct: general claim (1) → speed of circulation (2) → literacy consequence (4) → limiting contrast (3, 'Nevertheless'). Sentence 2 elaborates on the 'spread of knowledge' in sentence 1 before literacy (4) follows.",
    "explanation_vi": "Thứ tự: luận điểm chung (1) → tốc độ lưu thông (2) → hệ quả về biết chữ (4) → tương phản giới hạn (3, 'Nevertheless'). Câu 2 elaborates on 'spread of knowledge' ở câu 1. 'Nevertheless' báo hiệu sự tương phản — phải đứng sau thông tin tích cực.",
    "distractor_traps": {
      "0": "Jumps from the claim to literacy before explaining how rapid spread worked.",
      "2": "Starts with the specific consequence (speed) before the general claim is made.",
      "3": "Places the limiting contrast before the full positive case is made."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v2-0150",
    "format_type": "best_paraphrase",
    "stem": "Which sentence most closely captures the meaning of: 'The author is careful to hedge her claims, rarely asserting anything without qualification.'",
    "options": [
      "The author avoids making any claims in the text.",
      "The author frequently makes bold, unqualified assertions.",
      "The author consistently uses cautious language to limit the strength of her claims.",
      "The author's claims are supported by strong empirical evidence."
    ],
    "correct_choice": 2,
    "skill": "Reading",
    "sub_skill": "Tone & Attitude",
    "cefr_difficulty": "C1",
    "irt_a_param": 1.68,
    "irt_b_param": 1.48,
    "irt_c_param": 0.13,
    "explanation_text": "'Hedge her claims' = use cautious language to limit certainty. 'Rarely asserting without qualification' = almost always adding qualifiers. Option C preserves hedging as consistent cautious language use. Option A over-extends to 'no claims at all'.",
    "explanation_vi": "'Hedge her claims' = dùng ngôn ngữ thận trọng để giới hạn mức độ chắc chắn. 'Rarely asserting without qualification' = gần như luôn thêm điều kiện bảo lưu. Đáp án C giữ nguyên việc phòng ngừa như cách dùng ngôn ngữ thận trọng nhất quán. Đáp án A mở rộng quá mức thành 'không đưa ra bất kỳ tuyên bố nào'.",
    "distractor_traps": {
      "0": "'Rarely asserting' is misread as 'never claiming' — too extreme a paraphrase.",
      "1": "Opposite — 'bold, unqualified' is the antithesis of hedging.",
      "3": "Evidence quality is not the same as hedging language — a plausible but irrelevant inference."
    },
    "goal_tags": [
      "B",
      "C",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R001",
    "format_type": "inference",
    "stem": "Urban farming initiatives have gained traction in cities across Southeast Asia, where rapid urbanization has strained traditional food supply chains. Proponents argue that rooftop gardens and vertical farms not only reduce food miles but also foster community cohesion in densely populated neighbourhoods. Critics, however, question whether these projects can ever move beyond symbolic gestures. What can be inferred about critics' main concern?",
    "options": [
      "Urban farms are too expensive to build in Southeast Asian cities.",
      "Urban farming may lack the scale needed to create meaningful food system change.",
      "Rooftop gardens damage the structural integrity of buildings.",
      "Community cohesion is not a worthwhile goal for urban planners."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "B2",
    "irt_a_param": 1.35,
    "irt_b_param": 0.8,
    "irt_c_param": 0.18,
    "explanation_text": "The phrase 'symbolic gestures' implies critics doubt urban farming can produce impact at a meaningful scale, not that they dispute its cost or structural safety.",
    "explanation_vi": "Đáp án đúng là B vì cụm 'symbolic gestures' (cử chỉ mang tính biểu tượng) ngụ ý rằng các nhà phê bình cho rằng nông nghiệp đô thị quá nhỏ lẻ để tạo ra thay đổi thực sự cho hệ thống thực phẩm. Bẫy thường gặp: nhiều học sinh chọn A vì liên tưởng từ 'strain' và 'urbanization' với chi phí tài chính, nhưng bài không hề đề cập đến vấn đề tiền bạc.",
    "distractor_traps": {
      "0": "Vietnamese learners may associate 'strain' and 'rapid urbanization' with financial cost, leading them to infer expense as the core criticism.",
      "1": "Correct — 'symbolic gestures' signals that critics see these projects as too small to matter systemically.",
      "2": "The word 'rooftop' may trigger a literal interpretation about physical damage to buildings.",
      "3": "The passage mentions community cohesion positively, so learners may mistakenly think critics oppose it entirely."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R002",
    "format_type": "vocabulary_in_context",
    "stem": "The trade negotiators reached an impasse after three days of talks, with neither side willing to concede on tariff structures. A senior diplomat described the atmosphere as 'cordial but unproductive,' suggesting that goodwill alone cannot bridge fundamentally divergent economic interests. As used in this passage, 'cordial' most nearly means:",
    "options": [
      "formal and ceremonial",
      "warm and friendly in manner",
      "cautious and diplomatic",
      "reluctant but cooperative"
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Vocabulary in Context",
    "cefr_difficulty": "B2",
    "irt_a_param": 1.28,
    "irt_b_param": 0.65,
    "irt_c_param": 0.2,
    "explanation_text": "'Cordial' means pleasantly warm in manner. The contrast with 'unproductive' shows that the tone was friendly even though results were absent — ruling out 'cautious' or 'reluctant'.",
    "explanation_vi": "Đáp án đúng là B vì 'cordial' có nghĩa là thân thiện, lịch sự về thái độ — bằng chứng là câu đối lập 'cordial but unproductive' cho thấy bầu không khí dễ chịu dù không đạt kết quả. Bẫy thường gặp: học sinh hay chọn A vì nghĩ 'cordial' gắn với nghi lễ ngoại giao trang trọng, nhưng từ này chỉ mô tả thái độ ấm áp, không phải hình thức.",
    "distractor_traps": {
      "0": "Vietnamese learners familiar with diplomatic contexts may equate 'cordial' with formal protocol or ceremony.",
      "1": "Correct — 'cordial' describes a pleasant, friendly manner, contrasted here with the lack of progress.",
      "2": "The diplomatic setting leads learners to associate the word with caution or careful language.",
      "3": "The word 'reluctant' fits the negotiation deadlock context emotionally, causing learners to misapply it to 'cordial'."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R003",
    "format_type": "main_idea",
    "stem": "Microplastic contamination has been detected in environments once considered pristine — from Arctic ice cores to the digestive tracts of deep-sea fish. Researchers warn that the persistence of these particles means contamination is effectively irreversible on any human timescale. While policy debates focus on banning single-use plastics, scientists emphasize that such measures address the input but not the existing burden. What is the main idea of this passage?",
    "options": [
      "Single-use plastic bans are politically unpopular and difficult to enforce.",
      "Microplastic pollution is so pervasive and persistent that current policy responses are insufficient.",
      "Deep-sea ecosystems are more vulnerable to pollution than surface environments.",
      "Scientists and policymakers agree on the urgency of addressing plastic contamination."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Main Idea",
    "cefr_difficulty": "B2",
    "irt_a_param": 1.4,
    "irt_b_param": 0.72,
    "irt_c_param": 0.17,
    "explanation_text": "The passage emphasizes both the irreversibility of microplastic contamination and the inadequacy of banning inputs alone, making option B the most complete main idea.",
    "explanation_vi": "Đáp án đúng là B vì bài nêu cả hai vấn đề: ô nhiễm vi nhựa lan rộng không thể đảo ngược và chính sách hiện tại chỉ giải quyết đầu vào chứ không xử lý được lượng ô nhiễm đã tồn tại. Bẫy thường gặp: học sinh chọn D vì nghĩ các nhà khoa học và nhà hoạch định chính sách đồng thuận, nhưng bài thực ra chỉ ra khoảng cách giữa hai bên.",
    "distractor_traps": {
      "0": "Vietnamese learners may infer political difficulty from 'policy debates,' but the text never mentions enforcement challenges.",
      "1": "Correct — the passage integrates the scale of contamination with the gap in policy response.",
      "2": "Deep-sea fish are mentioned as an example, not as the focus; learners may over-weight vivid details.",
      "3": "The passage actually highlights a gap between scientists and policymakers, not agreement."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R004",
    "format_type": "best_paraphrase",
    "stem": "Although remittances constitute a lifeline for millions of households in developing economies, economists caution that an over-reliance on these transfers can suppress domestic entrepreneurship by reducing the perceived urgency to innovate. The dependency, while alleviating immediate hardship, may entrench structural vulnerabilities over the long term. Which of the following best paraphrases the passage above?",
    "options": [
      "Remittances are harmful to developing economies and should be discouraged by governments.",
      "While remittances help families survive, they may inadvertently weaken the drive for local economic innovation.",
      "Developing economies should prioritize innovation over financial support from abroad.",
      "Economists believe that remittances are only beneficial when combined with government investment."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "C1",
    "irt_a_param": 1.55,
    "irt_b_param": 1.25,
    "irt_c_param": 0.15,
    "explanation_text": "Option B captures both the benefit ('help families survive') and the nuanced risk ('weaken the drive for innovation') without overstating either side, which matches the passage's balanced tone.",
    "explanation_vi": "Đáp án đúng là B vì nó giữ được cả hai ý của bài: kiều hối giúp gia đình tồn tại trước mắt nhưng có thể vô tình làm giảm động lực đổi mới kinh tế trong nước. Bẫy thường gặp: học sinh chọn A vì thấy từ 'caution' (cảnh báo) và nghĩ bài lên án kiều hối hoàn toàn, nhưng bài chỉ nêu rủi ro dài hạn chứ không kêu gọi cấm đoán.",
    "distractor_traps": {
      "0": "The passage does not say remittances are harmful or should be stopped — Vietnamese learners may conflate 'caution' with outright condemnation.",
      "1": "Correct — this captures the dual nature: short-term relief vs long-term entrepreneurial risk.",
      "2": "This option introduces a prescriptive recommendation not present in the passage.",
      "3": "The passage never mentions government investment; learners may infer this from the development economics context."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R005",
    "format_type": "inference",
    "stem": "The novelist's later work is characterised by a studied ambiguity that frustrates readers seeking resolution, yet this very quality has attracted the attention of literary scholars who prize texts that resist singular interpretation. Her early critics dismissed her prose as needlessly obscure; her current reputation suggests that the literary establishment has since revised its criteria for complexity. What can most reasonably be inferred about the novelist's reception over time?",
    "options": [
      "Her early critics lacked the academic training to appreciate complex literary techniques.",
      "Shifts in literary values, rather than changes in her writing, largely explain her growing reputation.",
      "She simplified her prose style in response to negative early reviews.",
      "Literary scholars today prefer ambiguity because readers have become less patient with clear narratives."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "C1",
    "irt_a_param": 1.62,
    "irt_b_param": 1.35,
    "irt_c_param": 0.14,
    "explanation_text": "The passage states the 'literary establishment has since revised its criteria' — not that her writing changed. This points to shifting institutional values as the key variable.",
    "explanation_vi": "Đáp án đúng là B vì bài nói rõ 'the literary establishment has since revised its criteria' — tức là tiêu chí đánh giá của giới văn học thay đổi, chứ không phải phong cách viết của bà thay đổi. Bẫy thường gặp: học sinh chọn A vì cho rằng các nhà phê bình đầu tiên thiếu trình độ, nhưng bài không hề đề cập đến năng lực của họ.",
    "distractor_traps": {
      "0": "Vietnamese learners may assume early critics were simply less skilled, but the passage implies criteria changed, not competence levels.",
      "1": "Correct — the passage explicitly signals a revision in the establishment's criteria, not a change in her work.",
      "2": "The passage never suggests she altered her writing; learners may infer this from the word 'responded.'",
      "3": "Readers' patience is not discussed; learners may project real-world assumptions about modern reading habits."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R006",
    "format_type": "vocabulary_in_context",
    "stem": "The committee's report was notable for what it omitted rather than what it contained. By sidestepping the most contentious recommendations from its own working group, the authors produced a document that critics called 'strategically anodyne' — palatable to all stakeholders precisely because it committed to nothing. As used in this passage, 'anodyne' most nearly means:",
    "options": [
      "technically detailed and evidence-based",
      "inoffensive to the point of being meaningless",
      "cautiously optimistic about reform",
      "deliberately misleading to key stakeholders"
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Vocabulary in Context",
    "cefr_difficulty": "C1",
    "irt_a_param": 1.58,
    "irt_b_param": 1.4,
    "irt_c_param": 0.16,
    "explanation_text": "'Anodyne' means unlikely to cause offence or disagreement, often implying blandness. 'Palatable to all because it committed to nothing' confirms this meaning — inoffensive but substantively empty.",
    "explanation_vi": "Đáp án đúng là B vì 'anodyne' mang nghĩa vô hại đến mức nhạt nhẽo, không có lập trường — được xác nhận bởi cụm 'palatable to all because it committed to nothing'. Bẫy thường gặp: học sinh chọn D vì nghĩ việc bỏ qua các khuyến nghị là hành động cố tình đánh lừa, nhưng bài chỉ nói đến sự né tránh, không phải lừa dối.",
    "distractor_traps": {
      "0": "Vietnamese learners may associate a formal committee report with technical detail and choose this option by default.",
      "1": "Correct — 'strategically anodyne' and 'palatable to all' together signal harmless but meaningless content.",
      "2": "The phrase 'committed to nothing' might suggest guarded optimism to learners who focus on the diplomatic tone.",
      "3": "Learners may conflate 'omitting recommendations' with deliberate deception, overreading the author's intent."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R007",
    "format_type": "inference",
    "stem": "Proponents of Universal Basic Income (UBI) frequently invoke pilot studies from Finland and Kenya as evidence of transformative social outcomes. What these advocates seldom foreground, however, is that pilot programmes operate under conditions — namely, the certainty of payment, limited duration, and community novelty — that may not survive national rollout. What does the passage most strongly imply about UBI pilot studies?",
    "options": [
      "UBI pilot studies in Finland and Kenya were poorly designed and produced unreliable data.",
      "The conditions that make pilot programmes successful may not hold when UBI is implemented at national scale.",
      "Advocates of UBI deliberately misrepresent pilot study findings to support their position.",
      "National governments are reluctant to fund UBI because of the high costs demonstrated in pilot studies."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "C1",
    "irt_a_param": 1.7,
    "irt_b_param": 1.5,
    "irt_c_param": 0.13,
    "explanation_text": "The passage identifies specific structural features of pilots (certainty, duration, novelty) that may not transfer to national contexts, implying a scalability problem — not dishonesty or poor design.",
    "explanation_vi": "Đáp án đúng là B vì bài chỉ ra ba điều kiện đặc thù của chương trình thí điểm (sự chắc chắn về thanh toán, thời gian ngắn, tính mới lạ) có thể không còn khi triển khai ở quy mô quốc gia. Bẫy thường gặp: học sinh chọn C vì thấy từ 'seldom foreground' và nghĩ những người ủng hộ cố tình che giấu sự thật, nhưng bài chỉ nói họ không nhấn mạnh vào điều đó.",
    "distractor_traps": {
      "0": "Learners may interpret the passage's critical tone as a claim of poor study quality, missing the scalability argument.",
      "1": "Correct — the passage explicitly names conditions that are unique to pilot settings and questions their durability.",
      "2": "The passage critiques what advocates 'seldom foreground,' but this implies omission, not deliberate misrepresentation.",
      "3": "Cost is never mentioned in the passage; learners may infer it from general knowledge about social programmes."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R008",
    "format_type": "best_paraphrase",
    "stem": "Cognitive load theory posits that working memory, being finite, is easily overwhelmed when learners are simultaneously required to process new conceptual information and manage unfamiliar task formats. Instructional designers who ignore this constraint often produce materials that are technically accurate but pedagogically counterproductive. Which of the following best paraphrases the passage?",
    "options": [
      "Learners perform better when instructional materials focus on conceptual accuracy over task variety.",
      "Effective learning materials must account for the limits of working memory, or they risk hindering rather than supporting learning.",
      "Cognitive load theory proves that task format is more important than content knowledge in instructional design.",
      "Working memory limitations mean that learners should never be introduced to new concepts and new formats at the same time."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Main Idea",
    "cefr_difficulty": "C1",
    "irt_a_param": 1.48,
    "irt_b_param": 1.2,
    "irt_c_param": 0.17,
    "explanation_text": "Option B accurately captures both the mechanism (working memory limits) and the consequence (materials that ignore this become counterproductive), without distorting the balance of the original.",
    "explanation_vi": "Đáp án đúng là B vì nó tóm tắt đúng cả cơ chế (giới hạn của bộ nhớ làm việc) lẫn hệ quả (tài liệu bỏ qua điều này sẽ phản tác dụng). Bẫy thường gặp: học sinh chọn D vì đồng ý với ý tưởng trong bài nhưng không nhận ra từ 'never' là tuyệt đối hóa quá mức so với nội dung gốc.",
    "distractor_traps": {
      "0": "Vietnamese learners may over-focus on 'technically accurate' from the passage and infer that accuracy alone is the lesson.",
      "1": "Correct — this paraphrase preserves both the theoretical claim and its practical implication.",
      "2": "'Proves' and 'more important than' are too strong; learners may select this for its confident tone.",
      "3": "'Never' is an absolute not stated in the passage; learners who agree with the idea may not notice the distortion."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R009",
    "format_type": "inference",
    "stem": "The mythology of meritocracy exerts a paradoxical hold on societies where structural inequality is most pronounced: the greater the actual barriers to upward mobility, the more fervently the meritocratic ideal is embraced as a legitimising narrative. This phenomenon has led sociologists to describe meritocracy not as a description of social reality but as an ideological function — one that reconciles individuals to outcomes that systemic analysis would render morally indefensible. What does the passage most strongly imply?",
    "options": [
      "Meritocracy is a concept invented by sociologists to critique capitalist economies.",
      "Belief in meritocracy may serve to justify social hierarchies rather than accurately reflect how success is achieved.",
      "People in unequal societies consciously reject meritocracy once they understand its ideological function.",
      "Sociological analysis has proven that individual effort plays no meaningful role in social mobility."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "C2",
    "irt_a_param": 1.82,
    "irt_b_param": 2.1,
    "irt_c_param": 0.13,
    "explanation_text": "The passage frames meritocracy as an 'ideological function' that 'reconciles individuals to outcomes' systemic analysis would question — implying it legitimises inequality rather than reflects reality.",
    "explanation_vi": "Đáp án đúng là B vì bài mô tả hệ tư tưởng thành tích như một 'chức năng hợp thức hóa' giúp người ta chấp nhận bất bình đẳng thay vì phản ánh thực tế xã hội. Bẫy thường gặp: học sinh chọn C vì nghĩ khi hiểu rõ bản chất hệ tư tưởng thì người ta sẽ từ chối nó, nhưng bài nói ngược lại — bất bình đẳng càng lớn, niềm tin vào thành tích càng mạnh.",
    "distractor_traps": {
      "0": "Learners may associate the academic framing with an origin claim, confusing who describes meritocracy with who invented it.",
      "1": "Correct — 'legitimising narrative' and 'ideological function' together signal that the belief justifies rather than describes social outcomes.",
      "2": "The passage says people embrace the ideal more strongly under inequality — the opposite of conscious rejection; learners may misread 'paradoxical'.",
      "3": "'No meaningful role' is an extreme inference; learners who agree with systemic critique may over-extend the argument."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R010",
    "format_type": "inference",
    "stem": "In ecological economics, the concept of planetary boundaries delineates the biophysical thresholds within which human civilisation can safely operate. Crucially, several of these boundaries are characterised by non-linearity: incremental anthropogenic pressures may produce negligible measurable effects until a critical threshold is crossed, after which the system transitions abruptly and potentially irreversibly to an alternate state. The language of gradual policy reform, critics argue, is epistemically mismatched to the discontinuous nature of these risks. What does the passage imply about conventional policy approaches to environmental risk?",
    "options": [
      "Conventional policy approaches are ineffective because governments prioritise economic growth over ecological stability.",
      "Gradual reform policies may be structurally inadequate because they assume a linear relationship between pressure and ecological response.",
      "Planetary boundary science is too complex for policymakers to incorporate into legislative frameworks.",
      "Non-linear ecological systems require international rather than national policy coordination to manage effectively."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "C2",
    "irt_a_param": 1.88,
    "irt_b_param": 2.3,
    "irt_c_param": 0.12,
    "explanation_text": "The passage argues that gradual reform is 'epistemically mismatched' to 'discontinuous' risks — meaning incremental policy logic is incompatible with abrupt, non-linear ecological tipping points.",
    "explanation_vi": "Đáp án đúng là B vì bài lập luận rằng cải cách từng bước 'không phù hợp về mặt nhận thức luận' với rủi ro phi tuyến tính — tức là logic chính sách tuyến tính không thể xử lý các ngưỡng sinh thái đột ngột. Bẫy thường gặp: học sinh chọn A vì liên tưởng đến lập luận phổ biến về tăng trưởng kinh tế vs môi trường, nhưng bài đưa ra phê phán về logic nhận thức, không phải động cơ chính trị.",
    "distractor_traps": {
      "0": "Learners may import the common argument about growth vs ecology, but the passage makes an epistemological claim, not a political one.",
      "1": "Correct — 'epistemically mismatched' and 'discontinuous nature' together imply that linear policy logic fails to address threshold dynamics.",
      "2": "Complexity is implied but the passage critiques the logic of reform, not the comprehension capacity of policymakers.",
      "3": "International coordination is not mentioned; learners may infer it from the global framing of planetary boundaries."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R011",
    "format_type": "main_idea",
    "stem": "Scientists have discovered that certain species of fungi can break down plastic waste in a matter of weeks. Unlike traditional decomposition, which may take hundreds of years for plastics, these fungi produce enzymes that attack the chemical bonds in synthetic materials. Researchers believe this finding could revolutionize waste management globally.\n\nWhat is the main idea of this passage?",
    "options": [
      "Fungi are dangerous to synthetic materials used in everyday products",
      "Some fungi can decompose plastic rapidly, offering a potential solution for waste management",
      "Scientists have been studying fungi for hundreds of years",
      "Plastic waste takes a very long time to break down in nature"
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Main Idea",
    "cefr_difficulty": "B1",
    "irt_a_param": 1.15,
    "irt_b_param": -0.2,
    "irt_c_param": 0.2,
    "explanation_text": "The passage introduces a discovery about fungi breaking down plastic quickly and concludes that this could change waste management. Option B captures both the finding and its significance. Option A distorts the tone — the fungi are presented as helpful. Option C is not mentioned. Option D states a fact from the passage but is a detail, not the main idea.",
    "explanation_vi": "Đáp án đúng là B vì đoạn văn giới thiệu phát hiện về nấm phân hủy nhựa nhanh chóng và kết luận rằng điều này có thể thay đổi cách quản lý rác thải toàn cầu. Bẫy phổ biến: nhiều học sinh chọn D vì câu về 'hàng trăm năm' xuất hiện trong bài, nhưng đó chỉ là chi tiết phụ để so sánh, không phải ý chính.",
    "distractor_traps": {
      "0": "Vietnamese learners may misread 'attack chemical bonds' as harmful to products people use, confusing context",
      "1": "Correct — combines the discovery with its implication",
      "2": "The word 'hundreds of years' appears but refers to decomposition time, not research history; learners may misattribute it",
      "3": "This is a supporting detail that contrasts with the main finding; learners may choose it as the topic sentence"
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R012",
    "format_type": "vocabulary_in_context",
    "stem": "The coral reef, once a vibrant ecosystem teeming with marine life, has been reduced to a bleached skeleton by rising ocean temperatures. Marine biologists warn that without immediate intervention, the reef's recovery will be virtually impossible.\n\nThe word 'intervention' in the passage most likely means:",
    "options": [
      "scientific observation of the reef over time",
      "deliberate action taken to change a situation",
      "natural recovery process of coral reefs",
      "government funding for marine research"
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Vocabulary in Context",
    "cefr_difficulty": "B1",
    "irt_a_param": 1.2,
    "irt_b_param": 0.1,
    "irt_c_param": 0.18,
    "explanation_text": "'Intervention' means deliberate action to change or prevent something. The context — 'without immediate intervention, recovery will be impossible' — signals that something must be done actively. Option A is passive observation, the opposite of intervention. Option C refers to a natural process, but the passage implies human or deliberate action is needed. Option D is too specific; funding is one form but not the definition.",
    "explanation_vi": "Đáp án đúng là B vì 'intervention' trong ngữ cảnh này có nghĩa là hành động có chủ đích để thay đổi tình huống, được củng cố bởi cụm 'without immediate intervention, recovery will be impossible'. Bẫy phổ biến: học sinh dễ chọn D vì liên tưởng vấn đề khoa học với việc tài trợ của chính phủ, nhưng đó là suy luận ngoài văn bản.",
    "distractor_traps": {
      "0": "Learners associate 'marine biologists' with observation and may assume that is what is meant",
      "1": "Correct — fits the context of urgent, deliberate action",
      "2": "The word 'recovery' appears nearby; learners may conflate it with 'intervention'",
      "3": "Learners may link scientific problems to government funding as a common real-world solution"
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R013",
    "format_type": "inference",
    "stem": "Urban heat islands occur when cities absorb and retain more heat than surrounding rural areas, primarily due to concrete and asphalt replacing natural vegetation. City planners in several Asian metropolises have begun introducing rooftop gardens and tree-lined corridors to counteract this effect. Early data suggest temperatures in treated districts have dropped by up to two degrees Celsius.\n\nWhat can be reasonably inferred from this passage?",
    "options": [
      "Rural areas will soon adopt the same urban planning strategies",
      "Green infrastructure may be an effective tool against urban overheating",
      "Concrete and asphalt will be banned in future city construction",
      "All Asian cities are currently experiencing dangerously high temperatures"
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "B2",
    "irt_a_param": 1.35,
    "irt_b_param": 0.5,
    "irt_c_param": 0.18,
    "explanation_text": "The passage describes the cause of urban heat islands and then presents a solution — green infrastructure — with early positive results. It is reasonable to infer that this approach works. Option A is not supported; rural areas are mentioned only as a comparison. Option C is an extreme conclusion not implied by the text. Option D generalises beyond what the passage states — only 'several metropolises' are mentioned.",
    "explanation_vi": "Đáp án đúng là B vì đoạn văn cho thấy các thành phố đầu tư vào cây xanh ghi nhận nhiệt độ giảm, từ đó có thể suy luận rằng hạ tầng xanh có hiệu quả chống nóng đô thị. Bẫy phổ biến: học sinh hay chọn D vì bài đề cập 'các đô thị châu Á' và tự khái quát hóa thành tất cả các thành phố ở châu Á.",
    "distractor_traps": {
      "0": "Vietnamese learners may apply symmetry thinking — if cities copy nature, nature copies cities — which is not implied",
      "1": "Correct — supported by the early temperature data",
      "2": "Learners may overextend the negative framing of concrete/asphalt to predict a ban",
      "3": "The mention of 'Asian metropolises' may lead learners to generalise to all Asian cities"
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R014",
    "format_type": "best_paraphrase",
    "stem": "The proliferation of single-use plastics has outpaced the development of recycling infrastructure in most developing nations, leaving vast quantities of waste with no viable processing pathway.\n\nWhich of the following best paraphrases this sentence?",
    "options": [
      "Developing countries have successfully built recycling systems to handle plastic waste",
      "In many developing countries, plastic waste is growing faster than the systems needed to manage it",
      "Single-use plastics are only a problem in nations that lack government investment",
      "Recycling infrastructure in developing nations is more advanced than previously thought"
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "B2",
    "irt_a_param": 1.4,
    "irt_b_param": 0.6,
    "irt_c_param": 0.16,
    "explanation_text": "The original sentence says plastic production has surpassed recycling capacity in developing nations. Option B restates this accurately in simpler language. Option A contradicts the passage. Option C introduces 'government investment' which is not mentioned and adds a condition not present in the original. Option D directly contradicts 'outpaced the development.'",
    "explanation_vi": "Đáp án đúng là B vì câu gốc nói rằng sản lượng nhựa tăng nhanh hơn khả năng tái chế ở các nước đang phát triển, và B diễn đạt lại ý này bằng ngôn ngữ đơn giản hơn. Bẫy phổ biến: học sinh không quen từ 'outpaced' dễ hiểu nhầm mối quan hệ giữa hai vế câu và chọn A hoặc D.",
    "distractor_traps": {
      "0": "The word 'viable processing pathway' might be misread as a successful system by lower-proficiency learners",
      "1": "Correct — accurate simplification of the original",
      "2": "Learners may infer a political cause and choose this as a reasonable explanation",
      "3": "Learners unfamiliar with 'outpaced' may misread the relationship between the two clauses"
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R015",
    "format_type": "inference",
    "stem": "A long-term study tracking air quality across thirty cities found that particulate matter levels dropped significantly in cities that invested in public transportation, while cities that expanded road networks saw little to no improvement. The researchers noted that the correlation persisted even after controlling for industrial output.\n\nWhat does the study most strongly suggest?",
    "options": [
      "Industrial activity is the primary cause of air pollution in all cities studied",
      "Expanding road networks is more cost-effective than public transportation",
      "Reducing private vehicle use through public transit may improve urban air quality",
      "Air quality data is unreliable when collected across multiple cities"
    ],
    "correct_choice": 2,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "B2",
    "irt_a_param": 1.45,
    "irt_b_param": 0.7,
    "irt_c_param": 0.17,
    "explanation_text": "The study shows a link between public transportation investment and lower pollution, with the effect independent of industrial output. This supports the inference that fewer private vehicles improve air quality. Option A is contradicted — industrial output was controlled for, meaning it is not the key factor. Option B is not addressed in the passage. Option D attacks the methodology without textual support.",
    "explanation_vi": "Đáp án đúng là C vì nghiên cứu cho thấy thành phố đầu tư giao thông công cộng có chất lượng không khí tốt hơn, ngay cả khi đã loại trừ yếu tố công nghiệp, ngụ ý rằng giảm xe cá nhân giúp cải thiện không khí. Bẫy phổ biến: học sinh thấy cụm 'controlling for industrial output' dễ nhầm tưởng công nghiệp là nguyên nhân chính và chọn A.",
    "distractor_traps": {
      "0": "The phrase 'controlling for industrial output' may lead learners to think industry is the main variable being studied",
      "1": "Learners may assume the passage implies a cost comparison since both transport types are mentioned",
      "2": "Correct — the logical conclusion from the correlation described",
      "3": "Learners anxious about research validity may select this as a cautious interpretation"
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R016",
    "format_type": "main_idea",
    "stem": "Mangrove forests serve as critical buffers against coastal erosion and storm surges, their dense root systems anchoring sediment and absorbing wave energy. Despite their ecological value, mangroves are being cleared at alarming rates for shrimp farming and coastal development. Conservationists argue that the economic cost of losing these forests far exceeds any short-term gains from aquaculture.\n\nWhat is the central argument of this passage?",
    "options": [
      "Shrimp farming is the most destructive industry for coastal ecosystems worldwide",
      "Mangrove forests are ecologically valuable but are being destroyed for economic activities with lower long-term benefit",
      "Coastal erosion can be solved entirely by planting more mangrove forests",
      "Conservationists are opposed to all forms of coastal development"
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Main Idea",
    "cefr_difficulty": "B2",
    "irt_a_param": 1.35,
    "irt_b_param": 0.55,
    "irt_c_param": 0.19,
    "explanation_text": "The passage presents mangroves' ecological value, the threat they face, and a conservationist argument about economic trade-offs. Option B captures all three elements. Option A uses 'most destructive worldwide,' which is an overstatement not made in the passage. Option C says erosion can be 'entirely solved,' which is too absolute. Option D misrepresents conservationists as broadly anti-development rather than making a cost-benefit argument.",
    "explanation_vi": "Đáp án đúng là B vì đoạn văn trình bày giá trị sinh thái của rừng ngập mặn, mối đe dọa đang xảy ra và lập luận về chi phí kinh tế dài hạn, tất cả đều được tóm gọn trong B. Bẫy phổ biến: học sinh chọn A vì nuôi tôm được nhắc đến cụ thể, nhưng đó chỉ là một ví dụ, không phải luận điểm trung tâm.",
    "distractor_traps": {
      "0": "Shrimp farming is specifically named, so learners may treat it as the main subject rather than an example",
      "1": "Correct — integrates ecological, economic, and threat elements",
      "2": "Mangroves protecting against erosion is mentioned; learners may inflate this detail into the main claim",
      "3": "Learners may infer opposition from the conservationist's argument without noting its economic framing"
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R017",
    "format_type": "vocabulary_in_context",
    "stem": "The latest IPCC report presents an unequivocal link between human activity and accelerating climate change, dismissing remaining skepticism as inconsistent with the weight of current evidence. Policymakers, the report urges, must treat climate action not as optional but as an existential imperative.\n\nAs used in the passage, 'imperative' most nearly means:",
    "options": [
      "a suggestion that may be considered if resources allow",
      "an urgent and unavoidable necessity",
      "a scientific term used in climate modeling",
      "a political disagreement between nations"
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Vocabulary in Context",
    "cefr_difficulty": "C1",
    "irt_a_param": 1.55,
    "irt_b_param": 1.2,
    "irt_c_param": 0.15,
    "explanation_text": "'Imperative' means something absolutely necessary or required. The surrounding context — 'not as optional,' 'existential' — reinforces urgency and obligation. Option A softens imperative into a suggestion, the opposite meaning. Option C links it falsely to a scientific/technical domain. Option D introduces political conflict, which is not the meaning or context of the word here.",
    "explanation_vi": "Đáp án đúng là B vì ngữ cảnh xung quanh từ 'imperative' gồm 'not as optional' và 'existential' cho thấy đây là điều bắt buộc, cấp thiết, không thể tránh khỏi. Bẫy phổ biến: học sinh Việt Nam hay làm nhẹ nghĩa của từ học thuật mạnh, đọc 'imperative' thành 'gợi ý' hoặc 'đề xuất' thay vì 'điều bắt buộc'.",
    "distractor_traps": {
      "0": "Vietnamese learners may soften strong academic language, interpreting 'imperative' as a formal way of saying 'suggestion'",
      "1": "Correct — supported by 'not optional' and 'existential'",
      "2": "The scientific context of the IPCC report may lead learners to assume all key words are technical terms",
      "3": "The word 'policymakers' may trigger an association with political debate"
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R018",
    "format_type": "best_paraphrase",
    "stem": "Geoengineering proposals, such as stratospheric aerosol injection, attempt to mitigate climate change by reflecting a portion of incoming solar radiation back into space, thereby reducing surface temperatures. Critics contend, however, that such interventions risk disrupting precipitation patterns and may engender geopolitical tensions over unilateral atmospheric modification.\n\nWhich option most accurately paraphrases the critics' concern?",
    "options": [
      "Critics believe geoengineering is too expensive for most governments to fund",
      "Opponents worry that altering the atmosphere artificially could harm weather systems and cause international conflict",
      "Scientists agree that stratospheric aerosol injection is the most effective climate solution",
      "Critics support geoengineering only if all nations give their consent beforehand"
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "C1",
    "irt_a_param": 1.6,
    "irt_b_param": 1.3,
    "irt_c_param": 0.14,
    "explanation_text": "Critics raise two concerns: disrupted precipitation and geopolitical tensions from unilateral action. Option B paraphrases both accurately. Option A introduces cost, which is not mentioned. Option C contradicts the passage — it is critics who raise objections, not scientists expressing consensus support. Option D partially captures the geopolitical concern but frames it as a conditional support rather than a warning.",
    "explanation_vi": "Đáp án đúng là B vì phần phê bình trong bài nêu hai lo ngại: làm rối loạn lượng mưa và gây căng thẳng địa chính trị do hành động đơn phương, và B diễn đạt cả hai ý này một cách chính xác. Bẫy phổ biến: học sinh thấy từ 'unilateral' gợi ý vấn đề đồng thuận nên chọn D, nhưng D biến lo ngại thành điều kiện ủng hộ, sai về sắc thái.",
    "distractor_traps": {
      "0": "Learners may assume that large-scale scientific projects are primarily debated on cost grounds",
      "1": "Correct — covers both concerns in accessible language",
      "2": "Learners may misread the passage structure and attribute the geoengineering proposal to scientists in a positive light",
      "3": "The word 'unilateral' hints at consent issues; learners may construct a conditional agreement reading rather than a criticism"
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R019",
    "format_type": "inference",
    "stem": "Permafrost in Arctic regions stores vast quantities of carbon accumulated over millennia. As global temperatures rise, this permafrost thaws, releasing methane and carbon dioxide — greenhouse gases that further accelerate warming. Scientists describe this process as a feedback loop, meaning the initial warming causes changes that produce yet more warming, independent of human emissions.\n\nWhat is the most significant implication of this feedback loop for climate policy?",
    "options": [
      "Arctic nations should be solely responsible for reducing methane emissions",
      "Even if human emissions ceased entirely, warming could continue due to natural processes already set in motion",
      "Permafrost thawing only affects regions near the Arctic Circle and has no global consequences",
      "Methane is a less serious greenhouse gas than carbon dioxide and requires less policy attention"
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "C1",
    "irt_a_param": 1.65,
    "irt_b_param": 1.5,
    "irt_c_param": 0.13,
    "explanation_text": "The feedback loop is described as self-sustaining and 'independent of human emissions,' which implies warming may persist even after humans stop emitting. This has serious consequences for climate targets. Option A misattributes responsibility geographically without textual support. Option C contradicts the global implications of greenhouse gases. Option D inverts the relative severity — methane is actually a more potent short-term greenhouse gas, and the passage treats it as a serious concern.",
    "explanation_vi": "Đáp án đúng là B vì vòng phản hồi được mô tả là 'independent of human emissions', nghĩa là dù con người ngừng thải khí, quá trình ấm lên vẫn có thể tiếp tục do các cơ chế tự nhiên đã được kích hoạt. Bẫy phổ biến: học sinh không quen với khái niệm khoa học này dễ chọn A vì nghĩ địa điểm xảy ra ở Bắc Cực thì nước Bắc Cực phải chịu trách nhiệm.",
    "distractor_traps": {
      "0": "Learners may assume that because the Arctic is the location, Arctic nations bear the policy responsibility",
      "1": "Correct — follows logically from 'independent of human emissions'",
      "2": "Vietnamese learners unfamiliar with climate science may assume geographic proximity limits impact",
      "3": "Learners may confuse the order in which gases are mentioned (methane first, then CO₂) as implying CO₂ is more important"
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R020",
    "format_type": "inference",
    "stem": "The notion that technological innovation alone can resolve the ecological crises of the Anthropocene epoch has been characterised by some scholars as 'techno-optimism' — a worldview that, its detractors argue, conveniently absolves societies of the need to restructure consumption patterns or redistribute resources. Proponents counter that historically, transformative technologies have consistently preceded periods of reduced environmental impact per unit of economic output. The debate remains unresolved, yet the urgency of ecological degradation allows little room for ideological entrenchment on either side.\n\nWhich statement best reflects the author's attitude toward the techno-optimism debate?",
    "options": [
      "The author firmly endorses techno-optimism as the most pragmatic response to ecological crisis",
      "The author believes both sides have merit but warns that prolonged ideological stalemate is a luxury the planet cannot afford",
      "The author concludes that consumption restructuring is the only viable path to ecological stability",
      "The author dismisses techno-optimism as an intellectually dishonest position held by vested interests"
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Tone & Attitude",
    "cefr_difficulty": "C2",
    "irt_a_param": 1.85,
    "irt_b_param": 2.1,
    "irt_c_param": 0.13,
    "explanation_text": "The author presents both sides without endorsing either, then closes with 'the urgency of ecological degradation allows little room for ideological entrenchment on either side' — signalling impatience with prolonged debate rather than alignment with one camp. Option A is wrong because the author does not endorse techno-optimism. Option C is wrong because the author does not prescribe consumption restructuring as the sole path. Option D misrepresents the author's treatment of techno-optimism — it is presented as a debated worldview, not a dishonest one.",
    "explanation_vi": "",
    "distractor_traps": {
      "0": "The passage gives proponents' arguments substantial space, which may read as authorial endorsement to less careful readers",
      "1": "Correct — the final sentence encodes the author's balanced but urgent stance",
      "2": "The mention of 'restructure consumption patterns' may appear as the author's preferred solution to learners who focus on that phrase",
      "3": "The word 'detractors' and their criticism may be mistaken as the author's own voice rather than a reported view"
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R021",
    "format_type": "main_idea",
    "stem": "In many East Asian cultures, academic success is closely tied to family honor. Students often study long hours not just for personal achievement, but to fulfil obligations to their parents and ancestors. This collective motivation shapes how learners approach failure — not as a personal setback, but as a source of family shame. What is the main idea of this passage?",
    "options": [
      "East Asian students study harder than students in other cultures.",
      "In East Asian cultures, academic performance carries a social and familial significance beyond the individual.",
      "Family shame is the primary reason East Asian students fail their exams.",
      "East Asian parents put too much pressure on their children to succeed academically."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Main Idea",
    "cefr_difficulty": "B1",
    "irt_a_param": 1.15,
    "irt_b_param": 0.1,
    "irt_c_param": 0.2,
    "explanation_text": "The passage explains that academic success in East Asian cultures is connected to family and collective identity, not just personal goals. Option B captures this central idea. Option A makes an unsupported comparative claim. Option C distorts the passage by making shame the cause of failure rather than a cultural response. Option D introduces a critical judgment ('too much') not present in the text.",
    "explanation_vi": "Đáp án đúng là B vì đoạn văn nói rằng thành tích học tập ở các nền văn hóa Đông Á gắn liền với danh dự gia đình và bản sắc tập thể, không chỉ là mục tiêu cá nhân. Bẫy thường gặp: nhiều học sinh Việt Nam chọn A vì nghĩ đoạn văn đang so sánh mức độ chăm chỉ giữa các nền văn hóa, nhưng thực ra không có sự so sánh nào như vậy trong bài.",
    "distractor_traps": {
      "0": "Vietnamese learners may overgeneralize the idea of hard work into a comparison, influenced by stereotypes they already hold.",
      "1": "Correct — captures the collective cultural motivation described in the passage.",
      "2": "Learners may assume failure is the primary reason for shame.",
      "3": "Learners may interpret the pressure negatively."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R022",
    "format_type": "vocabulary_in_context",
    "stem": "The professor's lecture was so dense with theoretical jargon that even postgraduate students struggled to follow the argument. The teaching assistant later offered a simplified recap for those who had lost the thread. As used in this passage, the word 'dense' most closely means:",
    "options": [
      "heavy in physical weight",
      "difficult to understand due to complexity",
      "packed tightly in a small space",
      "spoken in a very quiet voice"
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Vocabulary in Context",
    "cefr_difficulty": "B2",
    "irt_a_param": 1.3,
    "irt_b_param": 0.55,
    "irt_c_param": 0.18,
    "explanation_text": "In this academic context, 'dense' means intellectually heavy or complex — a lecture full of difficult terminology. Option A reflects a literal physical meaning. Option C reflects another common meaning of 'dense' (compact/crowded) that does not apply to a lecture. Option D is unrelated and implausible but may attract learners guessing from misreading.",
    "explanation_vi": "Đáp án đúng là B vì trong ngữ cảnh học thuật, 'dense' có nghĩa là phức tạp và khó hiểu do chứa quá nhiều thuật ngữ chuyên môn. Bẫy thường gặp: học sinh hay chọn C vì 'dense' có nghĩa phổ biến là 'dày đặc, chật chội' nhưng nghĩa đó không phù hợp khi nói về một bài giảng.",
    "distractor_traps": {
      "0": "Vietnamese learners may default to the most common physical definition of 'dense' from early English vocabulary learning.",
      "1": "Correct — the contextual meaning of 'dense' here is intellectually complex and hard to follow.",
      "2": "'Dense' meaning closely packed is a valid English meaning; learners may select it without considering context.",
      "3": "Learners unfamiliar with lecture contexts may associate difficulty of understanding with speaking volume."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R023",
    "format_type": "inference",
    "stem": "Universities in Vietnam have seen a surge in students choosing English-medium instruction programs. Administrators cite improved graduate employability as the main draw. However, some faculty members have noted a quiet but persistent concern: students who study entirely in English may gradually lose comfort writing formally in Vietnamese. What can be inferred about some faculty members' attitudes toward English-medium programs?",
    "options": [
      "They fully support the shift to English-medium instruction for career reasons.",
      "They worry that prioritizing English may come at a cultural or linguistic cost.",
      "They believe Vietnamese students are not capable of learning in English.",
      "They want universities to ban English-medium instruction entirely."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "B2",
    "irt_a_param": 1.35,
    "irt_b_param": 0.65,
    "irt_c_param": 0.18,
    "explanation_text": "The phrase 'quiet but persistent concern' signals that some faculty members have reservations about the loss of formal Vietnamese writing ability. Option B correctly infers this linguistic and cultural worry. Option A contradicts the faculty's expressed concern. Option C introduces an assumption about student capability not implied in the text. Option D is an extreme inference not supported by the word 'concern.'",
    "explanation_vi": "Đáp án đúng là B vì cụm 'quiet but persistent concern' cho thấy một số giảng viên lo ngại rằng việc học hoàn toàn bằng tiếng Anh có thể khiến sinh viên mất đi khả năng viết tiếng Việt trang trọng. Bẫy thường gặp: học sinh chọn D vì nghĩ lo lắng đồng nghĩa với muốn cấm hoàn toàn, nhưng đây là suy luận quá cực đoan so với nội dung bài.",
    "distractor_traps": {
      "0": "Learners may focus on the positive framing ('employability') earlier in the passage and apply it to all parties.",
      "1": "Correct — the inference is grounded in the 'concern' about losing Vietnamese writing proficiency.",
      "2": "Vietnamese learners may project real-world beliefs about English-medium doubt onto the passage.",
      "3": "Learners often confuse 'having concerns' with 'wanting to ban' — a classic extreme inference trap."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R024",
    "format_type": "best_paraphrase",
    "stem": "Academic writing demands that authors substantiate every claim with credible evidence, lest their arguments be dismissed as mere opinion. Which of the following best paraphrases this sentence?",
    "options": [
      "Writers must only use famous sources to make their essays more convincing to readers.",
      "In academic writing, claims need to be supported by reliable evidence or they may not be taken seriously.",
      "Academic writing is very hard because readers always disagree with the author's opinion.",
      "To avoid criticism, academic writers should avoid sharing personal opinions in their essays."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Main Idea",
    "cefr_difficulty": "B2",
    "irt_a_param": 1.4,
    "irt_b_param": 0.7,
    "irt_c_param": 0.17,
    "explanation_text": "The original sentence says claims must be backed by credible evidence or risk being dismissed. Option B paraphrases this accurately using different words. Option A misreads 'credible' as 'famous.' Option C distorts the meaning by claiming readers always disagree. Option D reverses the logic — the issue is supporting opinions with evidence, not eliminating opinions.",
    "explanation_vi": "Đáp án đúng là B vì câu gốc nói rằng trong văn viết học thuật, mọi luận điểm cần được hỗ trợ bởi bằng chứng đáng tin cậy, nếu không sẽ bị coi là ý kiến cá nhân thiếu cơ sở. Bẫy thường gặp: học sinh chọn D vì nghĩ lời khuyên là 'không nên đưa ra ý kiến cá nhân', nhưng bài nói về việc phải hỗ trợ ý kiến bằng bằng chứng, không phải tránh ý kiến.",
    "distractor_traps": {
      "0": "Vietnamese learners may equate 'credible' with 'famous' since well-known sources are often modeled in school.",
      "1": "Correct — this is a faithful paraphrase of the original sentence.",
      "2": "Learners may confuse 'dismissed as mere opinion' with active reader disagreement or hostility.",
      "3": "The advice to 'avoid personal opinions' sounds academic and plausible, making it an attractive wrong choice."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R025",
    "format_type": "inference",
    "stem": "The Confucian model of education, which still influences many Asian classrooms today, positions the teacher as the ultimate authority on knowledge. Students are expected to absorb and reproduce information rather than critique or challenge it. This stands in contrast to Socratic methods that treat questioning as the foundation of learning. What does the author most likely think about the Confucian model of education?",
    "options": [
      "The author believes the Confucian model is superior because it produces disciplined students.",
      "The author presents the Confucian model neutrally but implies a contrast with more questioning-based approaches.",
      "The author argues that Asian students are incapable of critical thinking.",
      "The author condemns the Confucian model as harmful to academic development."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Tone & Attitude",
    "cefr_difficulty": "B2",
    "irt_a_param": 1.38,
    "irt_b_param": 0.8,
    "irt_c_param": 0.16,
    "explanation_text": "The author uses descriptive, comparative language rather than evaluative language. The contrast with Socratic methods implies a preference without explicitly condemning the Confucian model. Option B correctly captures this measured, comparative tone. Option A overclaims a positive stance. Option C is a harmful generalization not present in the text. Option D uses the word 'condemns,' which is too strong for the passage's tone.",
    "explanation_vi": "Đáp án đúng là B vì tác giả dùng ngôn ngữ mô tả và so sánh, không khen hay chê rõ ràng, nhưng sự đối lập với phương pháp Socratic cho thấy tác giả ngầm đánh giá cao việc đặt câu hỏi. Bẫy thường gặp: học sinh Việt Nam quen với mô hình giáo dục Nho giáo có thể chọn A vì vô thức bảo vệ quan điểm quen thuộc, hoặc chọn D vì cảm thấy sự đối lập trong bài mang tính chỉ trích mạnh.",
    "distractor_traps": {
      "0": "Learners from Confucian educational contexts may project a defensive or positive reading onto the passage.",
      "1": "Correct — the author contrasts systems without explicit judgment, but the framing leans toward valuing questioning.",
      "2": "Vietnamese learners may feel the passage implies this due to cultural sensitivity around such topics.",
      "3": "The contrast with Socratic method may feel critical enough to some learners to read as condemnation."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R026",
    "format_type": "inference",
    "stem": "A landmark longitudinal study tracked 2,000 university graduates over fifteen years and found that those who had engaged in interdisciplinary coursework demonstrated measurably greater adaptive capacity in changing job markets. The researchers were careful to control for socioeconomic background and prior academic performance. What can be inferred about the research methodology described?",
    "options": [
      "The researchers wanted to prove that interdisciplinary students earn higher salaries.",
      "The study was designed to isolate the effect of interdisciplinary coursework by accounting for potentially confounding variables.",
      "The longitudinal design was chosen because short-term studies are unreliable in social science.",
      "The researchers controlled for socioeconomic background because wealthier students tend to choose more courses."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "C1",
    "irt_a_param": 1.55,
    "irt_b_param": 1.2,
    "irt_c_param": 0.15,
    "explanation_text": "By controlling for socioeconomic background and prior academic performance, the researchers aimed to ensure that the observed outcomes were attributable to interdisciplinary coursework rather than other variables. Option B correctly infers the methodological intent. Option A introduces salary, which is not mentioned. Option C makes a broad methodological claim not supported by the passage. Option D offers a plausible but speculative causal explanation not given in the text.",
    "explanation_vi": "Đáp án đúng là B vì việc kiểm soát các biến như hoàn cảnh kinh tế xã hội và kết quả học tập trước đó là cách để đảm bảo kết quả nghiên cứu phản ánh đúng tác động của chương trình liên ngành, không phải do yếu tố khác. Bẫy thường gặp: học sinh hay chọn D vì nghe có vẻ hợp lý, nhưng đây là giải thích do người đọc tự suy diễn ra, không có trong đoạn văn.",
    "distractor_traps": {
      "0": "Learners may associate career outcomes with salary and assume that was the measure of success.",
      "1": "Correct — controlling for variables is a standard research technique to isolate a specific cause.",
      "2": "This sounds like a reasonable academic claim and may attract learners who over-read the significance of 'longitudinal.'",
      "3": "The mention of socioeconomic control may prompt learners to invent a rationale that sounds logical but is not in the text."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R027",
    "format_type": "vocabulary_in_context",
    "stem": "The author's prose style in the final chapter becomes markedly more elliptical, with key arguments left unstated and the burden of interpretation placed squarely on the reader. Critics have described this shift as either intellectually daring or needlessly obscure. As used in this passage, 'elliptical' most closely means:",
    "options": [
      "oval-shaped or having an ellipse-like structure",
      "expressed indirectly, with important meaning left implied",
      "written in a very emotional and personal style",
      "unusually long and repetitive in structure"
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Vocabulary in Context",
    "cefr_difficulty": "C1",
    "irt_a_param": 1.6,
    "irt_b_param": 1.3,
    "irt_c_param": 0.14,
    "explanation_text": "In literary and rhetorical contexts, 'elliptical' refers to a style where meaning is implied rather than stated outright — mirroring the grammatical ellipsis of omitting words. The passage confirms this with 'key arguments left unstated.' Option A is the geometric meaning, which is irrelevant here. Option C introduces emotionality not mentioned in the passage. Option D contradicts 'elliptical,' which implies omission, not length.",
    "explanation_vi": "Đáp án đúng là B vì trong văn học và tu từ học, 'elliptical' chỉ phong cách diễn đạt gián tiếp, để ý nghĩa quan trọng được ngầm hiểu thay vì nói thẳng, điều này được xác nhận bởi cụm 'key arguments left unstated' trong bài. Bẫy thường gặp: học sinh chọn A vì chỉ biết nghĩa hình học của từ 'ellipse' từ môn toán, mà không nhận ra đây là nghĩa tu từ trong ngữ cảnh văn học.",
    "distractor_traps": {
      "0": "Vietnamese learners who have only encountered 'ellipse' in mathematics or geometry will default to the shape meaning.",
      "1": "Correct — the literary meaning of elliptical aligns with the textual clue 'key arguments left unstated.'",
      "2": "Learners may associate the description of a final chapter with emotional or reflective writing.",
      "3": "Learners may confuse 'complex prose' with 'long prose,' especially when the passage mentions difficulty of interpretation."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R028",
    "format_type": "best_paraphrase",
    "stem": "The uncritical transmission of cultural norms through educational curricula risks naturalizing dominant ideologies, rendering invisible the assumptions that undergird existing power structures. Which of the following best paraphrases this sentence?",
    "options": [
      "If schools teach too much culture, students will forget how to think scientifically.",
      "When education passes on cultural values without questioning them, it may make certain power-serving assumptions seem normal and unnoticeable.",
      "Dominant cultural groups use schools to deliberately hide important information from minority students.",
      "Educational curricula should avoid cultural content in order to remain politically neutral."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Main Idea",
    "cefr_difficulty": "C1",
    "irt_a_param": 1.65,
    "irt_b_param": 1.45,
    "irt_c_param": 0.14,
    "explanation_text": "The original sentence argues that uncritical transmission of cultural norms can normalize ideologies that serve existing power structures. Option B accurately captures this using accessible language. Option A misreads the critique as being about science versus culture. Option C adds the idea of deliberate concealment, which is not implied — 'rendering invisible' is an unintentional effect. Option D draws an opposite, simplistic conclusion.",
    "explanation_vi": "Đáp án đúng là B vì câu gốc lập luận rằng khi giáo dục truyền đạt các chuẩn mực văn hóa mà không phản biện, nó có thể khiến các hệ tư tưởng phục vụ quyền lực trở nên bình thường và vô hình. Bẫy thường gặp: học sinh chọn C vì hiểu 'rendering invisible' là hành động cố tình che giấu, nhưng thực ra đây là hệ quả vô thức, không phải chủ đích.",
    "distractor_traps": {
      "0": "Vietnamese learners may simplify 'cultural norms vs. critical thinking' into a familiar science-vs-humanities binary.",
      "1": "Correct — this paraphrase captures the ideological critique using plain language.",
      "2": "The phrase 'rendering invisible' may be interpreted as deliberate hiding, especially for learners unfamiliar with structural critique language.",
      "3": "The mention of political neutrality may seem like a logical educational solution to learners with limited exposure to critical pedagogy."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R029",
    "format_type": "inference",
    "stem": "Postcolonial scholars have argued that the global dominance of English in academic publishing creates an epistemic hierarchy in which knowledge produced in other languages is systematically undervalued or rendered inaccessible to international audiences. Some researchers contend that this dynamic compels non-Anglophone scholars to either translate their work — often at significant intellectual cost — or risk professional marginalization. What does the passage suggest about non-Anglophone scholars who choose not to publish in English?",
    "options": [
      "They are unlikely to produce high-quality research compared to Anglophone scholars.",
      "They may face disadvantages in academic recognition and visibility on the global stage.",
      "They are more likely to be respected within their own national academic communities.",
      "They have decided that the intellectual cost of translation outweighs any potential professional benefit."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "C1",
    "irt_a_param": 1.7,
    "irt_b_param": 1.6,
    "irt_c_param": 0.13,
    "explanation_text": "The passage describes publishing in English as a near-prerequisite for international academic recognition, and frames non-publication in English as risking 'professional marginalization.' Option B correctly infers this disadvantage. Option A introduces a quality judgment not present in the text. Option C introduces a positive national consequence not discussed. Option D conflates the dilemma described with a resolved personal decision.",
    "explanation_vi": "Đáp án đúng là B vì bài nêu rõ rằng không xuất bản bằng tiếng Anh có nguy cơ bị 'professional marginalization', tức là bị lu mờ và thiếu sự công nhận trên trường quốc tế. Bẫy thường gặp: học sinh chọn C vì tự suy luận rằng nếu thiệt thòi ở cấp độ quốc tế thì sẽ được bù đắp ở cấp độ trong nước, nhưng bài không hề đề cập điều này.",
    "distractor_traps": {
      "0": "Learners may conflate language barrier with intellectual capability — a common but flawed inference.",
      "1": "Correct — the passage directly implies that bypassing English risks professional marginalization.",
      "2": "Learners may assume a compensatory dynamic: if you lose globally, you gain locally. The text does not support this.",
      "3": "The passage presents a dilemma, not a resolved choice — learners may misread description of a cost as a decision already made."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R030",
    "format_type": "inference",
    "stem": "The sociology of knowledge posits that all knowledge claims are embedded in the sociohistorical conditions of their production, and that the pretension to value-free inquiry is itself an ideological position — one that systematically occludes the interests it serves. A truly reflexive epistemology would require scholars not merely to declare their positionality, but to interrogate how that positionality constitutively shapes what can even be asked, let alone answered. What is the author's primary critique in this passage?",
    "options": [
      "Sociologists should conduct more historical research to improve the credibility of their theories.",
      "The claim to neutral, objective inquiry is not ideologically innocent, and genuine scholarly reflexivity demands deeper self-examination than disclosure alone.",
      "Scholars who declare their positionality are already practicing an adequate form of critical self-awareness.",
      "Academic knowledge production is hopelessly biased and should be abandoned in favor of non-institutional forms of knowing."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Author's Purpose",
    "cefr_difficulty": "C2",
    "irt_a_param": 1.85,
    "irt_b_param": 2.2,
    "irt_c_param": 0.13,
    "explanation_text": "The author critiques the assumption that research can be value-free, and further argues that simply declaring positionality is insufficient — scholars must interrogate how their position shapes the very questions they are able to form. Option B captures both layers of the critique. Option A reduces the argument to a methodological suggestion. Option C is directly contradicted by the passage ('not merely to declare their positionality'). Option D extends the critique to nihilism, which the passage does not endorse.",
    "explanation_vi": "Đáp án đúng là B vì tác giả phê phán hai điều: quan niệm rằng nghiên cứu có thể hoàn toàn khách quan là sai, và chỉ tuyên bố lập trường cá nhân thôi là chưa đủ — học giả cần tự hỏi sâu hơn về cách lập trường đó định hình chính những câu hỏi họ đặt ra. Bẫy thường gặp: học sinh chọn C vì đọc chưa hết đoạn, bỏ qua mệnh đề 'not merely to declare their positionality' — đây là bẫy đọc lướt rất phổ biến với văn bản học thuật phức tạp.",
    "distractor_traps": {
      "0": "The mention of 'sociohistorical conditions' may prompt learners to reduce the argument to a call for more historical research.",
      "1": "Correct — this captures both the critique of value-free inquiry and the insufficiency of simple positionality disclosure.",
      "2": "This is a subtle trap: the passage explicitly says declaring positionality is not enough, but learners may stop reading before that clause.",
      "3": "Learners with limited exposure to epistemological discourse may interpret a strong critique of objectivity as a rejection of academia altogether."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R031",
    "format_type": "inference",
    "stem": "Despite record profits last quarter, the company's CEO warned investors that 'the current economic climate remains deeply unpredictable, and those who mistake a single strong quarter for a lasting trend do so at their own peril.' She urged the board to maintain conservative spending targets.\n\nWhat is the CEO's attitude toward the company's recent performance?",
    "options": [
      "She is enthusiastic and sees it as proof of the company's long-term strength.",
      "She is cautiously skeptical, viewing it as insufficient grounds for optimism.",
      "She is indifferent, believing financial results are outside her control.",
      "She is frustrated that investors are not celebrating the profits more."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Tone & Attitude",
    "cefr_difficulty": "B2",
    "irt_a_param": 1.35,
    "irt_b_param": 0.8,
    "irt_c_param": 0.18,
    "explanation_text": "The CEO explicitly cautions against interpreting one strong quarter as a lasting trend. Her phrase 'at their own peril' signals a warning tone — she is cautiously skeptical rather than celebratory. Option A misreads the warning as enthusiasm. Option C introduces indifference, which contradicts her active warning. Option D is unsupported by any detail in the passage.",
    "explanation_vi": "CEO dùng cụm 'at their own peril' để cảnh báo, không phải để ăn mừng, cho thấy thái độ thận trọng và hoài nghi dù kết quả kinh doanh tốt. Bẫy phổ biến: học sinh thấy 'record profits' liền chọn đáp án tích cực, bỏ qua từ 'Despite' ở đầu câu đảo ngược toàn bộ ý nghĩa.",
    "distractor_traps": {
      "0": "Vietnamese learners may focus on 'record profits' and assume the CEO must be happy, missing the contrast introduced by 'Despite'.",
      "1": "Correct — the warning tone and conditional language signal guarded skepticism.",
      "2": "Learners unfamiliar with hedging language may interpret 'unpredictable' as fatalism rather than caution.",
      "3": "Learners may confuse a warning to investors with frustration at them."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R032",
    "format_type": "best_paraphrase",
    "stem": "A financial columnist wrote: 'Inflation, that silent thief, erodes purchasing power so gradually that most households do not notice until the damage is irreversible. Governments that ignore early warning signs often find themselves firefighting crises they could have prevented with modest, timely intervention.'\n\nWhich sentence best paraphrases the columnist's main argument?",
    "options": [
      "Governments should respond aggressively to inflation only once it becomes a serious crisis.",
      "Inflation is difficult to detect early, but acting quickly with measured steps can prevent major economic harm.",
      "Households are primarily responsible for managing the impact of inflation on their budgets.",
      "Inflation is inevitable and cannot be meaningfully controlled by government policy."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Author's Purpose",
    "cefr_difficulty": "B2",
    "irt_a_param": 1.4,
    "irt_b_param": 0.75,
    "irt_c_param": 0.17,
    "explanation_text": "The columnist argues that inflation is slow and hard to notice ('silent thief') but that governments can prevent crises through 'modest, timely intervention' — early, moderate action. Option A inverts this by suggesting governments should wait. Option C shifts responsibility to households, which is not stated. Option D claims inevitability, contradicting the columnist's belief in preventive policy.",
    "explanation_vi": "Tác giả lập luận rằng lạm phát âm thầm gây hại nhưng có thể ngăn chặn nếu chính phủ hành động sớm và vừa phải, thể hiện qua cụm 'modest, timely intervention'. Bẫy phổ biến: học sinh đọc 'firefighting' và nghĩ đó là hành động được khuyến khích, trong khi thực ra đó là hậu quả của việc hành động quá muộn.",
    "distractor_traps": {
      "0": "Learners may miss the word 'early' and interpret 'firefighting' as the recommended approach rather than the failure to be avoided.",
      "1": "Correct — captures both the stealth nature of inflation and the value of proactive intervention.",
      "2": "The passage mentions 'households' experiencing the damage, so learners may assume they are the focus of the argument.",
      "3": "'Inevitable' sounds academic and authoritative, which may attract learners who do not process the preventive argument carefully."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R033",
    "format_type": "inference",
    "stem": "A technology journalist observed: 'Silicon Valley's latest wave of AI startups speaks the language of utopia fluently — promises of curing disease, ending poverty, and democratizing knowledge flow effortlessly from founder pitch decks. Yet the same founders resist any regulatory framework that might hold those promises accountable.'\n\nWhat underlying attitude does the journalist express toward these AI startups?",
    "options": [
      "Admiration for their ambition and innovative vision.",
      "Skepticism about the sincerity of their stated goals.",
      "Confusion about why regulators are opposing their work.",
      "Disappointment that their technologies have already failed to deliver."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Tone & Attitude",
    "cefr_difficulty": "C1",
    "irt_a_param": 1.55,
    "irt_b_param": 1.3,
    "irt_c_param": 0.15,
    "explanation_text": "The journalist's ironic phrase 'speaks the language of utopia fluently' implies the promises are rehearsed and performative rather than genuine. The contrast between grand claims and resistance to accountability reveals skepticism about sincerity. Option A ignores the ironic register. Option C inverts the relationship — founders resist regulators, not the other way around. Option D claims failure has already occurred, which is not stated.",
    "explanation_vi": "Cụm 'speaks the language of utopia fluently' được dùng theo nghĩa mỉa mai, ngụ ý những lời hứa này được lặp đi lặp lại như kịch bản, không phải chân thật. Bẫy phổ biến: học sinh bị cuốn bởi những từ tích cực như 'curing disease, ending poverty' và nhầm tưởng tác giả đang ca ngợi các startup này.",
    "distractor_traps": {
      "0": "The ambitious language ('curing disease, ending poverty') may lead learners to read it as praise rather than irony.",
      "1": "Correct — the ironic framing and contrast with accountability-avoidance reveal skepticism.",
      "2": "The phrase 'resist any regulatory framework' may confuse learners about who is opposing whom.",
      "3": "Learners may interpret 'promises' as already-broken commitments rather than future claims under scrutiny."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R034",
    "format_type": "inference",
    "stem": "In an op-ed about algorithmic news feeds, the author stated: 'We have outsourced the editorial judgment of an entire civilization to machines optimized not for truth or depth, but for the frictionless accumulation of attention. The consequences, though diffuse, are not invisible to those willing to look.'\n\nWhat is the author's primary purpose in this passage?",
    "options": [
      "To explain how algorithmic systems technically function.",
      "To warn readers about the societal risks of attention-driven media platforms.",
      "To argue that human editors are professionally superior to AI systems.",
      "To celebrate the efficiency gains that algorithmic curation has brought to journalism."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Author's Purpose",
    "cefr_difficulty": "C1",
    "irt_a_param": 1.6,
    "irt_b_param": 1.4,
    "irt_c_param": 0.14,
    "explanation_text": "The author's purpose is to issue a warning. Key phrases — 'outsourced,' 'optimized not for truth,' 'consequences... not invisible' — frame algorithmic media as a civilizational risk. Option A is about technical explanation, which the passage does not provide. Option C makes a narrow human-vs-AI comparison not present in the text. Option D is the opposite of the author's critical stance.",
    "explanation_vi": "Tác giả dùng ngôn ngữ mạnh như 'outsourced', 'optimized not for truth' để cảnh báo về tác hại của thuật toán đối với xã hội, không phải để giải thích kỹ thuật. Bẫy phổ biến: từ 'algorithmic' và 'optimized' khiến học sinh nghĩ đoạn văn đang giải thích cách hệ thống hoạt động về mặt kỹ thuật.",
    "distractor_traps": {
      "0": "The word 'algorithmic' and reference to machine optimization may cue learners to expect a technical explanation.",
      "1": "Correct — the author uses alarming language to caution readers about systemic media risk.",
      "2": "The contrast between human judgment and machines may lead learners to assume a professional rivalry argument.",
      "3": "'Frictionless' and 'efficiency' are positively coded words that may mislead learners into reading a celebratory tone."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R035",
    "format_type": "vocabulary_in_context",
    "stem": "A media critic wrote: 'The documentary adopted a posture of neutrality, presenting all sides with studied equanimity — yet its selection of interviewees, the sequencing of testimony, and the music cues in moments of silence told a story the filmmaker was careful never to state directly.'\n\nAs used in this passage, 'studied equanimity' most nearly means:",
    "options": [
      "Genuine emotional detachment achieved through journalistic training.",
      "A deliberately performed calmness designed to appear impartial.",
      "Deep confusion about which perspective to present first.",
      "An unexpected calmness that surprised even the filmmaker."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Vocabulary in Context",
    "cefr_difficulty": "C1",
    "irt_a_param": 1.5,
    "irt_b_param": 1.25,
    "irt_c_param": 0.16,
    "explanation_text": "'Studied' here means deliberate or carefully cultivated rather than accidental. Combined with the critic's point that the filmmaker communicated a bias through non-verbal choices, 'studied equanimity' implies a performance of calm impartiality — not genuine neutrality. Option A mistakes 'studied' for the result of training. Option C introduces confusion, which is unsupported. Option D misreads 'studied' as surprising.",
    "explanation_vi": "Trong ngữ cảnh này, 'studied' có nghĩa là cố ý, được dàn dựng cẩn thận, không phải kết quả của việc học hành hay đào tạo. Bẫy phổ biến: học sinh quen nghĩa 'studied' là 'đã nghiên cứu' nên chọn đáp án liên quan đến đào tạo báo chí, bỏ qua ngữ cảnh mỉa mai của toàn đoạn.",
    "distractor_traps": {
      "0": "'Studied' is commonly associated with academic learning, so learners may link it to training rather than deliberate performance.",
      "1": "Correct — 'studied' signals intentionality, and 'equanimity' means composed calm; together they imply a constructed appearance of neutrality.",
      "2": "'Equanimity' is an unfamiliar word, so learners may guess it relates to indecision or confusion.",
      "3": "Learners may interpret 'studied' as something observed or noticed, reading it as an unexpected quality."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R036",
    "format_type": "inference",
    "stem": "A historian of technology wrote: 'Each generation greets its dominant new medium — print, radio, television, the internet — with a mixture of euphoria and terror, the proportions shifting depending on whether one stands to gain or lose from its ascent. The rhetoric changes; the pattern does not.'\n\nWhat can be most reasonably inferred about the author's view of public reactions to new media?",
    "options": [
      "Public reactions are entirely irrational and should be dismissed by policymakers.",
      "Responses to new media are historically consistent, shaped by self-interest rather than objective assessment.",
      "Each new medium is genuinely more dangerous than the one it replaces.",
      "Euphoria is always the dominant reaction among the general population."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "C1",
    "irt_a_param": 1.65,
    "irt_b_param": 1.5,
    "irt_c_param": 0.14,
    "explanation_text": "The historian argues that the 'pattern does not' change — reactions recur across media. The phrase 'depending on whether one stands to gain or lose' grounds those reactions in self-interest, not objective analysis. Option A adds 'irrational' and policy prescription, which the author does not claim. Option C suggests escalating danger, which contradicts the cyclical framing. Option D ignores the 'mixture' of euphoria and terror.",
    "explanation_vi": "Tác giả khẳng định 'the pattern does not change' và giải thích phản ứng của công chúng phụ thuộc vào lợi ích cá nhân, không phải đánh giá khách quan. Bẫy phổ biến: từ 'euphoria' xuất hiện trước từ 'terror' trong câu khiến học sinh cho rằng sự phấn khích luôn chiếm ưu thế, bỏ qua từ 'mixture'.",
    "distractor_traps": {
      "0": "The word 'terror' may suggest the author finds reactions excessive, leading learners to infer a dismissive stance.",
      "1": "Correct — cyclical pattern + interest-based framing support this inference.",
      "2": "Learners may interpret the list of media as evidence of increasing harm across generations.",
      "3": "The word 'euphoria' appears first in the sentence, which may anchor learners to assume it dominates."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R037",
    "format_type": "inference",
    "stem": "An economist specializing in labor markets wrote: 'The automation optimists cite productivity gains with the conviction of those who have never had to renegotiate their own irrelevance. That new jobs will emerge is probable; that they will emerge in time, in the right places, and for the right people is a faith unsupported by historical precedent.'\n\nWhat is the author's attitude toward economists who are optimistic about automation?",
    "options": [
      "Respectful disagreement, acknowledging their arguments are well-evidenced.",
      "Dismissive contempt, rejecting their position as both elitist and empirically unsound.",
      "Cautious agreement that productivity gains are real but overstated.",
      "Neutral analysis, presenting their view as one of several equally valid positions."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Tone & Attitude",
    "cefr_difficulty": "C1",
    "irt_a_param": 1.7,
    "irt_b_param": 1.6,
    "irt_c_param": 0.13,
    "explanation_text": "The author describes optimists as people who have 'never had to renegotiate their own irrelevance' — a class-based critique implying detachment from lived consequences. Calling their view a 'faith unsupported by historical precedent' dismisses it as empirically unjustified. This combination signals dismissive contempt. Option A requires respect, which is absent. Option C requires partial agreement, but the author's phrasing offers none. Option D requires neutrality, which the pointed rhetoric contradicts.",
    "explanation_vi": "Tác giả chỉ trích người lạc quan về tự động hóa là thiếu thực tế về mặt giai cấp và thiếu bằng chứng lịch sử, dùng từ 'faith' để ám chỉ niềm tin mù quáng không có cơ sở. Bẫy phổ biến: từ 'probable' trong câu 'new jobs will emerge is probable' khiến học sinh nghĩ tác giả đang đồng ý một phần với phe lạc quan.",
    "distractor_traps": {
      "0": "The word 'probable' regarding new jobs emerging may suggest the author partially concedes the optimists' point, implying respectful disagreement.",
      "1": "Correct — the class critique and 'faith' framing together signal dismissive contempt.",
      "2": "'Productivity gains' are referenced but never endorsed by the author; learners may mistake mention for agreement.",
      "3": "The structured comparison between optimists and the author may read as balanced analysis to learners less attuned to rhetorical register."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R038",
    "format_type": "inference",
    "stem": "A media scholar analyzing cable news wrote: 'Outrage, it turns out, is extraordinarily cheap to produce and extraordinarily expensive to recover from. Networks discovered long ago that a population held in a state of low-grade alarm is a population that does not change the channel. The business model and the epistemological crisis are not separate phenomena.'\n\nWhat is the author's primary purpose in this passage?",
    "options": [
      "To propose regulatory solutions for reducing sensationalism in cable news.",
      "To reveal that the commercial incentives of news networks actively contribute to public misinformation.",
      "To argue that audiences are personally responsible for their own media consumption habits.",
      "To compare the production costs of different types of television content."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Author's Purpose",
    "cefr_difficulty": "C2",
    "irt_a_param": 1.75,
    "irt_b_param": 2.1,
    "irt_c_param": 0.13,
    "explanation_text": "The author's final sentence — 'The business model and the epistemological crisis are not separate phenomena' — is the key thesis: commercial incentives and the degradation of public knowledge are causally linked. The purpose is to expose this structural relationship. Option A goes beyond the text by proposing regulation. Option C blames audiences, which the author does not. Option D reduces the argument to a cost comparison, missing the structural critique entirely.",
    "explanation_vi": "Câu cuối 'The business model and the epistemological crisis are not separate phenomena' là luận điểm chính: lợi nhuận thương mại và khủng hoảng nhận thức công chúng có mối liên hệ nhân quả trực tiếp. Bẫy phổ biến: cụm 'extraordinarily cheap to produce' khiến học sinh nghĩ tác giả đang so sánh chi phí sản xuất các loại nội dung truyền hình.",
    "distractor_traps": {
      "0": "The critical tone may suggest the author wants change, leading learners to infer a policy proposal is implied.",
      "1": "Correct — the causal link between business model and epistemological crisis is the explicit thesis.",
      "2": "'A population that does not change the channel' may be misread as criticism of passive audiences rather than structural critique.",
      "3": "'Extraordinarily cheap to produce' introduces cost language that may mislead learners toward a production-cost comparison reading."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R039",
    "format_type": "inference",
    "stem": "In a long-form essay on platform economics, the author argued: 'The genius of the attention economy lies not in selling products to users, but in selling users to products — or rather, in selling the curated, algorithmically legible version of users to advertisers who could not care less about the human remainder. The platform is the marketplace; the self is the commodity.'\n\nWhat is the author's attitude toward the attention economy as described in this passage?",
    "options": [
      "Reluctant admiration for its operational ingenuity despite ethical concerns.",
      "Ironic condemnation, exposing its logic as dehumanizing and commercially cynical.",
      "Academic detachment, analyzing its mechanisms without moral judgment.",
      "Optimistic curiosity about its potential to evolve into a fairer system."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Tone & Attitude",
    "cefr_difficulty": "C2",
    "irt_a_param": 1.8,
    "irt_b_param": 2.2,
    "irt_c_param": 0.12,
    "explanation_text": "'Genius' is used ironically — the author is not praising the system but using the word to highlight how cleverly exploitative it is. 'The human remainder' is a deliberately cold phrase that underlines the dehumanization. The closing aphorism 'the self is the commodity' is a condemnation, not a neutral observation. Option A requires genuine admiration, which the irony undercuts. Option C requires moral neutrality, which the loaded language denies. Option D is entirely unsupported.",
    "explanation_vi": "Từ 'genius' được dùng theo nghĩa mỉa mai, và cụm 'human remainder' thể hiện thái độ lên án sự phi nhân hóa của nền kinh tế chú ý. Bẫy phổ biến: học sinh thấy từ 'genius' ở câu đầu liền hiểu là tác giả thực sự ngưỡng mộ hệ thống này, không nhận ra giọng điệu mỉa mai xuyên suốt đoạn văn.",
    "distractor_traps": {
      "0": "The word 'genius' in the opening clause is likely to mislead learners who do not recognize ironic register, producing a reading of genuine admiration.",
      "1": "Correct — ironic use of 'genius' plus dehumanizing language ('human remainder') signal ironic condemnation.",
      "2": "The analytical, aphoristic style may resemble academic writing, leading learners to infer detachment.",
      "3": "Learners unfamiliar with the attention economy debate may interpret the sophisticated analysis as exploratory optimism."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R040",
    "format_type": "inference",
    "stem": "An economic journalist wrote: 'Central banks spent a decade insisting that their models captured the essential dynamics of inflation. Then inflation returned — not from the sources their models had been designed to detect, but from supply chain fractures, geopolitical shocks, and pandemic-induced behavioral shifts no equation had anticipated. The humility that followed was overdue.'\n\nWhat is the author's primary purpose in writing this passage?",
    "options": [
      "To defend central banks against critics who claimed their models were fundamentally flawed.",
      "To illustrate the limits of economic modeling by showing how reality exceeded its assumptions.",
      "To explain the technical causes of the most recent global inflation episode in detail.",
      "To argue that geopolitical factors are always more important than monetary policy in controlling inflation."
    ],
    "correct_choice": 1,
    "skill": "Reading",
    "sub_skill": "Author's Purpose",
    "cefr_difficulty": "C2",
    "irt_a_param": 1.85,
    "irt_b_param": 2.4,
    "irt_c_param": 0.12,
    "explanation_text": "The author's purpose is to use the inflation episode as a case study in the limits of model-based thinking. The phrase 'The humility that followed was overdue' signals a normative judgment — the author believes economists had excessive confidence in their models. Option A inverts the author's critical stance into a defense. Option C requires technical detail the passage deliberately omits. Option D claims a universal hierarchy of causes that the author does not establish.",
    "explanation_vi": "Tác giả dùng ví dụ về lạm phát để chứng minh rằng các mô hình kinh tế có giới hạn nghiêm trọng, và câu 'The humility that followed was overdue' là nhận xét mang tính phê phán rõ ràng. Bẫy phổ biến: tác giả liệt kê các nguyên nhân cụ thể như chuỗi cung ứng và địa chính trị khiến học sinh nhầm mục đích là giải thích kỹ thuật về lạm phát.",
    "distractor_traps": {
      "0": "The passage describes what central banks believed, and learners may read this exposition as a defense of their position.",
      "1": "Correct — the juxtaposition of model confidence with unforeseen shocks, plus the closing normative judgment, establish this as the purpose.",
      "2": "The passage names specific causes (supply chains, geopolitics, pandemic behavior), which may lead learners to expect a technical explanation is being provided.",
      "3": "Geopolitical shocks are listed as one of several unforeseen causes, and learners may elevate this detail into a general argument about cause hierarchies."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R041",
    "format_type": "inference",
    "stem": "A utilitarian argues that an action is moral only if it maximises overall happiness. A deontologist counters that some actions are inherently wrong regardless of their consequences. Both agree, however, that morality requires justification beyond mere personal preference. What can be inferred about the two philosophers' views?",
    "options": [
      "They share the belief that moral claims must be grounded in reason, not arbitrary feeling.",
      "They agree that maximising happiness is the ultimate criterion for moral judgement.",
      "They both reject the idea that consequences have any bearing on ethical decisions.",
      "They hold identical views on what makes an action morally permissible."
    ],
    "correct_choice": 0,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "B2",
    "irt_a_param": 1.35,
    "irt_b_param": 0.72,
    "irt_c_param": 0.18,
    "explanation_text": "Both thinkers reject arbitrary personal preference as the basis for morality, implying they agree that moral claims need rational grounding. Option B attributes utilitarianism's criterion to both. Option C distorts the deontologist's view. Option D ignores their fundamental disagreement.",
    "explanation_vi": "Cả hai triết gia đều đồng ý rằng đạo đức cần có cơ sở lý trí, không chỉ dựa vào cảm xúc cá nhân — đây là điểm chung duy nhất được đề cập. Nhiều học sinh chọn đáp án B vì nhầm lẫn rằng cả hai cùng ủng hộ quan điểm của người theo thuyết công lợi về hạnh phúc tối đa.",
    "distractor_traps": {
      "0": "Correct. Learners may doubt this because the two philosophers disagree strongly — but the passage states they share one key point.",
      "1": "Learners conflate the utilitarian's position with a shared position, missing that the deontologist explicitly rejects consequences as the measure.",
      "2": "Learners over-apply the deontologist's stance to both, forgetting the utilitarian explicitly cares about consequences.",
      "3": "Learners may read 'both agree' too broadly and assume full agreement, ignoring the word 'however' which signals a contrast."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R042",
    "format_type": "best_paraphrase",
    "stem": "Rousseau contended that humans are naturally good but are corrupted by the institutions of civilised society — property, inequality, and law chief among them. Which of the following best paraphrases Rousseau's central claim?",
    "options": [
      "Society's structures transform inherently moral beings into flawed ones.",
      "Laws and property rights are necessary evils that preserve natural goodness.",
      "Civilisation enhances human virtue by imposing order on natural chaos.",
      "Human nature is fundamentally corrupt, and only institutions can redeem it."
    ],
    "correct_choice": 0,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "B2",
    "irt_a_param": 1.28,
    "irt_b_param": 0.55,
    "irt_c_param": 0.17,
    "explanation_text": "Option A accurately captures Rousseau's idea that natural goodness is degraded by social institutions. Option B misrepresents institutions as preserving goodness. Option C inverts the argument. Option D is the Hobbesian view — the direct philosophical opposite of Rousseau.",
    "explanation_vi": "Rousseau cho rằng con người vốn tốt đẹp nhưng bị xã hội và các thể chế làm hư hỏng — đáp án A diễn đạt chính xác ý này. Bẫy phổ biến là chọn đáp án D vì học sinh nhầm Rousseau với Hobbes, một triết gia nổi tiếng khác có quan điểm hoàn toàn ngược lại.",
    "distractor_traps": {
      "0": "Correct. Learners may find this too abstract and overlook it.",
      "1": "The phrase 'necessary evils' sounds balanced and nuanced, tempting learners who want a moderate reading.",
      "2": "Learners who associate civilisation with progress may assume Rousseau shares this common belief.",
      "3": "Learners who confuse Rousseau with Hobbes — both famous political philosophers — may select this inverted view."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R043",
    "format_type": "inference",
    "stem": "Hannah Arendt observed that the most dangerous perpetrators of evil are not monsters driven by hatred but ordinary people who stop thinking — who follow orders without moral reflection. She called this phenomenon 'the banality of evil.' What does Arendt most likely imply about the nature of moral responsibility?",
    "options": [
      "Moral responsibility depends on one's capacity and willingness to exercise independent judgement.",
      "Only those who act from hatred can be held fully responsible for atrocities.",
      "Individuals who follow orders are legally blameless even when outcomes are catastrophic.",
      "The scale of an evil act determines the degree of personal responsibility attributed."
    ],
    "correct_choice": 0,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "C1",
    "irt_a_param": 1.52,
    "irt_b_param": 1.25,
    "irt_c_param": 0.16,
    "explanation_text": "Arendt's argument hinges on the failure to think — implying that the exercise of moral thought is what creates and sustains responsibility. Options B and C contradict her claim. Option D introduces a scale-based logic absent from her argument.",
    "explanation_vi": "Arendt lập luận rằng việc ngừng suy nghĩ độc lập là nguyên nhân gốc rễ của tội ác, do đó trách nhiệm đạo đức gắn liền với khả năng và ý chí phán xét của mỗi người. Học sinh thường bị bẫy bởi đáp án C vì liên tưởng đến lý lẽ bào chữa 'tuân lệnh cấp trên' nổi tiếng trong các phiên tòa chiến tranh.",
    "distractor_traps": {
      "0": "Correct. Learners may overlook this because it is an inference requiring the reader to reverse-engineer her normative claim.",
      "1": "The word 'dangerous' in the passage may lead learners to assume Arendt is distinguishing responsibility by motivation.",
      "2": "'Following orders' is commonly associated with legal defences (e.g. Nuremberg), so learners may import this legal logic.",
      "3": "Learners may conflate moral weight with the scale of harm — a common intuition that the passage explicitly challenges."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R044",
    "format_type": "vocabulary_in_context",
    "stem": "The senator's address was notable for its studied ambiguity — every pledge carefully worded so as to satisfy competing constituencies without committing to a single actionable policy. Critics accused him of deliberate obfuscation; supporters praised his 'pragmatic flexibility.' As used in this passage, 'studied' most nearly means:",
    "options": [
      "Calculated and intentional.",
      "Academic and scholarly.",
      "Thorough and exhaustive.",
      "Hesitant and uncertain."
    ],
    "correct_choice": 0,
    "skill": "Reading",
    "sub_skill": "Vocabulary in Context",
    "cefr_difficulty": "C1",
    "irt_a_param": 1.61,
    "irt_b_param": 1.38,
    "irt_c_param": 0.15,
    "explanation_text": "'Studied' here means deliberately crafted — the senator chose ambiguity on purpose. The context of 'obfuscation' and 'carefully worded' confirms intent. Option B reflects the word's more common academic meaning. Option C describes thoroughness. Option D contradicts the senator's evident strategic control.",
    "explanation_vi": "Trong ngữ cảnh này, 'studied' có nghĩa là 'có chủ ý, được tính toán kỹ lưỡng' — vị thượng nghị sĩ cố tình dùng ngôn ngữ mơ hồ để không mất lòng ai. Học sinh Việt Nam thường chọn đáp án B vì quen gặp 'studied' với nghĩa 'học thuật, mang tính học giả'.",
    "distractor_traps": {
      "0": "Correct. This meaning requires inference from context rather than dictionary recall.",
      "1": "Vietnamese learners most commonly encounter 'studied' as an adjective meaning scholarly, making this a high-frequency false cognate trap.",
      "2": "'Studied' superficially resembles 'thorough research,' and 'exhaustive' sounds appropriately sophisticated.",
      "3": "The political context of pledges and competing factions may suggest indecision rather than strategy."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R045",
    "format_type": "inference",
    "stem": "Machiavelli argued that a prince must learn how not to be good — not out of cruelty, but necessity. A ruler who is always virtuous in a world where others are not will inevitably be ruined. What does this passage suggest about Machiavelli's view of political ethics?",
    "options": [
      "Political survival may require suspending conventional morality in strategic circumstances.",
      "Rulers who are cruel will always outlast those who are virtuous.",
      "Machiavelli believed that morality was irrelevant to the conduct of government.",
      "Political success and ethical behaviour are fully compatible goals for a capable leader."
    ],
    "correct_choice": 0,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "C1",
    "irt_a_param": 1.48,
    "irt_b_param": 1.2,
    "irt_c_param": 0.16,
    "explanation_text": "Machiavelli does not advocate cruelty as an end; he argues that circumstances may demand deviation from virtue. Option B overstates his claim. Option C misreads him — he acknowledges morality, he just argues it cannot always be applied. Option D is precisely what he refutes.",
    "explanation_vi": "Machiavelli không cổ vũ sự tàn nhẫn mà chỉ lập luận rằng đôi khi hoàn cảnh buộc người cầm quyền phải tạm gác đạo đức thông thường để tồn tại. Học sinh hay chọn đáp án C vì danh tiếng của Machiavelli khiến họ nghĩ ông hoàn toàn phủ nhận đạo đức trong chính trị.",
    "distractor_traps": {
      "0": "Correct. Learners must distinguish 'may require suspending' from 'always requires abandoning.'",
      "1": "The phrase 'not out of cruelty' is easily missed, causing learners to interpret Machiavelli as simply endorsing cruelty.",
      "2": "Machiavelli's reputation precedes him — learners familiar with the word 'Machiavellian' may default to assuming amorality.",
      "3": "Learners seeking a moderate or optimistic reading of political ethics may gravitate toward this conciliatory option."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R046",
    "format_type": "inference",
    "stem": "The author writes: 'We do not grant the torturer immunity because his victims eventually recovered, nor do we excuse the censor because the suppressed ideas were, in retrospect, dangerous. The process, not merely the outcome, carries moral weight.' What is the author's underlying argument?",
    "options": [
      "The ethical evaluation of an act cannot be reduced to its consequences alone.",
      "Torture and censorship are justified when the long-term outcomes are demonstrably positive.",
      "Moral judgement should be suspended until the full consequences of an action are known.",
      "Actions are only unethical when they produce irreversible harm to their victims."
    ],
    "correct_choice": 0,
    "skill": "Reading",
    "sub_skill": "Author's Purpose",
    "cefr_difficulty": "C1",
    "irt_a_param": 1.55,
    "irt_b_param": 1.45,
    "irt_c_param": 0.14,
    "explanation_text": "The author argues that the act itself — the process — bears moral weight independent of outcomes, a deontological position. Options B, C, and D all subordinate moral judgement to consequences, contradicting the passage.",
    "explanation_vi": "Tác giả lập luận rằng bản thân hành động — chứ không chỉ kết quả — đã mang trọng lượng đạo đức, đây là quan điểm đạo đức học theo trường phái nghĩa vụ luận. Học sinh dễ bị đánh lừa bởi các ví dụ 'nạn nhân đã hồi phục' và 'ý tưởng nguy hiểm' khiến họ nghĩ tác giả quan tâm đến hậu quả.",
    "distractor_traps": {
      "0": "Correct. Learners must synthesise two specific examples into an abstract ethical principle.",
      "1": "The examples of 'recovery' and 'dangerous ideas' give conditional language that misleads learners into thinking outcomes matter.",
      "2": "The word 'retrospect' in the passage implies looking back at consequences, tempting learners to read consequentialism into the text.",
      "3": "'Irreversible harm' sounds like a reasonable ethical threshold — learners may confuse severity with the author's actual concern about process."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R047",
    "format_type": "inference",
    "stem": "A political theorist writes: 'Liberal democracies face a paradox: the tolerance they enshrine as a founding value may oblige them to tolerate movements explicitly dedicated to the destruction of that tolerance. To survive, openness must know its limits.' The author's tone toward liberal democracy is best described as:",
    "options": [
      "Sympathetic yet critically alert to an internal vulnerability.",
      "Dismissive of democracy's capacity to defend itself against authoritarianism.",
      "Enthusiastically celebratory of liberalism's philosophical coherence.",
      "Neutral and detached, presenting the paradox without implied judgement."
    ],
    "correct_choice": 0,
    "skill": "Reading",
    "sub_skill": "Tone & Attitude",
    "cefr_difficulty": "C2",
    "irt_a_param": 1.72,
    "irt_b_param": 1.95,
    "irt_c_param": 0.13,
    "explanation_text": "The author values democracy ('founding value,' 'to survive') but warns of a structural flaw — a stance that is supportive yet analytically cautious. Option B misreads concern as dismissal. Option C ignores the critique embedded in 'paradox.' Option D is contradicted by the prescriptive final sentence.",
    "explanation_vi": "Tác giả vừa trân trọng nền dân chủ tự do vừa cảnh báo về một điểm yếu nội tại nghiêm trọng — thái độ này vừa đồng cảm vừa phê phán sắc bén. Học sinh thường chọn đáp án D vì văn phong hàn lâm dễ bị nhầm là trung lập, trong khi câu cuối 'openness must know its limits' thể hiện rõ quan điểm của tác giả.",
    "distractor_traps": {
      "0": "Correct. Learners must hold two simultaneous authorial attitudes — sympathy and critique — without collapsing into one.",
      "1": "The mention of destruction and limits may feel pessimistic, leading learners to read the tone as dismissive.",
      "2": "Learners who associate 'liberal democracy' with positive framing may over-attribute enthusiasm to a cautionary text.",
      "3": "Academic register sometimes signals neutrality; learners may mistake scholarly tone for absence of position."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R048",
    "format_type": "inference",
    "stem": "Rawls proposed that just principles of society should be chosen behind a 'veil of ignorance' — a thought experiment in which participants do not know their own social position, talents, or fortune. A critic responds: 'No one actually reasons from behind such a veil. This construct smuggles in egalitarian assumptions under the guise of impartiality.' What is the critic's core objection?",
    "options": [
      "The thought experiment is not truly neutral because it is designed to yield egalitarian conclusions.",
      "The veil of ignorance is a useful device but proves too weak to generate binding principles.",
      "Rawls correctly identifies impartiality as the foundation of justice, but applies it inconsistently.",
      "Real-world decision-making validates the veil of ignorance as a practical guide to policy."
    ],
    "correct_choice": 0,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "C2",
    "irt_a_param": 1.78,
    "irt_b_param": 2.05,
    "irt_c_param": 0.14,
    "explanation_text": "The critic claims the device is rigged — its structure pre-determines egalitarian outcomes while claiming neutrality. This is a charge of question-begging. Options B, C, and D all partially affirm Rawls or miss the nature of the objection entirely.",
    "explanation_vi": "Nhà phê bình cho rằng thí nghiệm tư duy của Rawls không thực sự trung lập vì nó được thiết kế sẵn để dẫn đến kết luận bình đẳng — đây là lỗi lập luận vòng tròn. Học sinh thường chọn đáp án B vì 'quá yếu' nghe có vẻ là một phê phán phương pháp hợp lý, nhưng lại bỏ qua cáo buộc thiên vị trong thiết kế của thí nghiệm.",
    "distractor_traps": {
      "0": "Correct. Learners must understand the philosophical concept of circular reasoning embedded in a political critique.",
      "1": "'Too weak' sounds like a methodological critique, which is tempting but misses the accusation of bias built into the design.",
      "2": "Learners may read 'inconsistently' as the most measured critique and favour it for its apparent balance.",
      "3": "The contrast between 'no one actually reasons this way' and 'real-world' may seem logically relevant but inverts the critic's point."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R049",
    "format_type": "inference",
    "stem": "The philosopher writes: 'We speak of the \"right to privacy\" as though it were self-evident, yet privacy as a legal and social norm is historically recent, culturally contingent, and in several important respects, a luxury of the affluent. To universalise it uncritically is to mistake a historically specific arrangement for a timeless moral truth.' What does the author imply about universal human rights claims?",
    "options": [
      "Claims framed as universal may conceal culturally and economically specific origins.",
      "Rights such as privacy should be abandoned because they lack historical precedent.",
      "Universal rights are valid precisely because they transcend historical and cultural context.",
      "The affluent have a moral obligation to extend privacy rights to economically marginalised groups."
    ],
    "correct_choice": 0,
    "skill": "Reading",
    "sub_skill": "Inference",
    "cefr_difficulty": "C2",
    "irt_a_param": 1.81,
    "irt_b_param": 2.18,
    "irt_c_param": 0.13,
    "explanation_text": "The author critiques the universalisation of historically contingent norms — not to abolish rights, but to expose the genealogy behind rights claims. Option B overextends the critique into abolition. Option C asserts what the author questions. Option D draws a prescriptive conclusion about redistribution that the text does not support.",
    "explanation_vi": "Tác giả muốn nói rằng những gì được gọi là 'quyền phổ quát' thực ra có thể xuất phát từ bối cảnh lịch sử và kinh tế cụ thể, không phải chân lý đạo đức vĩnh cửu. Bẫy lớn nhất là chọn đáp án B vì học sinh hiểu nhầm 'phê phán việc phổ quát hóa' thành 'phủ nhận hoàn toàn quyền đó'.",
    "distractor_traps": {
      "0": "Correct. Learners must distinguish critique-of-universalisation from rejection of the right itself.",
      "1": "'Historically recent' and 'no historical precedent' sound synonymous to learners who read quickly, but they carry different implications.",
      "2": "Learners who strongly believe in universal rights may read Option C as what any reasonable author must intend.",
      "3": "The mention of 'affluent' and economic inequality signals social justice discourse, leading learners to expect a redistributive conclusion."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  },
  {
    "item_id": "b2v3-R050",
    "format_type": "inference",
    "stem": "A commentator observes: 'The demand for authenticity in political leaders is itself a performance. Voters do not want a leader who is genuinely unfiltered — they want a leader who is convincingly unfiltered. The appetite for \"realness\" is a sophisticated aesthetic preference, not an escape from political theatre.' What is the author's attitude toward the public's desire for authentic leadership?",
    "options": [
      "Gently ironic — the desire for authenticity is exposed as another form of the very artifice it claims to reject.",
      "Straightforwardly critical — voters are naive and easily manipulated by cynical politicians.",
      "Cautiously optimistic — the demand for realness, even if performative, may eventually produce genuine leaders.",
      "Philosophically neutral — the author presents the paradox without taking a position on its desirability."
    ],
    "correct_choice": 0,
    "skill": "Reading",
    "sub_skill": "Tone & Attitude",
    "cefr_difficulty": "C2",
    "irt_a_param": 1.85,
    "irt_b_param": 2.35,
    "irt_c_param": 0.13,
    "explanation_text": "The author uses irony — exposing that 'authenticity' is itself theatrical. The tone is knowing and wry, not hostile. Option B imputes harshness absent from the text. Option C imports an optimism the passage does not suggest. Option D misreads the prescriptive phrase 'sophisticated aesthetic preference' as neutral.",
    "explanation_vi": "Tác giả dùng giọng mỉa mai nhẹ nhàng để chỉ ra rằng chính mong muốn 'tính xác thực' đã trở thành một dạng trình diễn khác — nghĩa là nó mâu thuẫn với chính nó. Học sinh hay chọn đáp án B vì các từ như 'performance' và 'theatre' mang sắc thái tiêu cực, khiến họ nghĩ tác giả đang chỉ trích gay gắt thay vì quan sát với giọng điệu hóm hỉnh.",
    "distractor_traps": {
      "0": "Correct. Learners must detect irony in academic prose — a register where irony is often subtle and unmarked.",
      "1": "Words like 'performance' and 'theatre' carry negative connotations, leading learners to assume the author condemns rather than observes with irony.",
      "2": "Learners who prefer resolution may impose an optimistic arc onto an argument that offers none.",
      "3": "'Sophisticated aesthetic preference' sounds analytical and detached, tricking learners into reading neutrality where the author has a clear, if understated, stance."
    },
    "goal_tags": [
      "B",
      "E"
    ]
  }
];
