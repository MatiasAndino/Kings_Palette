import LoginForm from '../form/login-form/LoginForm';
import UserCard from '../user-card/UserCard';
import './preview_group.css';

const PreviewGroup = () => {
    return (
        <>
            <h2>PREVIEW</h2>
            <div className='preview-group'>
                <LoginForm />
                <UserCard />
            </div>
        </>
    )
}

export default PreviewGroup;