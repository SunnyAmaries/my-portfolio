# AGENTS.md - my-portfolio

本项目是一个基于 React + Vite 构建的个人作品集网站。

## 技术栈

- **框架**: React 19 + Vite 8
- **构建工具**: Vite
- **Lint**: ESLint
- **图标**: Lucide React

## 项目结构

```
my-portfolio/
├── src/
│   ├── components/          # React 组件
│   │   ├── Hero.jsx         # 首页英雄区
│   │   ├── About.jsx        # 关于我
│   │   ├── Skills.jsx       # 技能展示
│   │   ├── Contact.jsx      # 联系方式
│   │   └── Footer.jsx       # 页脚
│   ├── assets/              # 图片资源
│   ├── App.jsx              # 主应用组件
│   ├── main.jsx             # 入口文件
│   └── *.css                # 样式文件
├── public/                  # 静态资源
├── dist/                    # 构建输出（GitHub Pages 部署用）
├── vite.config.js           # Vite 配置
└── package.json
```

## 常用命令

```bash
# 开发
npm run dev

# 构建（输出到 dist/，用于 GitHub Pages）
npm run build

# 预览构建结果
npm run preview

# 代码检查
npm run lint
```

## 部署配置

- 部署目标: GitHub Pages
- 基础路径: `/my-portfolio/`（vite.config.js 中配置）
- 通过 `.github/workflows/deploy.yml` 自动部署

## 开发规范

1. 组件按功能拆分，每个组件对应独立的 .jsx 和 .css 文件
2. 使用 Lucide React 图标库
3. CSS 使用常规写法，未使用 CSS 预处理器
4. 静态资源放在 public/ 或 src/assets/

## 注意事项

- `node_modules/` 和 `.git/` 无需提交
- 打包部署时只需要 `dist/` 文件夹内容
