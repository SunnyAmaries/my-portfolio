import { Code2, Palette, Database, Terminal, Globe, Smartphone } from 'lucide-react'
import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      icon: <Code2 size={32} />,
      title: '王者荣耀',
      color: 'purple',
      skills: ['貂蝉', '姜子牙', '安琪拉', '王昭君', '瑶妹']
    },
    {
      icon: <Database size={32} />,
      title: '麻将',
      color: 'blue',
      skills: ['川麻', '北方麻将']
    },
    {
      icon: <Palette size={32} />,
      title: 'Jazz',
      color: 'pink',
      skills: ['哒哒哒', '噜噜噜', '滴滴滴']
    },
    {
      icon: <Terminal size={32} />,
      title: '吃吃喝喝',
      color: 'green',
      skills: ['糖醋小狗', 'hotpot', '芭比Q']
    }

  ]

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">技能专长</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`skill-category skill-${category.color}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-icon">{category.icon}</div>
              <h3 className="skill-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className={`skill-tag ${category.color}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
