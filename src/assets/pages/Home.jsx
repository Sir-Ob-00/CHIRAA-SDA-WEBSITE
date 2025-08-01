import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchVerseOfTheDay } from '../api/verseApi';

  const Home = () => {
    const [currentVerse, setCurrentVerse] = useState({
      text: "",
      reference: ""
    });

    useEffect(() => {
      const getVerse = async () => {
        const verse = await fetchVerseOfTheDay();
        setCurrentVerse(verse);
      };
      getVerse();
    }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-church-beige-light to-church-beige min-h-screen flex items-center">
        <div className="absolute inset-0 bg-church-text-dark opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
                <img 
                  src="/images/Church logo.png" 
                  alt="Chiraa SDA Church Logo" 
                  className="h-16 w-16 rounded-full shadow-lg"
                />
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-church-text-dark leading-tight">
                    Welcome to Chiraa District
                  </h1>
                  <p className="text-xl font-sans text-church-text-dark opacity-80 mt-2">
                    Seventh-day Adventist Church
                  </p>
                </div>
              </div>
              
              <p className="text-lg font-sans text-church-text-dark opacity-90 mb-8 max-w-2xl">
                Join our loving community as we worship together, grow in faith, and serve our neighbors. 
                Experience God's love in a welcoming environment where everyone belongs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  to="/events" 
                  className="bg-church-blue hover:bg-church-blue-dark text-church-text-light px-8 py-3 rounded-lg font-sans font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Upcoming Events
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-church-gold hover:bg-church-gold-light text-church-text-dark px-8 py-3 rounded-lg font-sans font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Visit Us
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative">
                <img 
                  src="/src/assets/images/1.jpg" 
                  alt="Chiraa SDA Church" 
                  className="rounded-lg shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pastor's Welcome Message */}
      <section className="py-16 bg-church-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold font-title text-church-text-dark mb-6">
                A Message from Our District Pastor
              </h2>
              <div className="prose prose-lg font-sans text-church-text-dark opacity-90">
                <p className="mb-4">
                  "Welcome to the Chiraa District of SDA Church family! We are blessed to have you join us in our journey of faith, 
                  fellowship, and service to our Lord Jesus Christ."
                </p>
                <p className="mb-4">
                  "Our district is committed to nurturing spiritual growth, building strong community bonds, and 
                  reaching out to those in need. Together, we strive to live according to God's word and share His love with all."
                </p>
                <p className="font-semibold text-church-blue">
                  "May God bless you abundantly as you worship and serve with us."
                </p>
              </div>
              <div className="mt-6">
                <p className="font-semibold font-subtitle text-church-text-dark">Pastor Kyeremeh</p>
                <p className="text-sm font-body text-church-text-dark opacity-70">District Pastor, Chiraa District</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="/src/assets/images/ps. kyeremeh_District_Pastor.jpg" 
                  alt="Pastor Kyeremeh - District Pastor" 
                  className="rounded-lg shadow-xl w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-16 bg-church-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-title text-church-text-dark mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg font-body text-church-text-dark opacity-80 max-w-2xl mx-auto">
              Join us for these exciting upcoming events and activities in our church community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Event 1 - Camp Meeting 2025 */}
            <div className="bg-church-beige rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/src/assets/images/upcoming/Camp Meetig 2025 .jpg" 
                  alt="Camp Meeting 2025" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-church-gold text-church-text-dark px-3 py-1 rounded-full text-sm font-button font-semibold">
                    Coming Soon
                  </span>
                  <span className="text-church-text-dark opacity-60 text-sm font-body">2025</span>
                </div>
                <h3 className="text-xl font-bold font-subtitle text-church-text-dark mb-3">
                  Camp Meeting 2025
                </h3>
                <p className="font-body text-church-text-dark opacity-80 mb-4">
                  Join us for our annual camp meeting featuring inspiring speakers, fellowship, and spiritual growth opportunities.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-church-blue font-semibold font-button text-sm">Multi-Day Event</span>
                  <Link to="/events" className="text-church-blue hover:text-church-gold transition-colors font-button font-semibold text-sm">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>

            {/* Event 2 - Pathfinder Homecoming */}
            <div className="bg-church-beige rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/src/assets/images/upcoming/PF Homecoming 25.jpg" 
                  alt="Pathfinder Homecoming 2025" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-church-blue text-church-text-light px-3 py-1 rounded-full text-sm font-button font-semibold">
                    Upcoming
                  </span>
                  <span className="text-church-text-dark opacity-60 text-sm font-body">2025</span>
                </div>
                <h3 className="text-xl font-bold font-subtitle text-church-text-dark mb-3">
                  Pathfinder Day/Homecoming 2025
                </h3>
                <p className="font-body text-church-text-dark opacity-80 mb-4">
                  A special celebration for our Pathfinder Club members, featuring activities, fellowship, and spiritual growth and a packed program to welcome our pioneers.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-church-blue font-semibold font-button text-sm">Youth Event</span>
                  <Link to="/events" className="text-church-blue hover:text-church-gold transition-colors font-button font-semibold text-sm">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>

            {/* Event 3 - Sabbath Worship */}
            <div className="bg-church-beige rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/src/assets/images/anniversary_2.jpg" 
                  alt="Sabbath Worship Service" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-church-olive text-church-text-light px-3 py-1 rounded-full text-sm font-button font-semibold">
                    Every Sabbath
                  </span>
                  <span className="text-church-text-dark opacity-60 text-sm font-body">Weekly</span>
                </div>
                <h3 className="text-xl font-bold font-subtitle text-church-text-dark mb-3">
                  Sabbath Worship Service
                </h3>
                <p className="font-body text-church-text-dark opacity-80 mb-4">
                  Join us for our weekly Sabbath worship service featuring inspiring music, fellowship, and biblical teaching.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-church-blue font-semibold font-button text-sm">9:00 AM - 12:30 PM</span>
                  <Link to="/contact" className="text-church-blue hover:text-church-gold transition-colors font-button font-semibold text-sm">
                    Visit Us →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link 
              to="/events" 
              className="inline-flex items-center bg-church-blue hover:bg-church-gold text-church-text-light hover:text-church-text-dark px-8 py-3 rounded-lg font-semibold font-button transition-all duration-300 transform hover:scale-105"
            >
              See All Events
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Sermon */}
      <section className="py-16 bg-church-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-title text-church-text-dark mb-4">
              Featured Sermon
            </h2>
            <p className="text-lg font-body text-church-text-dark opacity-80">
              Listen to our latest message and be inspired in your faith journey.
            </p>
          </div>
          <div className="bg-church-beige rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold font-subtitle text-church-text-dark mb-4">
                  "Faith Over Fear"
                </h3>
                <p className="font-body text-church-text-dark opacity-80 mb-6 leading-relaxed">
                  In times of uncertainty, God calls us to trust in His perfect plan. Discover how faith can overcome fear and lead us to victory in Christ.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="font-body text-church-text-dark">
                    <span className="font-semibold">Speaker:</span> Pastor Isaac Kyeremeh
                  </p>
                  <p className="font-body text-church-text-dark">
                    <span className="font-semibold">Date:</span> January 20, 2025
                  </p>
                  <p className="font-body text-church-text-dark">
                    <span className="font-semibold">Duration:</span> 45 minutes
                  </p>
                </div>
                <Link 
                  to="/sermons" 
                  className="inline-flex items-center bg-church-blue hover:bg-church-gold text-church-text-light hover:text-church-text-dark px-6 py-3 rounded-lg font-semibold font-button transition-all duration-300"
                >
                  Listen Now
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </Link>
              </div>
              <div>
                <div className="bg-church-blue rounded-xl p-8 text-center shadow-lg">
                  <div className="w-24 h-24 bg-church-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-church-text-dark" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-church-text-light font-body opacity-90">
                    Audio/Video Player
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bible Verse of the Day */}
      <section className="py-16 bg-church-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold font-subtitle text-church-text-light mb-6">Verse of the Day</h3>
          <blockquote className="text-lg md:text-xl text-church-text-light italic font-quote mb-4">
            "{currentVerse.text}"
          </blockquote>
          <cite className="text-church-gold font-semibold font-button">{currentVerse.reference}</cite>
        </div>
      </section>

      {/* Department Highlights */}
      <section className="py-16 bg-church-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-title text-church-text-dark mb-4">
              Our Ministries
            </h2>
            <p className="text-lg font-body text-church-text-dark opacity-80 max-w-2xl mx-auto">
              Discover the various ministries and departments that make up our vibrant church community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Youth Ministry */}
            <div className="bg-church-beige rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-church-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-church-text-light">🎆</span>
                </div>
                <h3 className="text-xl font-bold font-subtitle text-church-text-dark mb-2">Youth Ministry</h3>
              </div>
              <p className="font-body text-church-text-dark opacity-80 mb-4 text-center">
                Empowering young people to grow in faith, leadership, and service to God and community.
              </p>
              <div className="text-center">
                <Link to="/departments/youth" className="text-church-blue hover:text-church-gold font-button font-semibold transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Women's Ministry */}
            <div className="bg-church-beige rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-church-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-church-text-dark">🌸</span>
                </div>
                <h3 className="text-xl font-bold font-subtitle text-church-text-dark mb-2">Women's Ministry</h3>
              </div>
              <p className="font-body text-church-text-dark opacity-80 mb-4 text-center">
                Supporting and encouraging women in their spiritual journey and personal growth.
              </p>
              <div className="text-center">
                <Link to="/departments/women" className="text-church-blue hover:text-church-gold font-button font-semibold transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Men's Ministry */}
            <div className="bg-church-beige rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-church-olive rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-church-text-light">🤝</span>
                </div>
                <h3 className="text-xl font-bold font-subtitle text-church-text-dark mb-2">Men's Ministry</h3>
              </div>
              <p className="font-body text-church-text-dark opacity-80 mb-4 text-center">
                Building strong Christian men and leaders through fellowship and discipleship.
              </p>
              <div className="text-center">
                <Link to="/departments/men" className="text-church-blue hover:text-church-gold font-button font-semibold transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Children's Ministry */}
            <div className="bg-church-beige rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-church-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-church-text-light">🌈</span>
                </div>
                <h3 className="text-xl font-bold font-subtitle text-church-text-dark mb-2">Children's Ministry</h3>
              </div>
              <p className="font-body text-church-text-dark opacity-80 mb-4 text-center">
                Nurturing young hearts and minds in the love and knowledge of Jesus Christ.
              </p>
              <div className="text-center">
                <Link to="/departments/children" className="text-church-blue hover:text-church-gold font-button font-semibold transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Music Department */}
            <div className="bg-church-beige rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-church-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-church-text-dark">🎵</span>
                </div>
                <h3 className="text-xl font-bold font-subtitle text-church-text-dark mb-2">Music Department</h3>
              </div>
              <p className="font-body text-church-text-dark opacity-80 mb-4 text-center">
                Leading worship through music and inspiring hearts to praise and glorify God.
              </p>
              <div className="text-center">
                <Link to="/departments/music" className="text-church-blue hover:text-church-gold font-button font-semibold transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Sabbath School Department */}
            <div className="bg-church-beige rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-church-olive rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-church-text-light">🏕️</span>
                </div>
                <h3 className="text-xl font-bold font-subtitle text-church-text-dark mb-2">Sabbath School Department</h3>
              </div>
              <p className="font-body text-church-text-dark opacity-80 mb-4 text-center">
                Aims to nurture faith through Bible study, fellowship, and community outreach, with a strong emphasis on making disciples for Jesus Christ.
              </p>
              <div className="text-center">
                <Link to="/departments/pathfinder" className="text-church-blue hover:text-church-gold font-button font-semibold transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Preview */}
      <section className="py-16 bg-church-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-title text-church-text-dark mb-4">
              Church Life Gallery
            </h2>
            <p className="text-lg font-body text-church-text-dark opacity-80">
              Glimpses of our vibrant church community in action.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {/* Gallery images */}
            {[{ src: "/src/assets/images/district_games.jpg", alt: "District Games" },
              { src: "/src/assets/images/anniversary committee.jpg", alt: "Anniversary Committee" },
              { src: "/src/assets/images/play_grounds.jpg", alt: "District Games Playground" },
              { src: "/src/assets/images/women_ministries.jpg", alt: "Women Ministries" },
              { src: "/src/assets/images/anniversary_2.jpg", alt: "Anniversary Celebration" },
              { src: "/src/assets/images/1.jpg", alt: "Anniversary Celebration" },
            ].map((img, idx) => (
              <div key={idx} 
                className="aspect-square bg-church-beige rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer relative group">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <span className="text-church-gold text-lg font-semibold">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link 
              to="/gallery" 
              className="inline-flex items-center bg-church-blue hover:bg-church-gold text-church-text-light hover:text-church-text-dark px-8 py-3 rounded-lg font-semibold font-button transition-all duration-300 transform hover:scale-105"
            >
              View Full Gallery
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-church-beige">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-title text-church-text-dark mb-4">
            Stay Connected
          </h2>
          <p className="text-lg font-body text-church-text-dark opacity-90 mb-8">
            Subscribe to our newsletter and never miss important updates, events, and inspirational messages.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg font-body bg-church-beige-light text-church-text-dark border-2 border-church-gold focus:outline-none focus:ring-1 focus:ring-church-gold-dark"
              />
              <button className="bg-church-gold hover:bg-church-gold-dark text-church-text-dark px-6 py-3 rounded-lg font-semibold font-button transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
            <p className="text-sm font-body text-church-text-dark opacity-70 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Worship Section */}
      <section className="py-16 bg-church-beige-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-title text-church-text-dark mb-6">
                Join Us for Worship
              </h2>
              <p className="text-lg font-body text-church-text-dark opacity-80 mb-8 max-w-3xl mx-auto">
                You're warmly invited to join our church family every Sabbath for worship, fellowship, and spiritual growth.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-church-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl text-church-text-light">🕰️</span>
                  </div>
                  <h3 className="text-xl font-bold font-subtitle text-church-text-dark mb-2">Worship Times</h3>
                  <p className="font-body text-church-text-dark opacity-80">
                    Sabbath School: 9:00 AM<br/>
                    Divine Service: 11:00 AM<br/>
                    Every Saturday
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-church-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl text-church-text-dark">📍</span>
                  </div>
                  <h3 className="text-xl font-bold font-sans text-church-text-dark mb-2">Location</h3>
                  <p className="font-body text-church-text-dark opacity-80">
                    Chiraa SDA Central Church<br/>
                    Chiraa District, Ghana<br/>
                    <Link to="/contact" className="text-church-blue hover:text-church-gold transition-colors">Get Directions</Link>
                  </p>
                </div>
              </div>
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-church-blue hover:bg-church-gold text-church-text-light hover:text-church-text-dark px-8 py-4 rounded-lg font-semibold font-sans text-lg transition-all duration-300 transform hover:scale-105"
              >
                Plan Your Visit
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Call-to-Action */}
      <section className="py-16 bg-church-olive">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-title text-church-text-light mb-4">
            Support Our Ministry
          </h2>
          <p className="text-lg font-body text-church-text-light opacity-90 mb-8">
            Your generous giving helps us continue our mission of sharing God's love and serving our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/donate" 
              className="bg-church-gold hover:bg-church-gold-dark text-church-text-dark px-8 py-3 rounded-lg font-semibold font-sans transition-all duration-300 transform hover:scale-105"
            >
              Give Online
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-church-text-light text-church-text-light hover:bg-church-text-light hover:text-church-olive px-8 py-3 rounded-lg font-semibold font-sans transition-all duration-300"
            >
              Other Ways to Give
            </Link>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;