import { Mail, Phone, MapPin, Send, Globe, Code } from 'lucide-react'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">联系我</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-subtitle">让我们开始合作吧！</h3>
            <p className="contact-description">
              无论是项目合作、技术交流，还是只是想打个招呼，
              我都很乐意收到你的消息。
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={22} />
                </div>
                <div>
                  <span className="contact-label">邮箱</span>
                  <a href="mailto:your.email@example.com" className="contact-value">
                    1730346082@qq.com
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={22} />
                </div>
                <div>
                  <span className="contact-label">电话</span>
                  <span className="contact-value">+86 15530061259</span>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={22} />
                </div>
                <div>
                  <span className="contact-label">位置</span>
                  <span className="contact-value">北京市，中国</span>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                <Code size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                <Globe size={24} />
              </a>
              <a href="mailto:your.email@example.com" className="contact-social-link">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <form className="contact-form card">
            <div className="form-group">
              <label htmlFor="name">姓名</label>
              <input 
                type="text" 
                id="name" 
                placeholder="你的名字" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">邮箱</label>
              <input 
                type="email" 
                id="email" 
                placeholder="your@email.com" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">主题</label>
              <input 
                type="text" 
                id="subject" 
                placeholder="消息主题" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">消息</label>
              <textarea 
                id="message" 
                rows="5" 
                placeholder="写下你想说的话..." 
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary submit-btn">
              <Send size={18} />
              发送消息
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
