import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Star, 
  Shield, 
  Clock, 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram,
  ChevronDown,
  Gem,
  Award,
  Search,
  Calendar,
  MessageCircle,
  Eye,
  Heart,
  ShoppingCart
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-transparent backdrop-blur-md z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-3xl font-black text-white tracking-wider bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                STONEX
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['Hero', 'About', 'Services', 'Gallery', 'Blog', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-300 hover:text-amber-400 font-medium transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-slate-300 hover:text-amber-400"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-700 bg-slate-900/95 backdrop-blur-md">
              <nav className="flex flex-col space-y-2">
                {['Hero', 'About', 'Services', 'Gallery', 'Blog', 'Testimonials', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-left py-2 text-slate-300 hover:text-amber-400 font-medium transition-colors duration-200"
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images-cdn.ubuy.co.in/633ff9435f0f6206384d95fc-mens-vintage-mechanical-pocket-watch.jpg )'
          }}
        >
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Timeless <span className="text-amber-400">Treasures</span>
            <br />& Collectibles
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-slate-200">
            Discover extraordinary pieces from bygone eras. Each item in our collection tells a story of craftsmanship, history, and timeless beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('gallery')}
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Collection
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-amber-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Stonex</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              For over three decades, Stonex has been the trusted destination for discerning collectors seeking authentic antiques and rare collectibles.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://www.pelhamlibrary.org/wp-content/uploads/Antiques-in-Bundaberg.jpg"
                alt="Antique collection"
                className="rounded-2xl shadow-xl"
              />
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">About Us</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                At Stonex Group of Companies, we believe every antique tells a story — a whisper from the past that deserves to be heard and cherished for generations to come. Established with a passion for timeless art and historical treasures, we have proudly become one of India's most trusted names in the world of antiques and superantiques.
              </p>
              <br />
              <p className="text-slate-300 leading-relaxed text-lg">
                For decades, Stonex has specialized in buying and selling rare, authentic, and exquisite antiques sourced from passionate collectors, individual sellers, and connoisseurs across India. Our collection spans centuries, offering a rich variety of sculptures, artifacts, vintage furniture, paintings, decorative pieces, and many other priceless heirlooms that capture the beauty and spirit of bygone eras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions for collectors, from acquisition to authentication and everything in between.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-2xl p-8 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 border border-slate-700">
              <div className="bg-amber-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Search className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Item Sourcing</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Can't find that perfect piece? Our global network of dealers and collectors helps us locate rare and specific items for our clients.
              </p>
              <ul className="text-slate-400 space-y-2">
                <li>• Global dealer network</li>
                <li>• Estate sale monitoring</li>
                <li>• Custom search requests</li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 border border-slate-700">
              <div className="bg-amber-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Authentication & Appraisal</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Professional appraisal and authentication services by certified experts with decades of experience.
              </p>
              <ul className="text-slate-400 space-y-2">
                <li>• Certified appraisals</li>
                <li>• Insurance valuations</li>
                <li>• Authenticity certificates</li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 border border-slate-700">
              <div className="bg-amber-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Auction Management</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Full-service auction management for collectors looking to buy or sell valuable pieces through our exclusive events.
              </p>
              <ul className="text-slate-400 space-y-2">
                <li>• Consignment services</li>
                <li>• Auction planning</li>
                <li>• Market analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section with 3D Flip Cards */}
      <section id="gallery" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Collection</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A curated selection of our finest antiques and collectibles, each piece carefully chosen for its historical significance and beauty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcDxDOHgrNt9bj9WIt55LnTthx1CBTkPgwLg&s",
                title: "Lebo Coin",
                description: "East India Company 1616",
                backInfo: {
                  condition: "Excellent",
                  provenance: "East India Company 1616",
                  
                  rarity: "One of 500 made"
                }
              },
              {
                image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/coin-collection/i/y/s/1818-east-india-company-uk-1-anna-ram-darbar-temple-bigtoken-original-imahys4pkney3g76.jpeg?q=90&crop=false",
                title: "Iridium Coin (Ram Darbar)",
                description: "Copper and Cast Iron 17th Century",
                
                backInfo: {
                  condition: "Museum Quality",
                  provenance: "Awadh Region",
                  rarity: "Extremely Rare"
                }
              },
              {
                image: "http://s3.amazonaws.com/ngccoin-production/world-coin-price-guide/1409546-4425300-001f.jpg",
                title: "Victorian Era Coin",
                description: "Coins made in early 1800's",
                
                backInfo: {
                  condition: "Very Fine",
                  provenance: "English Estate",
                  rarity: "Limited Production"
                }
              },
              {
                image: "https://di2ponv0v5otw.cloudfront.net/posts/2025/02/03/67a1849018d1c264b025a442/m_67a184a0ce7065fb58edde5c.jpeg",
                title: "Sacred Deepak Lamp",
                description: "Hand-made in early 1700's",
                
                backInfo: {
                  condition: "Restored",
                  provenance: "Material Owner",
                  rarity: "Moderate"
                }
              },
              {
                image: "https://beinecke.library.yale.edu/sites/default/files/styles/opengraph_image/public/kulliyat.jpg?itok=K2muFzG2",
                title: "Persian Manuscript",
                description: "Illuminated Calligraphy, 16th Century",
                
                backInfo: {
                  condition: "Exceptional",
                  provenance: "Royal Library",
                  certification: "Islamic Art Institute",
                  rarity: "Museum Piece"
                }
              },
              {
                image: "https://rukminim2.flixcart.com/image/300/300/xif0q/coin-collection/m/5/9/ganesh-laxmi-ji-super-rare-copper-token-10-grams-1-coins-world-original-imagg7cpf6tmxuwq.jpeg",
                title: "Shree Ganesh Laxmi Copper Coin",
                description: "Copper Coin 10 Grams Made in Bhrat",
                
                backInfo: {
                  condition: "Pristine",
                  provenance: "English Manor House",
                  
                  rarity: "Moderate Rare"
                }
              }
            ].map((item, index) => (
              <div key={index} className="flip-card h-[420px]">
                <div className="flip-card-inner">
                  {/* Front Side */}
                  <div className="flip-card-front bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-700">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6 pb-8">
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-slate-300 mb-6">{item.description}</p>
                      <div className="flex justify-between items-center">
                        
                        
                      </div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="flip-card-back bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl p-8 flex flex-col justify-center shadow-xl border border-slate-600">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                      <div className="w-16 h-0.5 bg-blue-400 mx-auto"></div>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-start">
                        <span className="font-semibold text-white">Condition:</span>
                        <span className="text-slate-200 text-right">{item.backInfo.condition}</span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span className="font-semibold text-white">Provenance:</span>
                        <span className="text-slate-200 text-right text-sm max-w-[60%]">{item.backInfo.provenance}</span>
                      </div>
                      
                      <div className="flex justify-between items-start">
                        <span className="font-semibold text-white">Rarity:</span>
                        <span className="text-slate-200 text-right">{item.backInfo.rarity}</span>
                      </div>
                    </div>

                    <div className="flex justify-center space-x-4 mt-auto">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors duration-200 shadow-lg">
                        <Eye className="h-5 w-5" />
                      </button>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors duration-200 shadow-lg">
                        <Heart className="h-5 w-5" />
                      </button>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors duration-200 shadow-lg">
                        <ShoppingCart className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="text-center mt-4">
                      <span className="text-2xl font-bold text-blue-400">{item.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Collector's Journal</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Insights, stories, and expert advice from the world of antiques and collectibles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://thumbs.dreamstime.com/b/lebo-coin-consists-magical-power-can-pull-rice-also-known-as-rice-puller-coin-consists-element-called-193665385.jpg",
                category: "Authentication",
                title: "The Lebbo Coin Exists",
                excerpt: "The document discusses the Copper Iridium Lebbo coin, a rare ancient coin said to possess magical properties.",
                date: "March 15, 2024",
                readTime: "5 min read",
                link: "https://www.scribd.com/document/470048738/The-lebbo-coin-exists#:~:text=The%20document%20discusses%20the%20Copper,made%20in%20each%20weight%20variation"
              },
              {
                image: "https://m.media-amazon.com/images/I/61Z13lrbcnS._UF894,1000_QL80_.jpg",
                category: "Market Trends",
                title: "The Lost Treasures of India",
                excerpt: "India's rich heritage is woven with art, culture, and timeless antiques. But over centuries, many valuable artifacts have been lost or forgotten.",
                date: "March 12, 2024",
                readTime: "7 min read",
                link: "https://bombayantiques.com/blogs/news/lost-treasures-of-india-ancient-antique-artifacts"
              },
              {
                image: "https://wise.com/imaginary-v2/fe69ba0ec7757375bf4142ee40cfdf11.jpg?width=1200",
                category: "Care Guide",
                title: "Buying antiques in India",
                excerpt: "If you're a collector or appreciator of antique furniture, art and decorative accessories from the UK, you'll want to go to India.",
                date: "March 10, 2024",
                readTime: "6 min read",
                link: "https://wise.com/gb/blog/buying-antiques-in-india"
              }
            ].map((article, index) => (
              <article key={index} className="bg-slate-800 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300 border border-slate-700">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center text-sm text-slate-400 space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{article.title}</h3>
                  <p className="text-slate-300 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">{article.readTime}</span>
                    <a 
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:text-amber-300 font-medium"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What Our Clients Say</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Trusted by collectors worldwide for our expertise, authenticity, and exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Bhatnagar",
                title: "Private Collector",
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACUCAMAAAAwLZJQAAAANlBMVEWpqan4+Pj///+lpaX8/PyhoaHk5OS5ubmurq7o6Ojy8vK2trbJycnY2Njr6+vQ0NDAwMDe3t5PmvJ0AAAEDUlEQVR4nO2c23KEIAxAlYAg4IX//9mCu93a1VUETdwZzlOf2jMhhHCxVVUoFAqFQqFQKBQIgAfUGhsAKDPazjV93zadHaW6pS7A2LU1m8F7Z5Wg9noDqkFztqRuzJ2iCqZbkXzSj9R6v0DV1Z89PY28RQKA1JuaIVs7asmA29Ocxp86VUE1MZ6M6ZHUFFTP1ib72vBTmoLankX/sXSiPp4H4JYsppH5ST364GLz8wWNpz1o6WkoRM1unV9hIBj8qEL/Tm3QPeXR/HzgsJd9kTLwAeyQmkRP1uCGVBwsoX8gZ6mp01LUg9rywZCq6Ts+hSga29ytgjn2h7qmdzCL/pjhyVq8eZ+Toh48UdFmiaJ5ViInRRnDa0tFlifD6/QhT7TDm/aZonizKU8UsdX7FtGvydGvmfUiucebwDswFYdOSBbg9Xli44A5gm/pnnrEXZPJSVLEhamqctonzMsHyEhSjblnApne6OFePEDqQQn2ISnIVFHMOR9IbvIl8sFjyjFuQONf4iWdQXCJ7glJB6Soxf7XtDt818BqzBr6ImF3T3QjqlbfEnyEc4qrhomDaeqINMPLhyOmiLvkpekYX/cd7T14dHdC/QgCoOUR41/f4VnJsC/aYK/w65i9gkr4pOA/Qrafo6q7G718g8q69VnVD+YG2TkDKmUXxxK1M+o+0XwBQsihaXsdaJturMQNLZ942Up5wg/3tSwUCoVC4Z7cqK1bBR7ruzLGSCmN8n2quJ0zAKjRuql1qh/4n/q2s/I2AfaK0j4+E+G8fsM3/lw3w2iodUEY6/qaLxVnsp4gC5St/rAjObOttZMUYfUjbhvOYiT/8kAPPmVxNYXsdFQo31xrZzFVQTbhj6bgUwBLFSrZHhryd5i2GJtTMTaJwfyLKusvfwUByuVqTqr82g+HoBoSZtAHV3edKoztWZrBVF81/tCdFs6HKXdXTCqQPTtTc1Ktz39lIIYzJtHS9PS7PHeB5qR66ityP+wXeYY5dd5TAxj1ZZ5h+O1JDSDYK9JzrnrS3eOQtbJHmZ5xCwXD1ZrBNP9Nqa/y13sG02zP06v8B9O8gooUz8l0yBh9lPz8M02OKVikcX+S2k3BiKrpi3Vahwry4jq/JO0lpLpy3VyHp3wzLBp0z6QJhTrhZ6aHnyAgT6SX6OE0xU/Qp+mxFQooEvTJkT4aLJ0n1wcCaqgGfjI9sOhftZOLJPZbXBhxl/h34ss+5cBPxD0wRuxBP8DbqIlv9P6vupioR/D0AQ0hjZj4it6zjqn6JE3TgohNqaF2fKB3aylxrf9l9+xEUhs+4fV2khK1yyuwnaJP7feCb/6LGOyN/CZbrT6Qr/IzNo4jsE8cNtnsoW5Smyb4Rim9QTsyg/+7g/oBbaVA9WZXXUsAAAAASUVORK5CYII=",
                testimonial: "Stonex helped me build an incredible collection of 18th-century porcelain. Their expertise and authenticity guarantee gave me complete confidence in every purchase.",
                rating: 5
              },
              {
                name: "Suresh Sahu",
                title: "Museum Curator",
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACUCAMAAAAwLZJQAAAANlBMVEWpqan4+Pj///+lpaX8/PyhoaHk5OS5ubmurq7o6Ojy8vK2trbJycnY2Njr6+vQ0NDAwMDe3t5PmvJ0AAAEDUlEQVR4nO2c23KEIAxAlYAg4IX//9mCu93a1VUETdwZzlOf2jMhhHCxVVUoFAqFQqFQKBQIgAfUGhsAKDPazjV93zadHaW6pS7A2LU1m8F7Z5Wg9noDqkFztqRuzJ2iCqZbkXzSj9R6v0DV1Z89PY28RQKA1JuaIVs7asmA29Ocxp86VUE1MZ6M6ZHUFFTP1ib72vBTmoLankX/sXSiPp4H4JYsppH5ST364GLz8wWNpz1o6WkoRM1unV9hIBj8qEL/Tm3QPeXR/HzgsJd9kTLwAeyQmkRP1uCGVBwsoX8gZ6mp01LUg9rywZCq6Ts+hSga29ytgjn2h7qmdzCL/pjhyVq8eZ+Toh48UdFmiaJ5ViInRRnDa0tFlifD6/QhT7TDm/aZonizKU8UsdX7FtGvydGvmfUiucebwDswFYdOSBbg9Xli44A5gm/pnnrEXZPJSVLEhamqctonzMsHyEhSjblnApne6OFePEDqQQn2ISnIVFHMOR9IbvIl8sFjyjFuQONf4iWdQXCJ7glJB6Soxf7XtDt818BqzBr6ImF3T3QjqlbfEnyEc4qrhomDaeqINMPLhyOmiLvkpekYX/cd7T14dHdC/QgCoOUR41/f4VnJsC/aYK/w65i9gkr4pOA/Qrafo6q7G718g8q69VnVD+YG2TkDKmUXxxK1M+o+0XwBQsihaXsdaJturMQNLZ942Up5wg/3tSwUCoVC4Z7cqK1bBR7ruzLGSCmN8n2quJ0zAKjRuql1qh/4n/q2s/I2AfaK0j4+E+G8fsM3/lw3w2iodUEY6/qaLxVnsp4gC5St/rAjObOttZMUYfUjbhvOYiT/8kAPPmVxNYXsdFQo31xrZzFVQTbhj6bgUwBLFSrZHhryd5i2GJtTMTaJwfyLKusvfwUByuVqTqr82g+HoBoSZtAHV3edKoztWZrBVF81/tCdFs6HKXdXTCqQPTtTc1Ktz39lIIYzJtHS9PS7PHeB5qR66ityP+wXeYY5dd5TAxj1ZZ5h+O1JDSDYK9JzrnrS3eOQtbJHmZ5xCwXD1ZrBNP9Nqa/y13sG02zP06v8B9O8gooUz8l0yBh9lPz8M02OKVikcX+S2k3BiKrpi3Vahwry4jq/JO0lpLpy3VyHp3wzLBp0z6QJhTrhZ6aHnyAgT6SX6OE0xU/Qp+mxFQooEvTJkT4aLJ0n1wcCaqgGfjI9sOhftZOLJPZbXBhxl/h34ss+5cBPxD0wRuxBP8DbqIlv9P6vupioR/D0AQ0hjZj4it6zjqn6JE3TgohNqaF2fKB3aylxrf9l9+xEUhs+4fV2khK1yyuwnaJP7feCb/6LGOyN/CZbrT6Qr/IzNo4jsE8cNtnsoW5Smyb4Rim9QTsyg/+7g/oBbaVA9WZXXUsAAAAASUVORK5CYII=",
                testimonial: "As a museum curator, I rely on Stonex for their impeccable authentication services. They've never disappointed, and their appraisals are always thorough and accurate.",
                rating: 5
              },
              {
                name: "Joseph Adam",
                title: "Art Investor",
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACUCAMAAAAwLZJQAAAANlBMVEWpqan4+Pj///+lpaX8/PyhoaHk5OS5ubmurq7o6Ojy8vK2trbJycnY2Njr6+vQ0NDAwMDe3t5PmvJ0AAAEDUlEQVR4nO2c23KEIAxAlYAg4IX//9mCu93a1VUETdwZzlOf2jMhhHCxVVUoFAqFQqFQKBQIgAfUGhsAKDPazjV93zadHaW6pS7A2LU1m8F7Z5Wg9noDqkFztqRuzJ2iCqZbkXzSj9R6v0DV1Z89PY28RQKA1JuaIVs7asmA29Ocxp86VUE1MZ6M6ZHUFFTP1ib72vBTmoLankX/sXSiPp4H4JYsppH5ST364GLz8wWNpz1o6WkoRM1unV9hIBj8qEL/Tm3QPeXR/HzgsJd9kTLwAeyQmkRP1uCGVBwsoX8gZ6mp01LUg9rywZCq6Ts+hSga29ytgjn2h7qmdzCL/pjhyVq8eZ+Toh48UdFmiaJ5ViInRRnDa0tFlifD6/QhT7TDm/aZonizKU8UsdX7FtGvydGvmfUiucebwDswFYdOSBbg9Xli44A5gm/pnnrEXZPJSVLEhamqctonzMsHyEhSjblnApne6OFePEDqQQn2ISnIVFHMOR9IbvIl8sFjyjFuQONf4iWdQXCJ7glJB6Soxf7XtDt818BqzBr6ImF3T3QjqlbfEnyEc4qrhomDaeqINMPLhyOmiLvkpekYX/cd7T14dHdC/QgCoOUR41/f4VnJsC/aYK/w65i9gkr4pOA/Qrafo6q7G718g8q69VnVD+YG2TkDKmUXxxK1M+o+0XwBQsihaXsdaJturMQNLZ942Up5wg/3tSwUCoVC4Z7cqK1bBR7ruzLGSCmN8n2quJ0zAKjRuql1qh/4n/q2s/I2AfaK0j4+E+G8fsM3/lw3w2iodUEY6/qaLxVnsp4gC5St/rAjObOttZMUYfUjbhvOYiT/8kAPPmVxNYXsdFQo31xrZzFVQTbhj6bgUwBLFSrZHhryd5i2GJtTMTaJwfyLKusvfwUByuVqTqr82g+HoBoSZtAHV3edKoztWZrBVF81/tCdFs6HKXdXTCqQPTtTc1Ktz39lIIYzJtHS9PS7PHeB5qR66ityP+wXeYY5dd5TAxj1ZZ5h+O1JDSDYK9JzrnrS3eOQtbJHmZ5xCwXD1ZrBNP9Nqa/y13sG02zP06v8B9O8gooUz8l0yBh9lPz8M02OKVikcX+S2k3BiKrpi3Vahwry4jq/JO0lpLpy3VyHp3wzLBp0z6QJhTrhZ6aHnyAgT6SX6OE0xU/Qp+mxFQooEvTJkT4aLJ0n1wcCaqgGfjI9sOhftZOLJPZbXBhxl/h34ss+5cBPxD0wRuxBP8DbqIlv9P6vupioR/D0AQ0hjZj4it6zjqn6JE3TgohNqaF2fKB3aylxrf9l9+xEUhs+4fV2khK1yyuwnaJP7feCb/6LGOyN/CZbrT6Qr/IzNo4jsE8cNtnsoW5Smyb4Rim9QTsyg/+7g/oBbaVA9WZXXUsAAAAASUVORK5CYII=",
                testimonial: "The team at Stonex found a rare Ming vase I'd been searching for years. Their global network and dedication to client satisfaction is unmatched in the industry.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-700">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-slate-300">{testimonial.title}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 leading-relaxed italic">
                  "{testimonial.testimonial}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Ready to start or expand your collection? Our experts are here to help guide your journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
                <select className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                  <option>I'm interested in...</option>
                  <option>Buying an antique</option>
                  <option>Selling an antique</option>
                  <option>Authentication services</option>
                  <option>Appraisal services</option>
                  <option>General inquiry</option>
                </select>
                <textarea
                  rows={4}
                  placeholder="Tell us about your needs..."
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-500/20 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Visit Our Showroom</h4>
                      <p className="text-slate-300">
                        230 Park Ave #10TH,<br />
                        New York, NY 10169,<br />
                        USA
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-500/20 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Call Us</h4>
                      <p className="text-slate-300">
                        +91 9120662500<br />
                        Mon-Sat: 10AM-6PM 
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-500/20 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Email Us</h4>
                      <p className="text-slate-300">
                        stonexinfo7@gmail.com<br />
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4"></h4>
                <div className="flex space-x-4">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-3xl font-black text-white tracking-wider bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  STONEX
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Your trusted partner in discovering and collecting authentic antiques and rare collectibles since 1991.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-amber-400 transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-amber-400 transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('gallery')} className="hover:text-amber-400 transition-colors">Gallery</button></li>
                <li><button onClick={() => scrollToSection('blog')} className="hover:text-amber-400 transition-colors">Blog</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Authentication</li>
                <li>Appraisal</li>
                <li>Auction Management</li>
                <li>Consulting</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <div className="space-y-2 text-slate-400">
                <p>230 Park Ave #10TH</p>
                <p>New York, NY 10169,</p>
                <p>+91 9120662500</p>
                <p>stonexinfo7@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500">
            <p>&copy; 2024 Stonex Antiques. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>

      {/* CSS for 3D Flip Effect */}
      <style jsx>{`
        .flip-card {
          background-color: transparent;
          perspective: 1000px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}

export default App;
