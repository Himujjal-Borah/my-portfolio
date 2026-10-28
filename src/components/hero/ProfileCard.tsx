import { PROFILE_IMAGE_PATH } from '@/utils/constants'

export function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="profile-image">
        <img src={PROFILE_IMAGE_PATH} alt="Himujjal Borah" />
      </div>
      <div className="profile-info">
        <h3>Software Developer</h3>
        <p>B.Tech Computer Science</p>
        <div className="profile-stats">
          <div className="stat">
            <span className="stat-number">15+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat">
            <span className="stat-number">4</span>
            <span className="stat-label">Internships</span>
          </div>
        </div>
      </div>
    </div>
  )
}
