import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, Brain, Leaf, Dumbbell, Users } from 'lucide-react';
import Card from '../../components/ui/Card.jsx';
import Button from '../../components/ui/Button.jsx';
import { services } from '../../data/services.jsx';
import { blogPosts } from '../../data/blog.jsx';
import { testimonials } from '../../data/testimonials.jsx';

const Home = () => {
  const featuredServices = services.filter(service => service.featured).slice(0, 3);
  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-50 to-accent-50 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&h=1080&fit=crop"
            alt="Serene spa environment with natural elements"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-brand-800 mb-6 leading-tight">
              Your Journey to 
              <span className="text-accent-600"> Holistic Wellness</span> 
              Starts Here
            </h1>
            <p className="text-xl text-neutral-700 mb-8 leading-relaxed">
              Experience the perfect blend of ancient wisdom and modern healing at Colombo's premier wellness center. Our expert practitioners guide you toward lasting health and inner peace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-800 mb-6">
                Ancient Wisdom Meets Modern Wellness
              </h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                At GreenLife Wellness Center, we believe true healing encompasses mind, body, and spirit. Our integrative approach combines time-tested traditions like Ayurveda and meditation with cutting-edge therapeutic techniques.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-brand-100 rounded-full p-2">
                    <Heart className="h-5 w-5 text-brand-600" />
                  </div>
                  <span className="text-neutral-700">Personalized treatment plans</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-brand-100 rounded-full p-2">
                    <Users className="h-5 w-5 text-brand-600" />
                  </div>
                  <span className="text-neutral-700">Certified expert practitioners</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-brand-100 rounded-full p-2">
                    <Leaf className="h-5 w-5 text-brand-600" />
                  </div>
                  <span className="text-neutral-700">Premium organic products</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop"
                alt="Peaceful meditation and wellness setting"
                className="rounded-2xl shadow-elevated"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-800 mb-4">
              Discover Our Wellness Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From ancient Ayurvedic treatments to modern therapeutic practices, explore our comprehensive range of wellness services designed to nurture your complete well-being.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-elevated transition-all duration-300">
                <div className="aspect-w-16 aspect-h-12 mb-6">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-brand-600 bg-brand-100 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                    <span className="text-sm text-neutral-500">{service.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-brand-800 group-hover:text-brand-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-lg font-bold text-accent-600">
                      {service.price}
                    </span>
                    <ArrowRight className="h-5 w-5 text-brand-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-neutral-600">
              Discover how our holistic approach has transformed lives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-neutral-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-brand-800">{testimonial.name}</p>
                    <p className="text-sm text-neutral-600">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-800 mb-4">
              Wellness Wisdom
            </h2>
            <p className="text-xl text-neutral-600">
              Insights and tips from our wellness experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="group">
                <div className="aspect-w-16 aspect-h-12 mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-neutral-500">
                    <span>{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-brand-800 group-hover:text-brand-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-sm text-neutral-500">
                      By {post.author}
                    </span>
                    <ArrowRight className="h-4 w-4 text-brand-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/blog">
              <Button size="lg" variant="outline">
                Read More Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-600 to-brand-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="text-xl text-brand-100 mb-8">
            Take the first step towards a healthier, more balanced life. Our expert team is here to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="accent" size="lg" className="w-full sm:w-auto">
                Book Your Consultation
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-white text-brand-700 hover:bg-brand-50">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;