import { Heart } from 'lucide-react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            Made with <Heart size={16} className="heart" fill="#f56565" stroke="#f56565" /> by 张三
          </p>
          <p className="footer-copyright">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
