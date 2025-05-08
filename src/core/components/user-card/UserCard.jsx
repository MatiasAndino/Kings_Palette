import './user_card.css'
import image from '../../../assets/perfil.jpg';

const UserCard = () => {
    return (
        <div className="user-card">

            <div className="habit-card">
                <div className="profile">
                    <img src={image} alt="User Avatar" className="avatar" />
                    <h2>King in Yellow</h2>
                    <p className="role">King</p>
                </div>

                <div className="habit-list">
                    <div className="habit-item">
                        <div className="icon bg-orange">
                            ✏️
                        </div>
                        <div className="habit-details">
                            <span className="habit-name">Draw Something</span>
                            <div className="progress-bar">
                                <div className="progress-fill bg-orange" style={{'width': '45%'}}></div>
                            </div>
                        </div>
                    </div>

                    <div className="habit-item">
                        <div className="icon bg-yellow">
                            🏃
                        </div>
                        <div className="habit-details">
                            <span className="habit-name">Running</span>
                            <div className="progress-bar">
                                <div className="progress-fill bg-yellow" style={{'width': '75%'}}></div>
                            </div>
                        </div>
                    </div>

                    <div className="habit-item">
                        <div className="icon bg-green">
                            🌱
                        </div>
                        <div className="habit-details">
                            <span className="habit-name">Water plant</span>
                            <div className="progress-bar">
                                <div className="progress-fill bg-green" style={{'width': '50%'}}></div>
                            </div>
                        </div>
                    </div>

                    <div className="habit-item">
                        <div className="icon bg-pink">
                            📖
                        </div>
                        <div className="habit-details">
                            <span className="habit-name">Read a Book</span>
                            <div className="progress-bar">
                                <div className="progress-fill bg-pink" style={{'width': '90%'}}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="create-btn">+ Create Habit</button>
            </div>
        </div>

    )
}

export default UserCard;