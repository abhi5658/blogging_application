const { sequelize, Blog } = require('../src/models');
const uuidV4 = require('uuid').v4;

/* WARNING THIS WILL DROP THE CURRENT DATABASE */
module.exports = seed();

async function seed() {
  // reset full DB and create tables
  await sequelize.sync({ force: true });

  // create tables
  // await Blog.sync({ force: true });

  //insert data
  await Promise.all([
    Blog.create({
      id: 1,
      uuid: uuidV4(),
      title: 'The Impact of Artificial Intelligence on Healthcare',
      image: 'https://picsum.photos/seed/1/700/500',
      body: `Discover the transformative potential of AI in healthcare. From diagnosing diseases to personalizing treatment plans, AI is revolutionizing patient care. This blog explores how AI technologies like machine learning and natural language processing are reshaping the healthcare landscape, improving outcomes, and saving lives.`,
      author: 'John Doe',
    }),
    Blog.create({
      id: 2,
      uuid: uuidV4(),
      title: 'The Rise of Plant-Based Diets: Health Benefits and Sustainability',
      image: 'https://picsum.photos/seed/2/700/500',
      body: `Dive into the growing trend of plant-based diets. Explore the health benefits of eating more fruits, vegetables, and whole grains, as well as the environmental impact of reducing meat consumption. Learn how embracing plant-based eating can promote personal health and contribute to a more sustainable food system.`,
      author: 'Jane Smith',
    }),
    Blog.create({
      id: 3,
      uuid: uuidV4(),
      title: 'Navigating the Gig Economy: Tips for Freelancers and Independent Contractors',
      image: 'https://picsum.photos/seed/3/700/500',
      body: 'Are you considering joining the gig economy? This blog provides valuable advice for freelancers and independent contractors. From managing finances to finding clients and maintaining work-life balance, discover practical tips and insights to thrive in the world of freelance work and gig opportunities.',
      author: 'Bob Johnson',
    }),
    Blog.create({
      id: 4,
      uuid: uuidV4(),
      title: 'The Psychology of Color in Marketing: How Colors Influence Consumer Behavior',
      image: 'https://picsum.photos/seed/4/700/500',
      body: 'Uncover the fascinating role of color in marketing. From creating brand identity to influencing purchasing decisions, colors play a powerful role in shaping consumer perceptions and behaviors. This blog delves into the psychology behind different colors and offers strategies for leveraging color psychology in your marketing campaigns.',
      author: 'Sarah Lee',
    }),
    Blog.create({
      id: 5,
      uuid: uuidV4(),
      title: 'Mastering the Art of Time Management: Techniques for Increased Productivity',
      image: 'https://picsum.photos/seed/5/700/500',
      body: 'Time management is crucial for success in both personal and professional endeavors. This blog explores proven techniques such as the Pomodoro Technique, Eisenhower Matrix, and time blocking to help you prioritize tasks, minimize distractions, and make the most of your time.',
      author: 'Mike Brown',
    }),
    Blog.create({
      id: 6,
      uuid: uuidV4(),
      title: `Understanding Cryptocurrency: A Beginner's Guide to Digital Currency`,
      image: 'https://picsum.photos/seed/6/700/500',
      body: `Cryptocurrency is reshaping the financial landscape, but what exactly is it? This blog provides a beginner-friendly introduction to cryptocurrency, covering topics such as blockchain technology, Bitcoin, Ethereum, and the potential implications of decentralized finance (DeFi) on traditional banking systems.`,
      author: 'Ralph Hane'
    }),
    Blog.create({
      id: 7,
      uuid: uuidV4(),
      title: `The Power of Storytelling in Marketing: Crafting Compelling Narratives That Drive Engagement`,
      image: 'https://picsum.photos/seed/7/700/500',
      body: `Storytelling is a timeless tool in marketing. This blog explores the art of storytelling and its impact on consumer engagement and brand loyalty. Learn how to craft authentic narratives that resonate with your audience, evoke emotion, and leave a lasting impression on potential customers.`,
      author: `Gary O'Hara`
    }),
    Blog.create({
      id: 8,
      uuid: uuidV4(),
      title: `Sustainable Living: Practical Tips for Reducing Your Environmental Footprint`,
      image: 'https://picsum.photos/seed/8/700/500',
      body: `Interested in living more sustainably? This blog offers actionable tips for reducing your environmental impact in everyday life. From adopting eco-friendly habits to making conscious consumer choices and minimizing waste, discover simple yet effective ways to contribute to a healthier planet for future generations.`,
      author: 'Lindsay Okuneva'
    }),
  ]);
}
