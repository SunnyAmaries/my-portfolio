import { useEffect, useState } from 'react'
import { ChevronDown, Code, Globe, Mail } from 'lucide-react'
import './Hero.css'

function Hero() {
  const [text, setText] = useState('')
  const fullText = '高级大数据应用顾问'
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(text + fullText[index])
        setIndex(index + 1)
      }, 150)
      return () => clearTimeout(timeout)
    }
  }, [index, text])

  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      {/* 背景装饰 */}
      <div className="hero-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-greeting">👋 你好，我是</span>
          <h1 className="hero-name">小毛</h1>
          <div className="hero-title">
            <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </div>
          <p className="hero-description">
            当一天和尚撞一天钟
            <br />
            喜欢就买，多喝热水，重启试试
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              <Mail size={18} />
              联系我
            </a>
            <a href="#projects" className="btn btn-secondary">
              查看作品
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <Code size={22} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <Globe size={22} />
            </a>
            <a href="mailto:your.email@example.com" className="social-link">
              <Mail size={22} />
            </a>
          </div>
        </div>

        <div className="hero-avatar">
          <div className="avatar-container">
            <div className="avatar-ring ring-1"></div>
            <div className="avatar-ring ring-2"></div>
            <div className="avatar-ring ring-3"></div>
            <div className="avatar">
              <span>👨‍💻</span>
            </div>
          </div>
        </div>
      </div>

      <button className="scroll-indicator" onClick={scrollToAbout}>
        <span>向下滚动</span>
        <ChevronDown size={24} className="bounce" />
      </button>
    </section>
  )
}

export default Hero
