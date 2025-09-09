import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react'; 
import Card from '../../components/ui/Card';


const blogPosts = [
  {
    id: 1,
    title: "5 Daily Habits for Better Mental Health",
    author: "Dr. Silva",
    date: "2025-08-12",
    excerpt: "Discover simple daily habits like mindfulness and journaling that can significantly improve your mental health.",
    content: "Mental health is just as important as physical health. Practicing mindfulness, maintaining a gratitude journal, staying active, and connecting with loved ones are some small but powerful ways to boost your overall well-being...",
    category: "Mental Health",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1523978591478-c753949ff840?w=800&h=500&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "The Healing Power of Ayurveda",
    author: "Therapist Perera",
    date: "2025-07-28",
    excerpt: "Ayurveda, one of the world’s oldest holistic healing systems, offers timeless remedies for balance and vitality.",
    content: "Ayurveda emphasizes the balance of body, mind, and spirit. Through personalized diet plans, herbal remedies, and lifestyle adjustments, individuals can achieve harmony and long-lasting health...",
    category: "Ayurveda",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&h=500&fit=crop",
    featured: true,
  },
  {
    id: 3,
    title: "Mindfulness Meditation: A Beginner’s Guide",
    author: "Dr. Fernando",
    date: "2025-07-05",
    excerpt: "Learn how to begin a mindfulness meditation practice that can reduce stress, improve focus, and increase happiness.",
    content: "Mindfulness meditation is the practice of being present in the moment. Beginners can start with short 5-minute sessions, focusing on breathing, and gradually increase the duration...",
    category: "Mindfulness",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1519181245277-cffeb31da2c1?w=800&h=500&fit=crop",
    featured: false,
  },
  {
    id: 4,
    title: "The Role of Nutrition in Holistic Healing",
    author: "Nutritionist Jayasuriya",
    date: "2025-06-15",
    excerpt: "Good nutrition plays a vital role in supporting both physical and mental health. Here’s how to make mindful food choices.",
    content: "Holistic healing looks beyond just treating symptoms. Nutrition is central to this approach, with fresh fruits, vegetables, and whole foods helping the body restore balance and energy...",
    category: "Nutrition",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1543353071-087092ec393c?w=800&h=500&fit=crop",
    featured: false,
  },
];


const BlogList = () => {
  return (
    <div className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-brand-800 mb-4">Wellness Wisdom</h1>
          <p className="text-lg text-neutral-600">
            Insights, tips, and guidance from our wellness experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-elevated transition-all">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-brand-800 group-hover:text-brand-600 transition-colors">
                  {post.title}
                </h2>
                <div className="text-sm text-neutral-500">
                  By {post.author} · {post.date} · {post.readTime}
                </div>
                <p className="text-neutral-600">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-brand-600 font-medium hover:underline"
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;