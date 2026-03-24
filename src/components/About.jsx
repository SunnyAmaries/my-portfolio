import { User, MapPin, Calendar, Coffee } from 'lucide-react'
import './About.css'

function About() {
  const stats = [
    { icon: <Calendar size={24} />, number: '2+', label: '年工作经验' },
    { icon: <Coffee size={24} />, number: '20+', label: '出差' },
    { icon: <User size={24} />, number: '10+', label: '完成项目' },
    { icon: <MapPin size={24} />, number: '北京', label: 'base' },
  ]

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">关于我</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              妈妈人生是旷野
            </p>
          </div>
          <div className="about-stats">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="stat-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
