# 🎮 AysieElf Games Plan

## 📚 Technical Stack
- Frontend: React.js + Phaser.js
- Backend: Python FastAPI
- Database: PostgreSQL
- ORM: SQLAlchemy
- Authentication: JWT tokens
- Deployment: 
  - Frontend: Vercel
  - Backend + DB: Railway
- WebSocket: FastAPI WebSockets
- State Management: Redis (за multiplayer sessions)

## 🗺️ Project Phases

### 1️⃣ Initial Setup & Early Deployment (1 week)
- [x] Choose technical stack
- [ ] Create GitHub repository
- [ ] Basic project structure:
  ```
  aysieelf-games/
  ├── frontend/          
  │   └── coming-soon/   # Initial landing page
  ├── backend/           
  │   └── health-check/  # Basic endpoint
  └── docs/             
  ```
- [ ] Minimal deployments:
  - Frontend (Vercel): Coming soon page
  - Backend (Railway): Health check endpoint
  - Database (Railway): Initial PostgreSQL setup

### 2️⃣ Backend Foundation (2 weeks)
- [ ] FastAPI base structure
- [ ] Database setup & migrations:
  ```sql
  users
    - id, username, email, avatar
    - created_at, last_login
  
  games
    - id, title, description
    - is_multiplayer, player_count
    
  favorites
    - user_id, game_id, added_at
    
  friendships
    - user_id, friend_id
    - created_at, status
    
  game_activities
    - user_id, game_id
    - played_at, duration
  ```
- [ ] Core API endpoints:
  ```
  /api/v1/
  ├── auth/
  ├── games/
  │   ├── list
  │   └── {game_id}/details
  └── users/
      └── me/
  ```

### 3️⃣ Social Features (2 weeks)
- [ ] User profiles
- [ ] Friend system
- [ ] Favorites management
- [ ] Activity feed
- [ ] Real-time notifications

### 4️⃣ Game Integration Base (2 weeks)
- [ ] Phaser.js setup
- [ ] Game wrapper component
- [ ] Save states
- [ ] Activity tracking

### 5️⃣ First Game Port - Sleepy Fox (3 weeks)
- [ ] Single player mode
- [ ] Local multiplayer
- [ ] In-game leaderboard
- [ ] Save progress

### 6️⃣ Multiplayer Foundation (2 седмици)
- [ ] WebSocket setup
- [ ] Game room system
- [ ] Player matching
- [ ] Connection handling
- [ ] State synchronization

### 7️⃣ UI/UX Development (2 седмици)
- [ ] Home page with favorites
- [ ] Friend activity feed
- [ ] Game lobby system
- [ ] Profile customization
- [ ] Responsive design

### 8️⃣ Polish & Launch (1 седмица)
- [ ] Performance optimization
- [ ] Documentation
- [ ] Testing
- [ ] Deployment guide

## 📈 Future Phases
- Additional games (Snake, Breakout...)
- Achievement system
